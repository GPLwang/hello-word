var gulp = require('gulp');

gulp.task('default',function(){
    // gulp.src('文件路径') 获取文件
    // 获取任务要处理的文件
    gulp.src('./scr/css/index.css')
    // pipe('怎样处理') 处理任务
    // gulp.dest('文件路径') 将处理好的文件放入参数路径中
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('assets',function(){
    // gulp.src('文件路径') 获取文件
    // 获取任务要处理的文件
    gulp.src('./scr/assets/**/**')
    // pipe('怎样处理') 处理任务
    // gulp.dest('文件路径') 将处理好的文件放入参数路径中
        .pipe(gulp.dest('./dist/assets'))
});