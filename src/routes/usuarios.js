var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/acrescentarmoedasescore", function (req,res){
    usuarioController.acrescentarmoedasescore(req,res);
});

router.post("/mostrarmoedaatual", function (req,res){
    usuarioController.mostrarmoedaatual(req,res);
});

// Mabel

router.post("/acrescentarcurtidamabel", function (req,res){
    usuarioController.acrescentarcurtidamabel(req,res);
});

router.post("/retirarcurtidamabel", function (req,res){
    usuarioController.retirarcurtidamabel(req,res);
});

router.post("/acrescentartentativamabelcoin", function(req,res){
    usuarioController.acrescentartentativamabelcoin(req,res)
}

)

// Dipper

router.post("/acrescentarcurtidadipper", function (req,res){
    usuarioController.acrescentarcurtidadipper(req,res);
});

router.post("/retirarcurtidadipper", function (req,res){
    usuarioController.retirarcurtidadipper(req,res);
});

// Bill

router.post("/acrescentarcurtidabill", function (req,res){
    usuarioController.acrescentarcurtidabill(req,res);
});

router.post("/retirarcurtidabill", function (req,res){
    usuarioController.retirarcurtidabill(req,res);
});

// Gideon 

router.post("/acrescentarcurtidagideon", function (req,res){
    usuarioController.acrescentarcurtidagideon(req,res);
});

router.post("/retirarcurtidagideon", function (req,res){
    usuarioController.retirarcurtidagideon(req,res);
});

// Gnomo

router.post("/acrescentarcurtidagnomo", function (req,res){
    usuarioController.acrescentarcurtidagnomo(req,res);
});

router.post("/retirarcurtidagnomo", function (req,res){
    usuarioController.retirarcurtidagnomo(req,res);
});

// Minotauro

router.post("/acrescentarcurtidaminotauro", function (req,res){
    usuarioController.acrescentarcurtidaminotauro(req,res);
});

router.post("/retirarcurtidaminotauro", function (req,res){
    usuarioController.retirarcurtidaminotauro(req,res);
});

// Pacifica

router.post("/acrescentarcurtidapacifica", function (req,res){
    usuarioController.acrescentarcurtidapacifica(req,res);
});

router.post("/retirarcurtidapacifica", function (req,res){
    usuarioController.retirarcurtidapacifica(req,res);
});

// Pacifica

router.post("/acrescentarcurtidarobbie", function (req,res){
    usuarioController.acrescentarcurtidarobbie(req,res);
});

router.post("/retirarcurtidarobbie", function (req,res){
    usuarioController.retirarcurtidarobbie(req,res);
});

// Soos

router.post("/acrescentarcurtidasoos", function (req,res){
    usuarioController.acrescentarcurtidasoos(req,res);
});

router.post("/retirarcurtidasoos", function (req,res){
    usuarioController.retirarcurtidasoos(req,res);
});

// Stan

router.post("/acrescentarcurtidastan", function (req,res){
    usuarioController.acrescentarcurtidastan(req,res);
});

router.post("/retirarcurtidastan", function (req,res){
    usuarioController.retirarcurtidastan(req,res);
});

// Stanley

router.post("/acrescentarcurtidastanley", function (req,res){
    usuarioController.acrescentarcurtidastanley(req,res);
});

router.post("/retirarcurtidastanley", function (req,res){
    usuarioController.retirarcurtidastanley(req,res);
});

// Unicornio

router.post("/acrescentarcurtidaunicornio", function (req,res){
    usuarioController.acrescentarcurtidaunicornio(req,res);
});

router.post("/retirarcurtidaunicornio", function (req,res){
    usuarioController.retirarcurtidaunicornio(req,res);
});

// Wendy

router.post("/acrescentarcurtidawendy", function (req,res){
    usuarioController.acrescentarcurtidawendy(req,res);
});

router.post("/retirarcurtidawendy", function (req,res){
    usuarioController.retirarcurtidawendy(req,res);
});

module.exports = router;