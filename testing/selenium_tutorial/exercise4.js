const { Builder, By, Key, until } = require('selenium-webdriver');
const fs = require('fs');

async function basicSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open DuckDuckGo
        await driver.get('https://www.duckduckgo.com');
        await driver.findElement(By.name('q')).sendKeys('Selenium WebDriver', Key.ENTER);

        await driver.wait(until.elementLocated(By.css('h2 a')), 10000);
        let results = await driver.findElements(By.css('h2 a'));
        
        let image = await driver.takeScreenshot();
        fs.writeFileSync('exc4.png', image, 'base64');

        console.log(await Promise.all(
            results.slice(0, 3).map(e => e.getText())
        ));
    } finally {
        // Close the browser
        await driver.quit();
    }
}

basicSearch();
