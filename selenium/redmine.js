const { Builder, By, Key, until } = require('selenium-webdriver');
const { username, password, titleProyect, petition } = require('./conf');
const moment = require("moment");
const selectors = require("./selectors.json");

let driver = new Builder()
    .forBrowser('firefox')
    .build();

// Login
driver.get('http://192.168.30.32/login');
driver.wait(until.elementLocated(By.name('login')));
driver.wait(until.elementIsVisible(driver.findElement(By.name('login'))));
driver.findElement(By.name('username')).sendKeys(username);
driver.findElement(By.id('password')).sendKeys(password);
driver.findElement(By.name('login')).click();

//Ir a proyecto
driver.wait(until.elementLocated(By.id("project_quick_jump_box")));
driver.wait(until.elementIsVisible(driver.findElement(By.id('project_quick_jump_box'))));
driver.findElement(By.id('project_quick_jump_box')).click();
driver.findElement(By.id('project_quick_jump_box')).findElement(By.css(`[value^="/projects/${titleProyect}?jump="]`)).click();

//En el proyecto ir a ver todas las peticiones y darle click a nueva petición
const petitionLinkBy = By.css(`[href^="/projects/${titleProyect}/issues?set_filter=1"]`);
driver.wait(until.elementLocated(petitionLinkBy));
driver.findElement(petitionLinkBy).click();
const newPetitionLinkBy = By.className("new-issue");
const newPetitionLinkEl = driver.findElement(newPetitionLinkBy);
driver.wait(until.elementLocated(newPetitionLinkBy));
driver.wait(until.elementIsVisible(newPetitionLinkEl));
newPetitionLinkEl.click();

//Crear la nueva petición
const createBy = By[selectors.create.by](selectors.create.it);
const createEl = driver.findElement(createBy);
driver.wait(until.elementLocated(createBy));
driver.wait(until.elementIsVisible(createEl));
driver.findElement(By[selectors.trackerId.by](selectors.trackerId.it)).findElement(By.css(`[value="${petition.trackerId}"]`)).click();
driver.findElement(By[selectors.subject.by](selectors.subject.it)).sendKeys(petition.subject.replace("{{date}}", moment().format("DD-MM-YYYY")));
driver.findElement(By[selectors.description.by](selectors.description.it)).sendKeys(petition.description);
driver.findElement(By[selectors.statusId.by](selectors.statusId.it)).findElement(By.css(`[value="${petition.statusId}"]`)).click();
if (petition.assignedToId) {
    driver.findElement(By[selectors.assignedToId.by](selectors.assignedToId.it)).findElement(By.css(`[value="${petition.assignedToId}"]`)).click();
} else {
    driver.findElement(By[selectors.assignedToId.by](selectors.assignedToId.it)).click();
    driver.findElement(By.xpath("//*[contains(text(), '<< yo mismo >>')]")).click();
}
//createEl.click();
