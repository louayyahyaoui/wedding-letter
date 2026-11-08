import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';

const root=fileURLToPath(new URL('../',import.meta.url));
const directory=path.join(root,'public/assets/ceremony');
await fs.mkdir(directory,{recursive:true});
const files=(await fs.readdir(directory,{withFileTypes:true}))
 .filter(entry=>entry.isFile()&&/\.(jpe?g|png|webp|avif|tiff?)$/i.test(entry.name))
 .map(entry=>entry.name).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
if(!files.length){console.log('Add photos to public/assets/ceremony, then run npm run photos again. The current gallery has been kept.');process.exit(0);}
const output=path.join(directory,'optimized');
await fs.mkdir(output,{recursive:true});
const gallery=[];
let originalBytes=0,optimizedBytes=0;
for(const file of files){
 const filename=file+'.webp';
 const source=path.join(directory,file);
 const info=await sharp(source).rotate().resize({width:1600,height:1600,fit:'inside',withoutEnlargement:true}).webp({quality:85}).toFile(path.join(output,filename));
 originalBytes+=(await fs.stat(source)).size;optimizedBytes+=info.size;
 gallery.push('/assets/ceremony/optimized/'+encodeURIComponent(filename));
 console.log(`${file} -> ${info.width}x${info.height}, ${Math.round(info.size/1024)} KB`);
}
const configFile=path.join(root,'src/invitation.json');
const invitation=JSON.parse(await fs.readFile(configFile,'utf8'));
invitation.assets={...invitation.assets,gallery};
await fs.writeFile(configFile,JSON.stringify(invitation,null,2)+'\n');
console.log(`Updated the gallery with ${gallery.length} photos (${(originalBytes/1048576).toFixed(1)} MB originals -> ${(optimizedBytes/1048576).toFixed(2)} MB web images).`);
