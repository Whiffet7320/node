var Mock = require('mockjs');
var data = Mock.mock({
  'datas|50': [{
    'id|+1': 1,
    name: "@name",
    birthdady:'@date',
    'sex|1-2':true,
    mobile:/1\d{10}/,
    'ClassId|1-8':0,
  }]
}).datas
console.log(data)
const Student = require('../model/Student');
Student.bulkCreate(data)