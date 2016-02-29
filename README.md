# Make New Jekyll Site Demo

[![GitHub release](https://img.shields.io/github/release/makenew/jekyll-site.svg)](https://github.com/makenew/jekyll-site/releases)
[![GitHub license](https://img.shields.io/github/license/makenew/jekyll-site.svg)](./LICENSE.txt)
[![Gemnasium](https://img.shields.io/gemnasium/makenew/jekyll-site.svg)](https://gemnasium.com/makenew/jekyll-site)
[![Travis](https://img.shields.io/travis/makenew/jekyll-site.svg)](https://travis-ci.org/makenew/jekyll-site)

> Built from [makenew/jekyll-site](https://github.com/makenew/jekyll-site).

## Description

[Demo site] for [Make New's Jekyll site skeleton].

Includes the following extras:

- Optimized Modernizr build with [customizr].
- [Vulcanized][Vucanize] [Polymer] paper elements.
- Load [Noto] and [Inconsolata] fonts with [Web Font Loader].
- Code syntax highlighting with [Prism].
- Automatic linting through [gulp] with
  the [JavaScript Standard Style], [Sass Lint], and [HTMLHint].
- Deploy to [GitHub pages] locally or from [Travis CI].
- Optimized deployment build with [HTMLMinifier].

[customizr]: https://github.com/Modernizr/customizr
[Demo site]: https://makenew.github.io/jekyll-site/
[GitHub pages]: https://pages.github.com/
[gulp]: http://gulpjs.com/
[HTMLHint]: https://github.com/yaniswang/HTMLHint
[HTMLMinifier]: https://github.com/kangax/html-minifier
[Inconsolata]: http://www.levien.com/type/myfonts/inconsolata.html
[JavaScript Standard Style]: http://standardjs.com/
[Make New's Jekyll site skeleton]: https://github.com/makenew/jekyll-site
[Noto]: https://www.google.com/get/noto/
[Polymer]: https://www.polymer-project.org/
[Prism]: http://prismjs.com/
[Sass Lint]: https://github.com/sasstools/sass-lint
[Travis CI]: https://travis-ci.org/
[Vucanize]: https://github.com/Polymer/vulcanize
[Web Font Loader]: https://github.com/typekit/webfontloader

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
rake build    # Generate, optimize, and test a production build of the Jekyll site
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

### gulp

Linting and deployment is handled by [gulp].

In a separate window, use gulp to watch for changes
and lint JavaScript, Sass, and HTML files with

```
$ npm run lint:watch
```

If installed globally, `gulp` may be invoked directly.
View available commands with

```
$ gulp --tasks
```

[gulp]: http://gulpjs.com/

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

### Vulcanized Web Components

Web components imported in `src/_assets/elements/elements.html`
will be vulcanized to `src/_assets/elements/vulcanized.html`.

Run vulcanize with

```
$ npm run vulcanize
```

If Guard is running, then `vulcanized.html` will be regenerated
automatically whenever other files in `src/_assets/elements` change.

### Build Optimization

Optimize files in the `dist` directory with

```
$ npm run optimize
```

This will tailor a customized Modernizr build and minify all html files.

### Deploy to GitHub Pages

Deploy the `dist` directory to GitHub Pages with

```
$ npm run deploy
```

If `SOURCE_BRANCH` is set as a Travis CI environment variable,
then commits pushed to that branch will be deployed automatically.
This requires `.travis/deploy.key.enc` to be encrypted on Travis,
the corresponding decryption command in `.travis/deploy.sh`, and
the corresponding public key added as a deploy key to the GitHub repository.

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

This site source is licensed under the MIT license.

## Warranty

This software is provided "as is" and without any express or
implied warranties, including, without limitation, the implied
warranties of merchantibility and fitness for a particular
purpose.
