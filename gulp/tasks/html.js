import fileInclude from "gulp-file-include";
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: "HTML",
              message: "Error: <%= error.message %>"  
            })
        ))
        .pipe(pug({
            pretty: true,
            verbose: true
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(
            app.plugins.if(
                app.isDev,
                versionNumber({
                    'value': '%MDS%',
                    'append': {
                        'key': 'v',
                        'to': [
                            'css',
                            'js'
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}
