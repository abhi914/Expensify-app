const Path = require('path');
const express = require('express');
const app = express();
const publicPath = Path.join(__dirname,"..","public");

const port = process.env.port || 3000 ;

app.use(express.static(publicPath));


app.get('*', (req,res) => {

    res.sendFile(Path.join(publicPath,'index.html'));
});

app.listen(port, () => {
    console.log('Server started');
});