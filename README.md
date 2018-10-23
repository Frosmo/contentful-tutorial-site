# Contentful with Frosmo

Example implementation using Contentful with Frosmo. This repository is based on [official Contentful gettting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/) providing simplified version of [Gatsby Contentful Starter](https://github.com/contentful-userland/gatsby-contentful-starter) site.

## Configure Frosmo script tags
Copy frosmo configuration template file as your config file
```
cp frosmo-config.js.template frosmo-config.js
```

Then you need to modify frosmo-config.js:
Replace <FROSMO_SCRIPT_TAG> with Frosmo script tag
Replace <SITE_SCRIPT_TAG> with your site specific script tag
These script tags should have been be provided for you and can also be found from Frosmo Control Panel.

## Configure Contentful
This repository expects that you already have Contentful space with example content models & content provided in the [official Contentful gettting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

Create contentful.json and add your spaceId and accessToken.
```
cp .contenful.json.sample .contenful.json
```