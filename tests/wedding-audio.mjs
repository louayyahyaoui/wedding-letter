import { chromium } from 'playwright-core';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const errors=[];
try {
for(const [size,viewport] of Object.entries({mobile:{width:390,height:844},desktop:{width:1440,height:1000}})) {
 const context=await browser.newContext({viewport});const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://localhost:5173');await page.waitForTimeout(1000);
 const audio=page.locator('[data-wedding-player]');
 assert.equal(await page.locator('audio').count(),1);
 assert.match(await audio.getAttribute('src'),/bruno-mars-marry-you/);
 for(let i=0;i<6;i++){const d=page.getByRole('dialog');if(await d.count()){await d.getByRole('button').last().click();await page.waitForTimeout(300);}}
 await page.getByRole('button',{name:'Audio options',exact:true}).click();
 const options=await page.getByRole('menuitem').allTextContents();assert.equal(options.length,4);console.log(size,options);
 const menuBox=await page.getByRole('menu',{name:'Audio options'}).boundingBox();assert(menuBox.x>=0&&menuBox.x+menuBox.width<=viewport.width,'menu bounds');
 await page.screenshot({path:`evidence/verification/audio-menu-${size}.png`});
 await page.getByRole('menuitem',{name:/Bruno Mars/}).click();await page.waitForFunction(()=>{const a=document.querySelector('[data-wedding-player]');return !a.paused&&a.readyState>=2&&a.currentTime>0;});
 assert((await audio.evaluate(a=>a.duration))>200);
 await page.getByRole('button',{name:/^Pause Bruno/}).click();assert(await audio.evaluate(a=>a.paused));
 await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));Object.defineProperty(document,'hidden',{configurable:true,value:false});document.dispatchEvent(new Event('visibilitychange'));});
 await page.waitForTimeout(300);assert(await audio.evaluate(a=>a.paused),'pause survives visibility');
 await page.getByRole('button',{name:'Tap to open invitation',exact:true}).click();await page.waitForTimeout(13000);assert(await audio.evaluate(a=>a.paused),'opening does not resume paused audio');
 for(let i=0;i<6;i++){const d=page.getByRole('dialog');if(await d.count()){await d.getByRole('button').last().click();await page.waitForTimeout(300);}}
 await page.getByRole('button',{name:/^Play Bruno/}).click();await page.waitForFunction(()=>!document.querySelector('[data-wedding-player]').paused);
 for(let i=0;i<5;i++){await page.getByRole('button',{name:/^Pause Bruno/}).click();assert(await audio.evaluate(a=>a.paused));await page.getByRole('button',{name:/^Play Bruno/}).click();await page.waitForFunction(()=>!document.querySelector('[data-wedding-player]').paused);}
 await page.getByRole('button',{name:'Audio options',exact:true}).click();await page.getByRole('menuitem',{name:/Shukran/}).click();await page.waitForFunction(()=>{const a=document.querySelector('[data-wedding-player]');return a.src.includes('shukran')&&!a.paused&&a.readyState>=2;});
 await page.getByRole('button',{name:'Audio options',exact:true}).click();await page.getByRole('menuitem',{name:/Random audio/}).click();assert.match(await page.locator('.wedding-audio__toggle').innerText(),/Random audio/);
 await page.getByRole('button',{name:'Audio options',exact:true}).click();await page.getByRole('menuitem',{name:/No audio/}).click();assert(await audio.evaluate(a=>a.paused));
 await page.locator('.wedding-signature').scrollIntoViewIfNeeded();await page.waitForTimeout(1400);
 const seal=page.locator('.wedding-signature__seal');assert.equal(await page.locator('.wedding-signature__name').count(),0);assert.equal(await seal.evaluate(img=>img.naturalWidth),4096);
 await page.screenshot({path:`evidence/verification/burgundy-ending-${size}.png`});
 const favicon=await page.locator('link[rel="icon"]').first().getAttribute('href');assert(favicon.includes('wax-seals'));assert.equal((await page.request.get(new URL(favicon, page.url()).href)).status(),200);
 await page.reload();await page.waitForTimeout(1000);assert(await page.locator('[data-wedding-player]').evaluate(a=>a.paused&&!a.getAttribute('src')),'No audio persists');
 await context.close();
}
const raceContext=await browser.newContext();const race=await raceContext.newPage();
await race.route('**/assets/audio/bruno-mars-marry-you.mp3',async route=>{await new Promise(r=>setTimeout(r,1600));await route.continue();});
await race.goto('http://localhost:5173');await race.waitForTimeout(1000);
await race.locator('.wedding-audio__toggle').click();await race.locator('.wedding-audio__toggle').click();await race.waitForTimeout(2500);assert(await race.locator('[data-wedding-player]').evaluate(a=>a.paused),'pause cancels pending playback');await raceContext.close();
assert.deepEqual(errors,[]);
const hash=async p=>crypto.createHash('sha256').update(await fs.readFile(p)).digest('hex');assert.equal(await hash('design-assets/wax-seals/louay-maram-burgundy-4k.png'),await hash('public/assets/wax-seals/louay-maram-burgundy-4k.png'));
console.log('Seal quality, favicon, default song, four options, repeated pause/play, visibility, track changes, persisted silence and buffering-race checks passed.');
} finally {await browser.close();}

