var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

router.get("/:empresaId", function (req, res) {
  aquarioController.buscarAquariosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  aquarioController.cadastrar(req, res);
});

router.post("/mostrarcurtidastan", function (req,res){
  aquarioController.mostrarcurtidastan(req,res);
});

router.post("/mostrarcurtidabill", function (req,res){
  aquarioController.mostrarcurtidabill(req,res);
});

router.post("/mostrarcurtidamabel", function (req,res){
  aquarioController.mostrarcurtidamabel(req,res);
});

router.post("/mostrarcurtidastanley", function (req,res){
  aquarioController.mostrarcurtidastanley(req,res);
});

router.post("/mostrarcurtidapacifica", function (req,res){
  aquarioController.mostrarcurtidapacifica(req,res);
});

router.post("/mostrarcurtidadipper", function (req,res){
  aquarioController.mostrarcurtidadipper(req,res);
});

router.post("/mostrarcurtidaminotauro", function (req,res){
  aquarioController.mostrarcurtidaminotauro(req,res);
});

router.post("/mostrarcurtidarobbie", function (req,res){
  aquarioController.mostrarcurtidarobbie(req,res);
});

router.post("/mostrarcurtidagnomo", function (req,res){
  aquarioController.mostrarcurtidagnomo(req,res);
});

router.post("/mostrarcurtidaunicornio", function (req,res){
  aquarioController.mostrarcurtidaunicornio(req,res);
});

router.post("/mostrarcurtidasoos", function (req,res){
  aquarioController.mostrarcurtidasoos(req,res);
});

router.post("/mostrarcurtidawendy", function (req,res){
  aquarioController.mostrarcurtidawendy(req,res);
});

router.post("/mostrarcurtidagideon", function (req,res){
  aquarioController.mostrarcurtidagideon(req,res);
});

router.post("/mostrarscoreatual", function (req,res){
  aquarioController.mostrarscoreatual(req,res);
});
module.exports = router;