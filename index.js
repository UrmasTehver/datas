const express = require('express'); //Impordime express serveri mooduli
const app = express(); // Teeme rakenduse
const path = require('path'); // Kaustade "liitmiseks"

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs'); 


const data = require('./datas.json');
arr = Object.values(data);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('*', (req, res) => {
    res.redirect('/');
});

// Serveri käivitamine pordil 3000 (üle 1024)
app.listen(3000, () => {
    console.log("Kuulan porti 3000");    
});

