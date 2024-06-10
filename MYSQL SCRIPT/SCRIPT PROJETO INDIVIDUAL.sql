Create database ProjetoIndividual;
Use ProjetoIndividual;

Create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
Email varchar(90),
Senha varchar(40),
moedas int,
score int
);
select * from usuario;

create table personagens (
idPersonagem int primary key auto_increment,
nome varchar(45),
categoria varchar(12),
habilidade varchar(50),
curtidasdopersonagem int,
valordopersonagem int
);

create table personagensdesbloqueados (
idPersonagendesbloqueado int auto_increment,
fkUsuario int,
fkPersonagem int,
constraint fkTriplaPersonagenDesbloqueado primary key (idPersonagendesbloqueado, fkUsuario, fkPersonagem),

datadodesbloqueio datetime,
desbloqueado int,

constraint fkPersonagendesbloqueadopelousuario foreign key (fkUsuario)
references usuario (idUsuario),

constraint fkDesbloqueandoPersonagem foreign key (fkPersonagem)
references personagens (idPersonagem)
);

Create table joguinho (
idJoguinho int auto_increment,
fkPersonagem int,
constraint pkDuplaPersonagens primary key (idJoguinho, fkPersonagem),

nomedojoguinho varchar(50),

constraint fkJoguinhodoPersonagem foreign key (fkPersonagem)
references personagens(idPersonagem)
);

create table tentativasJoguinho(
idTentativa int auto_increment,
fkJoguinhos int,
fkUsuario int,
constraint pktriplaprimary primary key(idTentativa, fkJoguinhos, fkUsuario),
DatadaTentativa datetime,
score int,
Moedasadquiridas int,

constraint fkTentativadousuario foreign key (fkUsuario)
references Usuario (idUsuario),

constraint fkJogoJogado foreign key (fkJoguinhos)
references joguinho (idJoguinho)
);

insert into usuario values
(default, 'Fernanda Caramico', 'FernandaCaramico@sptech.school', 'FernandaTheBest123', 0, 0),
(default, 'Jean Charles', 'JeanCharles@sptech.school', 'JeanHelp123', 0, 0);

-- JeanCharles@sptech.school
-- JeanHelp123

insert into personagens values
(default, 'Dipper Pines', 'Comum', 'Estinto Aguçado', 498, 0),
(default, 'Mabel Pines', 'Comum', 'Otimismo', 490, 0),
(default, 'Stanley Pines', 'Raro', 'Furto', 559, 200),
(default, 'Soos', 'Raro', 'Faz tudo', 480, 150),
(default, 'Wendy Corduroy', 'Raro', 'Machado Poderoso', 600, 250),
(default, 'Pacifica Northwest', 'Épico', 'Manipulação', 453, 300),
(default, 'Minotauro', 'Épico', 'Força de 10 homens', 210, 300),
(default, 'Gnomo', 'Épico', 'Modo Tanke de guerra', 219, 150),
(default, 'Robbie Valentino', 'Sombrio', 'Controle mental pela musica', 310, 300),
(default, 'Gideon Gleeful', 'Sombrio', 'Telepatia', 379, 400),
(default, 'Unicornio', 'Lendario', 'Crina ant-Magia sombria', 190, 500),
(default, 'Stan Pines', 'Lendario', 'Inteligencia Inimaginavel', 658, 600),
(default, 'Bill Cipher', 'Onipotente', 'Poder Onipresente', 799, 1000);

Alter table personagens modify habilidade varchar(50);

insert into joguinho values
(default, 2, 'Mabel Coin');

insert into tentativasJoguinho values
(default, 1, 2, now(),3, 3);

select * from tentativasJoguinho;

select * from personagensdesbloqueados;
select * from tentativasJoguinho join usuario
on fkUsuario = idUsuario;

desc usuario;

select * from usuario;

SELECT * from personagens;