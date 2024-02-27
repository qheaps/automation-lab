const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("Tests Watched", async () => {
    await driver.get(`http://localhost:3000/`)
    await driver.findElement(By.id('add-movie-input')).sendKeys('Detective Pikachu')
    await driver.findElement(By.css('button[type="submit"]')).click()
    await driver.findElement(By.css(`input[type="checkbox"]`)).click()
    await driver.sleep(3000)
    expect(await driver.findElement(By.css(`input[type="checkbox"]`)).isSelected()).toBe(true)
});

// test("Tests removes movie", async () => {
//     await driver.get(`http://localhost:3000/`)
//     await driver.findElement(By.id('add-movie-input')).sendKeys('Detective Pikachu')
//     await driver.findElement(By.css('button[type="submit"]')).click()

//     await driver.findElement(By.className('delete-btn')).click()
//     await driver.sleep(3000)
//     // expect(await driver.findElement(By.id(`message`)).getText()).toBeNull()
//     let balls = await driver.findElement(By.css(`ul`))
//     let baller = await balls.findElement(By.id(`li`))
//     expect(baller).toBeUndefined()
// })

test("Tests popup message", async () => {
    await driver.get(`http://localhost:3000/`)
    await driver.findElement(By.id('add-movie-input')).sendKeys('Detective Pikachu')
    await driver.findElement(By.css('button[type="submit"]')).click()
    await driver.findElement(By.css(`input[type="checkbox"]`)).click()
    expect(await driver.findElement(By.id(`message`)).getText()).toBe(`Watched Detective Pikachu`)
})
