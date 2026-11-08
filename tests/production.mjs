import {chromium} from 'playwright-core';
import assert from 'node:assert/strict';
const base='http://localhost:5174';
assert((await fetch(base+'/api/health')).ok);
const route=await fetch(base+'/demo/golden-letter');assert.match(await route.text(),/assets\/index-/);
const invalid=await fetch(base+'/api/public/invitations/test/rsvp',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({})});assert.equal(invalid.status,400);
const redirect=await fetch(base+'/create-invite?design=golden-letter',{redirect:'manual'});assert.equal(redirect.status,302);assert.equal(redirect.headers.get('location'),'https://theforevertale.com/create-invite?design=golden-letter');
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try{
const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.addInitScript(()=>Object.defineProperty(navigator,'share',{value:async data=>{window.testShared=data;},configurable:true}));
await page.goto(base+'/demo/golden-letter');await page.getByRole('button',{name:'OK, got it'}).click();await page.waitForTimeout(450);await page.getByRole('button',{name:'OK, got it'}).click();await page.waitForTimeout(450);
await page.getByRole('button',{name:'Yes, show it'}).click();await page.waitForTimeout(500);
assert.match(await page.locator('body').innerText(),/Nikah/);
await page.getByRole('button',{name:'Share',exact:true}).click();await page.waitForTimeout(100);assert.match(await page.evaluate(()=>window.testShared.url),/^http:\/\/localhost:5174\/demo\/golden-letter/);
assert.equal(errors.length,0,JSON.stringify(errors));console.log('Production build, nested invitation route, API validation, creator redirect, Muslim version and sharing passed.');
}finally{await browser.close();}
