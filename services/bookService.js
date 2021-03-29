const Book = require('../model/Book')
// 添加
exports.addBook = async function (bookObj) {
  const ins = await Book.create(bookObj);
  return ins.toJSON()
}
// 删除
exports.deleteBook = async function (bookId) {
  Book.destroy({
    where: {
      id: bookId
    }
  })
}
// 修改
exports.updateBook = async function(bookId,bookObj){
  Book.update(bookObj,{
    where:{
      id:bookId
    }
  })
}