//Imports
const express = require('express');
const router = express.Router();
const livrosRepo = require('../repositories/LivrosRepository');
const seguranca = require('../util/seguranca');

// Rotas abertas
router.get('/', (req, res) => 
    res.json(livrosRepo.todos())
);

router.get('/:id', (req, res) =>
    res.send(livrosRepo.recuperar(parseInt(req.params.id)))
);

// Rotas seguras
router.post('/', seguranca.autorizaJWT, (req, res) => {
    res.json(livrosRepo.adicionar(req.body));
    //send.status(200);
});
    
router.put('/:id', seguranca.autorizaJWT, (req, res) => {
    res.json(livrosRepo.alterar(parseInt(req.param.id), req.body));
    //res.status(200);
});

router.delete('/:id', seguranca.autorizaJWT, (req, res) => {
    livrosRepo.remover(parseInt(req.params.id));
    send.status(200);
});

module.exports = router;