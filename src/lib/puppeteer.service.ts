import puppeteer from 'puppeteer'

export async function capturePage(url: string, { width = 1200, height = 640 } = {}) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setViewport({ width, height: height + 8 + 74 + 37 + 8 })
  await page.goto(url)

  return page.screenshot({
    clip: { x: 0, y: 8 + 74, width, height },
  })
}