const fs = require('fs')
const unzip = require('unzip')

var destino = unzip.Extract({ path: 'subpasta' });
var descompactador = fs.createReadStream('arquivoParaExtrair.zip');

destino.on('close', () => {
    console.log("Arquivo descompactado com sucesso.")
});

descompactador.pipe(destino);



