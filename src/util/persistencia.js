const logger = require('../config/logger');
const fs = require('fs');

const lerDados = (nomeArquivo, callback) => {
    let arquivo = fs.readFile(nomeArquivo, (err, buf) => {
        if (err) {
            logger.error('Erro', err);
        } else {
            callback(JSON.parse(buf.toString()));
        }
    });
};

const gravarDados = (nomeArquivo, dados) => {
    fs.writeFile(nomeArquivo, JSON.stringify(dados), (err, data) => {
        if (err) {
            logger.error('Erro', err);
        }
    });
};

module.exports = {lerDados, gravarDados};