const express = require('express');
const app = express();//创建一个express应用

const port = 7320;
app.listen(port, () => {
  console.log(`正在监听${port}端口`)
})

// 配置一个请求映射，如果请求方法和请求路径均满足，交给处理函数进行处理
// app.请求方法（'请求路径',处理函数）
app.get('/cyy/:id', (req, res) => {
  console.log(req.headers)//请求头
  console.log(req.path)//请求路径
  console.log(req.query)
  console.log(req.params)
  // 响应
  // res.setHeader('mrccc','Mrcccc')//设置响应头
  // res.send('<h1>陈奕宇</h1>')
  res.status(302).location('https://duyi.ke.qq.com').end()//设置请求码对应的重定向
})


