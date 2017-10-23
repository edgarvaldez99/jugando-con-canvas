const { Builder, By, Key, until } = require('selenium-webdriver');
const { username, password, titleProyect } = require('./conf');

let driver = new Builder()
    .forBrowser('firefox')
    .build();

// Login
driver.get('http://192.168.30.32/login');
driver.wait(until.elementLocated(By.name('login')) , 1000);
driver.wait(until.elementIsVisible(driver.findElement(By.name('login'))), 1000);
driver.findElement(By.name('username')).sendKeys(username);
driver.findElement(By.id('password')).sendKeys(password);
driver.findElement(By.name('login')).click();

//Ir a proyecto
driver.wait(until.elementLocated(By.id("project_quick_jump_box")), 1000);
driver.wait(until.elementIsVisible(driver.findElement(By.id('project_quick_jump_box'))), 1000);
driver.findElement(By.id('project_quick_jump_box')).click();
driver.findElement(By.id('project_quick_jump_box')).sendKeys(`/projects/${titleProyect}?jump=overview`);
//select.selectByValue(`/projects/${titleProyect}?jump=overview`)