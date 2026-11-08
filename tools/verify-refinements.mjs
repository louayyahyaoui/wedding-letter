import {chromium} from 'playwright-core';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const errors=[];
for(const [size,viewport] of Object.entries({mobile:{width:390,height:844},desktop:{width:1440,height:1000}})){
const page=await browser.newPage({viewport});page.on('pageerror',e=>errors.push(e.message));
await page.goto('http://localhost:5173');await page.waitForTimeout(900);
for(let i=0;i<6;i++){const d=page.getByRole('dialog');if(await d.count()){await d.getByRole('button').last().click();await page.waitForTimeout(250);}}
await page.getByRole('button',{name:'Tap to open invitation',exact:true}).click();await page.waitForTimeout(13000);
for(let i=0;i<6;i++){const d=page.getByRole('dialog');if(await d.count()){await d.getByRole('button').last().click();await page.waitForTimeout(250);}}
await page.locator('.wedding-schedule').scrollIntoViewIfNeeded();await page.waitForTimeout(700);
const alignment=await page.locator('.wedding-schedule__timeline').evaluate(el=>{const a=el.getBoundingClientRect(),b=el.parentElement.getBoundingClientRect();return Math.abs(a.x+a.width/2-b.x-b.width/2)});assert(alignment<1);
await page.screenshot({path:`evidence/verification/centered-schedule-${size}.png`});
await page.locator('#faq details').first().locator('summary').click();await page.locator('#faq').scrollIntoViewIfNeeded();await page.waitForTimeout(500);assert.match(await page.locator('#faq').innerText(),/Dress chic/);
await page.screenshot({path:`evidence/verification/dress-chic-${size}.png`});
await page.locator('.wedding-signature').scrollIntoViewIfNeeded();await page.waitForTimeout(1400);
assert.match(await page.locator('.wedding-thanks').innerText(),/Jazakum Allahu khayran/);
console.log(size,await page.locator('.wedding-signature__name').first().evaluate(el=>({font:getComputedStyle(el).fontFamily,size:getComputedStyle(el).fontSize,opacity:getComputedStyle(el).opacity})), 'center error',alignment);
await page.screenshot({path:`evidence/verification/signature-${size}.png`});
assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(300);
assert(await page.locator('.wedding-signature__name').first().evaluate(el=>['none','matrix(1, 0, 0, 1, 0, 0)'].includes(getComputedStyle(el).transform)));
await page.close();}
await browser.close();assert.deepEqual(errors,[]);console.log('Refinement checks passed');

