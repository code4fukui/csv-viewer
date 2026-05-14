# csv-viewer

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web component for displaying CSV data with sorting, filtering, and image embedding.

## Demo

**Live Demo** *(demo unavailable)*

## Features

-   **Tabular Display**: Renders CSV data in an HTML table.
-   **Sorting**: Click column headers to sort data alphabetically or numerically.
-   **Filtering**: Instantly filter rows with a text input field.
-   **Image Embedding**: Automatically detects and embeds images (JPG, PNG, WebP, JPEG) from URLs in cells.
-   **Reverse Order**: An attribute to easily reverse the display order of rows.
-   **Standalone**: Runs entirely in the browser with no server-side dependency.

## Usage

This component can be used directly as an ES module in modern browsers or with a bundled script for legacy browser support.

### Modern Browsers (ES Module)

For browsers that support ES modules, import the component and use the custom element directly.

```html
<!-- 1. Import the component -->
<script type="module" src="./csv-viewer.js"></script>

<!-- 2. Add the element with a link to your CSV file -->
<csv-viewer src="./test.csv"></csv-viewer>
```

### Legacy Browsers (Bundled)

For older browsers like IE11, you can use the transpiled and bundled scripts. First, generate the bundles:

```bash
npm install
npm run build
```

Then include the `bundle-es5.min.js` and the `custom-elements-es5-adapter.js` in your HTML file.

```html
<!-- Polyfill for custom elements in ES5 environments -->
<script src="custom-elements-es5-adapter.js"></script>
<!-- Bundled and transpiled component -->
<script src="bundle-es5.min.js"></script>

<!-- The element usage is the same -->
<csv-viewer src="./test.csv"></csv-viewer>
```

## Attributes

-   **`src`** (required): The URL of the CSV file to display.
-   **`reverse`** (optional): If set to `true`, the order of data rows is reversed. The header row remains at the top.

    ```html
    <csv-viewer src="./test.csv" reverse="true"></csv-viewer>
    ```

## License

[MIT License](LICENSE)