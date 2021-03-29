const mysql = require('mysql2/promise');
// 创建一个数据库连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test',
  multipleStatements: true,
});


async function test(id) {
  const sql = `SELECT * FROM \`company\` where id=?`
  const [res] = await pool.execute(sql,[id])
  console.log(res)
}

test(2)