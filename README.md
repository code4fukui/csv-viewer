# csv-viewer

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web component for displaying CSV data.

## Features

- Displays CSV data in a tabular format
- Supports sorting by column
- Includes a filtering input
- Embeds images from URL links
- Supports reverse ordering of data

## Usage

To use the `csv-viewer` component, first import the module:

```html
<script type="module" src="./csv-viewer.js"></script>
```

Then, you can add the `csv-viewer` element to your HTML, specifying the URL of the CSV file:

```html
<csv-viewer src="./test.csv"></csv-viewer>
```

You can also reverse the order of the data by adding the `reverse` attribute:

```html
<csv-viewer src="./test.csv" reverse=true></csv-viewer>
```

## License

MIT License — see [LICENSE](LICENSE).