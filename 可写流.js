const fs = require('fs');
const path = require('path');

// 可写流
const filename = path.resolve(__dirname, './test/test2.txt');
const ws = fs.createWriteStream(filename, {
  encoding: 'utf-8',
  highWaterMark: 10
})
let i = 0;

function myWrite() {
  let flag = true;
  while (i < 1 * 1024 * 1024 && flag) {//写一个1M的文件
    flag = ws.write('a');
    i++
  }
}
myWrite()

ws.on('drain', () => {
  console.log('drain可以再次写入了')
  flag = true;
  myWrite()
})



// 把[./test/test.txt]复制一份到 [./test/test.copy.txt]

// const from = path.resolve(__dirname,'./test/test.txt');
// const to = path.resolve(__dirname,'./test/test.copy.txt');

// const rs = fs.createReadStream(from);
// const ws = fs.createWriteStream(to);

// rs.pipe(ws);

// rs.on('end',()=>{
//   console.log('复制成功')
// })

