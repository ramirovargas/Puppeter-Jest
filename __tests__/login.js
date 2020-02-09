const timeout = 9000

describe(
  '/ (Home Page)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://cornflourblue-angular-6-registration-login-example.glitch.me')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    test('Submit form with valid data', async () => {

      await page.waitForSelector('form');

      await page.type('#userName','MisoPruebas123');
      await page.type('#password','szechuanSauce');
      await sleep(2000)
      await page.click('#login');
      await sleep(2000)
      await page.screenshot({path: 'clickbd.png',fullPage: true})
    }, timeout);
  },
  timeout
)

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
  }

