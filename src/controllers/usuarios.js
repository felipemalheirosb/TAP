//Imports
const express = require('express');
const router = express.Router();
const usuariosRepo = require('../repositories/UsuariosRepository');
const seguranca = require('../util/seguranca');

// Rotas abertas
router.get('/', (req, res) => 
    res.json(usuariosRepo.todos())
);

router.get('/:id', (req, res) =>
    res.send(usuariosRepo.recuperar(parseInt(req.params.id)))
);

// Rotas seguras
router.post('/', seguranca.autorizaJWT, (req, res) => {
    res.json(usuariosRepo.adicionar(req.body));
    //send.status(200);
});
    
router.put('/:id', seguranca.autorizaJWT, (req, res) => {
    res.json(usuariosRepo.alterar(parseInt(req.param.id), req.body));
    //res.status(200);
});

router.delete('/:id', seguranca.autorizaJWT, (req, res) => {
    usuariosRepo.remover(parseInt(req.params.id));
    send.status(200);
});

module.exports = router;