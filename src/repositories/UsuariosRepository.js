const pers = require('../util/persistencia');
const ARQUIVO_BD = './dados/usuarios.json';

let usuarios = [];
let proxId = 0;

pers.lerDados(ARQUIVO_BD, (dados) => {
    proxId = dados.proxId;
    usuarios = dados.usuarios;
});

const getUsuarioIdx = id => usuarios.map(l => l.id).indexOf(id);

const UsuariosRepository = {
    adicionar: (usuario) => {
        let novo = {
            id: proxId++,
            username: usuario.username,
            password: usuario.password,
            role: usuario.role
        };
        usuarios.push(novo);
        gravarDados(ARQUIVO_BD, {proxId, usuarios});
        return novo;
    },
    recuperar: id => usuarios[getUsuarioIdx(id)],
    alterar: (id, novo) => {
        usuarios[getUsuarioIdx(id)] = novo,
        novo.id = id;
        return novo;
    },
    remover: id => {
        usuarios.splice(getUsuarioIdx(id), 1);
        gravarDados();
    },
    todos: () => usuarios
};


module.exports = UsuariosRepository;

