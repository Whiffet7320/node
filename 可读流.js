const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,'./test/test.txt');
// console.log(filename)

const rs = fs.createReadStream(filename,{
  encoding:'utf-8',
  highWaterMark:5
})

rs.on('open',()=>{
  console.log('文件被打开了')
})

rs.on('data',res=>{
  console.log('data',res)
  rs.pause()//暂停
})

rs.on('pause',()=>{
  console.log('pause暂停了')
  setTimeout(()=>{
    rs.resume()
  },500)
})

rs.on('resume',()=>{
  console.log('resume恢复了')
})

rs.on('error',res=>{
  console.log('error',res)
})

rs.on('close',()=>{
  console.log('close文件被关闭')
})

rs.on('end',()=>{
  console.log('end文件被读取完毕')
})