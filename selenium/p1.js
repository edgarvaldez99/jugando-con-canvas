const { Builder, By, Key, until } = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('https://www.gmail.com');
driver.findElement(By.name('identifier')).sendKeys('edgarvaldez99@gmail.com', Key.RETURN);
driver.findElement(By.id('identifierNext')).click();

const passBy = By.name("password");
driver.wait(until.elementLocated(passBy) , 1000);
driver.wait(until.elementIsVisible(driver.findElement(passBy)), 10000);
driver.findElement(passBy).sendKeys('26523697-Ed', Key.RETURN);
driver.findElement(By.id('passwordNext')).click();