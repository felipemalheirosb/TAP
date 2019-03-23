//Imports
const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const livrosRepo = require('./repositories/LivrosRepository');
const fs = require('fs')
const path = require('path')

//Constantes
const PORTA = 3000;

var logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

//Configuração do servidor
app.set('view engine', 'ejs');

//Configuração de Middleware
app.use(morgan('combined', {stream: logStream}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public')); 

//As rotas são satisfeitas na ordem em que são declaradas
app.get('/', (req, res) => {
    let livros = livrosRepo.todos();
    res.render('index', {livros: livros});
});

//Rotas para os recursos
app.use('/auth', require('./controllers/autorizacao'));
app.use('/usuarios', require('./controllers/usuarios'));
app.use('/livros', require('./controllers/livros'));
//Caso as outras rotas não funcionem
app.get('*', (req, res) => res.send('404'));

//Rotas da aplicação
app.get('/', (req, res) => {
    res.send('Funciona !');
});

//Iniciando oservidor
app.listen(PORTA, () => {
    console.log('Aplicacao no ar em http://localhost:' + PORTA);
});

