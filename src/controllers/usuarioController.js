var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    res.json({
                        idUsuario: resultadoAutenticar[0].idUsuario,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome
                    });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var moedas = req.body.moedasServer;
    var score = req.body.scoreServer;
    var idUsuario = req.body.idusuarioServer;
    var botaoinicialapertado = req.body.botaoinicialapertadoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, moedas, score, idUsuario, botaoinicialapertado)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function acrescentarmoedasescore(req, res) {
    var moedasacrescentadas = req.body.moedascoletadasServer;
    console.log(moedasacrescentadas)
    var idUsuario = req.body.idUsuario;
    var scoreacrescentado = req.body.scoreServer;
    usuarioModel.acrescentarmoedasescore(moedasacrescentadas, idUsuario, scoreacrescentado);
}

function iniciaraventura(req, res){
    var botaoapertado = req.body.botaoapertadoServer;
    var idUsuario = req.body.idUsuario
    usuarioModel.iniciaraventura(botaoapertado, idUsuario);
}

function mostrarmoedaatual(req, res) {
    var idUsuario = req.body.idUsuario;
    console.log(idUsuario)
    usuarioModel.mostrarmoedaatual(idUsuario).then((resposta) => {
        console.log(resposta[0].moedas)
        res.json({
            moeda: resposta[0].moedas,
        });
    });
}

function verificarcompra(req,res){
    var idusuario = req.body.idusuarioServer;
    var idpersonagem = req.body.idpersonagemServer;
    usuarioModel.verificarcompra(idusuario, idpersonagem).then((resposta) =>{
        res.json({
            personagemdesbloqueado: resposta[0].desbloqueado        
        });
    });
}

function criardados(req,res){
    var idUsuario = req.body.idUsuario
    usuarioModel.criardados(idUsuario)
}

// Mabel

function acrescentarcurtidamabel(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidamabel(curtida);
}

function retirarcurtidamabel(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidamabel(curtida);
}

function acrescentartentativamabelcoin(req, res) {
    var moedasacrescentadas = req.body.moedascoletadasServer;
    console.log(moedasacrescentadas)
    var idUsuario = req.body.idUsuario;
    var scoreacrescentado = req.body.scoreServer;
    usuarioModel.acrescentartentativamabelcoin(moedasacrescentadas, idUsuario, scoreacrescentado);
}

// Dipper

function acrescentarcurtidadipper(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidadipper(curtida);
}

function retirarcurtidadipper(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidadipper(curtida);
}

// Bill

function acrescentarcurtidabill(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidabill(curtida);
}

function retirarcurtidabill(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidabill(curtida);
}

function descobrirmoedasnecessariasbill(req, res) {
    var idpersonagem = req.body.idpersonagemServer;
    usuarioModel.descobrirmoedasnecessariasbill(idpersonagem).then((resposta) => {
        console.log(resposta[0].valordopersonagem)
        res.json({
            valordopersonagem: resposta[0].valordopersonagem,
        });
    });
}

function atualizarcomprabill(req, res) {
    var idpersonagem = req.body.idpersonagemServer;
    var idUsuario = req.body.idUsuarioServer;
    usuarioModel.atualizarcomprabill(idpersonagem, idUsuario)
}


function atualizarmoedasdousuario(req, res) {
    var qtdmoedasnecessarias = req.body.qtdmoedasnecessariasServer;
    var idUsuario = req.body.idUsuarioServer;
    usuarioModel.atualizarmoedasdousuario(qtdmoedasnecessarias, idUsuario)
}

// Gideon

function acrescentarcurtidagideon(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidagideon(curtida);
}

function retirarcurtidagideon(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidagideon(curtida);
}

// Gnomo

function acrescentarcurtidagnomo(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidagnomo(curtida);
}

function retirarcurtidagnomo(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidagnomo(curtida);
}

// Minotauro

function acrescentarcurtidaminotauro(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidaminotauro(curtida);
}

function retirarcurtidaminotauro(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidaminotauro(curtida);
}

// Pacifica

function acrescentarcurtidapacifica(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidapacifica(curtida);
}

function retirarcurtidapacifica(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidapacifica(curtida);
}

// Robbie

function acrescentarcurtidarobbie(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidarobbie(curtida);
}

function retirarcurtidarobbie(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidarobbie(curtida);
}

// Soos

function acrescentarcurtidasoos(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidasoos(curtida);
}

function retirarcurtidasoos(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidasoos(curtida);
}

// Stan

function acrescentarcurtidastan(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidastan(curtida);
}

function retirarcurtidastan(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidastan(curtida);
}

// Stanley

function acrescentarcurtidastanley(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidastanley(curtida);
}

function retirarcurtidastanley(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidastanley(curtida);
}

// Unicornio

function acrescentarcurtidaunicornio(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidaunicornio(curtida);
}

function retirarcurtidaunicornio(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidaunicornio(curtida);
}

// Wendy

function acrescentarcurtidawendy(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.acrescentarcurtidawendy(curtida);
}

function retirarcurtidawendy(req, res) {
    var curtida = req.body.curtidasServer;
    usuarioModel.retirarcurtidawendy(curtida);
}
module.exports = {
    autenticar,
    cadastrar,
    acrescentarmoedasescore,
    iniciaraventura,
    mostrarmoedaatual,
    verificarcompra,
    criardados,
    atualizarmoedasdousuario,

    acrescentarcurtidamabel,
    retirarcurtidamabel,
    acrescentartentativamabelcoin,

    retirarcurtidadipper,
    acrescentarcurtidadipper,

    retirarcurtidabill,
    acrescentarcurtidabill,
    descobrirmoedasnecessariasbill,
    atualizarcomprabill,

    retirarcurtidagideon,
    acrescentarcurtidagideon,

    retirarcurtidagnomo,
    acrescentarcurtidagnomo,

    retirarcurtidaminotauro,
    acrescentarcurtidaminotauro,


    retirarcurtidapacifica,
    acrescentarcurtidapacifica,

    retirarcurtidarobbie,
    acrescentarcurtidarobbie,

    retirarcurtidasoos,
    acrescentarcurtidasoos,

    retirarcurtidastan,
    acrescentarcurtidastan,

    retirarcurtidastanley,
    acrescentarcurtidastanley,

    retirarcurtidaunicornio,
    acrescentarcurtidaunicornio,

    retirarcurtidawendy,
    acrescentarcurtidawendy
}

