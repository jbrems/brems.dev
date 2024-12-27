import puppeteer from 'puppeteer'

export async function capturePage(url: string, { width = 1200, height = 640, cssRules = '' } = {}) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setViewport({ width, height })
  await page.goto(url || '/')

  const fadeOut = 'body::after { display: block; content: \'\'; width: 100%; height: 50px; position: fixed; bottom: 0; left: 0; z-index: 9999; background: linear-gradient(transparent, #222222); }'
  await page.addStyleTag({ content: `${cssRules} ${fadeOut}` })

  const screenShot = await page.screenshot({ type: 'jpeg' })

  await browser.close()

  return screenShot
}