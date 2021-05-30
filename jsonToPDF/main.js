const puppeteer = require("puppeteer");
const handlebars = require("handlebars")
const fs = require("fs-extra");
const path = require("path")
const hrmlFilePath = path.join(__dirname, "employee.hbs")
const data = require("./employee.json")
const outputPath = path.join(__dirname, "output.html")

async function createContent(){
    const htmpTemplate = await fs.readFile(hrmlFilePath, "utf-8")
    return await handlebars.compile(htmpTemplate)(data)
}
(async function(){
    const browser = await  puppeteer.launch();
    const page = await browser.newPage();
const content = await createContent()
await fs.writeFileSync(outputPath, content)
    // await page.setContent(content)
    await page.goto(`file://${outputPath}`)
    await page.pdf({path:"employee.pdf"})
    await browser.close();
})();