CREATE DATABASE `restaurante` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE `endereco` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `logradouro` varchar(100) NOT NULL,
  `numero` int(11) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `cidade` varchar(50) NOT NULL,
  `uf` varchar(2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idEndereco_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `pessoa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `data_nascimento` varchar(25) NOT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  `rg` varchar(10) DEFAULT NULL,
  `telefone1` varchar(11) NOT NULL,
  `telefone2` varchar(11) DEFAULT NULL,
  `id_endereco` int(11) DEFAULT NULL,
  `estado_civil` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idPessoa_UNIQUE` (`id`),
  KEY `id_endereco_fk_idx` (`id_endereco`),
  CONSTRAINT `id_endereco_fk` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pessoa` int(11) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `senha` varchar(150) NOT NULL,
  `tipo_usuario` varchar(15) NOT NULL,
  `desabilitado` int(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `id_pessoa_fk_idx` (`id_pessoa`),
  CONSTRAINT `id_pessoa_fk` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoa` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;


CREATE TABLE `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `preco` decimal(10,2) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `tamanho` varchar(10) DEFAULT NULL,
  `desabilitado` int(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idProduto_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `compra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_garcon` int(11) NOT NULL,
  `data` varchar(20) NOT NULL,
  `finalizada` int(1) DEFAULT '0',
  `codigo_comanda` varchar(50) DEFAULT NULL,
  `cancelada` int(1) DEFAULT '0',
  UNIQUE KEY `idCompra_UNIQUE` (`id`),
  KEY `id_garcon_fk_idx` (`id_garcon`),
  CONSTRAINT `id_garcon_fk` FOREIGN KEY (`id_garcon`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

CREATE TABLE `itemcompra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_produto` int(11) NOT NULL,
  `id_compra` int(11) NOT NULL,
  `quantidade` int(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idItemCompra_UNIQUE` (`id`),
  KEY `id_produto_fk_idx` (`id_produto`),
  KEY `id_compra_fk_idx` (`id_compra`),
  CONSTRAINT `id_compra_fk` FOREIGN KEY (`id_compra`) REFERENCES `compra` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_produto_fk` FOREIGN KEY (`id_produto`) REFERENCES `produto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

