const express = require('express');

const server = express();
const PORT = 8000;
const stations = [ {page: "home", number: 1}, {page: "main", number: 2}, {page: "home2", number: 3}, {page: "main2", number:4} ] ;

server.get('/catalog', (req,res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json( stations );
});

server.get('/catalog/:id', (req,res) => {
    let station = stations.find( el => el.number === parseInt(req.params.id) );
    if (!station) station = {};
    
    res.set('Access-Control-Allow-Origin', '*');
    res.json( station );
});

server.listen( PORT, () => {
    console.log(`Server is running at port:${PORT}`);
});