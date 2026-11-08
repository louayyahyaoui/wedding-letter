import {chromium} from 'playwright-core';
import assert from 'node:assert/strict';
import source from '../src/invitation.json' with {type:'json'};
import {localizeInvitation,supportedLanguages} from '../src/invitationTranslations.js';
assert.deepEqual(supportedLanguages,['en','ar','fr']);assert.equal(localizeInvitation(source,'en').event.description,source.event.description);assert.equal(localizeInvitation(source,'es').language,'en');
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const errors=[];
async function check(lang,size){
 const viewport=size==='mobile'?{width:390,height:844}:{width:1440,height:1000};const context=await browser.newContext({viewport});
 await context.addInitScript(lang=>{localStorage.setItem('ft_demo_lang',lang);localStorage.setItem('ft_demo_tour_done','1');localStorage.setItem('ft_demo_rsvp_tip_done','1');localStorage.setItem('ft_demo_audio','none');},lang);
 const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto('http://localhost:5173');await page.waitForTimeout(900);
 assert.equal(await page.locator('html').getAttribute('lang'),lang);
 const languageButton=page.locator('button[aria-haspopup="menu"]').filter({has:page.locator('span[lang]')});
 await languageButton.click();assert.equal(await page.getByRole('menuitemradio').count(),3);assert.deepEqual((await page.getByRole('menuitemradio').allTextContents()).map(s=>s.split(' ')[0]),['EnglishYou\'re','العربيةأنتم','FrançaisVous']);await languageButton.click();
 assert.equal(await page.getByRole('button',{name:/^Share$/i}).count(),0);
 await page.getByRole('button',{name:{en:'Tap to open invitation',ar:'اضغط لفتح الدعوة',fr:"Touchez pour ouvrir l'invitation"}[lang],exact:true}).click();await page.waitForTimeout(13000);
 assert.equal(await page.locator('.wedding-schedule').count(),0);assert.equal(await page.locator('#faq details').count(),3);
 const copy=localizeInvitation(source,lang);assert.equal((await page.locator('.wedding-party > p').innerText()).trim(),copy.event.description);
 assert.equal((await page.locator('.wedding-thanks').innerText()).replace(/\s+/g,' ').trim(),copy.endingNote.replace(/\s+/g,' ').trim());
 await page.locator('.catamaran-tour').scrollIntoViewIfNeeded();await page.waitForTimeout(900);await page.waitForFunction(()=>[...document.querySelectorAll('.catamaran-tour img')].every(img=>img.complete&&img.naturalWidth>0));assert.equal(await page.locator('.catamaran-tour img').count(),2);
 await page.screenshot({path:`evidence/verification/siesta-mia-${lang}-${size}.png`});
 const gallery=page.locator('#ceremony-gallery');await gallery.scrollIntoViewIfNeeded();await page.waitForTimeout(900);await page.screenshot({path:`evidence/verification/larger-gallery-${lang}-${size}.png`});
 const imageWidths=await gallery.locator('img').evaluateAll(images=>images.map(img=>img.getBoundingClientRect().width));assert(Math.max(...imageWidths)>=(size==='mobile'?245:285));
 await page.locator('#faq details').first().locator('summary').click();assert.equal((await page.locator('#faq details').first().locator('.wedding-faq__answer').innerText()).trim(),copy.faq.dressCode);
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'horizontal overflow');
 await page.locator('.wedding-audio__options').click();assert.equal(await page.getByRole('menuitem').count(),4);const menuBox=await page.locator('.wedding-audio__menu').boundingBox();assert(menuBox.x>=0&&menuBox.x+menuBox.width<=viewport.width,'audio menu fits');
 console.log(lang,size,'passed',Math.max(...imageWidths));await context.close();
}
try{await Promise.all([check('en','mobile'),check('fr','desktop'),check('ar','mobile')]);assert.deepEqual(errors,[]);console.log('Three-language content and layout checks passed.');}finally{await browser.close();}
