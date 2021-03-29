const Admin = require('../model/Admin')
// 添加
exports.addAdmin = async function (adminObj) {
  const ins = await Admin.create(adminObj);
  return ins.toJSON()
}
// 删除
exports.deleteAdmin = async function (adminId) {
  Admin.destroy({
    where: {
      id: adminId
    }
  })
}
// 修改
exports.updateAdmin = async function(adminId,adminObj){
  Admin.update(adminObj,{
    where:{
      id:adminId
    }
  })
}