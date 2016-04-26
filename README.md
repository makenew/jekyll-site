# Jekyll Site Skeleton

[<img src="https://makenew.github.io/makenew.svg" alt="Make New" height="20">](https://makenew.github.io/)
[![GitHub release](https://img.shields.io/github/release/makenew/jekyll-site.svg)](https://github.com/makenew/jekyll-site/releases)
[![GitHub license](https://img.shields.io/github/license/makenew/jekyll-site.svg)](./LICENSE.txt)
[![Gemnasium](https://img.shields.io/gemnasium/makenew/jekyll-site.svg)](https://gemnasium.com/makenew/jekyll-site)
[![Travis](https://img.shields.io/travis/makenew/jekyll-site.svg)](https://travis-ci.org/makenew/jekyll-site)

## Description

Bootstrap a new [Jekyll] site in less than a minute.

Check out the **[live demo]** and its **[source code]**!

[Jekyll]: https://jekyllrb.com/
[live demo]: https://makenew.github.io/jekyll-site/
[source code]: https://github.com/makenew/jekyll-site/tree/demo

### Features

- Extreamly minimal HTML5 layout based on [HTML5 Boilerplate].
- Asset pipeline with [Jekyll 3 Assets],
  [Autoprefixer], [Sass], and [Uglifier].
- Extensive page-specific meta tag support with intelligent fallbacks.
- Includes [FastClick], [Normalize.css], and [console-polyfill].
- Customize [Modernizr] via configuration file.
- Development dependency management with [Bundler].
- [Rake] tasks for building and development.
- Cross-device [LiveReload] using [guard-livereload].
- Production build testing with [HTML::Proofer].
- Front end dependency management with [Bower] and [npm].
- Favicons with [Favic-o-matic].
- The internet is for humans with [humans.txt].
- [Travis CI] ready.
- [Keep a CHANGELOG].
- Consistent coding with [EditorConfig].
- Badges from [Shields.io].

[Autoprefixer]: https://github.com/postcss/autoprefixer
[Bower]: http://bower.io/
[Bundler]: http://bundler.io/
[console-polyfill]: https://github.com/paulmillr/console-polyfill
[EditorConfig]: http://editorconfig.org/
[FastClick]: https://ftlabs.github.io/fastclick/
[Favic-o-matic]: http://www.favicomatic.com/
[guard-livereload]: https://github.com/guard/guard-livereload
[HTML::Proofer]: https://github.com/gjtorikian/html-proofer
[HTML5 Boilerplate]: https://html5boilerplate.com/
[humans.txt]: http://humanstxt.org/
[Jekyll 3 Assets]: https://jekyll.github.io/jekyll-assets/
[Keep a CHANGELOG]: http://keepachangelog.com/
[LiveReload]: http://livereload.com/
[Modernizr]: https://modernizr.com/
[Normalize.css]: https://necolas.github.io/normalize.css/
[npm]: https://www.npmjs.com/
[Rake]: https://github.com/ruby/rake
[Sass]: http://sass-lang.com/
[Shields.io]: http://shields.io/
[Travis CI]: https://travis-ci.org/
[Uglifier]: https://github.com/lautis/uglifier

### Bootstrapping a New Project

1. Clone the master branch of this repository with

   ```
   $ git clone --single-branch https://github.com/makenew/jekyll-site.git new-jekyll-site
   $ cd new-jekyll-site
   ```

   Optionally, reset to the latest [release][Releases] with

   ```
   $ git reset --hard jekyll-site-v1.5.0
   ```

2. Run

   ```
   $ ./makenew.sh
   ```

   and follow the prompts.
   This will replace the boilerplate, delete itself,
   and stage changes for commit.
   This script assumes the project repository will be hosted on GitHub.
   For an alternative location, you must update the URLs manually.

3. Fill in the README Description section.

4. If [choosing a license][Choose a license] other than the one provided:
   update `LICENSE.txt`, the README License section,
   `package.json`, and `bower.json` with your chosen license.

5. Add your own favicons from [Favic-o-matic]
   to `src/_assets/images/favicon/` and overwrite `favicon.ico`.
   You can make a quick [Font Awesome] favicon at [FA2PNG].

6. Further customize the meta data in `src/_data/meta.yml`.

7. [Lock your dependencies](#updating-requirements)
   with `Gemfile.lock` and `npm-shrinkwrap.json`.
   Optionally, lock the Ruby and Node.js versions
   with `.ruby-version` and `.nvmrc`.

[Choose a license]: http://choosealicense.com/
[FA2PNG]: http://fa2png.io/
[Font Awesome]: https://fortawesome.github.io/Font-Awesome/
[Releases]: https://github.com/makenew/jekyll-site/releases
[The Unlicense]: http://unlicense.org/UNLICENSE

### Updating

If you want to pull in future updates from this skeleton,
you can fetch and merge in changes from this repository.

If this repository is already set as `origin`,
rename it to `upstream` with

```
$ git remote rename origin upstream
```

and then configure your `origin` branch as normal.

Otherwise, add this as a new remote with

```
$ git remote add upstream https://github.com/makenew/jekyll-site.git
```

You can then fetch and merge changes with

```
$ git fetch upstream
$ git merge upstream/master
```

#### Changelog

Note that `CHANGELOG.md` is just a template for this skeleton.
The actual changes for this project are documented in the commit history
and summarized under [Releases].

## Quickstart

```
$ git clone https://github.com/makenew/jekyll-site.git
$ cd jekyll-site
$ bundle
$ npm install
$ rake dev
```

Start a LiveReload server in a separate terminal with

```
$ guard
```

Navigate to [http://localhost:4000](http://localhost:4000/).

## Development

### Source Code

The [makenew-jekyll-site source] is hosted on GitHub.
Clone the project with

```
$ git clone https://github.com/makenew/jekyll-site.git
```

[makenew-jekyll-site source]: https://github.com/makenew/jekyll-site

### Requirements

You will need [Ruby] with [Bundler] and [Node.js] with [npm].

Install the development and Bower dependencies with

```
$ bundle
$ npm install
```

[Bundler]: http://bundler.io/
[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[Ruby]: https://www.ruby-lang.org/

#### Updating requirements

Requirements are version-locked to ensure consistent deploys.

To use the newest allowed Ruby gems,
or after updating any gem versions in the `Gemfile`,
update and stage `Gemfile.lock` with

```
$ bundle update
$ git add Gemfile.lock
```

To use the newest allowed Node packages,
or after updating any package versions in `package.json`,
update and stage `npm-shrinkwrap.json` with

```
$ npm update
$ npm shrinkwrap --dev
$ git add npm-shrinkwrap.json
```

All Bower components must be set to an explicit version
in `bower.json` (Bower does not support lock-files).
They are installed via an npm install hook.
Install or update them manually with

```
$ npm run bower
```

### Rake

Run `$ rake -T` to see all Rake tasks.

```
rake build    # Generate and test a production build of the Jekyll site
rake clean    # Remove build files with jekyll clean
rake default  # Default task
rake dev      # Start a local Jekyll development server
```

### LiveReload

LiveReload automatically updates the page in your browser
when `dist/` files change.
Start the livereload server in the background with

```
$ guard
```

## Other Features

### Modernizr

Modernizr is included as an npm package.
[Configure modernizr] with `modernizr-config.json`.

Modernizr will automatically generate
`src/_assets/javascripts/vendor/modernizr.js`
via an npm postinstall hook.
Regenerate `modernizr.js` manually with

```
$ npm run modernizr
```

If Guard is running, then `modernizr.js` will be regenerated
automatically whenever `modernizr-config.json` changes.

[Configure modernizr]: https://modernizr.com/download#setclasses

### Meta Tags

Meta tags are included from `src/_includes/meta.html`.
Global default values for meta tags are defined in `src/_data/meta.yml`.
A missing value will not generate the corresponding meta tags.

Meta tags defined by the [Open Graph] protocol are generated
where possible, and meta tags for [Twitter Cards] are generated
from values under `site.data.meta.twitter` and `page.meta.twitter`.

Pages can override individual values in their front matter
by defining them within their own `meta` key,
or according to the following rules.

- All pages should specify a unique, `title` in their front matter,
  but `site.data.meta.title` may be used as a default.
  If `page.meta.title` exists, it will override `page.title`.
- The page's description will prioritize in the following order:
  `page.meta.description`, `page.preview`, `page.excerpt`,
  and `site.data.meta.description`.
- The page's updated time will prioritize in the following order:
  `page.meta.updated`, `page.date`, and `site.time`.
- Keywords are merged with the following priority:
  `page.meta.keywords`, `page.tags`, `page.categories`,
  and `site.data.meta.keywords`.
- The `image` meta tag has two modes:
  if `site.data.meta.image_asset` is given, it will be used as
  `{{ site.data.meta.image_asset | asset_path }}`; but if
  `site.data.meta.image` is given, then it will take priority and be used as
  `{{ site.url }}{{ site.baseurl }}/{{ site.data.meta.image }}`.
  The page-specific tags behave the same.
- The `audio` meta tag is page-specific only and used as
  `{{ site.url }}{{ site.baseurl }}/{{ site.data.meta.audio }}`.
- The `video` meta tag is page-specific and has two modes:
  if `page.meta.youtube` is given, it will be used as
  `https://www.youtube.com/v/{{ page.meta.youtube }}`; but if
  `page.meta.video` is given, then it will take priority and be used as
  `{{ site.url }}{{ site.baseurl }}/{{ page.meta.video }}`.
- The following properties are global and have no page-specific value:
  `name` and `twitter.site`.
- The following properties are page-specific and have no global value:
  `title`, `determiner`, `type`, `audio`, and `video`.

[Open Graph]: http://ogp.me/
[Twitter Cards]: https://dev.twitter.com/cards/

## Contributing

Please submit and comment on bug reports and feature requests.

To submit a patch:

1. Fork it (https://github.com/makenew/jekyll-site/fork).
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Make changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

This software can be used freely, see [The Unlicense].
The copyright text appearing below and elsewhere in this repository
is for demonstration purposes only and does not apply to this software.

This site source is licensed under the MIT license.

## Warranty

This software is provided "as is" and without any express or
implied warranties, including, without limitation, the implied
warranties of merchantibility and fitness for a particular
purpose.
