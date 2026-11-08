import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {parse} from '@babel/parser';
import traverseModule from '@babel/traverse';
import generatorModule from '@babel/generator';
const traverse=traverseModule.default||traverseModule;
const generate=generatorModule.default||generatorModule;
const root=process.cwd();
const modules={};
const sandbox={self:{webpackChunk_N_E:{push:chunk=>Object.assign(modules,chunk[1])}}};
for(const f of fs.readdirSync('evidence/downloads/_next/static/chunks',{recursive:true})){
 if(!f.endsWith('.js')||f.startsWith('webpack-'))continue;
 vm.runInNewContext(fs.readFileSync(path.join('evidence/downloads/_next/static/chunks',f),'utf8'),sandbox);
}
fs.mkdirSync('src/recovered',{recursive:true});
const sources=Object.fromEntries(Object.entries(modules).map(([id,fn])=>[id,fn.toString()]));
// Route the public RSVP API to our Node server; never use the source service.
sources[71837]=sources[71837].replaceAll('https://api.forevertale.in/api/v1','/api');
sources[19870]=sources[19870].replaceAll('E.lz.url','window.location.origin');
// Keep the Golden Letter branch; omit unrelated invitation designs.
const template=parse('('+sources[80743]+')');
let factory;
traverse(template,{FunctionExpression(p){if(!factory)factory=p;},SwitchStatement(p){
 if(p.node.discriminant.type==='MemberExpression'&&p.node.discriminant.property.name==='templateSlug'){
  const golden=p.node.cases.find(c=>c.test?.value==='golden-letter');if(golden)p.replaceWith(golden.consequent[0]);
 }
}});
factory.scope.crawl();
const used=new Set();
function visitBinding(name){if(used.has(name))return;const b=factory.scope.bindings[name];if(!b)return;used.add(name);b.path.traverse({ReferencedIdentifier(p){const dependency=p.scope.getBinding(p.node.name);if(dependency?.scope===factory.scope)visitBinding(p.node.name);}});}
visitBinding('n6');
for(const p of factory.get('body.body')){
 if(p.isFunctionDeclaration()&&!used.has(p.node.id.name))p.remove();
 if(p.isVariableDeclaration()){for(const d of p.get('declarations'))if(!used.has(d.node.id.name))d.remove();if(p.node&&!p.node.declarations.length)p.remove();}
}
sources[80743]=generate(factory.node).code;
// Follow literal module imports, using normal npm React and local Next adapters.
const overrides=new Set([2265,57437,4887,33145,87138,99376,35475]);
const included=new Set();
function collect(id){if(included.has(id)||overrides.has(id)||!sources[id])return;included.add(id);const src=sources[id];const req=src.match(/^function\s*\([^,]+,[^,]+,\s*(\w+)/)?.[1];if(!req)return;for(const m of src.matchAll(new RegExp('\\b'+req+'\\((\\d+)\\)|\\b'+req+'\\.bind\\('+req+',\\s*(\\d+)','g')))collect(Number(m[1]||m[2]));}
collect(19870);collect(82119);
const names={80743:'GoldenLetter',19870:'Demo',60896:'Rsvp',82119:'Language',62592:'Music',80258:'ScratchReveal',64244:'Branding',36800:'PreviewLock',1290:'RsvpFields',61267:'AnimationProvider'};
const imports=[];const entries=[];
for(const id of included){const name=names[id]||`module-${id}`;const file=`${name}.js`;fs.writeFileSync(`src/recovered/${file}`,'// Recovered from the public Golden Letter demo; original module '+id+'.\nexport default '+sources[id]+';\n');imports.push(`import module${id} from './${file}';`);entries.push(`${id}:module${id}`);}
fs.writeFileSync('src/recovered/modules.js',imports.join('\n')+'\nexport const modules={'+entries.join(',')+'};\n');
// Retain all first-party image, video, music and font assets locally.
fs.mkdirSync('public',{recursive:true});
for(const entry of fs.readdirSync('evidence/downloads'))if(!['_next','demo'].includes(entry))fs.cpSync(path.join('evidence/downloads',entry),path.join('public',entry),{recursive:true});
fs.cpSync('evidence/downloads/_next/static/media','public/_next/static/media',{recursive:true});
fs.cpSync('evidence/downloads/_next/static/css','public/_next/static/css',{recursive:true});
const html=fs.readFileSync('../golden-source.html','utf8');
const flight=[];const flightCtx={self:{__next_f:{push:a=>flight.push(a)}}};
for(const match of html.matchAll(/<script>(.*?)<\/script>/gs)){vm.runInNewContext(match[1],flightCtx);}
const text=flight.filter(a=>a[0]===1).map(a=>a[1]).join('');
function findInvitation(v){if(!v||typeof v!=='object')return null;if(v.invitation)return v.invitation;for(const x of Object.values(v)){const f=findInvitation(x);if(f)return f;}return null;}
let invitation;
for(const line of text.split('\n')){try {invitation??=findInvitation(JSON.parse(line.slice(line.indexOf(':')+1)));}catch{}}
if(!invitation)throw Error('No invitation data found');
fs.writeFileSync('src/invitation.json',JSON.stringify(invitation,null,2));
console.log(`Recovered ${included.size} reachable modules, isolated Golden Letter, and copied local assets.`);
