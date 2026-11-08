import {chromium} from 'playwright-core';import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:390,height:844}});const failures=[];const badPaths=[];
page.on('pageerror',e=>failures.push(e.message));page.on('response',r=>{if(r.status()>=400)failures.push(`${r.status()} ${r.url()}`);});page.on('request',r=>{const u=new URL(r.url());if(u.hostname==='127.0.0.1'&&!u.pathname.startsWith('/wedding-letter/'))badPaths.push(u.pathname);});
await page.goto('http://127.0.0.1:4173/wedding-letter/');await page.waitForTimeout(1000);
for(let i=0;i<6;i++){const d=page.getByRole('dialog');if(await d.count()){await d.getByRole('button').last().click();await page.waitForTimeout(200);}}
await page.getByRole('button',{name:'Tap to open invitation',exact:true}).click();await page.waitForTimeout(13000);
for(const locator of ['.wedding-party','.catamaran-tour','#ceremony-gallery','.wedding-signature']){await page.locator(locator).scrollIntoViewIfNeeded();await page.waitForTimeout(600);}
await page.waitForFunction(()=>document.querySelector('.wedding-signature__seal')?.naturalWidth===4096);
await page.getByRole('button',{name:'Audio options',exact:true}).click();await page.getByRole('menuitem',{name:/Shukran/}).click();await page.waitForFunction(()=>{const a=document.querySelector('audio');return !a.paused&&a.readyState>=2;});
await page.getByRole('button',{name:/^Pause Shukran/}).click();
await page.evaluate(()=>document.fonts.ready);assert.equal(await page.locator('.catamaran-tour img').count(),2);assert.equal(await page.locator('#faq details').count(),3);assert.deepEqual(badPaths,[]);assert.deepEqual(failures,[]);
await browser.close();console.log('Static GitHub Pages subpath check passed: fonts, video, photos, seal, audio and invitation load with no root-path requests or errors.');
