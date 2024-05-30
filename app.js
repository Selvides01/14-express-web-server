const express = require('express');
const { default: test } = require('node:test');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send('<h1>Hello World!</h1>')
    // res.json({
    //     nama: 'Selvi',
    //     email: 'selvi@gmail.com',
    //     noHP: '085923230452',
    // })
    res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('Ini Adalah Halaman About')
    res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    // res.send('Ini Adalah Halaman contact')
    res.sendFile('./contact.html', { root: __dirname });
});

app.get('/product/:id/category', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`);
});


app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});















// const http = require('http');
// const fs = require('fs');

// const port = 3000;

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('Error: file not found');
//         } else {
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data);
//         }
//         res.end();
//     });
// };

// http.createServer((req, res) => {
//     const url = req.url;

//     switch (url) {
//         case '/about':
//             renderHTML('./about.html', res);
//             break;
//         case '/contact':
//             renderHTML('./contact.html', res);
//             break;
//         default:
//             renderHTML('./index.html', res);
//             break;
//     }
// }).listen(port, () => {
//     console.log(`Server is listening on port ${port}..`);
// });
