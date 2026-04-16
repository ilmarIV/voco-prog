const { Builder, By, Key, until } = require('selenium-webdriver');

async function basicSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open DuckDuckGo
        await driver.get('https://en.wikipedia.org/wiki/Selenium');

        let title = await driver.getTitle();

        console.log("Page title:", await title);
    } finally {
        // Close the browser
        await driver.quit();
    }
}

basicSearch();
