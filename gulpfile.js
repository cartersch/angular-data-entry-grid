var gulp   = require("gulp");
var concat = require("gulp-concat");
var cache  = require("gulp-angular-templatecache");

gulp.task("createCache", function(){
    gulp.src("src/template/data-entry-grid.html")
    .pipe(cache({"module" : "data-entry-grid-template", "filename" : "template.data_entry_grid.js"}))
    .pipe(gulp.dest("src/js/"))
});

gulp.task("createConcat", function(){
    gulp.src([
        "src/js/directive.data_entry_grid.js",
        "src/js/template.data_entry_grid.js"
    ])
    .pipe(concat("data_entry_grid.concat.js"))
    .pipe(gulp.dest("./dist"));
});
    
gulp.task("watchCSS", function(){
    gulp.src(["src/css/data_entry_grid.css"])
    .pipe(gulp.dest("./dist"))
});
    
gulp.task("watchCache", function(){
    gulp.watch("src/template/*.html", ["createCache"]);
}); 

gulp.task("watchConcat", function(){
    gulp.watch("src/js/*.data_entry_grid.js", ["createConcat"]);
});   


gulp.task("default", ["watchCache", "watchConcat", "watchCSS"]);