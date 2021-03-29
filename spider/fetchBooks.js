// 抓取豆瓣读书中的数据信息
const axios = require('axios').default;
const cheerio = require('cheerio');
const Book = require('../model/Book')

// 得到抓取到的HTML
async function getBooksHTML(url) {
  const res = await axios.get(url);
  return res.data
}
// 拿到所有数据的详情页链接
async function getBooksLinkList() {
  const html = await getBooksHTML('https://book.douban.com/tag/%E7%AB%A5%E8%AF%9D')
  const $ = cheerio.load(html);
  const aList = $('#subject_list .subject-list .subject-item .pic a')
  return links = aList.map((i, ele) => {
    const href = ele.attribs['href'];
    return href
  }).get()
}

// 根据详情页地址，得到该书籍的详情信息
async function getBooksDetail(url) {
  const res = await getBooksHTML(url)
  const $ = cheerio.load(res);
  const name = $('h1 span').text().trim()
  const imgurl = $('#mainpic img')[0].attribs['src']
  const spans = $('#info .pl')
  const authorSpan = spans.filter((i,ele)=>{
    return $(ele).text().includes('作者')
  })
  const author = authorSpan.next('a').text().trim();
  const publishDateSpan = spans.filter((i,ele)=>{
    return $(ele).text().includes('出版年')
  })
  const publishDate = publishDateSpan[0].nextSibling.nodeValue.trim();
  return {
    name,
    imgurl,
    author,
    publishDate
  }
}
getBooksDetail('https://book.douban.com/subject/2160226/')

// 获取所有书籍的信息
async function getAllBooksData(){
  const links = await getBooksLinkList()
  const promises = links.map((ele,i)=>{
    return getBooksDetail(ele)
  })
  return Promise.all(promises)
}


// 保存到数据库
async function saveToDB(){
  const booksData = await getAllBooksData()
  Book.bulkCreate(booksData)
  console.log('数据抓取完毕并保存至数据库表Book')
}
saveToDB()
