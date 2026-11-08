import {chromium} from 'playwright-core';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
const external=[];const errors=[];
page.on('request',r=>{if(!new URL(r.url()).hostname.match(/^(localhost|127\.0\.0\.1)$/))external.push(r.url());});
page.on('pageerror',e=>errors.push(e.message));
try{
await page.goto('http://localhost:5173');await page.waitForTimeout(1000);
for(let i=0;i<5;i++){const d=page.getByRole('dialog');if(await d.count()){await d.getByRole('button').last().click();await page.waitForTimeout(400);}}
await page.getByRole('button',{name:'Audio options',exact:true}).click();
await page.getByRole('menuitem',{name:'Wedding Nasheed 2',exact:true}).click();
await page.waitForTimeout(1200);
assert(await page.locator('audio').evaluateAll(as=>as.some(a=>!a.paused&&a.readyState>=2&&a.currentSrc.includes('wedding_nasheed_2'))));
await page.getByRole('button',{name:/Pause Wedding Nasheed 2/}).click();
await page.getByRole('button',{name:'Invitation language',exact:true}).click();
console.log('LANG',await page.getByRole('button').allTextContents());
await page.getByRole('menuitemradio',{name:/Français/}).click();await page.waitForTimeout(700);
assert.match(await page.locator('body').innerText(),/Avec la/);
await page.getByRole('button',{name:'Invitation language',exact:true}).click();await page.getByRole('menuitemradio',{name:/English/}).click();
await page.getByRole('button',{name:'Tap to open invitation',exact:true}).click();await page.waitForTimeout(13000);
await page.getByRole('button',{name:'Scroll to event',exact:true}).click();await page.waitForTimeout(1200);
await page.getByRole('button',{name:'Reveal Date',exact:true}).first().click();
await page.getByRole('button',{name:'Reveal Date',exact:true}).last().click();
await page.getByRole('button',{name:'Joyfully Yes!',exact:true}).scrollIntoViewIfNeeded();await page.waitForTimeout(800);
if(await page.getByRole('dialog').count())await page.getByRole('dialog').getByRole('button').last().click();
await page.getByRole('button',{name:'Joyfully Yes!',exact:true}).click();
console.log('FORM',await page.locator('body').innerText());
await page.getByPlaceholder('Guest name',{exact:true}).fill('Local verification');
await page.getByRole('button',{name:'Send Message',exact:true}).click();await page.waitForTimeout(500);
const text=await page.locator('body').innerText();assert.match(text,/preview|not sent|Thank you/i);
assert.equal(errors.length,0,JSON.stringify(errors));assert.equal(external.length,0,JSON.stringify(external));
await fs.writeFile('evidence/verification/controls.json',JSON.stringify({audioPlayback:true,languageSwitch:true,rsvpDemoSubmission:true,externalRequests:external,errors},null,2));
console.log('Audio playback, language switching, RSVP, and local asset isolation passed.');
}finally{await browser.close();}
