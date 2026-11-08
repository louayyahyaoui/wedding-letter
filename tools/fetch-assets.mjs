import fs from 'node:fs/promises';
import path from 'node:path';
const files=['/wedding_nasheed.mp3','/wedding_nasheed_2.mp3','/nasheed_shukran-laka-rabbi.mp3','/im alive 1 - atif aslam - maher zain-2.mp3','/im alive 2 - atif aslam - maher zain-2.mp3','/assets/invitations/shared/love_heart.svg','/couple_demo.webp',...Array.from({length:4},(_,i)=>`/assets/invitations/shared/gallery_${i+1}.webp`),'/favicon.ico'];
await Promise.all(files.map(async file=>{const r=await fetch('https://theforevertale.com'+encodeURI(file));if(!r.ok)throw Error(`${file}: ${r.status}`);const target=path.join('public',file);await fs.mkdir(path.dirname(target),{recursive:true});const bytes=Buffer.from(await r.arrayBuffer());await fs.writeFile(target,bytes);console.log(file,bytes.length);}));
