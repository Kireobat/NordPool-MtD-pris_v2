# Spotpris.eu

#### This readme is ai generated

Welcome to Spotpris.eu, your go-to source for detailed information about the spot price of power in Norway. Whether you're a developer looking to integrate real-time spot price data into your application or a curious user seeking insights into current power prices, Spotpris.eu has you covered.

## Overview

Spotpris.eu provides a user-friendly website and a powerful API to access up-to-date information on power spot prices in Norway. The spot price represents the current market price for electricity, providing valuable insights for both businesses and individuals.

## Features

- **Website:** Visit our website at [spotpris.eu](https://spotpris.eu) to view spot prices, historical data, and trends.

- **API:** Access real-time spot price data programmatically through our API, available at `/api/v1`. To use the API, you must set an environmental variable called `API_KEY` for authentication.

## Getting Started

1. **Obtain API Key:**
   To access the API, you need to obtain an API key. Set up the environmental variable `API_KEY` with your unique key.

2. **Explore the Website:**
   Visit [spotpris.eu](https://spotpris.eu) to explore spot prices, historical data, and other relevant information.

3. **Integrate the API:**
   Incorporate our API into your application by making requests to `/api/v1`. Ensure that you include your API key in the request headers for authentication.

   Example:
   ```bash
   curl -H "Authorization: Bearer YOUR_API_KEY" https://spotpris.eu/api/v1
   ```

## API Documentation

Detailed API documentation is available on our [API documentation page](https://spotpris.eu/api-docs). Learn about available endpoints, request parameters, and response formats to make the most of Spotpris.eu's API capabilities.

## Environment Variable

Ensure you set the following environmental variable before using the API:

```bash
export API_KEY=your_api_key
```

## Support

For any questions, issues, or feedback, please [contact our support team](mailto:support@spotpris.eu).

## Contributing

We welcome contributions from the community. If you find a bug, have a feature request, or want to contribute code, please check out our [contribution guidelines](CONTRIBUTING.md).

## License

Spotpris.eu is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as needed.

Thank you for choosing Spotpris.eu for your spot price information needs!