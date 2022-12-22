// import * as peggy from 'https://unpkg.com/peggy@2.0.1/browser/peggy.min.js'

const xhr = new XMLHttpRequest();
let grammar;

xhr.open('GET', 'p2v.peg', false);
xhr.send(null);

if (xhr.status === 200) {
  grammar = xhr.responseText;
}
else {
  console.log('error loading grammar file!');
}

const parser = peggy.generate(grammar);

function parse(e) {
  try {
    let r = parser.parse(e.value)
    let dst = document.getElementById('dst');
    dst.value = r;
  }
  catch (err) {
    let dst = document.getElementById('dst');
    dst.value = err + '\nparsing error, pls check format';
  }
}
