import {spawn} from 'node:child_process';
import {createServer} from 'node:net';
import {once} from 'node:events';
import {fileURLToPath} from 'node:url';
import {chromium} from 'playwright-core';
import assert from 'node:assert/strict';

const root=fileURLToPath(new URL('../',import.meta.url));
const blocker=createServer();blocker.listen(0,'127.0.0.1');await once(blocker,'listening');
const preferredPort=blocker.address().port;
const children=[];
let browser;
async function start(){
 const child=spawn(process.execPath,['server.mjs'],{cwd:root,env:{...process.env,NODE_ENV:'development',PORT:String(preferredPort)},stdio:['ignore','pipe','pipe']});
 children.push(child);
 return await new Promise((resolve,reject)=>{
  let output='';const timer=setTimeout(()=>reject(Error(`Startup timed out: ${output}`)),20000);
  child.stdout.on('data',chunk=>{output+=chunk;const match=output.match(/Golden Letter: http:\/\/localhost:(\d+)/);if(match){clearTimeout(timer);resolve({port:Number(match[1]),output});}});
  child.stderr.on('data',chunk=>{output+=chunk;});
  child.once('exit',code=>{clearTimeout(timer);reject(Error(`Server exited (${code}): ${output}`));});
 });
}
try{
 const first=await start();const second=await start();
 assert.notEqual(first.port,preferredPort);assert.notEqual(first.port,second.port);
 browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 for(const {port,output} of [first,second]){
  assert(!output.includes('WebSocket server error'),output);
  const url=`http://localhost:${port}`;
  assert.deepEqual(await (await fetch(url+'/api/health')).json(),{ok:true});
  const page=await browser.newPage();const errors=[];page.on('pageerror',error=>errors.push(error.message));
  const connected=new Promise((resolve,reject)=>{
   const timeout=setTimeout(()=>reject(Error('Hot reload WebSocket did not connect')),10000);
   page.on('websocket',socket=>socket.on('framereceived',({payload})=>{if(String(payload).includes('"type":"connected"')){clearTimeout(timeout);resolve(socket.url());}}));
  });
  await page.goto(url);const websocket=await connected;
  assert.equal(new URL(websocket).port,String(port));
  await page.getByRole('button',{name:'Tap to open invitation',exact:true}).waitFor();
  assert.deepEqual(errors,[]);await page.close();console.log(`PASS: HTTP, invitation and hot reload on port ${port}`);
 }
 console.log('PASS: two simultaneous instances recover from occupied ports.');
}finally{
 await browser?.close();
 for(const child of children)child.kill();
 blocker.close();
}
