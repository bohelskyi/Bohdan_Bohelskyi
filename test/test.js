const {Builder} = require("selenium-webdriver");
const MainPage = require("../pageObjects/mainPage");
const LoginPage = require("../pageObjects/loginPage");
const NewPage = require("../pageObjects/newPage");
const HomePage = require("../pageObjects/homePage");
var expect = require("chai").expect;
require("chromedriver");

describe("Create and delete user", function () {
    let driver;
    let mainPage;
    let loginPage;
    let newPage;
    let homePage;

    before(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        mainPage = new MainPage(driver);
    });

    it("Go to the main page", async () => {
        const mainurl =
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
        await mainPage.goToUrl(mainurl);
    }).timeout(10000);

    it("Sign in to the system", async () => {
        const username = "Admin";
        const password = "admin123";
        loginPage = new LoginPage(driver);
        await loginPage.login(username, password);
        let check = await loginPage.ifLogged();
        expect(check);
    }).timeout(10000);

    it("Go to add page", async () => {
        homePage = new HomePage(driver);
        await homePage.goToAdd();
        expect(await homePage.getURL()).to.equal(
            "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser"
        );
    }).timeout(10000);

    it("New User", async () => {
        newPage = new NewPage(driver);
        let checkAdded = await newPage.addUser(
            "Odis  Adalwin",
            "Bohdan Bohelskyi",
            "qWeRtY1234#"
        );
        expect(checkAdded);
    }).timeout(15000);

    it("Delete User", async () => {
        await homePage.reset();
        let checkRemoved = await homePage.delete(
            "Odis  Adalwin",
            "Bohdan Bohelskyi",
            "functionUsedForSearch"
        );
        expect(checkRemoved);
    }).timeout(15000);

    after(async () => {
        setTimeout(() => {
            driver.quit();
        }, 8000);
    });
});
