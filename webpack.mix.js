const mix = require("laravel-mix");
mix.browserSync("krowrier-internal.oo");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .js("resources/js/vendor.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .sass("resources/sass/template.scss", "public/css");

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
}
