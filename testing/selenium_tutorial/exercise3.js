const { Builder, By, Key, until } = require('selenium-webdriver');

async function basicSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open DuckDuckGo
        await driver.get('https://www.w3schools.com/html/html_forms.asp');

        await driver.findElement(By.id('fname')).sendKeys('ilmar');
        await driver.findElement(By.id('lname')).sendKeys('vodi', Key.ENTER);

        console.log("Page form submitted");
    } finally {
        // Close the browser
        await driver.quit();
    }
}

basicSearch();
