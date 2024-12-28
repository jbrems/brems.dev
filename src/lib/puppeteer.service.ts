export async function capturePage(url: string, { width = 1200, height = 640, cssRules = '' } = {}) {
  let browser = null
  if (process.env.NODE_ENV === 'development') {
    const puppeteer = await import('puppeteer')
    browser = await puppeteer.launch()
  } else {
    const chromium = (await import('chrome-aws-lambda')).default
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    })
  }

  const page = await browser.newPage()

  await page.setViewport({ width, height })
  await page.goto(url || '/')

  const fadeOut = 'body::after { display: block; content: \'\'; width: 100%; height: 50px; position: fixed; bottom: 0; left: 0; z-index: 9999; background: linear-gradient(transparent, #222222); }'
  await page.addStyleTag({ content: `${cssRules} ${fadeOut}` })

  const screenShot = await page.screenshot({ type: 'jpeg' })

  await browser.close()

  return screenShot
}