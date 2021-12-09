drop database primegames;
create database primegames charset=utf8mb4;

use primegames;

CREATE TABLE usuario(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(150),
	email VARCHAR(150),
	senha VARCHAR(150),
	telefone VARCHAR(50)
);

CREATE TABLE atendente(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(150),
	email VARCHAR(150),
	senha VARCHAR(150),
	telefone VARCHAR(50)
);

CREATE TABLE administrador(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(150)
);

CREATE TABLE emprestimo(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_usuario INT,
	id_atendente INT,
	status VARCHAR(50),
    data_inicio DATE,
    data_fim DATE,
    CONSTRAINT fk_usuario_emprestimo FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    CONSTRAINT fk_atendente_emprestimo FOREIGN KEY (id_atendente) REFERENCES atendente(id)
);

CREATE TABLE jogo(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(150),
	genero VARCHAR(50),
	desenvolvedora VARCHAR(150),
	status VARCHAR(50),
	url VARCHAR(500)
);

CREATE TABLE jogo_emprestimo(
	id_jogo INT,
    id_emprestimo INT,
    CONSTRAINT fk_jogo_jogo_emprestimo FOREIGN KEY (id_jogo) REFERENCES jogo(id),
    CONSTRAINT fk_emprestimo_jogo_emprestimo FOREIGN KEY (id_emprestimo) REFERENCES emprestimo(id)
);

CREATE TABLE catalogo(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	data_criacao DATE,
    data_modificacao DATE,
    tipo VARCHAR(50)
);

CREATE TABLE catalogo_jogo(
	id_catalogo INT,
    id_jogo INT,
    CONSTRAINT fk_catalogo_catalogo_jogo FOREIGN KEY (id_catalogo) REFERENCES catalogo(id),
    CONSTRAINT fk_jogo_catalogo_jogo FOREIGN KEY (id_jogo) REFERENCES jogo(id)
);

CREATE TABLE alteracoes(
	id INT,
    id_administrador INT,
    id_catalogo INT,
    tipo VARCHAR(50),
    CONSTRAINT fk_administrador_alteracoes FOREIGN KEY (id_administrador) REFERENCES administrador(id),
    CONSTRAINT fk_catalogo_administrador FOREIGN KEY (id_catalogo) REFERENCES catalogo(id)
);

