const Class = require('../model/Class')
// 添加
exports.addClass = async function (classObj) {
  const ins = await Class.create(classObj);
  return ins.toJSON()
}
// 删除
exports.deleteClass = async function (classId) {
  Class.destroy({
    where: {
      id: classId
    }
  })
}
// 修改
exports.updateClass = async function(classId,classObj){
  Class.update(classObj,{
    where:{
      id:classId
    }
  })
}