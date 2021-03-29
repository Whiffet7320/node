var Mock = require('mockjs');
var data = Mock.mock({
  'datas|8': [{
    'id|+1': 1,
    name:'二年 @id 班',
    openDate:'@date'
  }]
}).datas
console.log(data)
const Class = require('../model/Class');
Class.bulkCreate(data)