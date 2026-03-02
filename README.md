# Oser Soi

[![Build Status](https://github.com/osersoi/osersoi/actions/workflows/lint-build-test.yml/badge.svg)](https://github.com/osersoi/osersoi/actions/workflows/lint-build-test.yml)
[![GitHub Pages deployment status](https://github.com/osersoi/osersoi/actions/workflows/deploy.yml/badge.svg)](https://github.com/osersoi/osersoi/actions/workflows/deploy.yml)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

**Live Site:** [https://www.osersoi.ch](https://www.osersoi.ch)

This is a static site generated using Eleventy, featuring a blog and accessibility testing. It uses Sass for CSS pre-processing and Nunjucks for templating.

## Installation

To set up the project locally, first install the dependencies:

```bash
npm ci
```

## Usage

### Development Server

To start the development server and watch for changes:

```bash
npm run start
```

This will typically serve the site at `http://localhost:8080`.

### Build

To build the static site for production:

```bash
npm run build
```

The generated site will be located in the `_site` directory.

### Linting

To lint SCSS files using Stylelint:

```bash
npm run lint:scss
```

### Testing

To run accessibility tests using pa11y-ci (the development server must be running):

```bash
npm run lint:accessibility
```

## Technologies Used

- [Eleventy](https://www.11ty.dev/) (Static Site Generator)
- [Nunjucks](https://mozilla.github.io/nunjucks/) (Templating Engine)
- [Sass](https://sass-lang.com/) (CSS Preprocessor)
- [Stylelint](https://stylelint.io/) (SCSS Linter)
- [pa11y-ci](https://pa11y.org/docs/ci/) (Accessibility Testing)

## Folder Structure

- `src/`: Contains the source files for the Eleventy site.
  - `src/css/`: SCSS files.
  - `src/images/`: Image assets.
  - `src/posts/`: Markdown files for blog posts.
  - `src/_includes/`: Nunjucks partials and layouts.
  - `src/_data/`: Global data files for Eleventy.
- `_site/`: The output directory for the built static site.
- `eleventy.config.js`: Eleventy configuration file.
- `stylelint.config.mjs`: Stylelint configuration file.
- `package.json`: Project dependencies and scripts.
