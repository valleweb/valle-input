# valle-input

> Awesome valle input element

[![Travis CI Status](https://travis-ci.org/valleweb/valle-input.svg?branch=master)](https://travis-ci.org/valleweb/valle-input)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/valleweb/valle-input)

## How to install and use:

1 - Install the element using [Bower](http://bower.io/):

```sh
$ bower install valle-input --save
```

2 -  Import the element:

```html
<link rel="import" href="bower_components/valle-input/valle-input.html">
```

3 - Start using it!

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="valle-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<valle-input label="Name" placeholder="Adam Sandler" helpertext="Full name"></valle-input>
```

## Properties

Property      | Type        | Default   | Description
:---          |:---         |:---       |:---
`label`       | *String*    | `""`      | Default label
`type`        | *String*    | `text`    | Input type
`validateby`  | *String*    | `""`      | Type for validate (available: `name`)
`placeholder` | *String*    | `""`      | Default placeholder
`helpertext`  | *String*    | `""`      | Description text for help
`errortext`   | *Srting*    | `""`      | Error message
`pattern`     | *String*    | `""`      | RegExp for validate
`value`       | *String*    | `""`      | Input value
`error`       | *Boolean*   | `false`   | Error state
`required`    | *Boolean*   | `false`   | Required validate
`disabled`    | *Boolean*   | `false`   | Disabled state
`autofocus`   | *Boolean*   | `false`   | Default autofocus

## Styling

The following custom properties and mixins are available for styling:

Custom property           | Default                   | Description
:---                      |:---                       |:---
--valle-input-color       | `rgba(5, 159, 183, .87)`  | Primary color
--valle-input-width       | `100%`                    | Input Width

## Browser Support

Using the [webcomponents.js](https://github.com/WebComponents/webcomponentsjs):

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Development

1 - Install [Bower](http://bower.io/) & [Polymer-CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli):

```sh
$ [sudo] npm install -g bower polymer-cli
```

2 - Install local dependencies:

```sh
$ bower install
```

3 - Start the development server:

```sh
$ polymer serve
```

Go to [localhost:8080/components/valle-input/](http://localhost:8080/components/valle-input/)


## Tests

#### Linting

Linting with eslint:

```sh
$ [sudo] npm install -g eslint
$ [sudo] npm install -g eslint-plugin-html

$ eslint *.html
```

Linting with polylint:

```sh
$ polymer lint
```

#### Unit tests

Install the Web Component Tester (WCT) test runner:

```sh
$ [sudo] npm install -g web-component-tester
```

Run tests:

```sh
$ wct
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/valle-input/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/valle-input/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/valle-input/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/valle-input/blob/master/LICENSE.md) © [valleweb](https://github.com/orgs/valleweb/people)
