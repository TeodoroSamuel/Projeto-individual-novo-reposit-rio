var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var descricao = req.body.descricao;
  var idUsuario = req.body.idUsuario;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    aquarioModel.cadastrar(descricao, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function mostrarcurtidastan(req, res) {
  aquarioModel.mostrarcurtidastan().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidabill(req, res) {
  aquarioModel.mostrarcurtidabill().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidamabel(req, res) {
  aquarioModel.mostrarcurtidamabel().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidastanley(req, res) {
  aquarioModel.mostrarcurtidastanley().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidapacifica(req, res) {
  aquarioModel.mostrarcurtidapacifica().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidadipper(req, res) {
  aquarioModel.mostrarcurtidadipper().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidaminotauro(req, res) {
  aquarioModel.mostrarcurtidaminotauro().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidarobbie(req, res) {
  aquarioModel.mostrarcurtidarobbie().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidagnomo(req, res) {
  aquarioModel.mostrarcurtidagnomo().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidaunicornio(req, res) {
  aquarioModel.mostrarcurtidaunicornio().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidasoos(req, res) {
  aquarioModel.mostrarcurtidasoos().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidawendy(req, res) {
  aquarioModel.mostrarcurtidawendy().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarcurtidagideon(req, res) {
  aquarioModel.mostrarcurtidagideon().then((resposta) => {
    console.log(resposta[0].curtidasdopersonagem)
    res.json({
      curtidas: resposta[0].curtidasdopersonagem,
    });
  });
}

function mostrarscoreatual(req, res) {
  var idUsuario = req.body.idUsuario;
  console.log(idUsuario)
  aquarioModel.mostrarscoreatual(idUsuario).then((resposta) => {
    console.log(resposta[0].score)
    res.json({
      scores: resposta[0].score,
    });
  });
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,

  mostrarcurtidastan,
  mostrarcurtidabill,
  mostrarcurtidamabel,
  mostrarcurtidastanley,
  mostrarcurtidapacifica,
  mostrarcurtidadipper,
  mostrarcurtidaminotauro,
  mostrarcurtidarobbie,
  mostrarcurtidagnomo,
  mostrarcurtidaunicornio,
  mostrarcurtidasoos,
  mostrarcurtidawendy,
  mostrarcurtidagideon,
  mostrarscoreatual
}