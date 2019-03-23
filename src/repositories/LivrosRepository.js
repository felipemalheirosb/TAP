const pers = require('../util/persistencia');
const ARQUIVO_BD = './dados/livros.json';

let livros = [];
let proxId = 0;

pers.lerDados(ARQUIVO_BD, (dados) => {
    proxId = dados.proxId;
    livros = dados.livros;
});

const getLivroIdx = id => livros.map(l => l.id).indexOf(id);

const LivrosRepository = {
    adicionar: (livro) => {
        let novo = {
            id: proxId++,
            titulo: livro.titulo,
            autor: livro.autor
        };
        livros.push(novo);
        gravarDados(ARQUIVO_BD, {proxId, livros});
        return novo;
    },
    recuperar: id => livros[getLivroIdx(id)],
    alterar: (id, novo) => {
        livros[getLivroIdx(id)] = novo,
        novo.id = id;
        return novo;
    },
    remover: id => {
        livros.splice(getLivroIdx(id), 1);
        gravarDados();
    },
    todos: () => livros
};


module.exports = LivrosRepository;

