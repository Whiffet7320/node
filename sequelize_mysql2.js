require('./model/sync') //创建表


const adminServ = require('./services/adminService');
// 添加
// adminServ.addAdmin({
//   loginId:'cyy',
//   loginPwd:'1234567'
// })

// 删除
// adminServ.deleteAdmin(2)

// 修改
// adminServ.updateAdmin(2, {
//   loginPwd: 'cca'
// })

const bookServ = require('./services/bookService');
// bookServ.addBook({
//   name:'china',
//   imgurl:'woChina.jpg',
//   publishDate:'2021-3-16',
//   author:'MrCccc'
// })

// bookServ.updateBook(2,{
//   author:'yuge'
// })
// bookServ.deleteBook(2)