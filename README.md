# Contentful CDA Request Logger 📊🔍

This is a simple npm package designed to log and visualize your Contentful Content Delivery API (CDA) requests in the development console. It's perfect for developers working with the [Contentful JavaScript SDK](https://www.contentful.com/developers/docs/javascript/). The package includes two main functions: `requestLogger` and `responseLogger`.

## Installation 💾

Install this package as a development dependency:

```console
npm install --save-dev log-handlers
```

## Usage 🛠

Import the `requestLogger` and `responseLogger` functions from the module:

```console
import { requestLogger, responseLogger } from 'log-handlers';
```

Configure `requestLogger` and `responseLogger` as interceptors in your Axios instance used with Contentful:

```console
const client = contentful.createClient({
  space: process.env.SPACE_ID,
  environment: process.env.ENVIRONMENT,
  accessToken: process.env.ACCESS_TOKEN,
  requestLogger: requestLogger,
  responseLogger: responseLogger,
});
```

This setup will log the request ID, timing, cache result, query path, and size of each Contentful CDA request directly in your development console.

Looks like this:

![screenshot](screenshot.png?raw=true)

## Note 📝

- This package is intended for **development use only**. Do not install it as a production dependency.
- Ensure you replace `log-handlers` with the actual name of your npm module when importing and installing.

## Contributing 🤝

Contributions to the `Contentful CDA Request Logger` are welcome! Feel free to open a pull request or submit an issue if you have any suggestions or improvements.

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Helpful Links 🔗

- [Contentful JavaScript SDK Documentation](https://www.contentful.com/developers/docs/javascript/)
- [NPM Package Documentation](https://docs.npmjs.com/)

---

Feel free to tweak further based on your package details and personal preferences!
