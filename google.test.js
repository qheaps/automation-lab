const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

// test("can search Google for 'automation'", async () => {
//   // TODO Navigate to google.com
//   await driver.get(`https://www.google.com/`)
//   // TODO Uncomment the line below and replace SEARCH_BAR_NAME with the name of the search bar element
//   await driver.findElement(By.name("q")).sendKeys("automation", Key.RETURN);
//   // Wait for the results page to load
//   await driver.wait(until.titleIs("automation - Google Search"), 1000);
// });

// test("can search Google twice", async () => {
//   await driver.get(`https://www.google.com/`)
//   await driver.findElement(By.name("q")).sendKeys("something", Key.RETURN);
//   await driver.findElement(By.name("q")).clear()

//   await driver.findElement(By.name("q")).sendKeys("something2", Key.RETURN);
//   await driver.wait(until.titleIs("something2 - Google Search"), 1000);
// });
