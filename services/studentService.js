const Student = require('../model/Student')
// 添加
exports.addStudent = async function (studentObj) {
  const ins = await Student.create(studentObj);
  return ins.toJSON()
}
// 删除
exports.deleteStudent = async function (studentId) {
  Student.destroy({
    where: {
      id: studentId
    }
  })
}
// 修改
exports.updateStudent = async function(studentId,studentObj){
  Student.update(studentObj,{
    where:{
      id:studentId
    }
  })
}