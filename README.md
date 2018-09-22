# valle-input

> Awesome valle-input element - web component using Polymer 3x

[![npm](https://img.shields.io/npm/v/@valle/valle-input.svg)](https://www.npmjs.com/package/@valle/valle-input)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@valle/valle-input)

## How to install and use:

1 - Install the element using [Yarn](http://yarn.io/):

```sh
$ yarn add @valle/valle-input
```

2 -  Import the element:

```html
<script type="module" src="node_modules/@valle/valle-input/valle-input.js"></script>
```

or in your javascript file

```js
import "@valle/valle-input/valle-input.js";
```

3 - Start using it!

<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="valle-input.js"></script>
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

Custom property             | Default                   | Description
:---                        |:---                       |:---
--valle-input-color         | `rgba(5, 159, 183, .87)`  | Primary color
--valle-input-width         | `100%`                    | Input Width

## Browser Support

Using the [webcomponents.js](https://github.com/WebComponents/webcomponentsjs):

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Development

1 - Verify if you have [node](http://nodejs.org/) and [yarn](http://yarn.io/) installed.

2 - Install [Polymer-CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli):

```sh
$ [sudo] yarn global add polymer-cli
```

3 - Install local dependencies:

```sh
$ yarn install
```

4 - Start the development server:

```sh
$ polymer serve
```

Go to [localhost:8080/components/valle-input/](http://localhost:8080/components/valle-input/)

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
