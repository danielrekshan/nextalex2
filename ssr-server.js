const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()
    
  

  server.get('/read/:id', (req, res) => {
    // Dev notes: here is proof of concept for getting hostname into the app
    let hostname = "TESTING"
    if (req.subdomains) {
      hostname = req.subdomains[0];
    }

    const actualPage = '/reading'
    const queryParams = { 
      id: req.params.id,
      hostname: hostname
    } 
    app.render(req, res, actualPage, queryParams)
  }) 
  server.get('*', (req, res) => {
    return handle(req, res)
  })
      
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})