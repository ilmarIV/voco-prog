const { Builder, By, Key, until } = require('selenium-webdriver');
const fs = require('fs');

async function basicSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open DuckDuckGo
        await driver.get('https://www.demoblaze.com/');

        let laptopsTab = await driver.wait(until.elementLocated(By.linkText('Laptops')), 10000);
        await laptopsTab.click();

        await driver.sleep(2000);

        await driver.wait(until.elementLocated(By.css('h4 a')), 10000);
        let results = await driver.findElements(By.css('h4 a'));
        
        let image = await driver.takeScreenshot();
        fs.writeFileSync('minipro.png', image, 'base64');

        console.log(await Promise.all(
            results.slice(0, 5).map(e => e.getText())
        ));
    } finally {
        // Close the browser
        await driver.quit();
    }
}

basicSearch();
