# Seed / example project with ES6, JSPM, Ractive, Gulp, Karma, Mocha

I wanted to create a project which gave me a full workflow using ES6 with traspilation
to ES5, a build process, and unit testing.
JSPM is a great tool (http://jspm.io/). It gives you great package management with the
huge added benefit of being build on ES6 module loader and includes a transpiler. I wasn't
though seeing any examples of how to use this in a full workflow with a build & test step.
This project combines JSPM with gulp, and mocha. It provides an example app which loads
data from reddit, transforms it using ES6 lib functions, and displays it.
For the view I wanted to try some out some modern performant UI libraries. I started off
by looking at React, but I found i really didn't like the look of JSX and the way the markup
is embedded with the JS. I feel that in order to support a lean UX methodology, templates
really need to be kept simple, and separate

## Installation

npm install (adds jspm, gulp with build deps, karma/mocha/test deps)
jspm install

## Usage

To run tests only, from the command line: "gulp test"
To run the test and fire up the browser: "gulp"

This should open the demo page showing a list of links

At this point the demo app is running using system.js and is transpiling in browser. This is
fine for dev, but not what we'd want for production, so we can go one step further. JSPM supports
creating self executing bundles, which are a transpiled version of the app, ready for today's browsers.

## Building for production

1) Run "gulp build" at the root of the project, this lints, tests, and then calls jspm's bundleSFX
2) In index.html, comment out the following:

    <script src="jspm_packages/system.js"></script>
    <script src="config.js"></script>
    <script>
        System.import('app/main');
    </script>

and add back in:

    <script src="dist/build.js"></script>

Run a build to create the bundle - "gulp build"

## Primary config & file locations

JSPM: config.js (contains map of named libs, similar to requirejs)
Building: gulpfile.js (watching, running server, bundling JSPM, linting, running tests)
Testing: karma.conf.js
Main entry point for the app: app/main.js

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## TODO

Consider trying to move as much of the root node_modules as possible into
JSPM? I tried to have gulp managed by JSPM but had issues trying to get
it working so parked that for now.

Benchmark the performance of Ractive for large datasets and frequently changing data.