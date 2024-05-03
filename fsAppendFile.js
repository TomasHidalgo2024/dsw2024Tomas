import fs from 'node:fs'
let str= "\nSoy un string";
fs.appendFile('data.txt',str,{encoding: 'utf-8'},em);

function em(error){
    if(error){
        console.log(`error: ${error} `);
    }else {
        console.log(`Dato grabado con exito`);
    }
}

console.log('Start reading a file...')
fs.readFile('data.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) {
    console.log(`Error: ${err}`)
  } else {
    console.log(data)
  }
  console.log('End of the file!')
})


