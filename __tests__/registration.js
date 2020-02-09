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
      await page.click('[href="/register"]');

      await page.waitForSelector('form');
      await page.type('#name', 'Ricky');
      await page.type('#lastName', 'Franky');
      await page.type('#userName', 'Miso1234');
      await page.type('#password', 'szechuanSauce');

      await page.click('#register');
      await sleep(2000)
      await page.screenshot({path: 'clickbd.png',fullPage: true});
    }, timeout);
  },
  timeout
)

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
  }

