const http=require('http');
const { json } = require('stream/consumers');

const menProducts = [
  { id: 1, name: 'Men Product 1', category: 'Men', price: 29.99 },
  { id: 2, name: 'Men Product 2', category: 'Men', price: 39.99 },
  { id: 3, name: 'Men Product 3', category: 'Men', price: 19.99 },
  { id: 4, name: 'Men Product 4', category: 'Men', price: 49.99 },
  { id: 5, name: 'Men Product 5', category: 'Men', price: 24.99 },
  { id: 6, name: 'Men Product 6', category: 'Men', price: 34.99 },
  { id: 7, name: 'Men Product 7', category: 'Men', price: 44.99 },
  { id: 8, name: 'Men Product 8', category: 'Men', price: 14.99 },
  { id: 9, name: 'Men Product 9', category: 'Men', price: 54.99 },
  { id: 10, name: 'Men Product 10', category: 'Men', price: 39.99 }
];

const womenProducts = [
  { id: 1, name: 'Women Product 1', category: 'Women', price: 39.99 },
  { id: 2, name: 'Women Product 2', category: 'Women', price: 49.99 },
  { id: 3, name: 'Women Product 3', category: 'Women', price: 29.99 },
  { id: 4, name: 'Women Product 4', category: 'Women', price: 54.99 },
  { id: 5, name: 'Women Product 5', category: 'Women', price: 44.99 },
  { id: 6, name: 'Women Product 6', category: 'Women', price: 34.99 },
  { id: 7, name: 'Women Product 7', category: 'Women', price: 59.99 },
  { id: 8, name: 'Women Product 8', category: 'Women', price: 24.99 },
  { id: 9, name: 'Women Product 9', category: 'Women', price: 49.99 },
  { id: 10, name: 'Women Product 10', category: 'Women', price: 39.99 }
];

const server=http.createServer((req,res)=>{
    res.setHeader("Content-type","application/json");

    if(req.url==='/'){
        res.end(JSON.stringify({message:"Welcome To Men And Woman Dummy Data"}));
    }
    if(req.url==='/men'){
        res.end(JSON.stringify(menProducts));
    }
    if(req.url==='/women'){
        res.end(JSON.stringify(womenProducts));
    }
    if(req.url==='/other'){
        res.end("page not found")
    }
})

const port=5000;

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}/`);
})