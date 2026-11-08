import {chromium} from 'playwright-core';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const browser = await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const errors=[];
for (const [size,viewport] of Object.entries({mobile:{width:390,height:844},desktop:{width:1440,height:1000}})) {
 const page=await browser.newPage({viewport});
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://localhost:5173');
 await page.waitForTimeout(1200);
 for(let i=0;i<6;i++){const d=page.getByRole('dialog');if(await d.count()){await d.getByRole('button').last().click();await page.waitForTimeout(300);}}
 await page.getByRole('button',{name:'Tap to open invitation',exact:true}).click();
 await page.waitForTimeout(13000);
 for(let i=0;i<6;i++){const d=page.getByRole('dialog');if(await d.count()){await d.getByRole('button').last().click();await page.waitForTimeout(300);}}
 const body=await page.locator('body').innerText();
 for(const name of ['Felah Yahyaoui','Ahlem Missaoui','Adel Khalfaoui','Nadia Guelmami'])assert(body.includes(name),name);
 assert.equal(await page.locator('.wedding-party').count(),1);
 assert.equal(await page.getByRole('heading',{name:'Wedding Ceremony',exact:true}).count(),0);
 assert.equal(await page.locator('.wedding-schedule li').count(),7);
 await page.locator('.wedding-party').scrollIntoViewIfNeeded();await page.waitForTimeout(1200);
 const reveal=page.getByRole('button',{name:'Reveal Date',exact:true});if(await reveal.count())await reveal.first().click();await page.waitForTimeout(800);
 await page.screenshot({path:`evidence/verification/party-update-${size}.png`});
 await page.locator('.wedding-schedule').scrollIntoViewIfNeeded();await page.waitForTimeout(800);
 await page.screenshot({path:`evidence/verification/schedule-update-${size}.png`});
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'overflow');
 console.log(size,JSON.stringify(await page.locator('.wedding-party__scratch').boundingBox()),await page.locator('.wedding-schedule time').allTextContents());
 await page.close();
}
await browser.close();assert.deepEqual(errors,[]);console.log('All checks passed');
