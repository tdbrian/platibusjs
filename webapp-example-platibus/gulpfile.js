'use strict';

// Common Gulp modules
var gulp = require('gulp');
var gutil = require('gulp-util');
var sequence = require('run-sequence');
var del = require('del');
var fs = require('fs');

// Server build modules
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var server = require('gulp-develop-server');

// Client build modules
var browserify = require('browserify');
var watchify = require('watchify');

// Configuration
var source_dir = './src';
var output_dir = './lib';
var client_entry = source_dir + '/client/app.ts';
var server_entry = output_dir + '/server/main.js';
var bundle_dir = './www';
var bundle_file = 'client.js';
var bundle_path = bundle_dir + '/' + bundle_file;
var map_file = bundle_file + '.map';
var map_path = bundle_dir + '/' + map_file;
var watch_glob = [source_dir + '/common/**/*', source_dir + '/server/**/*'];

gulp.task('default', ['build-all']);

gulp.task('build-all', function() {
	return sequence('clean', ['build-client', 'build-server']);
});

gulp.task('clean', function() {
	return del(output_dir + '/**/*');
});

var tsProject = ts.createProject({
	declarationFiles: false,
	noExternalResolve: true,
	sortOutput: true,
	module: 'commonjs'
});

gulp.task('build-server', function() {
	return (gulp.src(source_dir + '/**/*.ts')
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject)).js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(output_dir))
	);
});

gulp.task('build-client', function() {
	return create_bundle(browserify_common(true));
});

gulp.task('restart-server', function() {
	server.restart();
});

gulp.task('watch', function() {
	return sequence('clean', ['watch-client', 'watch-server']);
});

gulp.task('watch-client', function() {
	// Build the client and watch for changes
	var client_watcher = watchify(browserify_common(false));
	
    client_watcher.on('update', function() {
		gutil.log('Rebuilding ' + bundle_path + '...');
		client_watcher.bundle();
	});
	
    client_watcher.on('log', function(msg) {
		gutil.log('Build finished.', msg);
	});
	
    gutil.log('Building ' + bundle_path + '...');
	create_bundle(client_watcher);
});

gulp.task('watch-server', ['build-server'], function() {
	// Start the server and watch for changes
	server.listen({ path: server_entry });
	gulp.watch(watch_glob, ['restart-server']);
});

function browserify_common(production_build) {
	var b = browserify({
		debug: true,
		// Necessary for watchify:
		cache: {},
		packageCache: {},
		fullPaths: true
	}).add(client_entry).plugin('tsify');

	if (production_build) {
		// minifyify plugin not compatible with watchify,
		// so only apply it on production build
		b = b.plugin('minifyify', {
			map: map_file,
			output: map_path
		});
	}
	return b;
}

function create_bundle(b) {
	return b.bundle().pipe(fs.createWriteStream(bundle_path));
}