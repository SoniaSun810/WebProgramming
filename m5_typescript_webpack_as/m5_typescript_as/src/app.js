/*  
reference: 
Rendering HTML pages as an http server response Using Node.js
    https://www.section.io/engineering-education/rendering-html-pages-as-a-http-server-response-using-node-js/
    https://codeforgeek.com/render-html-file-expressjs/
    https://www.tutorialspoint.com/styling-html-pages-in-node-js
    https://github.com/uisproject/tutorial_nodejs_expressjs_by_johnsmilga/blob/master/02-express-tutorial/final/02-http-app.js
*/

import { createServer } from 'http'
import { readFileSync } from 'fs'


// get all files
const homePage = readFileSync('./index.html')
const bookPage = readFileSync('./book.html')
const homeStyles = readFileSync('./main.css')
const Scripts = readFileSync('./script.js')
const Module = readFileSync('./module.js')
// const homeImage = readFileSync('./navbar-app/logo.svg')
// const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)

  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/book') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(bookPage)
    res.end()
  }

  // styles
  else if (url === '/main.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }

  // javascript script
  else if (url == '/script.js'){
    res.writeHead(200, { 'content-type' : 'application/javascript'})
    res.write(Scripts)
    res.end()
  }

  // javascript module
  else if (url == '/module.js'){
    res.writeHead(200, { 'content-type' : 'application/javascript'})
    res.write(Module)
    res.end()
  }

  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(3000)

