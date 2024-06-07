var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, moedas, score) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, moedas, score) VALUES ('${nome}', '${email}', '${senha}', ${moedas}, ${score});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function pegarultimovalor(idUsuario) {
    var instrucaoSql = `
    SELECT moedas FROM usuario WHERE idUsuario = ${idUsuario};
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimaMoeda = database.executar(instrucaoSql);
    return ultimaMoeda;
}

function pegarultimoscore(idUsuario) {
    var instrucaoSql = `
    SELECT score FROM usuario WHERE idUsuario = ${idUsuario};
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimoscore = database.executar(instrucaoSql);
    return ultimoscore;
}

function acrescentarmoedasescore(moedasacrescentadas, idUsuario, scoreacrescentado) {
    var instrucaoSql = `
        INSERT INTO tentativasJoguinho value 
        (default, 1, ${idUsuario}, now(), ${moedasacrescentadas}, ${scoreacrescentado});
        `;
    return database.executar(instrucaoSql);
}

function mostrarmoedaatual(idUsuario) {

    var instrucaoSql = `SELECT moedas FROM usuario WHERE idUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

// Mabel Pines

function pegarultimacurtidamabel() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Mabel pines';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidamabel(curtida) {
    pegarultimacurtidamabel().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Mabel Pines';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidamabel(curtida) {
    pegarultimacurtidamabel().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Mabel Pines';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function acrescentartentativamabelcoin(moedasacrescentadas, idUsuario, scoreacrescentado) {
    console.log(moedasacrescentadas)
    pegarultimovalor(idUsuario).then((resposta) => {
        console.log(resposta[0].moedas)

        var instrucaoSql = `
        UPDATE usuario SET moedas = '${moedasacrescentadas + resposta[0].moedas}'
        where idUsuario = ${idUsuario};
        `;
        return database.executar(instrucaoSql);
    });
    console.log(scoreacrescentado)
    pegarultimoscore(idUsuario).then((resposta) => {
        console.log(resposta[0].score)

        var instrucaoSql = `
        UPDATE usuario SET score = '${scoreacrescentado + resposta[0].score}'
        where idUsuario = ${idUsuario};
        `;
        return database.executar(instrucaoSql);
    });
}

// Dipper Pines

function pegarultimacurtidadipper() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Dipper pines';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidadipper(curtida) {
    pegarultimacurtidadipper().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Dipper Pines';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidadipper(curtida) {
    pegarultimacurtidadipper().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Dipper Pines';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

// Bill

function pegarultimacurtidabill() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Bill Cipher';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidabill(curtida) {
    pegarultimacurtidabill().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Bill Cipher';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidabill(curtida) {
    pegarultimacurtidabill().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Bill Cipher';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

// Gideon

function pegarultimacurtidagideon() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Gideon Gleeful';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidagideon(curtida) {
    pegarultimacurtidagideon().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Gideon Gleeful';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidagideon(curtida) {
    pegarultimacurtidagideon().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Gideon Gleeful';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

// Gnomo

function pegarultimacurtidagnomo() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Gnomo';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidagnomo(curtida) {
    pegarultimacurtidagnomo().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Gnomo';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidagnomo(curtida) {
    pegarultimacurtidagnomo().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Gnomo';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

// Minotauro

function pegarultimacurtidaminotauro() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Minotauro';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidaminotauro(curtida) {
    pegarultimacurtidaminotauro().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Minotauro';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidaminotauro(curtida) {
    pegarultimacurtidaminotauro().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Minotauro';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

// Pacifica

function pegarultimacurtidapacifica() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Pacifica Northwest';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidapacifica(curtida) {
    pegarultimacurtidapacifica().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Pacifica Northwest';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidapacifica(curtida) {
    pegarultimacurtidapacifica().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Pacifica Northwest';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

// Robbie

function pegarultimacurtidarobbie() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Robbie Valentino';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidarobbie(curtida) {
    pegarultimacurtidarobbie().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Robbie Valentino';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidarobbie(curtida) {
    pegarultimacurtidarobbie().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Robbie Valentino';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

// Soos

function pegarultimacurtidasoos() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Soos';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidasoos(curtida) {
    pegarultimacurtidasoos().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Soos';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidasoos(curtida) {
    pegarultimacurtidasoos().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Soos';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

// Stan

function pegarultimacurtidastan() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Stan Pines';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidastan(curtida) {
    pegarultimacurtidastan().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Stan Pines';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidastan(curtida) {
    pegarultimacurtidastan().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Stan Pines';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

// Stanley

function pegarultimacurtidastanley() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Stanley Pines';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidastanley(curtida) {
    pegarultimacurtidastanley().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Stanley Pines';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidastanley(curtida) {
    pegarultimacurtidastanley().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Stanley Pines';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

// Unicornio

function pegarultimacurtidaunicornio() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Unicornio';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidaunicornio(curtida) {
    pegarultimacurtidaunicornio().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Unicornio';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidaunicornio(curtida) {
    pegarultimacurtidaunicornio().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Unicornio';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

// Wendy

function pegarultimacurtidawendy() {
    var instrucaoSql = `
    SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Wendy Corduroy';
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    var ultimacurtida = database.executar(instrucaoSql);
    return ultimacurtida;
}

function acrescentarcurtidawendy(curtida) {
    pegarultimacurtidawendy().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${curtida + resposta[0].curtidasdopersonagem}
        where nome = 'Wendy Corduroy';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}

function retirarcurtidawendy(curtida) {
    pegarultimacurtidawendy().then((resposta) => {
        var instrucaoSql = `
        UPDATE personagens SET curtidasdopersonagem = ${resposta[0].curtidasdopersonagem - curtida}
        where nome = 'Wendy Corduroy';
        `;
        return database.executar(instrucaoSql);
        ;
    });
}


module.exports = {
    autenticar,
    cadastrar,

    acrescentarmoedasescore,
    pegarultimovalor,
    pegarultimoscore,
    mostrarmoedaatual,

    pegarultimacurtidamabel,
    acrescentarcurtidamabel,
    retirarcurtidamabel,
    acrescentartentativamabelcoin,

    pegarultimacurtidadipper,
    retirarcurtidadipper,
    acrescentarcurtidadipper,

    pegarultimacurtidabill,
    retirarcurtidabill,
    acrescentarcurtidabill,

    pegarultimacurtidagideon,
    retirarcurtidagideon,
    acrescentarcurtidagideon,

    pegarultimacurtidagnomo,
    retirarcurtidagnomo,
    acrescentarcurtidagnomo,

    pegarultimacurtidaminotauro,
    retirarcurtidaminotauro,
    acrescentarcurtidaminotauro,

    pegarultimacurtidapacifica,
    retirarcurtidapacifica,
    acrescentarcurtidapacifica,

    pegarultimacurtidarobbie,
    retirarcurtidarobbie,
    acrescentarcurtidarobbie,

    pegarultimacurtidasoos,
    retirarcurtidasoos,
    acrescentarcurtidasoos,

    pegarultimacurtidastan,
    retirarcurtidastan,
    acrescentarcurtidastan,

    pegarultimacurtidastanley,
    retirarcurtidastanley,
    acrescentarcurtidastanley,

    pegarultimacurtidaunicornio,
    retirarcurtidaunicornio,
    acrescentarcurtidaunicornio,

    pegarultimacurtidawendy,
    retirarcurtidawendy,
    acrescentarcurtidawendy
};