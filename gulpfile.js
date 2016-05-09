const crypto = require('crypto')
const fs = require('fs')

const gitRevSync = require('git-rev-sync')
const gulp = require('gulp')
const $ = require('gulp-load-plugins')()

const pkg = require('./package.json')
const modernizr = require('./modernizr-config.json')

const paths = {
  dist: 'dist',

  js: [
    'src/_assets/javascripts/**/*.js',
    '!src/_assets/javascripts/vendor/**/*.js',
    '!src/_assets/javascripts/main.js'
  ],

  scss: [
    'src/_assets/stylesheets/**/*.scss'
  ],

  html: [
    'dist/**/*.html',
    '!dist/**/vulcanized*.html'
  ]
}

gulp.task('default', ['watch'])
gulp.task('optimize', ['minify', 'imagemin'])
gulp.task('lint', ['standard', 'sass-lint', 'htmlhint'])

gulp.task('htmlhint', () => {
  return gulp.src(paths.html)
    .pipe($.htmlhint())
    .pipe($.htmlhint.failReporter())
})

gulp.task('standard', () => {
  return gulp.src(paths.js)
    .pipe($.standard())
    .pipe($.standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('sass-lint', () => {
  return gulp.src(paths.scss)
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError())
})

gulp.task('watch', () => {
  gulp.src(paths.html)
    .pipe($.watch(paths.html))
    .pipe($.plumber())
    .pipe($.htmlhint())
    .pipe($.htmlhint.reporter())

  gulp.src(paths.js)
    .pipe($.watch(paths.js))
    .pipe($.plumber())
    .pipe($.standard())
    .pipe($.standard.reporter('default'))

  return gulp.src(paths.scss)
    .pipe($.watch(paths.scss))
    .pipe($.plumber())
    .pipe($.sassLint())
    .pipe($.sassLint.format())
})

gulp.task('hash', () => {
  const src = 'assets/modernizr'

  const hash =
    crypto.createHash('sha1')
      .update(fs.readFileSync(`${paths.dist}/${src}.js`, 'utf8'), 'utf8')
      .digest('hex')

  const dest = `${src}-${hash}`

  fs.renameSync(`${paths.dist}/${src}.js`, `${paths.dist}/${dest}.js`)

  return gulp.src(`${paths.dist}/**/*`)
    .pipe($.replace(`${src}.js"`, `${dest}.js"`))
    .pipe(gulp.dest(paths.dist))
})

gulp.task('minify', () => {
  return gulp.src(`${paths.dist}/**/*.html`)
    .pipe($.htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      preserveLineBreaks: true,
      removeComments: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(paths.dist))
})

gulp.task('imagemin', () => {
  return gulp.src(`${paths.dist}/**/*`)
    .pipe($.imagemin())
    .pipe(gulp.dest(paths.dist))
})

gulp.task('deploy', () => {
  return gulp.src(`${paths.dist}/**/*`)
    .pipe($.ghPages({
      remoteUrl: `git@github.com:${pkg.repository}.git`,
      message: `Deploy ${gitRevSync.short()} from v${pkg.version}`
    }))
})
