import express from 'express';
import {createServer as createViteServer} from 'vite';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import fs from 'node:fs/promises';
import {createServer} from 'node:http';
import {networkInterfaces} from 'node:os';
const root=path.dirname(fileURLToPath(import.meta.url));
const app=express(); app.use(express.json({limit:'64kb'}));
const server=createServer(app);
const isProduction=process.env.NODE_ENV==='production';
const host=process.env.HOST||(isProduction?'127.0.0.1':'0.0.0.0');
const preferredPort=Number(process.env.PORT||5173);
if(!Number.isInteger(preferredPort)||preferredPort<1||preferredPort>65535)throw new Error('PORT must be an integer between 1 and 65535.');
app.get('/api/health',(_,res)=>res.json({ok:true}));
// These belong to the separate source platform rather than the invitation.
app.get(['/create-invite','/:region/create-invite'],(req,res)=>res.redirect('https://theforevertale.com'+req.originalUrl));
app.post('/api/public/invitations/:slug/rsvp',async(req,res)=>{
 const {guestName,attending,partySize,message}=req.body;
 if(typeof guestName!=='string'||!guestName.trim()||guestName.length>160||!['yes','no','maybe'].includes(attending)||!Number.isInteger(partySize)||partySize<1||partySize>100|| (message!==undefined&&(typeof message!=='string'||message.length>4000)))return res.status(400).json({error:{code:'INVALID_RSVP',message:'Please enter a name, attendance and valid party size.'}});
 await fs.mkdir(path.join(root,'data'),{recursive:true});
 await fs.appendFile(path.join(root,'data/rsvps.jsonl'),JSON.stringify({...req.body,invitation:req.params.slug,createdAt:new Date().toISOString()})+'\n');
 res.json({data:{ok:true,message:'Thank you for your response.'}});
});
if(isProduction){
 app.use(express.static(path.join(root,'dist')));app.get('*',(_,res)=>res.sendFile(path.join(root,'dist/index.html')));
}else{
 // Share HTTP and hot-reload connections so parallel projects do not compete for port 24678.
 const vite=await createViteServer({root,server:{host,middlewareMode:true,hmr:{server}},appType:'spa'});app.use(vite.middlewares);
}
function listen(port){
 return new Promise((resolve,reject)=>{
  const onError=error=>{server.off('listening',onListening);reject(error);};
  const onListening=()=>{server.off('error',onError);resolve();};
  server.once('error',onError);server.once('listening',onListening);server.listen(port,host);
 });
}
for(let offset=0;offset<20;offset++){
 const port=preferredPort+offset;
 if(port>65535)throw new Error('No available port found. Set PORT to another value.');
 try{
  await listen(port);console.log(`Golden Letter: http://localhost:${port}`);
  if(host==='0.0.0.0')for(const addresses of Object.values(networkInterfaces()))for(const address of addresses||[])if(address.family==='IPv4'&&!address.internal)console.log(`Network: http://${address.address}:${port}`);
  break;
 }
 catch(error){
  if(error.code!=='EADDRINUSE'||isProduction||offset===19)throw error;
  console.log(`Port ${port} is already in use; trying ${port+1}...`);
 }
}
