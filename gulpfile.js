let gulp = require("gulp");
let sass = require("gulp-sass");

// Gulp sass
gulp.task("sass", function() {
  return gulp
    .src("scss/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"));
});

// Gulp watch
gulp.task("watch", function() {
  gulp.watch("scss/style.scss", gulp.series("sass"));
});

// Gulp copy to dist
gulp.task("copy", function() {
  return gulp
    .src(
      ["!scss/**/*.scss", "images/**/*", "js/**/*", "index.html", "css/**/*"],
      { base: "." }
    )
    .pipe(gulp.dest("dist"));
});
