const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.knoldus.com/home");
  await page.pdf({ path: "./knoldus.pdf", format: "Letter" });
  await browser.close();
})();