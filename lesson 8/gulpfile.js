const { series, parallel, src, dest } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const pug = require("gulp-pug");

function jsTask() {
    console.log("Gulp test");
    return src("src/*.js")
        .pipe(
            babel({
                presets: ["@babel/preset-env"],
            })
        )
        .pipe(uglify())
        .pipe(dest("dist"));
}

function cssTask() {
    console.log("Gulp test 2");
    return src("src/*.css")
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(dest("dist"));
}

function pugTask() {
    return src("src/*.pug")
        .pipe(
            pug({
                // Your options in here.
            })
        )
        .pipe(dest("dist"));
}

exports.default = parallel(jsTask, cssTask, pugTask);
