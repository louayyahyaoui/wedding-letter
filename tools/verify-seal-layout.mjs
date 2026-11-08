import { chromium } from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
for(const [size,viewport] of Object.entries({mobile:{width:390,height:844},desktop:{width:1440,height:1000}})){
 const page=await browser.newPage({viewport});await page.goto('http://localhost:5173');await page.waitForTimeout(900);
 for(let i=0;i<6;i++){const d=page.getByRole('dialog');if(await d.count()){await d.getByRole('button').last().click();await page.waitForTimeout(200);}}
 await page.getByRole('button',{name:'Tap to open invitation',exact:true}).click();await page.waitForTimeout(13000);
 await page.locator('.wedding-signature__seal').scrollIntoViewIfNeeded();await page.waitForFunction(()=>document.querySelector('.wedding-signature__seal')?.complete);
 await page.evaluate(()=>window.scrollTo({top:document.documentElement.scrollHeight,behavior:'instant'}));await page.waitForTimeout(1500);
 await page.screenshot({path:`evidence/verification/burgundy-ending-final-${size}.png`});
 console.log(size,await page.locator('.wedding-signature__seal').boundingBox());await page.close();
}await browser.close();
