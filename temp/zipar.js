const fs = require('fs');
const archiver = require('archiver');

var saida = fs.createWriteStream(__dirname + '/arquivo.zip');

var compactador = archiver('zip');


saida.on('close', () => {
    console.log(compactador.pointer() + ' bytes totais');
    console.log("Arquivo compactado com sucesso.")
});

//Grava os arquivos na saída
compactador.pipe(saida);

var arquivo1 = __dirname + '/subpastaParaZipar/in.txt';
compactador.append(fs.createReadStream(arquivo1), {name: 'in.txt'});

var arquivo2 = __dirname + '/subpastaParaZipar/out.txt';
compactador.append(fs.createReadStream(arquivo2), {name: 'out.txt'});

compactador.finalize();
