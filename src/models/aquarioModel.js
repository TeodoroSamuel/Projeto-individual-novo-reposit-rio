var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function mostrarcurtidastan() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Stan Pines'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidabill() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Bill Cipher'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidamabel() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Mabel Pines'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidastanley() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Stanley Pines'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidapacifica() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Pacifica Northwest'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidadipper() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Dipper Pines'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidaminotauro() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Minotauro'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidarobbie() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Robbie Valentino'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidagnomo() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Gnomo'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidaunicornio() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Unicornio'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidasoos() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Soos'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidawendy() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Wendy Corduroy'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarcurtidagideon() {

  var instrucaoSql = `SELECT curtidasdopersonagem FROM personagens WHERE nome = 'Gideon Gleeful'`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
}

function mostrarscoreatual(idUsuario) {

  var instrucaoSql = `SELECT score FROM usuario WHERE idUsuario = ${idUsuario}`;
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
  
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
