const net = require('net');
const server = net.createServer()//创建一个服务器对象
const fs = require('fs');
const path = require('path')

server.listen('8888')

server.on('listening',()=>{
  console.log('正在监听8888端口')
})

server.on('connection',socket=>{
  console.log('有客户端连接到服务器')
  // console.log(socket)
  socket.on('data',async res=>{
    console.log(res.toString('utf-8'))
    const filename = path.resolve(__dirname,'./test/toux.jpg')
    const bodyBuffer = await fs.promises.readFile(filename)
    const headBuffer = Buffer.from(`HTTP/1.1 200 OK
Content-Type: image/jpeg

`,'utf-8')
    const buffer = Buffer.concat([headBuffer,bodyBuffer])
    socket.write(buffer);
    socket.end()
  })
  socket.on('end',()=>{
    console.log('连接结束')
  })
})

