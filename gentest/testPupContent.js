const puppeteerTestContent = `
import puppeteer from 'puppeteer'
import assert from 'assert'

describe('Weblap tartalmának tesztelése', () => {
    let browser;
    let page;
    before(async function () {
        browser = await puppeteer.launch({headless: true})
        page = await browser.newPage()
        await page.goto('http://localhost:3000')        
    })
    after(async function() {
        await browser.close()
    })
    it('Böngésző címsora', async function() {        
        const title = await page.title()
        assert.strictEqual(title, 'Sinto Project')
    })
    it('h1 tartalma', async function() {
        const content = await page.$eval('h1', element => element.textContent)
        assert.strictEqual(content, 'Sinto Project')                                     
    })    
})

`
module.exports = puppeteerTestContent
