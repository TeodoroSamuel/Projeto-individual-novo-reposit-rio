Create database ProjetoIndividual;
Use ProjetoIndividual;

Create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
Email varchar(90),
Senha varchar(40)
);

create table personagens (
idPersonagem int primary key auto_increment,
nome varchar(45),
categoria varchar(12),
habilidade varchar(50)
);

create table personagensdesbloqueados (
idPersonagendesbloqueado int,
fkUsuario int,
fkPersonagem int,
constraint fkTriplaPersonagenDesbloqueado primary key (idPersonagendesbloqueado, fkUsuario, fkPersonagem),

datadodesbloqueio datetime,

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
score char(5),
Moedasadquiridas char(2),

constraint fkTentativadousuario foreign key (fkUsuario)
references Usuario (idUsuario),

constraint fkJogoJogado foreign key (fkJoguinhos)
references Joguinho (idJoguinho)
);

insert into usuario value
(default, 'Fernanda Caramico', 'FernandaCaramico@sptech.school', 'FernandaTheBest123'),
(default, 'Jean Charles', 'JeanCharles@sptech.school', 'JeanHelp123');

-- JeanCharles@sptech.school
-- JeanHelp123

insert into personagens value
(default, 'Dipper Pines', 'Comum', 'Estinto Aguçado'),
(default, 'Mabel Pines', 'Comum', 'Otimismo'),
(default, 'Stanley Pines', 'Raro', 'Furto'),
(default, 'Soos', 'Raro', 'Faz tudo'),
(default, 'Wendy Corduroy', 'Raro', 'Machado Poderoso'),
(default, 'Pacifica Northwest', 'Épico', 'Manipulação'),
(default, 'Minotauro', 'Épico', 'Força de 10 homens'),
(default, 'Gnomo', 'Épico', 'Modo Tanke de guerra'),
(default, 'Robbie Valentino', 'Sombrio', 'Controle mental pela musica'),
(default, 'Gideon Gleeful', 'Sombrio', 'Telepatia'),
(default, 'Unicornio', 'Lendario', 'Crina ant-Magia sombria'),
(default, 'Stan Pines', 'Lendario', 'Inteligencia Inimaginavel'),
(default, 'Bill Cipher', 'Onipotente', 'Poder Onipresente');

Alter table personagens modify habilidade varchar(50);

insert into joguinho value
(default, 2, 'Mabel Coin');

insert into tentativasJoguinho value
(default, 1, 2, now(), 4, 4),
(default, 1, 2, now(),5, 5),
(default, 1, 1, now(),3, 3);

select * from tentativasJoguinho;

select * from tentativasJoguinho join usuario
on fkUsuario = idUsuario;

desc usuario;

select * from usuario;