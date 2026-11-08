import {chromium} from 'playwright-core';
import {PNG} from 'pngjs';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const errors=[];const report={comparisons:[],checks:[]};
await fs.mkdir('evidence/verification',{recursive:true});
async function dismissGuides(page){for(let i=0;i<8;i++){const d=page.getByRole('dialog');if(await d.count()){await d.getByRole('button').last().click();await page.waitForTimeout(450);}}}
async function freeze(page){await page.evaluate(()=>{for(const a of document.getAnimations()){a.pause();if(a.effect?.getTiming().iterations===Infinity)a.currentTime=0;}});}
async function shot(page,name){await freeze(page);const b=await page.screenshot({path:`evidence/verification/${name}.png`});return PNG.sync.read(b);}
function compare(a,b,state,size){assert.equal(a.width,b.width);assert.equal(a.height,b.height);let different=0,totalError=0;for(let i=0;i<a.data.length;i+=4){let max=0;for(let c=0;c<3;c++){const d=Math.abs(a.data[i+c]-b.data[i+c]);max=Math.max(max,d);totalError+=d;}if(max>12)different++;}const result={state,size,differentPixelPercent:100*different/(a.width*a.height),meanChannelError:totalError/(a.width*a.height*3)};report.comparisons.push(result);console.log(result);}
async function exercise(size){
 const viewport=size==='desktop'?{width:1440,height:1000}:{width:390,height:844};
 const pages=await Promise.all(['https://theforevertale.com/demo/golden-letter','http://localhost:5173'].map(async(url,index)=>{
  const page=await browser.newPage({viewport});page.on('pageerror',e=>errors.push({size,index,message:e.message}));
  if(index===1){page.on('response',r=>{if(r.status()>=400)errors.push({size,url:r.url(),status:r.status()});});}
  await page.goto(url);await page.waitForTimeout(2000);await dismissGuides(page);await page.evaluate(()=>document.fonts.ready);
  return page;
 }));
 const closed=await Promise.all(pages.map((p,i)=>shot(p,`${size}-${i?'clone':'reference'}-closed`)));compare(...closed,'closed',size);
 await Promise.all(pages.map(async p=>{await p.evaluate(()=>{for(const a of document.getAnimations())a.play();});await p.getByRole('button',{name:'Tap to open invitation',exact:true}).click();await p.waitForTimeout(13000);}));
 const open=await Promise.all(pages.map((p,i)=>shot(p,`${size}-${i?'clone':'reference'}-opened`)));compare(...open,'opened',size);
 const local=pages[1];
 const video=await local.locator('video').evaluateAll(vs=>vs.map(v=>({duration:v.duration,readyState:v.readyState,error:v.error?.message||null})));
 assert(video.every(v=>!v.error));report.checks.push({size,check:'opening video decodes',video});
 assert.match(await local.locator('body').innerText(),/Sara/);
 await local.getByRole('button',{name:'Scroll to event'}).click();await local.waitForTimeout(1700);
 await local.getByRole('button',{name:'Reveal Date',exact:true}).first().click();await local.waitForTimeout(1400);
 assert(await local.getByRole('link',{name:'Get Directions',exact:true}).count()>0);report.checks.push({size,check:'scratch fallback reveals event and map'});
 await local.screenshot({path:`evidence/verification/${size}-revealed.png`});
 await local.getByRole('button',{name:'Audio options',exact:true}).click();
 const audioMenu=await local.locator('body').innerText();assert.match(audioMenu,/Wedding Nasheed 2/);report.checks.push({size,check:'all music choices available'});
 await local.keyboard.press('Escape');await local.getByRole('button',{name:'Invitation language',exact:true}).click();
 const langs=await local.locator('body').innerText();await fs.writeFile(`evidence/verification/${size}-language-menu.txt`,langs);assert.match(langs,/Espa/);report.checks.push({size,check:'language menu opens'});
 await Promise.all(pages.map(p=>p.close()));
}
try{await Promise.all(['desktop','mobile'].map(exercise));report.errors=errors;await fs.writeFile('evidence/verification/report.json',JSON.stringify(report,null,2));assert.equal(errors.length,0,JSON.stringify(errors));console.log('Desktop and mobile verification passed.');}finally{await browser.close();}
