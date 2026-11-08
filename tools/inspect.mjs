import { chromium } from '../../.rea-runtime/node_modules/playwright-core/index.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('golden-letter');
await fs.mkdir(path.join(root,'evidence/downloads'),{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
const pending=[]; const assets=[];
page.on('response',r=>{ if(new URL(r.url()).hostname==='theforevertale.com') pending.push((async()=>{try {const u=new URL(r.url()); const b=await r.body(); const file=path.join(root,'evidence/downloads',decodeURIComponent(u.pathname));await fs.mkdir(path.dirname(file),{recursive:true});await fs.writeFile(file,b);assets.push({url:r.url(),file,bytes:b.length,status:r.status()});}catch{}})()); });
await page.goto('https://theforevertale.com/demo/golden-letter');await page.waitForTimeout(3500);
await page.screenshot({path:path.join(root,'evidence/closed-desktop.png')});
console.log(await page.locator('body').innerText());
for(let i=0;i<8;i++){const d=page.getByRole('dialog');if(await d.count()){console.log('GUIDE',await d.innerText());await d.getByRole('button').last().click();await page.waitForTimeout(400);}}
await page.getByRole('button',{name:'Tap to open invitation',exact:true}).click();
await page.waitForTimeout(12000);await page.screenshot({path:path.join(root,'evidence/open-desktop.png'),fullPage:true});
await fs.writeFile(path.join(root,'evidence/open-dom.html'),await page.content());
console.log(await page.locator('body').innerText());
console.log('buttons',await page.getByRole('button').evaluateAll(ns=>ns.map(n=>({text:n.textContent,label:n.getAttribute('aria-label')}))));
await Promise.allSettled(pending);await fs.writeFile(path.join(root,'evidence/assets.json'),JSON.stringify(assets,null,2));await browser.close();
