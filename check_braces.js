const fs = require('fs');
const lines = fs.readFileSync('corvo.js', 'utf8').split('\n');
let open = 0;
let inSwitch = false;
for(let i=5080; i<13860; i++) {
  if (lines[i].includes('switch (command)')) {
    inSwitch = true;
  }
  if (inSwitch) {
    let m1 = lines[i].match(/\{/g);
    let m2 = lines[i].match(/\}/g);
    if(m1) open += m1.length;
    if(m2) open -= m2.length;
  }
  if (lines[i].includes("case 'menu':")) {
    console.log('Brace level at menu:', open);
  }
}
