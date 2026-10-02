import {build} from 'vite';
import path from 'node:path';
await build({configFile:false,root:process.cwd(),publicDir:false,define:{'process.env.NODE_ENV':'"production"'},resolve:{alias:{'@':path.resolve('source')}},oxc:{jsx:{runtime:'automatic'}},build:{outDir:'assets',emptyOutDir:false,lib:{entry:path.resolve('source/main.tsx'),formats:['es'],fileName:()=> 'app.js'},minify:true}});
