const sequelize = require('./db');
const { DataTypes } = require('sequelize');

// 测试连接成功或者失败
// (async function () {
//   try {
//     await sequelize.authenticate();
//     console.log('连接成功');
//   } catch (error) {
//     console.error('连接失败：', error);
//   }
// })()

module.exports = sequelize.define('Admin', {
  loginId: {
    type: DataTypes.STRING(99),
    allowNull: false,
  },
  loginPwd: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  createdAt: false,
  updatedAt:false,
  paranoid:true
})


// Admin.sync({
//   alter: true
// }).then(() => {
//   console.log('模型Admin同步完成')
// })
