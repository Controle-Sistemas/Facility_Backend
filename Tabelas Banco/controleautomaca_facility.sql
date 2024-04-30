-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 09/08/2023 às 14:25
-- Versão do servidor: 8.0.34
-- Versão do PHP: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `controleautomaca_facility`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `CHAMADOS`
--

CREATE TABLE `CHAMADOS` (
  `ID` int NOT NULL,
  `IDINTERNO` int DEFAULT NULL,
  `IDCLIENTE` int NOT NULL,
  `SETOR` int NOT NULL,
  `TITULO` varchar(200) NOT NULL,
  `DESCRICAO` text NOT NULL,
  `STATUS` int NOT NULL DEFAULT '0',
  `DATAINCLUSAO` varchar(20) NOT NULL,
  `DATAVENCIMENTO` varchar(20) DEFAULT '',
  `PRIORIDADE` int NOT NULL DEFAULT '1',
  `PREVISAO` varchar(10) NOT NULL,
  `ULTIMAATUALIZACAO` varchar(40) DEFAULT NULL,
  `FILE` text,
  `ATIVO` tinyint(1) NOT NULL DEFAULT '1',
  `INTERNORECEPTOR` varchar(100) DEFAULT NULL,
  `VISTO` tinyint(1) NOT NULL DEFAULT '0',
  `RECORRENTE` tinyint(1) NOT NULL DEFAULT '0',
  `DATARECORRENCIA` varchar(30) DEFAULT NULL,
  `TIPORECORRENCIA` tinyint(1) NOT NULL DEFAULT '0',
  `TIPOCHAMADO` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `CHAMADOS`
--

INSERT INTO `CHAMADOS` (`ID`, `IDINTERNO`, `IDCLIENTE`, `SETOR`, `TITULO`, `DESCRICAO`, `STATUS`, `DATAINCLUSAO`, `DATAVENCIMENTO`, `PRIORIDADE`, `PREVISAO`, `ULTIMAATUALIZACAO`, `FILE`, `ATIVO`, `INTERNORECEPTOR`, `VISTO`, `RECORRENTE`, `DATARECORRENCIA`, `TIPORECORRENCIA`, `TIPOCHAMADO`) VALUES
(7, NULL, 40, 1, 'KJHFAKDJSDWDFS', '<p>DSFFASDFASD</p>', 1, '2023-05-02 15:9:33', '2023-05-10', 1, '2023-05-10', NULL, 'fffe5c967fd66f476bc7767142dcdf90-girl-2696947_1280.jpg;', 1, 'Yan', 1, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(8, 9, 40, 6, 'Como cadastrar um grupo/categoria de produtos', '<p>dfsaf</p>', 1, '2023-05-02 17:30:32', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 1, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(9, 9, 40, 6, 'Como cadastrar um grupo/categoria de produtos', '<p>dfsaf</p>', 1, '2023-05-02 17:30:34', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 1, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(10, 9, 40, 6, 'Como cadastrar um grupo/categoria de produtos', '<p>dfsaf</p>', 1, '2023-05-02 17:30:44', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 1, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(11, 9, 40, 6, 'Como cadastrar um grupo/categoria de produtos', '<p>dfsaf</p>', 1, '2023-05-02 17:30:45', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(12, 9, 40, 6, 'Como cadastrar um grupo/categoria de produtos', '<p>dfsaf</p>', 1, '2023-05-02 17:30:45', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(13, 9, 40, 6, 'Como cadastrar um grupo/categoria de produtos', '<p>dfsaf</p>', 1, '2023-05-02 17:30:45', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(14, 9, 40, 6, 'Como cadastrar um grupo/categoria de produtos', '<p>dfsaf</p>', 1, '2023-05-02 17:30:46', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(15, 9, 40, 6, 'Como cadastrar um grupo/categoria de produtos', '<p>dfsaf</p>', 1, '2023-05-02 17:30:46', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(16, 9, 40, 6, 'Como cadastra', '<p>dfsafmnklknkllm</p>', 1, '2023-05-02 17:30:57', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 1, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(17, 9, 40, 6, 'Como cadastra', '<p>dfsafmnklknkllm</p>', 1, '2023-05-02 17:30:58', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(18, 9, 40, 6, 'Como cadastra', '<p>dfsafmnklknkllm</p>', 1, '2023-05-02 17:30:58', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(19, 9, 40, 6, 'Como cadastra', '<p>dfsafmnklknkllm</p>', 1, '2023-05-02 17:30:58', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(20, 9, 40, 6, 'Como cadastra', '<p>dfsafmnklknkllm</p>', 1, '2023-05-02 17:30:59', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(21, 9, 40, 6, 'Como cadastra', '<p>dfsafmnklknkllm</p>', 1, '2023-05-02 17:31:7', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(22, 9, 24, 6, 'Como cadastra', '<p>dfsafmnklknkllm</p>', 1, '2023-05-02 17:31:11', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '1fc8136b-6ef2-0282-2abb-b7e442ca8185'),
(23, 9, 24, 6, 'Como cadastra', '<p>dfsafmnklknkllm</p>', 1, '2023-05-02 17:31:16', '2023-05-03', 4, '2023-05-03', NULL, NULL, 1, 'suporte', 0, 0, '', 0, '265c5539-b6ef-8dbd-463c-608bbf4aedcb'),
(24, 9, 27, 5, ',vadfkllka', '<p>kdflagfkldjkls</p>', 1, '2023-05-02 17:32:11', '2023-05-03', 3, '2023-05-03', NULL, NULL, 1, 'Mauricio (Delphi)', 0, 0, '', 0, '265c5539-b6ef-8dbd-463c-608bbf4aedcb'),
(25, 9, 27, 5, ',vadfkllka', '<p>kdflagfkldjkls</p>', 1, '2023-05-02 17:32:11', '2023-05-03', 3, '2023-05-03', NULL, NULL, 1, 'Mauricio (Delphi)', 1, 0, '', 0, '265c5539-b6ef-8dbd-463c-608bbf4aedcb'),
(26, 9, 27, 5, ',vadfkllka', '<p>kdflagfkldjkls</p>', 1, '2023-05-02 17:32:12', '2023-05-03', 3, '2023-05-03', NULL, NULL, 1, 'Mauricio (Delphi)', 0, 0, '', 0, '265c5539-b6ef-8dbd-463c-608bbf4aedcb'),
(27, 9, 27, 5, ',vadfkllka', '<p>kdflagfkldjkls</p>', 1, '2023-05-02 17:32:12', '2023-05-03', 3, '2023-05-03', NULL, NULL, 1, 'Mauricio (Delphi)', 0, 0, '', 0, '265c5539-b6ef-8dbd-463c-608bbf4aedcb'),
(28, 9, 27, 5, ',vadfkllka', '<p>kdflagfkldjkls</p>', 1, '2023-05-02 17:32:12', '2023-05-03', 3, '2023-05-03', NULL, NULL, 1, 'Mauricio (Delphi)', 0, 0, '', 0, '265c5539-b6ef-8dbd-463c-608bbf4aedcb'),
(29, 9, 27, 5, ',vadfkllka', '<p>kdflagfkldjkls</p>', 1, '2023-05-02 17:32:12', '2023-05-03', 3, '2023-05-03', NULL, NULL, 1, 'Mauricio (Delphi)', 0, 0, '', 0, '265c5539-b6ef-8dbd-463c-608bbf4aedcb'),
(30, 9, 27, 5, ',vadfkllka', '<p>kdflagfkldjkls</p>', 1, '2023-05-02 17:32:12', '2023-05-03', 3, '2023-05-03', NULL, NULL, 1, 'Mauricio (Delphi)', 0, 0, '', 0, '265c5539-b6ef-8dbd-463c-608bbf4aedcb'),
(31, 9, 27, 5, ',vadfkllka', '<p>kdflagfkldjkls</p>', 1, '2023-05-02 17:32:13', '2023-05-03', 3, '2023-05-03', NULL, NULL, 1, 'Mauricio (Delphi)', 1, 0, '', 0, '265c5539-b6ef-8dbd-463c-608bbf4aedcb');

-- --------------------------------------------------------

--
-- Estrutura para tabela `CHAMADOSECTIONITEM`
--

CREATE TABLE `CHAMADOSECTIONITEM` (
  `ID` int NOT NULL,
  `IDSECTIONITEMTYPE` varchar(36) NOT NULL,
  `IDCHAMADO` int NOT NULL,
  `REQUIRED` tinyint(1) NOT NULL,
  `DONE` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `CHAMADOTYPE`
--

CREATE TABLE `CHAMADOTYPE` (
  `ID` varchar(36) NOT NULL,
  `TITLE` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `CHAMADOTYPE`
--

INSERT INTO `CHAMADOTYPE` (`ID`, `TITLE`) VALUES
('1fc8136b-6ef2-0282-2abb-b7e442ca8185', 'Bug Crítico'),
('265c5539-b6ef-8dbd-463c-608bbf4aedcb', 'Nova Funcionalidade'),
('4608df5a-3ec5-eb5e-41c9-c334593c4b10', 'Visita'),
('4630a058-f3ab-c7e6-b39b-d8fb9984bff5', 'Configuração de Backup'),
('80a5e1ef-1ad0-6d8f-fbf8-c46a5853ef7f', 'Financeiro (Outros)'),
('a09704b3-ab76-1f1f-8c6f-f9a7cdd36566', 'Fiscal'),
('a7e92c6c-a0d9-8762-e54e-e84670775e61', 'Sugestão'),
('aaf816e7-d7de-35f3-7d80-69d950537e3c', 'Bug'),
('d6ac41cd-7f77-a61e-2735-ea08e9daebdb', 'Melhoria de Rotina'),
('da43f9b3-518c-8685-9d26-5fee28885faf', '2ª Via Boleto');

-- --------------------------------------------------------

--
-- Estrutura para tabela `CHAMADOTYPESECTION`
--

CREATE TABLE `CHAMADOTYPESECTION` (
  `ID` varchar(36) NOT NULL,
  `TITLE` varchar(25) NOT NULL,
  `IDTYPE` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `CHAMADOTYPESECTION`
--

INSERT INTO `CHAMADOTYPESECTION` (`ID`, `TITLE`, `IDTYPE`) VALUES
('ee2e01b7-d3f9-8194-d9fc-71ea8bf72ae8', 'Configuração', '4630a058-f3ab-c7e6-b39b-d8fb9984bff5');

-- --------------------------------------------------------

--
-- Estrutura para tabela `CHAMADOTYPESECTIONITEM`
--

CREATE TABLE `CHAMADOTYPESECTIONITEM` (
  `ID` varchar(36) NOT NULL,
  `IDSECTION` varchar(36) NOT NULL,
  `DESCRIPTION` varchar(100) NOT NULL,
  `REQUIRED` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `CHAMADOTYPESECTIONITEM`
--

INSERT INTO `CHAMADOTYPESECTIONITEM` (`ID`, `IDSECTION`, `DESCRIPTION`, `REQUIRED`) VALUES
('30b1a0e5-f520-4e84-cf0d-9cd6be275616', 'ee2e01b7-d3f9-8194-d9fc-71ea8bf72ae8', 'Criar o espaço do cliente no Mega Drive', 1),
('3f1a88d1-7fe8-a0db-20f2-b71f008fde58', 'ee2e01b7-d3f9-8194-d9fc-71ea8bf72ae8', 'Verificar a integridade do arquivo', 1),
('71c22a18-5ba9-f288-a0f8-a6bea36a1522', 'ee2e01b7-d3f9-8194-d9fc-71ea8bf72ae8', 'Instalar o Client do Mega Drive', 1),
('7ee2e2d9-ab00-5093-ad62-6f73e8020445', 'ee2e01b7-d3f9-8194-d9fc-71ea8bf72ae8', 'Revisar o caminho do banco no .bat', 1),
('c9d98a8b-6262-3f6e-e331-ab3c4a22cf49', 'ee2e01b7-d3f9-8194-d9fc-71ea8bf72ae8', 'Testar o funcionamento do backup', 1),
('d0730e5c-d34c-6c89-feea-838a136f2dc1', 'ee2e01b7-d3f9-8194-d9fc-71ea8bf72ae8', 'Configurar a tarefa no windows', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `DOCUMENTOS`
--

CREATE TABLE `DOCUMENTOS` (
  `ID` int NOT NULL,
  `TIPO` int NOT NULL,
  `IDUSER` int NOT NULL,
  `CNPJ` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `NOME` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DESCRICAO` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `FILE` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `EXIBIRATEVENCIMENTO` tinyint(1) NOT NULL DEFAULT '0',
  `DATAINCLUSAO` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DATAVENCIMENTO` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `PRIORIDADE` int NOT NULL DEFAULT '1',
  `ATIVO` tinyint(1) NOT NULL DEFAULT '1',
  `STATUS` int NOT NULL DEFAULT '0',
  `VISTO` tinyint(1) NOT NULL DEFAULT '0',
  `COMUNICADO` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Despejando dados para a tabela `DOCUMENTOS`
--

INSERT INTO `DOCUMENTOS` (`ID`, `TIPO`, `IDUSER`, `CNPJ`, `NOME`, `DESCRICAO`, `FILE`, `EXIBIRATEVENCIMENTO`, `DATAINCLUSAO`, `DATAVENCIMENTO`, `PRIORIDADE`, `ATIVO`, `STATUS`, `VISTO`, `COMUNICADO`) VALUES
(1, 1, 35, '78088682000123', 'Teste', 'Teste', '4bbfac4d465ca92ff5a17266f65079ba-Cocatriz.pdf;', 0, '2023-02-06', '2023-02-08', 1, 1, 1, 1, ''),
(2, 1, 35, '78088682000123', 'Teste', 'Teste', '7d0ad222ca63a1d3434e284baead9973-Carrinho+de+compras+da+Amazon.com.pdf;', 0, '2023-02-06', '2023-02-22', 1, 1, 1, 1, ''),
(5, 1, 35, '78088682000123', 'Teste', 'Teste de upload', 'c2512a0e57b439d4d43f826872ae9900-INGRESSOPLUS.pdf;', 0, '2023-02-08', '2023-02-09', 1, 1, 1, 0, ''),
(6, 1, 35, '45928834000108', 'Teste', 'Teste de upload', 'ec3d54d23e76ee2e7580f0ac04b2674f-2a3189f4-cad3-4444-9280-c4d0b6f7af24_Repostas_da_atividade_.pdf;', 1, '2023-03-22', '2023-03-23', 1, 1, 1, 1, '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `EMPRESAS`
--

CREATE TABLE `EMPRESAS` (
  `ID` int DEFAULT NULL,
  `IDCLOUD` int DEFAULT NULL,
  `IDCIDADE` int DEFAULT NULL,
  `IDREPRESENTANTE` int DEFAULT NULL,
  `NOMEFANTASIA` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `NOMECONTATO` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `RAZAOSOCIAL` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `CNPJ` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `CNAE` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `INSCRICAOESTADUAL` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `EMAIL` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `RAMOATIVIDADE` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `REPRESENTANTE` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `NOVO` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `STATUS` int DEFAULT NULL,
  `ATIVO` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `CEP` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `BAIRRO` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `CIDADE` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `COMPLEMENTO` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `NUMERO` int DEFAULT NULL,
  `ENDERECO` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `UF` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `DATAVIGENCIA` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `CADASTRADAPOR` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `OBSERVACOES` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `FONECOBRANCA` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `FONEADICIONAL` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `DATAINICIO` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `DIASLICENCAPROVISORIA` int DEFAULT NULL,
  `VALORMENSALIDADE` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `VALORIMPLANTACAO` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Despejando dados para a tabela `EMPRESAS`
--

INSERT INTO `EMPRESAS` (`ID`, `IDCLOUD`, `IDCIDADE`, `IDREPRESENTANTE`, `NOMEFANTASIA`, `NOMECONTATO`, `RAZAOSOCIAL`, `CNPJ`, `CNAE`, `INSCRICAOESTADUAL`, `EMAIL`, `RAMOATIVIDADE`, `REPRESENTANTE`, `NOVO`, `STATUS`, `ATIVO`, `CEP`, `BAIRRO`, `CIDADE`, `COMPLEMENTO`, `NUMERO`, `ENDERECO`, `UF`, `DATAVIGENCIA`, `CADASTRADAPOR`, `OBSERVACOES`, `FONECOBRANCA`, `FONEADICIONAL`, `DATAINICIO`, `DIASLICENCAPROVISORIA`, `VALORMENSALIDADE`, `VALORIMPLANTACAO`) VALUES
(6, 622774, 4390, 0, 'MARAJAH', 'ALINE', 'HOOKAH SUL COMERCIO E ACESSORIOS DE TABACOS', '22774072000129', '', '9072354599', 'marajahnarguiles@gmail.com', '0', '', 'N', 1, '', '80620200', 'AGUA VERDE', 'CURITIBA', '', 56, 'AV AGUA VERDE', 'PR', '', '', '', '4196419255', '', '01/10/2018', 0, '0', '0'),
(8, 827194, 4571, 0, 'LA STREGA', 'LUIZ', 'L ACQUA MOSSA BAR E RESTAURANTE LTDA', '27194050000103', '', '9075124284', 'vanderson@goldcereais.com.br', '0', 'DANIEL', 'N', 1, '', '85851120', 'CENTRO', 'FOZ DO IGUACU', '', 458, 'R. EDMUNDO DE BARROS', '', '', '', '\n', '4530277946', '', '01/10/2018', 0, '0', '0'),
(10, 1022297, 0, 0, 'PREGO CANTINA ITALIANA', 'ROSELi', 'PREGO CANTINA ITALIANA LTDA - ME', '22297142000103', '', '', 'contato@cantinaprego.com.br', '0', '', 'N', 1, '', '', '', '', '', 0, '', '', '', '', '', '30374788', '', '01/10/2018', 0, '0', '0'),
(16, 1614832, 114, 0, 'JACOMINI S TABACARIA E PRESENTES', 'CIDA', 'TIO NELSON', '14832538000177', '', '79555019912', 'cida@brmade.com.br', '0', '', 'N', 1, '', '88888888', 'CAMBUI', 'CAMPINAS', '', 244, 'RUA PADRE ALMEIDA', '', '', '', '', '4533333333', '', '01/10/2018', 0, '0', '0'),
(17, 1778405, 4563, 0, 'MERCADO SUPER DEME', 'DELVINO', 'A. DEMENECH E CIA LTDA', '78405032000164', '', '4100805320', 'delvino@email.com', '0', '', 'N', 1, '', '85802120', 'VILA TOLENTINO', 'CASCAVEL', '', 497, 'RUA VISCONDE DE GUARAPUAVA', 'PR', '', '', '', '4532244732', '', '01/10/2018', 0, '0', '0'),
(18, 1810997, 4563, 0, 'RESTAURANTE SURUBIM', 'ADRIANA', 'R. N. BURAK E CIA LTDA', '10997941000103', '', '9048881413', '@', '0', '', 'N', 1, '', '85801080', 'CENTRO', 'CASCAVEL', '', 966, 'RUA BARAO DO CERRO AZUL', '', '', '', '', '999131072', '', '01/10/2018', 0, '0', '0'),
(19, 1906304, 4563, 0, 'RESTAURANTE SURUBIM', 'DODI', 'D NEVES E CIA LTDA', '06304767000190', '', '9031310803', '@', '0', '', 'N', 1, '', '85802030', 'NEVA', 'CASCAVEL', '', 3085, 'RUA CUIABA', '', '', '', '\n', '4533222956', '', '01/10/2018', 0, '0', '0'),
(20, 2009335, 4563, 0, 'FRUTARIA MOURA', 'RAFAELA', 'ELIZENE T DE MOURA', '09335490000151', '', '9043492753', 'moura_faela27@hotmail.com', '0', 'ANDERSON', 'N', 1, '', '85806020', 'SANTA CRUZ', 'CASCAVEL', '', 983, 'RUA XAVANTES', '', '', '', '\n', '98424776', '', '01/10/2018', 0, '0', '0'),
(21, 2114853, 193, 0, 'MERCADO HAWAI', 'LUIZ (NEGO)', 'MERCADO HAWAI', '14853719000180', '', '9058258951', 'luiz@hotmail.com', '0', '', 'N', 1, '', '85811040', 'CLAUDETE', 'CASCAVEL', '', 1457, 'RUA TUIUTI', '', '', '', '', '4530388379', '', '01/10/2018', 0, '0', '0'),
(22, 2216620, 4563, 0, 'MARTIGNONI SHOPPING', 'JONAS', 'G MARTIGNONI & MARTIGNONI LTDA ME', '16620242000118', '', '9060336820', 'shoppingmartignoni@gmail.com', '0', '', 'N', 1, '', '85810230', 'CENTRO', 'CASCAVEL', '', 432, 'AV TOLEDO', '', '', '', '\n', '4530357760', '', '01/10/2018', 0, '0', '0'),
(23, 2310374, 4563, 0, 'RESTAURANTE SABOR NA CHAPA', 'LUCIANO', 'A. M. FERREIRA -  RESTAURANTE ME', '10374217000115', '', '9045630568', 'restaurantes.adm@gmail.co,', '0', '', 'N', 1, '', '85810000', 'CENTRO', 'CASCAVEL', '', 6320, 'AV. BRASIL', '', '', '', '', '33515445', '', '01/10/2018', 0, '0', '0'),
(24, 2429291, 4563, 0, 'MERCADO LAR', 'ALISON', 'DEGRANDIS COMERCIO ALIMENTOS LTDA - ME', '29291711000144', '', '9076914548', '@', '0', '', 'N', 1, '', '85805260', 'ALTO ALEGRE', 'CASCAVEL', '', 5723, 'RUA CUIABA', '', '', '', '', '4533067887', '', '01/10/2018', 0, '0', '0'),
(25, 2527437, 4563, 0, 'RESTAURANTE MARICOTA', 'MARI', 'RESTAURANTE CENTRAL PARK LTDA - ME', '27437246000181', '', '9074653143', '@', '0', '', 'N', 1, '', '85810000', 'CENTRO', 'CASCAVEL', 'CENTRAL PARK', 6282, 'AV BRASIL', '', '', '', '', '4530357707', '', '01/10/2018', 0, '0', '0'),
(26, 2608504, 4563, 0, 'MERCADO REI DO PAO', 'SANDRA', 'FABIO ANTONIO PIANO-MERCADO', '08504931000139', '', '9039097653', 'fabio.piano@hotmail.com', '0', '', 'N', 1, '', '85819740', 'CIRO NARDI', 'CASCAVEL', '', 706, 'RUA DA LAPA', '', '', '', '', '4533064686', '', '01/10/2018', 0, '0', '0'),
(27, 2730606, 4563, 0, 'RESTAURANTE KILOGRAMA', 'FELIPE', 'CARVALHO E GALVAO GASTRONOMIA LTDA', '30606476000131', '', '9078270206', 'contato@restaurantekilograma.com.br', '0', '', 'N', 1, '', '85810000', 'CENTRO', 'CASCAVEL', '', 6972, 'AV. BRASIL', '', '', '', '', '99425540', '', '01/10/2018', 0, '0', '0'),
(28, 2824450, 4563, 0, 'MONKA ACAI', 'CAROL', 'MONKA RESTAURANTE  LTDA', '24450343000116', '', '9071766737', '@', '0', '', 'N', 1, '', '85812260', 'CENTRO', 'CASCAVEL', '', 4109, 'RUA SOUZA NAVES', '', '', '', '', '45998119321', '', '01/10/2018', 0, '0', '0'),
(29, 2901994, 4563, 0, 'MERCEARIA BELA VISTA', 'JANDIRA', 'N P S COMERCIO DE ALIMENTOS LTDA ME', '01994932000160', '', '9013819928', 'jeisse@jps.net.br', '2', '', 'N', 1, '', '85815550', 'BELA VISTA', 'CASCAVEL', '', 227, 'R. AMARELA', '', '', '', '', '99220201', '', '01/10/2018', 0, '0', '0'),
(30, 3030339, 4390, 0, 'LA MAFIA TRATTORIA', 'ALEXANDRE', 'ALEXANDRE LUBACZEUSKI RESTAURANTE EIRELI', '30339114000121', '', '9077998672', '@', '0', '', 'N', 1, '', '80430152', 'BIGORRILHO', 'CURITIBA', '', 2601, 'RUA DESEMBARGADOR MOTTA', '', '', '', '', '4130761015', '', '01/10/2018', 0, '0', '0'),
(31, 3115474, 4563, 0, 'MERCADO VALE VERDE', 'ANDRE', 'VARDELI FARIAS ME', '15474702000184', '', '9059474780', 'fiscal.mazutti@outlook.com.br', '0', '', 'N', 3, '', '85817050', 'PERIOLO', 'CASCAVEL', '', 793, 'R. LEBLON ', '', '', '', '\n\n', '99942924', '', '01/10/2018', 0, '0', '0'),
(32, 3214213, 4563, 0, 'CHEFS PIZZA', 'MARCELO', 'M B OLDRA ME', '14213501000160', '', '9064421244', '@', '0', '', 'N', 1, '', '85812035', 'CENTRO', 'CASCAVEL', '', 2209, 'RUA MINAS GERAIS', '', '', '', '', '4530353637', '', '01/10/2018', 0, '0', '0'),
(33, 3324923, 4563, 0, 'BOTECO MARTIGNONI', 'DAWSON', 'FAUSTINO E SIMPLICIO LTDA', '24923527000156', '', '9072306519', '@', '0', '', 'N', 3, '', '85810160', 'CENTRO', 'CASCAVEL', '', 2640, 'RUA PIO XII', '', '', '', '\n\n\n\n', '4599110132', '', '01/10/2018', 0, '0', '0'),
(34, 3405112, 4563, 0, 'MERCADO METROPOLITANO', 'LUCI', 'L F VITALINO  CIA LTDA.', '05112812000142', '', '9026221959', 'lucineif.vitalino@live.com', '0', '', 'N', 1, '', '85811480', 'CLAUDETE', 'CASCAVEL', '', 519, 'RUA THEOFANIO MALTEZO', '', '', '', '', '98010757', '', '01/10/2018', 0, '0', '0'),
(35, 3525153, 4563, 0, 'MUBARAK COMIDA ARABE', 'FERNANDO', 'JOAO MANUEL CAUS EIRELI', '34242944000197', '', '', '@', '0', '', 'N', 1, '', '85807550', 'COQUEIRAL', 'CASCAVEL', '', 1419, 'RUA FRANCISCO BARTINIK ', 'PR', '', '', '\n', '32272761', '', '01/10/2018', 0, '0', '0'),
(37, 3721379, 4563, 0, 'EMPRESA TESTE', 'TESTE', 'EMPRESA TESTE', '21379999000100', '', '9068332718', 'teste@teste', '0', '', 'N', 1, '', '85811180', 'CENTRO', 'CASCAVEL', '', 9049, 'AV BRASIL', '', '', '', '', '4533064756', '', '01/10/2018', 0, '0', '0'),
(38, 3818338, 4563, 0, 'PANIFICADORA E MERCADO ESTRELA', 'ANA', 'A V MENESES - ME', '18338877000152', '', '9063454807', '@', '0', '', 'N', 1, '', '85817750', 'MORUMBI', 'CASCAVEL', 'SALA A', 139, 'RUA MONTE NEGRO', '', '', '', '', '98627444', '', '01/10/2018', 0, '0', '0'),
(39, 3930228, 4563, 0, 'BELEZA PURA COSMETICOS', 'A', 'CINTIA MARIA CALIXTO PEREIRA 04145541910', '30228184000102', '', '          ', '@', '0', 'DANIEL', 'N', 1, '', '85812010', 'CENTRO', 'CASCAVEL', '', 1998, 'R PARANA', '', '', '', '\n', '4530374238', '', '01/10/2018', 0, '0', '0'),
(40, 4015072, 4563, 0, 'RESTAURANTE BACIN', 'JESSICA', 'L BACCIN RESTAURANTE ME', '15072417000137', '', '9058674823', 'jessikbaccin@hotmail.com', '0', '', 'N', 3, '', '85801095', 'CENTRO', 'CASCAVEL', '', 10, 'RUA JARLINDO JOAO GRANDO', '', '', '', '\n\n\n', '99856199', '', '01/10/2018', 0, '0', '0'),
(41, 4110895, 4563, 0, 'RESTAURANTE GALETTOS', 'SAMARA', 'RESTAURANTE GALETTOS LTDA', '10895725000149', '', '9048379114', '@', '0', '', 'N', 1, '', '85812001', 'CENTRO', 'CASCAVEL', '', 5179, 'AV. BRASIL', '', '', '', '\n', '33061629', '', '01/10/2018', 0, '0', '0'),
(42, 4223839, 4571, 0, 'KAMI SUSHI', 'TIAGO', 'SILVA SUSHI FAST FOOD LTDA', '23839735000109', '', '9071051568', '@', '0', '', 'N', 1, '', '85863000', 'CENTRO', 'FOZ DO IGUACU', '', 185, 'AV COSTA E SILVA', '', '', '', '', '999342233', '', '01/10/2018', 0, '0', '0'),
(43, 4327045, 4563, 0, 'PANIFICADORA CASCAVEL', 'WILLIAN', 'PANIFICADORA CASCAVEL', '27045288000177', '', '9074191344', '@', '0', '', 'N', 1, '', '85811280', 'CANCELLI', 'CASCAVEL', '', 755, 'R. CARLOS BARTOLOMEU CANCELLI', '', '', '', '', '99348464', '', '01/10/2018', 0, '0', '0'),
(44, 4408861, 5581, 0, 'SABOR E ARTE', 'ERNESTO', 'SATIKO SASAKI - ME', '08861670000104', '', '074175423 ', '@', '0', '', 'N', 1, '', '47850000', 'CENTRO', 'LUIS EDUARDO MAGALHAES', '', 1260, 'R. JOSÉ CARDOSO DE LIMA', '', '', '', '', '7736287432', '', '01/10/2018', 0, '0', '0'),
(45, 4523376, 4563, 0, 'PRESLEY BURGER', 'ANGELA', 'PRESLEY BURGERS LTDA - ME', '23376647000118', '', '9070562445', '@', '0', 'ANDERSON', 'N', 1, '', '85810010', 'CENTRO', 'CASCAVEL', '', 4060, 'R. PARANA ', '', '', '', '\n\n', '99790205', '', '01/10/2018', 0, '0', '0'),
(46, 4622978, 4583, 0, 'PLUTAO LANCHES', 'GILBERTO', 'GILBERTO WACHHOLTZ LANCHES EIRELI', '22978311000162', '', '9070643011', '@', '0', 'DANIEL', 'N', 1, '', '85905360', 'CENTRO', 'TOLEDO', '', 1459, 'RUA LEDOINO JOSE BIAVATTI ', '', '', '', '\n', '991478878', '', '01/10/2018', 0, '0', '0'),
(47, 4702494, 4563, 0, 'LANCHONETE CATARINA', 'ELIEGE', 'M. J. ANTUNES NETO & CIA LTDA.', '02494186000108', '', '9032207836', '@', '0', '', 'N', 3, '', '85810110', 'CENTRO', 'CASCAVEL', '', 2605, 'RUA VISCONDE DE GUARAPUAVA', '', '', '', '', '99404793', '', '01/10/2018', 0, '0', '0'),
(48, 4829908, 4563, 0, 'PRESLEY BURGER', 'BETE', 'PRESLEY BURGER LTDA', '29908115000160', '', '9077517836', '@', '0', 'ANDERSON', 'N', 1, '', '85810020', 'CENTRO', 'CASCAVEL', '', 225, 'R. PERNAMBUCO', '', '', '', '\n\n', '99359922', '', '01/10/2018', 0, '0', '0'),
(49, 4908282, 4563, 0, 'YUU ASIAN BAR - CASCAVEL', 'MICHELLY', 'GILBERTO MARTIGNONI RESTAURANTE-ME', '08282574000292', '', '9067960316', 'yuuasianbar@gmail.com', '0', 'DANIEL', 'N', 1, '', '85810020', 'CENTRO', 'CASCAVEL', '', 944, 'RUA PERNAMBUCO', '', '', '', '\n\n', '4530965550', '', '01/10/2018', 0, '0', '0'),
(50, 5018326, 195, 0, 'PIZZA CHOPP PIZZARIA LTDA-ME', 'LUCELIA', 'PIZZA CHOPP PIZZARIA LTDA-ME', '18326075000122', '', '9063365375', '@', '0', 'DANIEL', 'N', 1, '', '85910070', 'PIONEIRA', 'TOLEDO', '', 231, 'RUA CASTRO ALVES', '', '', '', '\n', '4532522266', '', '01/10/2018', 0, '0', '0'),
(51, 5105440, 4563, 0, 'CHANG LEE', 'DEVAIR', 'CHANG LEE RESTAURANTE CHINES LTDA', '05440803000261', '', '9077574554', '@', '0', '', 'N', 1, '', '85810020', 'CENTRO', 'CASCAVEL', '', 225, 'R. PERNAMBUCO', '', '', '', '', '84035833', '', '01/10/2018', 0, '0', '0'),
(52, 5220352, 4563, 0, 'RESTAURANTE LUSITANO', 'FABIO', 'F. QUEIROZ - RESTAURANTE LUSITANO ME', '20352705000185', '', '9066552176', '@', '0', '', 'N', 1, '', '85806430', 'CENTRO', 'CASCAVEL', '', 1853, 'R. SAO PAULO', '', '', '', '', '99624414', '', '01/10/2018', 0, '0', '0'),
(53, 5311258, 193, 0, 'MAPALOLO PIZZARIA', 'NAIRO BARTZ', 'MAPALOLO PIZZARIA LTDA', '11258314000105', '', '9049918728', 'mapalolopizzaria@hotmail.com', '0', '', 'N', 1, '', '85817310', 'MORUMBI', 'CASCAVEL', '', 429, 'RUA EUROPA', '', '', '', '', '4532222669', '', '01/10/2018', 0, '0', '0'),
(54, 5428620, 5371, 0, 'OUTBEEF - STEAL PLACE ZAVALHIA', 'VINICIUS', 'DOM VICENTE RESTAURANTE LTDA', '45239487000106', '', '0340136111', '@', '0', '', 'N', 1, '', '98005150', 'CENTRO', 'CRUZ ALTA', '', 823, 'AV. GENERAL OSORIO', 'RS', '', '', '\n', '5599367514', '', '01/10/2018', 0, '0', '0'),
(55, 5505928, 4563, 0, 'PANIFICADORA PANI CENTER', 'SELMO', 'I. I. SANTOS FERRREIRA PANIFICADORA ', '05928752000130', '', '9062740865', '@', '0', '', 'N', 1, '', '85816500', 'PERIOLO', 'CASCAVEL', '', 1126, 'R. PANAMA', '', '', '', '', '99864020', '', '01/10/2018', 0, '0', '0'),
(56, 5627981, 4563, 0, 'LOJAS KIWI', 'MARCELO', 'E DE SOUZA CONFECÇÕES - ME', '27981841000183', '', '9075594248', '@', '0', '', 'N', 1, '', '85812001', 'CENTRO', 'CASCAVEL', 'SALA 04', 5546, 'AV. BRASIL', '', '', '', '', '33068878', '', '01/10/2018', 0, '0', '0'),
(58, 5829515, 4563, 0, 'OONFLEEK', 'ALEX', 'L G COIMBRA BERTOLI E CIA LTDA', '34033281000109', '', '9077104914', '@', '0', 'DANIEL', 'N', 1, '', '85810020', 'CENTRO', 'CASCAVEL', '', 225, 'RUA PERNAMBUCO', '', '', '', '\n\n', '998291515', '', '01/10/2018', 0, '0', '0'),
(59, 5907972, 4583, 0, 'QUINTA DO ACAI', 'REGIS', 'MARIA VALDETE DA ROSA MOURA LTDA-ME', '07972694000178', '', '9071179955', '@', '0', '', 'N', 1, '', '85900110', 'CENTRO', 'TOLEDO', '', 1857, 'RUA RAIMUNDO LEONARDI', '', '', '', '', '998177720', '', '01/10/2018', 0, '0', '0'),
(60, 6028247, 4563, 0, 'FE E CAFE', 'NALDO', 'CIRLEI RECH RODRIGUES 51348705949', '35948758000130', '', '9075690395', '@', '0', '', 'N', 1, 'S', '85801050', 'CENTRO', 'CASCAVEL', '', 1054, 'R. MARANHAO', '', '', '', '\n\n\n', '99647596', '', '03/10/2018', 0, '0', '0'),
(61, 6128718, 4563, 0, 'SHESTER BEBIDAS', 'SHESTER', 'RIALTO E SAVARIS RESTAURANTES E CHOPERIA LTDA - ME', '28718683000136', '', '9076165847', '@', '0', 'DANIEL', 'N', 1, 'S', '85810020', 'CENTRO', 'CASCAVEL', '', 225, 'RUA PERNAMBUCO', '', '', '', '\n\n', '98222345', '', '03/10/2018', 0, '0', '0'),
(62, 6225317, 4563, 0, 'DR. HOO', 'FELIPE', 'DANIELA SANTOS AMARAL - ME', '25317226000141', '', '9072835341', '@', '0', '', 'N', 3, 'S', '85810230', 'CENTRO', 'CASCAVEL', '', 432, 'AV. TOLEDO', '', '', '', '\n', '99303328', '', '03/10/2018', 0, '0', '0'),
(63, 6302357, 4563, 0, 'RESTAURANTE MONTE LIBANO', 'MAURELIO', 'MAURELIO LUIZ VIVIAN ME', '02357142000136', '', '9015573306', '@', '0', '', 'N', 1, 'S', '85810080', 'CENTRO', 'CASCAVEL', '', 4004, 'RUA. CARLOS DE CARVALHO', '', '', '', '', '99202999', '', '03/10/2018', 0, '0', '0'),
(64, 6407972, 4583, 0, 'QUINTA DO AÇAI', 'REGIS', 'MARIA VALDETE DA ROSA MOURA LTDA-ME', '07972694000178', '', '9071179955', '@', '0', '', 'N', 1, 'S', '85900110', 'CENTRO', 'TOLEDO', '', 1857, 'RUA RAIMUNDO LEONARDI', '', '', '', '', '33781986', '', '03/10/2018', 0, '0', '0'),
(65, 6524857, 4563, 0, '303 LOUNGE BEER', 'Thais', 'HOOKAHFULL LOUNGE BEER LTDA', '24857953000139', '', '9072235581', 'thaiscristina1909@outlook.com', '0', '', 'N', 1, 'S', '85816290', 'SAO CRISTOVAO', 'CASCAVEL', '', 2962, 'AV. BRASIL', 'PR', '', '', '', '999514421', '', '03/10/2018', 0, '0', '0'),
(66, 6622052, 4563, 0, 'SKINA BEER', 'VILSON', 'DONATI E DIAS COM. DE ALIMENTOS LTDA-ME', '22052426000121', '', '9068934793', '@', '0', '', 'N', 1, 'S', '85801011', 'CENTRO', 'CASCAVEL', '', 2230, 'RUA RIO GRANDE DO SUL', '', '', '', '', '4598149326', '', '03/10/2018', 0, '0', '0'),
(67, 6711249, 4563, 0, 'ESQUINA DO PAO', 'ELIANE', 'SEBASTIAO CARDOSO FERRERIA E CIA LTDA', '11249438000124', '', '9050408121', '@', '0', '', 'N', 1, 'S', '85815176', 'JD COLONIAL', 'CASCAVEL', '', 405, 'RUA WALDIR AZEVEDO ', '', '', '', '', '32292374', '', '03/10/2018', 0, '0', '0'),
(68, 6829828, 4563, 0, 'MAIS ACAI', 'CARLA', 'R DE MORAES CASSINS', '29828169000388', '', '9078862200', '@', '0', '', 'N', 1, 'S', '85816294', 'SAO CRISTOVAO', 'CASCAVEL', 'SL 23 BL B, SH. WEST SIDE', 2962, 'AV BRASIL', '', '', '', '', '991230482', '', '03/10/2018', 0, '0', '0'),
(69, 6929589, 4583, 0, 'LA MAFIA TRATTORIA TOLEDO', 'DOUGLAS', 'LA MAMMA BALENA LTDA', '27240648000191', '', '9081798203', '@', '0', 'DANIEL', 'N', 1, 'S', '85902060', 'JARDIM LA SALLE', 'TOLEDO', '', 5731, 'AV MARIPA', '', '', '', '\n\n\n', '999790000', '', '03/10/2018', 0, '0', '0'),
(70, 7020247, 4563, 0, 'RESTAURANTE ALCATRAO E BRASA', 'PEDRO', 'NAYARA RIBEIRO DO NASCIMENTO', '33100544000184', '', '9066384524', 'pedro.bessani@gmail.com', '0', '', 'N', 1, 'S', '85814760', 'FLORESTA', 'CASCAVEL', '', 1997, 'AV. PAPAGAIOS', '', '', '', '\n', '99903031', '', '03/10/2018', 0, '0', '0'),
(71, 7197551, 4563, 0, 'BONAMIGO BEBIDAS', 'MAURICIO', 'EDERLEI BONAMINGO DOS SANTOS CASCAVEL', '34857915000130', '', '9090000761', '@', '0', '', 'N', 1, 'S', '85813105', 'SAO CRISTOVAO', 'CASVAVEL', '', 91, 'RUA EMILIA GALAFASI', 'PR', '', '', '', '999432795', '', '03/10/2018', 0, '0', '0'),
(72, 7217540, 4563, 0, 'HANABI SUSHI TRUCK', 'RICARDO', 'RICARDO TAKAHIDE SANO - ME', '17540286000109', '', '9069691657', 'rtsano@hotmail.com', '0', '', 'N', 1, 'S', '85812010', 'CENTRO', 'CASCAVEL', '', 956, 'RUA PARANA', '', '', '', '', '99333141', '', '03/10/2018', 0, '0', '0'),
(73, 7324137, 4561, 0, 'CAFE E CIA DO NENE', 'JESSICA', 'MARQUETTO E SCAPINI RESTAURANTE LTDA', '24137245000123', '', '9071384966', '@', '0', '', 'N', 1, 'S', '85790000', 'CENTRO', 'CAPITAO LEONIDAS MARQUES', '', 425, 'AV. IGUACU ', '', '', '', '', '99615299', '', '03/10/2018', 0, '0', '0'),
(74, 7427669, 4563, 0, 'CASA DO MARQUES', 'ANDRESSA', 'M. MULLER RESTAURANTE - EPP', '27669484000112', '', '9075072110', '@', '0', '', 'N', 1, 'S', '85801270', 'CENTRO', 'CASCAVEL', '', 1218, 'R. NEREU RAMOS', 'PR', '', '', '\n', '99150905', '', '04/10/2018', 0, '0', '0'),
(75, 7530548, 4587, 0, 'HOOKAH LOUNGE BEER', 'LUCAS', 'SAMUEL JOAO RIOS', '30548899000142', '', '9078211536', '@', '0', '', 'N', 1, 'S', '85935000', 'JARDIM PARANA', 'ASSIS CHATEAUBRIAND', '', 771, 'AV BRASIL', '', '', '', '', '999951356', '', '04/10/2018', 0, '0', '0'),
(76, 7630345, 5582, 0, 'RESTAURANTE REI DA PRAÇA', 'ITAMAR', 'DIST BAR LANCHONETE E REST O REI DA PRACA LTDA', '30345811000195', '', '148530991 ', '@', '0', '', 'N', 3, 'S', '47850000', 'MIMOSO DO OESTE', 'LUIS EDUARDO MAGALHAES', '', 2279, 'RUA SAO FRANCISCO', '', '', '', '\n', '11986975075', '', '04/10/2018', 0, '0', '0'),
(77, 7728867, 4571, 0, 'LA MAFIA TRATTORIA', 'LEONARDO', 'SAPORE RESTAURANTE LTDA - ME', '28867625000174', '', '9076364882', 'leo@hotmail.com', '0', 'DANIEL', 'N', 1, 'S', '85852320', 'VILA REMIGIO', 'FOZ DO IGUACU', '', 195, 'RUA WATSLAF NIERADKA', '', '', '', '\n', '4530276244', '', '05/10/2018', 0, '0', '0'),
(78, 7829562, 4422, 0, 'EMPORIO DA CARNE', 'MEIRE', 'EMPORIO DA CARNE LTDA - ME', '29562282000100', '', '9077149004', 'meiribraga@hotmail.com', '0', 'DANIEL', 'N', 1, 'S', '83833173', 'IGUACU', 'FAZENDA RIO GRANDE', '', 685, 'RUA RIO PIQUIRI', '', '', '', '\n', '4136080262', '', '05/10/2018', 0, '0', '0'),
(79, 7920247, 4563, 0, 'RESTAURANTE ALCATRAO E BRASA', 'PEDRO', 'BESSANI RESTAURANTE LTDA ME', '20247291000124', '', '9066384524', 'pedro.bessani@gmail.com', '0', '', 'N', 1, 'S', '85802170', 'CENTRO', 'CASCAVEL', '', 2600, 'RUA PIO XII.', '', '', '', '', '99903331', '', '05/10/2018', 0, '0', '0'),
(80, 8025533, 4506, 0, 'PALLADIUM BAR E TABACARIA', 'PAULO PATRICK', 'PALLADIUM BAR E TABACARIA LTDA', '25533690000175', '', '123', 'patrick_kiki-@hotmail.com', '0', '', 'N', 1, 'S', '85811111', 'CENTRO', 'CAFELANDIA', '', 123, 'RUA DANIEL CHIROFF', '', '', '', '', '45999017052', '', '05/10/2018', 0, '0', '0'),
(81, 8105079, 4563, 0, 'MERCADO BRECHMZ', 'ALEXANDRO', 'MERCEARIA BRECHMZ LTDA', '05079424000107', '', '9026279280', 'alexandronbarbosa@gmail.com', '0', '', 'N', 1, 'S', '85804030', '14 DE NOVEMBRO', 'CASCAVEL', '', 739, 'RUA SOUZA NAVES SUL', '', '', '', '', '99715128', '', '08/10/2018', 0, '0', '0'),
(82, 8211933, 5581, 0, 'PANORAMA BAR E RESTAURANTE', 'LUCIMEIRE', 'PANORAMA BAR E RESTAURANTE', '11933201000168', '', '87546631  ', '@', '0', 'THIAGO', 'N', 1, 'S', '47850000', 'CENTRO', 'LUIS EDUARDO MAGALHAES', '', 95, 'RUA FLAMBOYANT', '', '', '', '\n', '7736390522', '', '08/10/2018', 0, '0', '0'),
(83, 8327716, 4478, 0, 'MAIS ACAI', 'GUSTAVO', 'G DE MORAES CASSINS - ME', '27716048000157', '', '9075216057', 'maisacai.cascavel@gmail.com', '0', '', 'N', 1, 'S', '85051010', 'CIDADE DOS LAGOS', 'GUARAPUAVA', 'PVMTO L2', 1400, 'AV GUARAPUAVA', '', '', '', '', '45998045475', '', '09/10/2018', 0, '0', '0'),
(84, 8429714, 4563, 0, 'ARENA PUB SERTANEJO', 'WILSON', 'ARENA PUB SERTANEJO', '29714004000113', '', '9077300420', '@', '0', 'DANIEL', 'N', 1, 'S', '85810000', 'CENTRO', 'CASCAVEL', '', 7282, 'AV BRASIL', '', '', '', '\n\n\n', '4533064756', '', '09/10/2018', 0, '0', '0'),
(85, 8521379, 4563, 0, 'ARENA HOOKAH LOUNGE', 'WILSON', 'ARENA TABACARIA LTDA-ME', '21379999000100', '', '9068332718', 'arena', '2', '', 'N', 1, 'S', '85811180', 'CENTRO', 'CASCAVEL', '', 9049, 'AV BRASIL', 'PR', '', '', '\n', '33064756', '', '09/10/2018', 0, '0', '0'),
(86, 8617844, 4563, 0, 'CASCAVEL SUSHI', 'ADRIAN', 'ALDEMIR ALBERTO GOLUB ', '17844087000186', '', '11122211  ', '@', '0', 'ANDERSON', 'N', 1, 'S', '85810430', 'CENTRO', 'CASCAVEL', '', 1328, 'RUA PIO XII', '', '', '', '\n\n', '99628998', '', '09/10/2018', 0, '0', '0'),
(87, 8729589, 4563, 0, 'BLACK DIAMOND TABACARIA', 'LEDIANE', 'M. A . MELOTTI & CIA LTDA', '29589251000135', '', '9077175692', '@', '0', '', 'N', 1, 'S', '85810110', 'CENTRO', 'CASCAVEL', '', 2220, 'R. VISCONDE DE GUARAPUAVA ', '', '', '', '', '99480245', '', '10/10/2018', 0, '0', '0'),
(88, 8830294, 4569, 0, 'MANDA BRASA', 'TIAGO', 'THIAGO DOS SANTOS FERNANDES', '30294727000190', '', '9077938009', '@', '0', '', 'N', 1, 'S', '85840000', 'CENTRO', 'CEU AZUL', '', 0, 'RUA FLORIANOPOLIS', '', '', '', '', '45998427261', '', '10/10/2018', 0, '0', '0'),
(89, 8929269, 5371, 0, 'M. JACK PUB', '', 'MR JACK PUB E RESTAURANTE LTDA', '34871515000189', '', '034/0132523', '@', '0', 'ANDERSON', 'N', 1, 'S', '85811190', 'CENTRO', 'CRUZ ALTA', '', 1779, 'R. BARAO DO RIO BRANCO', 'RS', '', '', '\n\n\n', '5591457009', '', '12/10/2018', 0, '0', '0'),
(90, 9010300, 4563, 0, 'MERCADO MAGELA', 'GERALDO', 'GERALDO MAGELA DE SOUZA', '10300212000148', '', '9045369037', '@', '0', '', 'N', 1, 'S', '85815420', 'BRASILIA', 'CASCAVEL', '', 545, 'R. VEREADOR JOSE DE OLIVEIRA', '', '', '', '', '99777873', '', '15/10/2018', 0, '0', '0'),
(91, 9130617, 4563, 0, 'HOOKAH BLACK', 'ANTENOR', 'A MOREIRA ANDRE COMERCIO', '32537678000102', '', '9090724921', '@', '2', '(empty)', 'N', 1, 'S', '85817470', 'CATARATAS', 'CASCAVEL', '(empty)', 327, 'R. SERRA DO PARATI', 'PR', '', '', '(empty)', '99354370', '(empty)', '16/10/2018', 0, '0', '0'),
(92, 9226125, 5371, 0, 'CHEF BACCO', 'JUNIOR', 'JOAO BATISTA DE MORAES JUNIOR', '26125544000173', '', '0340128550', '@', '0', 'ANDERSON', 'N', 1, 'S', '98005096', 'CENTRO', 'CRUZ ALTA', '', 1551, 'RUA VENANCIO AIRES', '', '', '', '\n', '5596969088', '', '17/10/2018', 0, '0', '0'),
(93, 9330693, 4563, 0, 'BAR DO ZE', 'BIANCA', 'DEMARQ CHOPEIRA E PETISCARIA', '30693195000163', '', '9078355619', '@', '0', '', 'N', 3, 'S', '85805036', 'ALTO ALEGRE', 'CASCAVEL', '', 2372, 'AV. TANCREDO NEVES', '', '', '', '\n', '98311813', '', '17/10/2018', 0, '0', '0'),
(94, 9430430, 1996, 0, 'PIZZARIA J G L', 'LUIZ', 'LUIZ HENRIQUE SANTOS VIEIRA  ', '30430678000175', '', '148780921', '@', '0', '', 'N', 1, 'S', '47640000', 'CENTRO  ', 'SANTA MARIA DA VITORIA', 'TERREO', 1073, 'AVENIDA PERIMETRAL  ', '', '', '', '', '7734831842', '', '18/10/2018', 0, '0', '0'),
(95, 9531098, 4563, 0, 'ARMAZEM BEBIDAS', 'CLAUDIR', 'CLAUDINEIA DOS SANTOS MALACARNE', '33426794000109', '', '', '@', '0', 'DANIEL', 'N', 3, 'S', '85811080', 'CENTRO', 'CASCAVEL', '', 3094, 'MARECHAL RONDOM', '', '', '', '\n\n\n', '45333333333', '', '19/10/2018', 0, '0', '0'),
(96, 9631862, 4563, 0, 'ICE CREAMY', 'HANDREYKA', 'SORVETE NA PEDRA PEDRITA LTDA', '31862073000116', '', '9079605520', '@', '0', 'DANIEL', 'N', 1, 'S', '85810230', 'CENTRO', 'CASCAVEL', '', 432, 'AV TOLEDO', '', '', '', '\n\n\n', '4530388421', '', '22/10/2018', 0, '0', '0'),
(97, 9723696, 4563, 0, 'SUPERMERCADO SANTA ANA', 'LUCIA', 'SUPERMERCADO SANTA ANA EIRELLI EPP', '23696346000171', '', '9070922670', '@', '0', '', 'N', 1, 'S', '85804470', 'GUARUJA', 'CASCAVEL', '', 1513, 'RUA SAMAMBAIAS', '', '', '', '', '32285563', '', '24/10/2018', 0, '0', '0'),
(98, 9812538, 4563, 0, 'FRUTARIA RM', 'CLAUDEMIR', 'FRUTARIA CAMARGO LTDA', '12538482000117', '', '9058517647', '@', '0', '', 'N', 1, 'S', '85803150', 'SANTA FELICIDADE', 'CASCAVEL', '', 1274, 'ANDRE DE BARROS', '', '', '', '', '99894685', '', '24/10/2018', 0, '0', '0'),
(99, 9926200, 4583, 0, 'CARTEL LOUNGE', 'ANDERSON', 'CARTEL LOUNGE BEER BAR LTDA ', '26200453000155', '', '9073202865', '@', '0', '', 'N', 1, 'S', '85902010', 'CENTRO', 'TOLEDO', 'SALA 01', 3284, 'RUA DOM PEDRO II', '', '', '', '', '9986570', '', '24/10/2018', 0, '0', '0'),
(100, 10030917, 4583, 0, 'LIKE CLUB LOUNGE', 'ELIANE', 'LIKE CLUB LOUNGE NARGUILE LTDA', '30917260000197', '', '9078604856', 'eliane.c.moriggi@gmail.com', '1', '', 'N', 1, 'S', '85905380', 'CENTRO', 'TOLEDO', 'SL 01', 2062, 'AV PARIGOT DE SOUZA', '', '', '', '', '998312113', '', '25/10/2018', 0, '0', '0'),
(101, 10109563, 4563, 0, 'STRIKE BIG BOLICHE', 'DENISE', 'REDE BRAZIL GRILL LTDA', '09563027000167', '', '9072558836', '@', '0', '', 'N', 1, 'S', '85801140', 'CENTRO', 'CASCAVEL', '', 2794, 'RUA SETE DE SETEMBRO', 'PR', '', '', '\n', '99812961', '', '26/10/2018', 0, '0', '0'),
(102, 10231421, 4740, 0, 'SAKURA ', 'DIAKSON', 'SAKA UMUARAMA COZINHA ORIENTAL LTDA.', '31421535000160', '', '9079131986', '@', '0', '', 'N', 1, 'S', '87502070', 'ZONA ', 'UMUARAMA', '', 5145, 'R. MINISTRO OLIVEIRA SALAZAR', '', '', '', '', '99694447', '', '27/10/2018', 0, '0', '0'),
(103, 10326503, 4563, 0, 'ALO CAPAS CASCAVEL - R. RIO GRANDE DO SUL', 'ANDREA', 'ANDREA CRISTINA DO CARMO MORAIS', '26503443000270', '', '9076439211', '@', '0', 'ANDERSON', 'N', 1, 'S', '85801010', 'CENTRO', 'CASCAVEL', '', 1038, 'R. RIO GRANDE DO SUL', '', '', '', '\n\n\n', '999182405', '', '05/11/2018', 0, '0', '0'),
(104, 10426503, 4563, 0, 'ALO CAPAS CASCAVEL - R. PARANA', 'ANDREA', 'ANDREA CRISTINA DO CARMO MORAIS', '26503443000199', '', '9076083603', 'alocapascascavel@gmail.com', '0', 'ANDERSON', 'N', 1, 'S', '85810010', 'CENTRO', 'CASCAVEL', '', 2910, 'R. PARANA', '', '', '', '\n\n', '999182405', '', '05/11/2018', 0, '0', '0'),
(105, 10510390, 4563, 0, 'RESTAURANTE EXECUTIVO', 'LUCIANO', 'J.C WAKIMOTO & CIA LTDA.', '10390460000127', '', '9045712610', '@', '0', '', 'N', 1, 'S', '85801130', 'CENTRO', 'CASCAVEL', '', 3897, 'R. CARLOS DE CARVALHO', '', '', '', '', '999515445', '', '05/11/2018', 0, '0', '0'),
(106, 10614380, 4563, 0, 'ESKINA DA PANKEKA', 'DARLAN', 'DAYSI MATTEI DE ABREU', '14380247000195', '', '', '@', '0', '', 'N', 1, 'S', '85801430', 'CENTRO', 'CASCAVEL', '', 0, 'R. VISCONDE DE GUARAPUAVA', '', '', '', '', '999239363', '', '05/11/2018', 0, '0', '0'),
(107, 10713847, 4563, 0, 'CADILAC AMERICAN BURGER', 'OTAVIO', 'OTAVIO RAYZEL DE CARVALHO RESTAURANTE - ME', '13847383000180', '', '9056309460', 'adm@cadilacamericanburger.com.br', '0', 'ANDERSON', 'N', 1, 'S', '85810010', 'CENTRO', 'CASCAVEL', '', 3882, 'RUA PARANA', '', '', '', '\n', '999359922', '', '07/11/2018', 0, '0', '0'),
(108, 10810374, 4563, 0, 'RESTAURANTE DONATELLOS', 'LUCIANO', 'L N YOKOYAMA LTDA. ', '10374208000124', '', '9045630720', '@', '0', 'ANDERSON', 'N', 1, 'S', '85810001', 'CENTRO', 'CASCAVEL', '', 7932, 'AV. BRASIL ', '', '', '', '\n', '999515445', '', '08/11/2018', 0, '0', '0'),
(109, 10924502, 4563, 0, 'PANIFICADORA KAPOTTE', 'PAULO', 'MARLI SANTANA MARCELINO - ME', '24502798000138', '', '9072219381', '@', '0', '', 'N', 1, 'S', '85817310', 'PERIOLO', 'CASCAVEL', '', 1828, 'R. EUROPA ', '', '', '', '', '98626317', '', '08/11/2018', 0, '0', '0'),
(110, 11026503, 4583, 0, 'ALO CAPAS TOLEDO', 'ANDREA', 'ANDREA CRISTINA DO CARMO MORAIS', '26503443000431', '', '9077703460', '@', '0', 'ANDERSON', 'N', 1, 'S', '85908220', 'CENTRO', 'TOLEDO', '', 4729, 'AV. MARIPA', '', '', '', '\n', '999182405', '', '08/11/2018', 0, '0', '0'),
(111, 11126503, 4593, 0, 'ALO CAPAS MARECHAL', 'ANDREA', 'ANDREA CRISTINA DO CARMO MORAIS', '26503443000350', '', '9077168564', '@', '0', 'ANDERSON', 'N', 1, 'S', '85960000', 'CENTRO', 'MARECHAL CANDIDO RONDON', '', 662, 'AV. RIO GRANDE DO SUL', '', '', '', '\n', '999182405', '', '08/11/2018', 0, '0', '0'),
(112, 11226503, 4591, 0, 'ALO CAPAS PALOTINA', 'ANDREA', 'ANDREA CRISTINA DO CARMO MORAIS', '26503443000512', '', '9079165023', '@', '0', 'ANDERSON', 'N', 1, 'S', '85950000', 'CENTRO', 'PALOTINA', '', 1189, 'AV. PRESIDENTE KENNEDY', '', '', '', '\n', '999182405', '', '08/11/2018', 0, '0', '0'),
(113, 11316638, 4563, 0, 'LATA VELHA BURGUER', 'FELIPE', 'ANDRESSA CRISTINA CABRAL VIEIRA', '16638863000129', '', '11122234', '@', '0', '', 'N', 3, 'S', '85810210', 'NEVA', 'CASCAVEL', '', 1197, 'R. PIO XII', '', '', '', '086.158.559-35', '999163561', '', '09/11/2018', 0, '0', '0'),
(114, 11424981, 4583, 0, 'SMOKE HOUSE TABACARIA', 'GILSON/EMERSON', 'SMOKE HOUSE TABACARIA', '24981396000163', '', '123456', '@', '1', '', 'N', 1, 'S', '85909010', 'BOA ESPERANCA', 'TOLEDO', '', 410, 'RUA PRIMEIRO DE MAIO', '', '', '', '', '991016070', '999456213', '10/11/2018', 0, '0', '0'),
(115, 11525531, 4563, 0, 'CLUBE 2000', 'DIAKSON', 'DIAKSON ACACIO MARTINS BAR ME', '25531185000191', '', '9072897967', '@', '0', '', 'N', 1, 'S', '85810080', 'CENTRO', 'CASCAVEL', '', 3901, 'R. CARLOS DE CARVALHO', '', '', '', '', '999694447', '', '10/11/2018', 0, '0', '0'),
(116, 11630275, 4563, 0, 'ARENA COMERCIO DE BEBIDAS LTDA', 'WILSON', 'ARENA COMERCIO DE BEBIDAS LTDA', '30275281000156', '', '9077913278', '@', '0', 'DANIEL', 'N', 1, 'S', '85807030', 'COQUEIRAL', 'CASCAVEL', '', 9021, 'AV BRASIL', '', '', '', '\n', '4533064756', '', '14/11/2018', 0, '0', '0'),
(117, 11728225, 5582, 0, 'HIROSH CULINARIA OCIDENTAL', 'WILTON', 'HIROSHI CULINARIA OCIDENTAL - EIRELI', '28225420000195', '', '142024610 ', 'hiroshiculinariaoriental.lem@gmail.com', '0', '', 'N', 1, 'S', '04785000', 'MIMOSO DO OESTE', 'LUIS EDUARDO MAGALHAES', 'SALA 04', 622, 'RUA CLERISTON ANDRADE', '', '', '', '', '77999507737', '', '16/11/2018', 0, '0', '0'),
(118, 11829708, 4563, 0, 'PAZTA FAST FOOD', 'ARI', 'NICHETTI RESTAURANTE LTDA', '29708132000154', '', '9077293032', '@', '0', '', 'N', 1, 'S', '85810160', 'CENTRO', 'CASCAVEL', '', 2600, 'R. PIO XII', '', '', '', '', '999169179', '', '19/11/2018', 0, '0', '0'),
(119, 11929480, 4507, 0, 'SABORE RESTAURANTE', 'DALILA', 'D. TREVISAN DIAS - EIRELI', '29480748000110', '', '9077072451', 'dalila_trevisan@hotmail.com', '0', '', 'N', 1, 'S', '85420000', 'CENTRO', 'CORBELIA', '', 30, 'AV SANTA CATARINA', '', '', '', '', '4532421555', '', '26/11/2018', 0, '0', '0'),
(120, 12026970, 4563, 0, 'J ADORE CAFE', 'EDWILSON', 'EDWILSON PIERGENTILE JUNIOR - ME', '26970450000109', '', '9074086630', 'jadorecafeetorteria@gmail.com', '0', 'DANIEL', 'N', 1, 'S', '85810010', 'CENTRO', 'CASCAVEL', '', 2899, 'RUA PARANA', '', '', '', '\n', '4598293475', '', '26/11/2018', 0, '0', '0'),
(121, 12129815, 4720, 0, 'STYLUS CELL', 'ALYSSON', 'STYLUS CELL COMERCIO DE ELETRONICOS LTDA', '29815652000166', '', '9077418773', '@', '0', '', 'N', 1, 'S', '87303140', 'CENTRO', 'CAMPO MOURAO', '', 1352, 'RUA SAO PAULO', '', '', '', '', '4499116929', '', '26/11/2018', 0, '0', '0'),
(122, 12210830, 4563, 0, 'THE WALKIES - CASCAVEL', 'MAIKON', 'MAICO ROBSON DE OLIVEIRA', '10830634000125', '', '9048037230', 'thewalkies@hotmail.com', '0', '', 'N', 1, 'S', '85810230', 'CENTRO', 'CASCAVEL', '', 432, 'AV. TOLEDO', '', '', '', '\n', '999550165', '', '26/11/2018', 0, '0', '0'),
(123, 12326434, 4563, 0, 'SNAKE COMÉRCIO DE PRESENTES LTDA', 'MARIANE', 'SNAKE COMÉRCIO DE PRESENTES LTDA', '26434428000136', '', '9073469276', 'financeiro@tabacariasnake.com.br', '0', '', 'N', 1, 'S', '85810000', 'CENTRO', 'CASCAVEL', '', 7356, 'AVENIDA BRASIL', 'PR', '', '', '\n', '33068813', '', '26/11/2018', 0, '0', '0'),
(124, 12422153, 4563, 0, 'LACERDA LANCHES', 'EURICO', 'ESV LANCHES LTDA', '45435256000160', '', '9093499074', '@', '0', '', 'N', 1, 'S', '85811350', 'CLAUDETE', 'CASCAVEL', 'SALA 01', 1525, 'R. JORGE LACERDA', 'PR', '', '', '', '998592475', '', '26/11/2018', 0, '0', '0'),
(125, 12528874, 4478, 0, 'LA MAFIA TRATTORIA GUARAPUAVA', 'RODRIGO/LARISSA', 'MATTOS E GOSMAN LTDA-ME', '28874080000123', '', '9076375493', 'lamafiaguarapuava@gmail.com', '0', '', 'N', 1, 'S', '85012230', 'TRIANON', 'GUARAPUAVA', '', 217, 'RUA BELMIRO MIRANDA', '', '', '', '', '4230356767', '', '26/11/2018', 0, '0', '0'),
(127, 12710623, 4563, 0, 'CENTRAL PIZZA', 'RODRIGO', 'E.A. ZENATTI - RESTAURANTE E PIZZARIA', '32659561000193', '', '9080658912', 'rpazzinatto@yahoo.com.br', '0', '', '', 0, 'S', '85810130', 'CENTRO', 'CASCAVEL', '', 2383, 'RUA PRESIDENTE BERNARDES', 'PR', '', '', '', '4530354949', '04599924520', '26/11/2018', 0, '0', '0'),
(128, 12807484, 4563, 0, 'FRUTARIA MOURA', 'DAUTINA', 'ADEMIR MOURA', '07484894000181', '', '9034750723', '@', '2', '', 'N', 1, 'S', '85817310', 'PERIOLO', 'CASCAVEL', '', 1765, 'R. EUROPA', '', '', '', '', '999492426', '', '27/11/2018', 0, '0', '0'),
(129, 12910247, 4563, 0, 'FRUTARIA PRADO', 'LORIVAL', 'LOURIVAL DE J PRADO ME', '10247715000105', '', '9045199280', '@', '2', '', 'N', 1, 'S', '85816570', 'MORUMBI', 'CASCAVEL', '', 1424, 'AV. CORBELIA', '', '', '', '', '999520380', '', '27/11/2018', 0, '0', '0'),
(130, 13011283, 4563, 0, 'RESTAURANTE CASA DA VOVO', 'ROSE/LETICIA', 'FORNARI E FORNARI LTDA', '11283040000104', '', '9050008026', '@', '0', '', 'N', 1, 'S', '85812040', 'CENTRO', 'CASCAVEL', '', 2272, 'RUA ANTONINA', '', '', '', '', '32239745', '', '27/11/2018', 0, '0', '0'),
(131, 13128748, 4563, 0, 'GIGGIO\'S RESTAURANTE', 'RICARDO', 'GIGGIO\'S RESTAURANTE E PETISCARIA LTDA ME', '28748320000143', '', '9076207949', '@', '0', 'ANDERSON', 'N', 1, 'S', '85812131', 'CENTRO', 'CASCAVEL', '', 789, 'R. ANTONIO ALVES MASSANEIRO', '', '', '', '\n', '999858567', '', '27/11/2018', 0, '0', '0'),
(132, 13221694, 4563, 0, 'MORUMBI GAS', 'SERVIDOR/CAIXA', 'G R DE SOUZA', '21694134000120', '', '9068531753', '@', '0', '', 'N', 1, 'S', '85817750', 'MORUMBI', 'CASCAVEL', '', 190, 'RUA. MONTE NEGRO', '', '', '', '', '999050030', '', '27/11/2018', 0, '0', '0'),
(133, 13330668, 4571, 0, 'THE WALKIES - FOZ DO IGUACU', 'MAICO', 'HEINZ E OLIVEIRA GASTRONOMIA LTDA', '30668968000151', '', '9078331191', 'maico@w', '0', '', 'N', 1, 'S', '85853120', 'VILA IOLANDA', 'FOZ DO IGUACU', '', 3570, 'AV. DAS CATARATAS ', '', '', '', '\n\n', '04599550165', '', '27/11/2018', 0, '0', '0'),
(134, 13408282, 4563, 0, 'MARTIGNONI BEER-CASCAVEL', 'CLARICE/VALDEMAR', 'GILBERTO MARTIGNONI RESTAURANTE-ME', '08282574000101', '', '9038259285', '@', '0', '', 'N', 1, 'S', '85810160', 'CENTRO', 'CASCAVEL', '', 2809, 'RUA PIO XII', '', '', '', '', '4530377878', '', '27/11/2018', 0, '0', '0'),
(135, 13572299, 4563, 0, 'TROPICAL SORVETES', 'DEBORA', 'TROPICAL SORVETES CASCAVEL - EIRELE', '72299860000189', '', '4101425970', '@', '0', '', 'N', 1, 'S', '85802240', 'NEVA', 'CASCAVEL', '', 1184, 'R. CASSIANO JORGE FERNANDO', '', '', '', '', '999874247', '', '27/11/2018', 0, '0', '0'),
(136, 13605440, 4563, 0, 'CHANG LEE', 'DEVAIR', 'CHANG LEE - JET CHICKEN', '05440803000180', '', '9028269711', '@', '0', 'ANDERSON', 'N', 1, 'S', '85812150', 'CENTRO', 'CASCAVEL', '', 1460, 'RUA VICENTE MACHADO', '', '', '', '\n', '984035833', '', '27/11/2018', 0, '0', '0'),
(137, 13709546, 4563, 0, 'ARMAZEM RESTAURANTE', 'LENE/BERTE', 'RESTAURANTE E PETISCARIA BERTE LTDA-ME', '09546588000158', '', '9044083288', '@', '0', 'DANIEL', 'N', 1, 'S', '85812190', 'CENTRO', 'CASCAVEL', '', 1558, 'RUA 13 DE MAIO', '', '', '', '\n', '4530384642', '', '27/11/2018', 0, '0', '0'),
(138, 13808282, 4583, 0, 'RESTAURANTE MARTIGNONI TOLEDO', 'LEO/MARCELO', 'GILBERTO MARTIGNONI RESTAURANTE-ME', '08282574000373', '', '9069341320', '@', '0', 'DANIEL', 'N', 1, 'S', '85905390', 'CENTRO', 'TOLEDO', '', 3222, 'RUA HAROLDO HAMILTON', '', '', '', '\n\n', '4532224064', '', '27/11/2018', 0, '0', '0'),
(139, 13921495, 4583, 0, 'X GAUCHO - R. SATURNO', 'MARCELY', 'JOAO DOS SANTOS BRIZOLA LANCHES EIRELI', '21495216000145', '', '9071486530', '@', '0', '', 'N', 1, 'S', '85905565', 'JARDIM GISELA', 'TOLEDO', '', 907, 'RUA SATURNO', '', '', '', '\n\n\n\n\n\n\n\n', '998558318', '', '28/11/2018', 0, '0', '0'),
(140, 14005624, 4563, 0, 'BOLICHE BOULEVARD', 'TANIA', 'BOULEVARD CASCAVEL LTDA', '05624665000190', '', '9028472002', '@', '0', 'ANDERSON', 'N', 1, 'S', '85816290', 'CENTRO', 'CASCAVEL', '', 2962, 'AV BRASIL', '', '', '', '\n', '988093075', '', '28/11/2018', 0, '0', '0'),
(141, 14130294, 4563, 0, 'MONKA BARRA FOODS', 'CAROL', 'MONKA RESTAURANTE LTDA', '30294281000101', '', '9077937100', '@', '0', 'DANIEL', 'N', 3, 'S', '85810230', 'CENTRO', 'CASCAVEL', '', 225, 'RUA PERNAMBUCO', '', '', '', '', '998224795', '', '29/11/2018', 0, '0', '0'),
(142, 14222889, 4571, 0, 'YUU ASIAN BAR - FOZ DO IGUACU', 'THIAGO/FRAN', 'DIAS E SOARES RESTAURANTE LTDA - ME', '22889077000105', '', '9076689838', '@', '0', '', 'N', 1, 'S', '85851110', 'CENTRO', 'FOZ DO IGUACU', '', 208, 'AV JORGE SCHIMMELPFENG', '', '', '', '\n', '45999342233', '', '29/11/2018', 0, '0', '0'),
(143, 14327194, 4571, 0, 'LA STREGA', 'LUIZ', 'L? ACQUA MOSSA BAR E RESTAURANTE LTDA', '27194050000103', '', '9075124284', '@', '0', '', 'N', 1, 'S', '85851120', 'CENTRO', 'FOZ DO IGUACU', '', 458, 'R. EDMUNDO DE BARROS', '', '', '', '', '4530277946', '991112001', '29/11/2018', 0, '0', '0'),
(144, 14428611, 4504, 0, 'SUPERMERCADO O PONTO', 'LUCAS', 'V. FERREIRA SUPERMERCADO LTDA - ME', '28611229000181', '', '9076017570', '@', '2', '', 'N', 1, 'S', '85408000', 'CENTRO', 'DIAMANTE DO SUL', '', 1234, 'AV. GETULIO VARGAS', '', '', '', '', '999944108', '', '30/11/2018', 0, '0', '0'),
(145, 14526282, 4563, 0, 'CHOCOLATERIE CAFE', 'NAO DEFINICO', 'IASTIAQUE E LAZARI ALIMENTOS LTDA', '26282247000212', '', '9077560685', '@', '0', 'DANIEL', 'N', 1, 'S', '85805000', 'CENTRO', 'CASCAVEL', '', 2071, 'RUA RIO GRANDE DO SUL', '', '', '', '\n', '4599125389', '', '30/11/2018', 0, '200', '0'),
(146, 14625285, 4563, 0, 'LUXX ULTRS LOUNGE', 'DEVAIR', 'LEONIR VITOR DAMASCENO EIRELI - ME', '25285921000179', '', '9072729827', '@', '0', '', 'N', 1, 'S', '85812001', 'CENTRO', 'CASCAVEL', '', 3355, 'RUA PARANA', '', '', '', '', '984035833', '', '01/12/2018', 0, '0', '0'),
(147, 14701271, 4563, 0, 'PANIFICADORA REI DO PÃO', 'SANDRO', 'ALMEIDA & SUPTITZ LTDA.', '01271735000112', '', '9010907001', '@', '0', '', 'N', 1, 'S', '85819740', 'CIRO NARDI', 'CASCAVEL', '', 706, 'RUA DA LAPA', '', '', '', '', '4532251440', '', '03/12/2018', 0, '0', '0'),
(148, 14811737, 4563, 0, 'UNIBAR', 'ANNE', 'PANDULANCHES - LANCHONETE LTDA - ME', '11737476000126', '', '9072936458', 'anne_carolineflor@hotmail.com', '0', '', 'N', 1, 'S', '85810240', 'CENTRO', 'CASCAVEL', '', 536, 'RUA RUI BARBOSA', '', '', '', '', '4499039766', '', '04/12/2018', 0, '0', '0'),
(149, 14921161, 4563, 0, 'PANIFICADORA PAO QUENTE', 'WAGNER', 'W O DUBEN PANIFICADORA ME', '21161295000158', '', '9071503566', '@', '0', '', 'N', 1, 'S', '85802000', 'SANTA FELICIDADE', 'CASCAVEL', '', 232, 'RUA DO SOL', '', '', '', '', '999199694', '', '05/12/2018', 0, '0', '0'),
(150, 15012345, 1779, 0, 'BOUTIQUE DOS SABORES', 'ROGERES MARCIO VIEIRA LIMA', 'BOUTIQUE DOS SABORES', '12345678901230', '', '', 'boutiquesabores69@gmail.com', '0', '', 'N', 1, 'S', '45120000', 'CENTRO', 'BARRA DO CHOCA', '', 662, 'GETÚLIO VARGAS', '', '', '', '', '7183014720', '', '05/12/2018', 0, '0', '0'),
(151, 15123766, 5582, 0, 'RESTAURANTE CACAROLA', 'MARCO AURELIO', 'MARCO AURELIO DRAGHETTI  ', '23766162000130', '', '129154783', '@', '0', '', 'N', 1, 'S', '04785000', 'JARDIM DAS ACACIAS 1 ETAPA ', 'LUIS EDUARDO MAGALHAES', '', 1084, 'RUA DA SUCUPIRA', '', '', '', '', '7736280817', '', '05/12/2018', 0, '0', '0'),
(152, 15227824, 4563, 0, 'BEDUINOS COMIDA ARABE', 'VITOR', 'CELESTINO & KAPICH LTDA ME', '27824913000189', '', '9075159827', '@', '0', 'ANDERSON', 'N', 1, 'S', '85810110', 'CENTRO', 'CASCAVEL', '', 3050, 'R. VISCONDE DE GUARAPUAVA', '', '', '', '\n', '998110735', '', '06/12/2018', 0, '0', '0'),
(153, 15325261, 4563, 0, 'LA MAFIA TRATTORIA', 'LEONARDO', 'AFFETTO CUCINA RESTAURENTE LTDA', '25261612000169', '', '9072718973', 'lamafiacascavel@gmail.com', '0', '', 'N', 1, 'S', '85812260', 'CENTRO', 'CASCAVEL', 'SALA 09', 1602, 'RUA ERECHIM', '', '', '', '', '4533063512', '', '06/12/2018', 0, '0', '0'),
(154, 15427498, 4563, 0, 'MICRO CERVEJARIA CASCAVEL', 'JANELISE', 'INDUSTRIA DE BEBIDAS CASCAVEL EIRELI - ME', '27498144000176', '', '9076531100', '@', '0', '', 'N', 1, 'S', '85817390', 'PERIOLO', 'CASCAVEL', '', 422, 'RUA TOLEDO', '', '', '', '', '999359456', '', '07/12/2018', 0, '0', '0'),
(155, 15531725, 4511, 0, 'MERCADO DO CASSIO', 'CASSIO', 'S MIEKO ITO', '31725818000103', '', '9079461269', 'cassio_carrerinha@hotmail.com', '0', '', 'N', 1, 'S', '08544000', 'JARDIM JOSEFINA', 'UBIRATA', '', 163, 'AV JOAO PIPINO', '', '', '', '', '4498000014', '', '07/12/2018', 0, '0', '0'),
(156, 15623363, 4563, 0, 'PUFFIN LOUNGE BAR', 'EVALDO', 'PUFFIN\' LOUGE BAR - EIRELI - ME', '23363929000180', '', '9070711629', 'sem email', '0', '', 'N', 1, 'S', '85811290', 'CENTRO', 'CASCAVEL', '', 4025, 'RUA PARANA ESQ PIO XII', '', '', '', '', '999201886', '', '12/12/2018', 0, '0', '0'),
(157, 15723259, 4563, 0, 'CANTINA DAS ARTES', 'MARCUS', 'CANTINA DAS ARTES LTDA - ME', '23259183000160', '', '9070977300', 'mvdala@hotmail.com', '0', '', 'N', 3, 'S', '85801100', 'CENTRO', 'CASCAVEL', '', 249, 'RUA DUQUE DE CAXIAS', '', '', '', '\n', '999150085', '', '14/12/2018', 0, '0', '0'),
(158, 15831944, 5168, 0, 'ANGUS STEAKHOUSE MARQUES', 'FRANCIELE', 'ANGUS MARQUES RESTAURANTE EIRELI', '31944406000156', '', '4270030797', '@', '0', '', 'N', 1, 'S', '95588000', 'ATLANTIDA', 'XANGRI-LA', '', 1320, 'AV. CENTRAL', 'RS', '', '', '\n\n', '51033331900', '', '15/12/2018', 0, '0', '0'),
(159, 15904370, 4563, 0, 'OESTE LOJA DE CONVENIENCIA E LOJA DE INFORMATICA', 'WILLIAM', 'OESTE LOJA DE CONVENIENCIA E LOJA DE INFORMATICA', '39505534000105', '', '9086660463', '@', '2', '', 'N', 1, 'S', '85803770', 'PQ SAO PAULO', 'CASCAVEL', '', 609, 'RUA SOUZA NAVES', 'PR', '', '', '\n\n\n\n', '45999210453', '', '18/12/2018', 0, '0', '0'),
(160, 16008228, 4250, 0, 'ESTACAO DO CHOPP', 'DIEGO REP-CAMPO VERDE', 'C. BUSANELLO & CIA LTDA', '08228746000169', '', '133390560', 'Diegobeumer@hotmail.com', '0', '', 'N', 1, 'S', '78840000', 'CENTRO', 'CAMPO VERDE', '', 246, 'R JOAO PESSOA', '', '', '', '', '6696570877', '', '20/12/2018', 0, '0', '0'),
(161, 16116638, 4583, 0, 'X GAUCHO', 'JUNIOR', 'X GAUCHO ', '16638863000129', '', '11122222', '@', '0', '', 'N', 1, 'S', '85810550', 'CENTRO', 'TOLEDO', '', 1, 'R. ', '', '', '', '', '999467686', '', '26/12/2018', 0, '0', '0'),
(162, 16221495, 4583, 0, 'X GAUCHO - D. PEDRO', 'JUNIOR', 'SUSAN PAULA TRENTIN BRIZOLA LANCHES', '32392183000124', '', '111222333', 'juniormat9@hotmail.com', '0', '', 'N', 1, 'S', '85902010', 'CENTRO', 'TOLEDO', '', 3284, 'R. DOM PEDRO II', '', '', '', '\n\n\n\n\n', '999467686', '', '27/12/2018', 0, '187', '0'),
(163, 16324230, 4563, 0, 'LOJA KIWI ', 'MARCELO', 'EDNALDO DE SOUZA CONFECCOES ERIRELI', '24230891000130', '', '9071496845', '@', '2', '', 'N', 1, 'S', '85810000', 'CENTRO', 'CASCAVEL', 'CENTRAL PARK', 6282, 'AV. BRASIL', '', '', '', '', '33065468', '', '08/01/2019', 0, '0', '0'),
(164, 16430617, 4563, 0, 'DR. SMOKE TABACARIA', 'EDUARDO', 'ERESON JOSE SOARES ', '36137505000140', '', '', '@', '0', '', 'N', 1, 'S', '85811030', 'CANCELLI', 'CASCAVEL', '', 2114, 'R. MANAUS ', '', '', '', '\n\n', '991279319', '', '11/01/2019', 0, '0', '0'),
(165, 16509563, 5010, 0, 'TABACARIA SNAKE - CHAPECO', 'MARIANE', 'TABACARIA SNAKE LTDA', '26434428000217', '', '90734692', '@', '0', 'DANIEL', 'N', 1, 'S', '89801002', 'CENTRO', 'CHAPECO', '', 902, 'AV GETULIO DORNELES VARGAS', '', '', '', '\n\n\n', '45999904058', '', '16/01/2019', 0, '0', '0'),
(166, 16628438, 4593, 0, 'CITY OF HOOKAH', 'JAIR MAJOLO', 'CITY TABACARIA LTDA', '28438807000120', '', '9075833765', 'jairmajolo@hotmail.com', '0', 'DANIEL', 'N', 1, 'S', '85960000', 'CENTRO', 'MARECHAL CANDIDO RONDON', '', 1659, 'RUA PERNAMBUCO', '', '', '', '\n', '45999253061', '', '23/01/2019', 0, '0', '0'),
(167, 16710228, 4563, 0, 'MERCADO ANGRA', 'GERSON/MIRNA', 'M WEHRMANN COMERCIO DE ALIMENTOS LTDA', '10228918000146', '', '9044929225', 'mercadoangra@hotmail.com', '0', '', 'N', 1, 'S', '85806060', 'STA CRUZ', 'CASCAVEL', '', 326, 'RUA APALAIS', 'PR', '', '', '', '4532260627', '', '24/01/2019', 0, '0', '0'),
(168, 16808658, 1778, 0, 'RESTAURANTE JOMARC', 'MARCOS', 'CLOVIS MARCOS ALVES LEITE', '08658533000177', '', '073298645', 'mercadojomarc@gmail.com', '0', 'RAFAEL', 'N', 1, 'S', '45030160', 'IBIRAPUERA', 'VITORIA DA CONQUISTA', '', 640, 'AVENIDA MARANHAO', '', '', '', '\n', '7734256608', '', '25/01/2019', 0, '100', '0'),
(169, 16905514, 4563, 0, 'RESTAURANTE MARICOTA', 'MARI', 'RESTAURANTE MARICOTA EIRELI - ME', '05514266000176', '', '9027646074', '@', '0', '', 'N', 1, 'S', '85810000', 'CENTRO', 'CASCAVEL', 'CENTRAL PARK', 6282, 'AV BRASIL', '', '', '', '', '4530357707', '', '29/01/2019', 0, '0', '0'),
(170, 17030617, 4563, 0, 'HIGH CLASS TABACARIA', 'ALEXANDRE MACHADO MINOZZO', 'N TARCISIO MINOZZO TABACARIA', '20875594000191', '', '9078281666', 'highclasstabacaria@outlook.com', '0', '', 'N', 1, 'S', '85807030', 'COQUEIRAL', 'CASCAVEL', 'SALA 2', 9046, 'AV. BRASIL', '', '', '', '\n', '398233202', '', '04/02/2019', 0, '0', '0'),
(171, 17127036, 4513, 0, 'EUPHORIA HOOKAH LOUNGE', 'MAYCON', 'EUPHORIA HOOKAH LOUNG BAR EIRELI', '27036109000135', '', '9074227470', '@', '0', '', 'N', 1, 'S', '85460000', 'CENTRO', 'QUEDAS DO IGUACU', '', 1348, 'RUA LARANJEIRAS', '', '', '', '', '46999315959', '', '06/02/2019', 0, '0', '0'),
(172, 17226166, 4563, 0, 'O COSTELAO', 'EDER', 'CASA DE CARNES BATISTA LTDA ME', '26166084000121', '', '907312491', '@', '0', '', 'N', 1, 'S', '85814480', 'FLORESTA', 'CASCAVEL', '', 791, 'R. DAS PERDIZES', '', '', '', '', '999592041', '', '12/02/2019', 0, '0', '0'),
(173, 17332650, 4563, 0, 'LUQUI BRINQUEDOS E PRESENTES', 'JADER/LUCAS', 'L. M. FAGUNDES-EIRELLI', '32650888000102', '', '9080339817', 'compras@luqui.com.br', '2', '', 'N', 1, 'S', '85812003', 'CENTRO', 'CASCAVEL', '', 5571, 'AV BRASIL', '', '', '', '', '4533066000', '', '13/02/2019', 0, '0', '0'),
(174, 17432761, 4563, 0, 'VIKING BURGER GRILL', 'ADRIAN', 'VIKING BURGER', '32761853000132', '', '111222333', 'vikingburgergrill@hotmail.com', '0', '', 'N', 1, 'S', '85810430', 'CENTRO', 'CASCAVEL', 'SALA 1', 4461, 'R. PARANA ', '', '', '', '', '30966212', '', '16/02/2019', 0, '0', '0'),
(175, 17522258, 4563, 0, 'CASA DA MARMITA', 'ANTONIO', 'FRANCISCO MARTINS MACHADO', '22258737000141', '', '9080412085', '@', '0', 'ANDERSON', 'N', 1, 'S', '85817560', 'CATARATAS', 'CASCAVEL', '', 86, 'RUA SERRA DOS ANDES', '', '', '', '\n', '999414341', '', '22/02/2019', 0, '90', '0'),
(176, 17618237, 5582, 0, 'PIZZARIA E CHURRASCARIA PIZZA NA PEDRA', 'A', 'ILVIO DANTAS FAGUNDES NETO', '18237416000193', '', '109446790', 'a', '0', '', 'N', 1, 'S', '45037270', 'ESPIRITO SANTO', 'LUIS EDUARDO MAGALHAES', '', 8, 'AVENIDA LAURA NUNES', 'BA', '', '', '\n', '7788716999', '', '23/02/2019', 0, '0', '600'),
(177, 17732691, 1778, 0, 'DELLAS MASSA', 'RONI', 'VIRNA LIZ PIZZARIA E RES', '32691096000178', '', '155396812 ', 'ronirenealvesroni@gmail.com', '0', 'RAFAEL', 'N', 1, 'S', '45028265', 'CANDEIAS  ', 'VITORIA DA CONQUISTA', '', 900, 'AVENIDA BRASIL  ', '', '', '', '\n\n\n', '77992071330', '', '27/02/2019', 0, '0', '0'),
(178, 17822674, 4536, 0, '2WA BURGER HOUSE', '', '2WA RESTAURANTE EIRELE', '36007500000100', '', '9069677310', '', '0', 'DANIEL', 'N', 3, 'S', '85601270', 'CENTRO', 'FRANCISCO BELTRAO', '', 698, 'AV ANTONIO DE PAIVA CANTELMO', '', '', '', '', '4626010302', '', '01/03/2019', 0, '0', '0'),
(179, 17916638, 17916638, 0, 'CONTROLE SISTEMAS', '', 'CONTROLE SISTEMAS', '16638863000129', '', '111111111', '@', '0', '', 'N', 3, 'S', '85804420', 'CENTRO', 'CASCAVEL', '', 2504, 'RUA MARECHAL RONDON', 'PR', '', '', '', '30391786', '', '04/03/2019', 0, '0', '0'),
(180, 18016638, 4563, 0, 'CRESPIN', 'ANDERSON', 'CRESPIN', '16638863000129', '', '11122233  ', '@', '0', 'DANIEL', 'N', 1, 'S', '85811290', 'CANCELLI', 'CASCAVEL', '', 190, 'R. ALBERY ANTONIO RICHARD', '', '', '', '\n\n\n\n', '99865700', '', '04/03/2019', 0, '0', '0'),
(181, 18117520, 5010, 0, 'CHOPERIA VILA BOEMIA', 'FABIO', 'CHOPERIA VILA BOEMIA', '17520077000195', '', '123       ', '@', '0', 'DANIEL', 'N', 1, 'S', '89805001', 'PASSO DOS FORTES', 'CHAPECO', '', 2465, 'AV GETULIO VARGAS', '', '', '', '\n', '4930250520', '', '08/03/2019', 0, '0', '0'),
(182, 18218256, 4563, 0, 'LUGUI BEER BEBIDAS', 'RENATO', 'LUGUI BEER BEBIDAS', '18256624000130', '', '111222333', '@', '0', 'ANDERSON', 'N', 1, 'S', '85811290', 'COUNTRY', 'CASCAVEL', '', 440, 'R. MANAUS', '', '', '', '\n\n\n', '999464376', '', '09/03/2019', 0, '0', '0'),
(183, 18330428, 4563, 0, 'PANIFICADORA E CONFEITARIA MILY', 'RAQUEL', 'PANIFICADORA E CONFEITARIA MILY LTDA', '30428237000139', '', '9078081144', 'raquel.milymatos@hotmail.com', '0', 'ANDERSON', 'N', 1, 'S', '85812181', 'REGIAO DO LAGO', 'CASCAVEL', '', 382, 'RUA RAFAEL PICOLI', '', '', '', '\n', '998205820', '', '15/03/2019', 0, '150', '0'),
(184, 18422331, 4589, 0, 'PIRATA\'S BAR', 'MIQUEIAS', 'MARCIANE LOPES DO REIS ORLANDO', '22331943000130', '', '1         ', '@', '0', 'DANIEL', 'N', 1, 'S', '00000085', 'CENTRO', 'TUPASSI', '', 101, 'AV CASTELO BRANCO', '', '', '', '\n\n', '44997467076', '', '18/03/2019', 0, '0', '0'),
(185, 18523539, 1778, 0, 'PIZZARIA DA CHAPADA', 'LETICIA', 'JOSE HENRIQUE PIRES DA SILVA', '23539668000107', '', '128327016', 'letticruz03@hotmail.com', '0', 'RAFAEL', 'N', 1, 'S', '45005012', 'ALTO MARON', 'VITORIA DA CONQUISTA', '', 36, 'RUA MONTESE', '', '', '', '\n\n\n', '77910001055', '', '18/03/2019', 0, '100', '400'),
(186, 18611441, 4563, 0, 'ZZ LANCHES ', 'FAGNER', 'ZENI DOMINGUES ME', '11441096000140', '', '9050635616', '@', '0', 'ANDERSON', 'N', 3, 'S', '85806020', 'SANTA CRUZ', 'CASCAVEL', '', 886, 'R. XAVANTES ', '', '', '', '\n\n', '998078869', '', '20/03/2019', 0, '0', '0');
INSERT INTO `EMPRESAS` (`ID`, `IDCLOUD`, `IDCIDADE`, `IDREPRESENTANTE`, `NOMEFANTASIA`, `NOMECONTATO`, `RAZAOSOCIAL`, `CNPJ`, `CNAE`, `INSCRICAOESTADUAL`, `EMAIL`, `RAMOATIVIDADE`, `REPRESENTANTE`, `NOVO`, `STATUS`, `ATIVO`, `CEP`, `BAIRRO`, `CIDADE`, `COMPLEMENTO`, `NUMERO`, `ENDERECO`, `UF`, `DATAVIGENCIA`, `CADASTRADAPOR`, `OBSERVACOES`, `FONECOBRANCA`, `FONEADICIONAL`, `DATAINICIO`, `DIASLICENCAPROVISORIA`, `VALORMENSALIDADE`, `VALORIMPLANTACAO`) VALUES
(187, 18725201, 1778, 0, 'AQUILA LANCHES', 'AQUILA', 'JOSE HENRIQUE PIRES DA SILVA', '25201049000133', '', '128327016 ', '@', '0', 'RAFAEL', 'N', 1, 'S', '45005012', 'ALTO MARON', 'VITORIA DA CONQUISTA', '', 36, 'RUA MONTESE  ', '', '', '', '\n\n\n\n\n', '7788662669', '', '20/03/2019', 0, '0', '0'),
(188, 18824259, 1778, 0, 'PIZZARIA NA PEDRA II', 'NAYARA', 'PIZZARIA.SANTOS.PEREIRA.LTDA  ', '24259172000142', '', '130827306', '', '0', 'RAFAEL', 'N', 3, '', '45028440', 'CANDEIAS', '', '', 1495, 'AVENIDA LUIS EDUARDO MAGALHAES ', 'BA', '', '', '\n\n\n\n\n', '7788670871', '', '28/03/2019', 0, '0', '0'),
(189, 18933159, 4563, 0, 'RESTAURANTE E PIZZARIA DO MARQUES', 'MARCOS', 'M. A . STEINKE PIZZARIA', '33159576000155', '', '111222333', '', '0', '', 'N', 1, '', '85801021', 'CENTRO', '', '', 2171, 'R. SAO PAULO ', 'PR', '', '', '\n\n', '999881875', '', '28/03/2019', 0, '300', '0'),
(190, 19028919, 4563, 0, 'SANATORIO GASTRONOMICO', 'CLAUDIA', 'ALEXANDRE BRESSANELLI SOUL COOKIE EIRELLI', '28919811000100', '', '123', '', '0', 'DANIEL', 'N', 1, '', '85802020', 'NEVA', '', '', 1589, 'RUA PIO XVII', 'PR', '', '', '\n\n\n', '45999000142', '', '28/03/2019', 0, '180', '0'),
(191, 19176095, 4563, 0, 'CONGREGACAO CRISTA NO BRASIL', 'MARCOS/JORGE', 'CONGREGACAO CRISTA NO BRASIL', '76095249000190', '', '', '', '0', 'DANIEL', 'N', 1, '', '85810230', 'CENTRO', '', '', 785, 'AV TOLEDO', 'PR', '', '', '\n\n', '4532265917', '', '01/04/2019', 0, '0', '0'),
(192, 19232912, 4571, 0, 'LOJA KIWI', 'CAMILA THIBES', 'CAMILA SARMENTO THIBES - VESTUARIO', '32912406000137', '', '9080640118', '', '0', 'ANDERSON', 'N', 1, '', '85851030', 'CENTRO', '', '', 1599, 'R. MARECHAL DEODORO DA FONSECA ', 'PR', '', '', '\n\n', '999011889', '', '02/04/2019', 0, '100', '0'),
(193, 19327862, 4250, 0, 'FILEZINHO LANCHES EIRELI ME', 'RODRIGO', 'FILEZINHO LANCHES EIRELI ME', '27862173000175', '', '136885497', '@', '0', 'DIEGO', 'N', 1, '', '00788400', 'CENTRO', 'CAMPO VERDE', '', 21, 'RUA SANTOS', 'MT', '', '', '\n\n\n', '66996094219', '', '04/04/2019', 0, '320', '0'),
(194, 19427748, 4583, 0, 'A TABERNA COLONIAL', 'REGIS', 'EDUARDO HENRIQUE CARNEIRO', '27748170000105', '', '111111111', '@', '0', 'DANIEL', 'N', 1, '', '85900010', 'CENTRO', 'TOLEDO', '', 3028, 'RUA SANTOS DUMONT', 'PR', '', '', '\n\n', '998177720', '', '05/04/2019', 0, '180', '150'),
(195, 19529589, 4563, 0, 'JAMES HOOKAH', 'LEDIANE', 'BEIRA E DONIN LTDA', '33447688000101', '', '111222333', '@', '0', 'ANDERSON', 'N', 1, '', '85810031', 'CENTRO', 'CASCAVEL', '', 2059, 'RUA RECIFE', 'PR', '', '', '\n\n\n\n', '3222-0590', '', '08/04/2019', 0, '0', '0'),
(196, 19626503, 4563, 0, 'ALO CAPAS AV. BRASIL', 'ANDREA', 'ANDREA CRISTINA DO CARMO MORAIS - ME', '26503443000601', '', '9080889302', '@', '0', 'ANDERSON', 'N', 1, '', '85810001', 'CENTRO', 'CASCAVEL', '', 6722, 'AV. BRASIL', 'PR', '', '', '\n', '999182405', '', '11/04/2019', 0, '90', '0'),
(197, 19729242, 4563, 0, 'M. PASTORE HUF - ME', '999031040', 'M. PASTORE HUF - ME', '29242287000148', '', '907684', 'mairapastorehuf@hotmail.com', '0', 'ANDERSON', 'N', 1, '', '85812269', 'CENTRO', 'CASCAVEL', '', 308, 'R. ERECHIM', 'PR', '', '', '\n', '999031040', '', '18/04/2019', 0, '100', '300'),
(198, 19832650, 4563, 0, 'FAZENDA LUQUI', 'LUCAS', 'FAZENDA LUQUI', '32650888000102', '', '9080339817', 'compras@luqui.com.br', '0', 'DANIEL', 'N', 1, '', '85812003', 'CENTRO', 'CASCAVEL', '', 5571, 'AV BRASIL', 'PR', '', '', '\n\n\n\n', '45999349800', '', '22/04/2019', 0, '0', '0'),
(199, 19906174, 4571, 0, 'FOX TABACARIA', 'wilian', 'LFA TABACARIA LTDA', '42437230000162', '', '9089747942', 'willian@foxatacado.com.br', '0', '', 'N', 1, '', '85851170', 'CENTRO', 'FOZ DO IGUACU', '', 531, 'RUA RUI BARBOSA', 'PR', '', '', '', '999468177', '', '23/04/2019', 0, '0', '0'),
(200, 20033038, 4563, 0, 'MOMA GASTRONOMIA ARABE', 'ADRIANO', 'MOMA GASTRONOMIA ARABE LTDA', '33038742000165', '', '9080804404    ', 'gastronomiamoma@gmail.com', '0', '', '', 0, '', '85812035', 'CENTRO', 'CASCAVEL', '', 2209, 'RUA MINAS GERAIS', 'PR', '', '', '', '4530380006', '984332312', '24/04/2019', 0, '0', '0'),
(201, 20131794, 5082, 0, 'CHICAGO BURGER', 'PEDRO', 'POPPI CARDOSO COMERCIO DE ALIMENTOS LTDA', '31794920000152', '', '0963750933', '', '0', 'ANDERSON', 'N', 1, '', '90000000', 'MONT SERRAT', '', '', 637, 'R. ANITA GARIBALDI', 'RS', '', '', '\n', '5191772633', '', '25/04/2019', 0, '0', '0'),
(202, 20220916, 4563, 0, 'CHICAGO BURGER', 'PEDRO', 'CHICAGO BURGER', '20916120000140', '', '9068354100', '@', '0', '', 'N', 1, '', '85800000', 'CENTRO', 'CASCAVEL', '', 7624, 'AV. BRASIL', 'PR', '', '', '\n\n\n', '5191772633', '', '25/04/2019', 0, '0', '0'),
(203, 20329142, 5085, 0, 'CHICAGO BURGER', 'PEDRO', 'CARDOSO E POPPI BURGER COM. ALIM. LTDA', '29142889000123', '', '0240503775', '', '0', 'ANDERSON', 'N', 1, '', '92020475', 'MARECHAL RONDON', '', '', 4545, 'AV. FARROPILHA ', 'RS', '', '', '\n', '5191772633', '', '25/04/2019', 0, '0', '0'),
(204, 20417332, 4571, 0, 'LA MAFIA TRATTORIA', 'VANDERSON', 'LA MAFIA TRATTORIA LTDA - ME', '17332657000159', '', '9061734098', '@', '0', '', 'N', 1, '', '85852320', 'VILA REMIGIO', 'FOZ DO IGUACU', '', 195, 'RUA WATSLAF NIERADKA', 'PR', '', '', '\n\n', '4530276244', '', '27/04/2019', 0, '0', '0'),
(205, 20522208, 4563, 0, 'HERO INFORMATICA', 'RODRIGO', 'HERO INFORMATICA LTDA', '22208015000182', '', '9080853880', 'herocascavel@hotmail.com', '0', '', 'N', 1, '', '85813130', 'CENTRO', 'CASCAVEL', 'SALA 01', 2571, 'RUA ENGENHEIRO REBOUCAS', 'PR', '', '', '', '4532278962', '45984220253', '02/05/2019', 0, '0', '0'),
(206, 20633456, 4563, 0, 'ALECRIM REFEICOES', 'JOSIANE', 'R F DOS SANTOS SILVA - ALIMENTOS - EIRELI', '33456060000172', '', '9081250291', 'escnucleo@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85806670', 'ESMERALDA', 'CASCAVEL', '', 121, 'RUA SAFIRA', 'PR', '', '', '\n\n', '4598060025', '', '02/05/2019', 0, '80', '0'),
(207, 20718505, 4511, 0, 'MOCA CHIC-UBIRATA', 'LUDMILA', 'M.A.T.S. KAWATABA-ME', '18505351000110', '', '9063667703', 'mocabijuubirata@gmail.com', '0', '', '', 1, '', '8544040', 'CENTRO', 'UBIRATA', '', 817, 'RUA HERCOLINO OTAVIANO', 'PR', '', '', '', '44935434296', '', '04/05/2019', 0, '100', '0'),
(208, 20816638, 4563, 0, 'TEMPERO VERDE ', 'JULIANE', 'TEMPERO VERDE', '16638863000129', '', '111222333', 'kerlynsabrina@hotmail.com', '0', 'ANDERSON', 'N', 1, '', '85811290', 'SANTA CRUZ', 'CASCAVEL', '', 793, 'R. KRAHOS', 'PR', '', '', '\n', '998457469', '', '07/05/2019', 0, '100', '600'),
(209, 20923164, 4563, 0, 'TABACARIA NARGUIS', 'ADEMIR', 'A. F. CORREIA - TABACARIA ME', '23164133000107', '', '9070276515', '@', '0', 'ANDERSON', 'N', 1, '', '85814760', 'FLORESTA', 'CASCAVEL', '', 884, 'R. PAPAGAIOS', 'PR', '', '', '\n', '999474402', '', '08/05/2019', 0, '100', '0'),
(210, 21032333, 4593, 0, 'MAKTUB BAR ', 'RUBIANO', 'RUBIANO MARTINS DA SILVA', '32333161000193', '', '', 'contatofsmidias@gmail.com', '0', '', 'N', 3, '', '85960000', 'ALVORADA', 'MARECHAL CANDIDO RONDON', '', 3022, 'R RUA 7 DE SETEMBRO', 'PR', '', '', '\n', '45999489710', '', '09/05/2019', 0, '0', '0'),
(211, 21124674, 4563, 0, 'ALUMINE ESQUADRIAS DE ALUMINIOS', 'RONALDO', 'JESUS E SOUZA ESQUADRIAS DE ALUMINIO LTDA - ME', '24674607000115', '', '9072042600', 'mazutticontabil@hotmail.com', '0', 'ANDERSON', 'N', 1, '', '85811352', 'CANCELLI', 'CASCAVEL', '', 3675, 'RJORGE LACERDA', 'PR', '', '', '\n', '999910033', '', '14/05/2019', 0, '100', '0'),
(212, 21224339, 1778, 0, 'RESTAURANTE CASA DO CHEF', 'OBEDY', 'RESTAURANTE E PIZZARIA ALMEIDA AZEVEDO LTDA  ', '24339514000134', '', '131088991', '@', '0', 'RAFAEL', 'N', 1, '', '45028070', 'CANDEIAS', 'VITORIA DA CONQUISTA', '', 45, 'AVENIDA ALBERTO LEAL', 'BA', '', '', '\n', '77999534518', '', '15/05/2019', 0, '150', '0'),
(213, 21330950, 4563, 0, 'VARANDA STEAK HOUSE', 'RODRIGO', 'VARANDA STEAK HOUSE', '30950966000150', '', '111222333', '@', '0', '', 'N', 1, '', '85811290', 'CENTRO', 'CASCAVEL', '', 1111, 'RUA MARECHAL RONDON', 'PR', '', '', '\n', '999959556', '', '24/05/2019', 0, '150', '400'),
(214, 21432272, 4560, 0, 'MARIA PIZZARIA', 'BRUNA', 'DONA MARIA PIZZARIA LTDA', '32272453000163', '', '9080051120', 'brumachado_@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85780000', 'CENTRO', 'BOA VISTA DA APARECIDA', '', 791, 'RUA CICEIRO BARBOSA SOBRINHO', 'PR', '', '', '\n', '45999110686', '', '28/05/2019', 0, '200', '0'),
(215, 21527716, 4563, 0, 'MAIS ACAI', 'GUSTAVO', 'G DE MORAES CASSINS - ME', '27716048000238', '', '9075670440', 'gustavo_cassins@hotmail.com', '0', '', 'N', 1, '', '85810230', 'CENTRO', 'CASCAVEL', '', 432, 'AV TOLEDO', 'PR', '', '', '\n', '998045475', '', '03/06/2019', 0, '0', '0'),
(216, 21633585, 4563, 0, 'RESTAURANTE FEIJO', 'GUSTAVO', 'GUIMARES E RIBEIRO C. ALIMENTOS ', '33585269000136', '', '9081388218', '@', '0', 'ANDERSON', 'N', 1, '', '85812260', 'CENTRO', 'CASCAVEL', '', 1593, 'R. ERECHIM', 'PR', '', '', '\n', '30352992', '', '05/06/2019', 0, '100', '300'),
(217, 21733664, 4563, 0, 'CANTINA DAS PIZZAS', 'RICARDO', 'FERNANDA DOS SANTOS FARIAS', '33664139000199', '', '11122233', '@', '0', 'ANDERSON', 'N', 1, '', '85812090', 'CENTRO', 'CASCAVEL', '', 489, 'R. ANTONIO ALVES MASSANEIRO', 'PR', '', '', '\nGiggios\n\n\n\n', '33068218', '', '06/06/2019', 0, '0', '0'),
(218, 21833252, 4571, 0, 'LA STREGA', 'LEIDIANE', 'LA STREGA RESTAURANTE EIRELI', '33252852000125', '', '9081042770', '@', '0', '', 'N', 1, '', '85851120', 'CENTRO', 'FOZ DO IGUACU', '', 458, 'R. EDMUNDO DE BARROS', 'PR', '', '', '\n\n', '4530277946', '', '06/06/2019', 0, '0', '0'),
(219, 21927880, 4563, 0, 'VIP ARTESANTOS', 'CARLA', 'CARLA REGINA ACHRE', '27880411000175', '', '9081588730', '@', '0', 'ANDERSON', 'N', 1, '', '85817130', 'PERIOLO', 'CASCAVEL', '', 167, 'R. JARAGUA', 'PR', '', '', '\n', '998155924', '', '11/06/2019', 0, '100', '300'),
(220, 22028678, 4563, 0, 'COMERCIO DE ARTIGOS DO VESTUARIO ROTA DO SOL', 'GEAZI', 'COMERCIO DE ARTIGOS DO VESTUARIO ROTA DO SOL', '28678913000180', '', '9076114428', '@', '0', 'DANIEL', 'N', 1, '', '85807540', 'COQUEIRAL', 'CASCAVEL', '', 509, 'RUA JOAO LILI CIRICO', 'PR', '', '', '\nGeassi\n', '4533333333', '', '12/06/2019', 0, '0', '0'),
(221, 22118651, 4583, 0, 'SANTO EXPEDITO REFEICOES', '', 'ELIANE CRISTINA REUTER 06022876931', '18651295000121', '', '9068187017', '@', '0', '', 'N', 1, '', '85900050', 'CENTRO', 'TOLEDO', '', 6092, 'RUA SAO JOAO', 'PR', '', '', '\n\n\n', '', '', '14/06/2019', 0, '0', '0'),
(222, 22231725, 4740, 0, 'STRIKE BOWLING E BAR', 'DIAKSON', 'VERAS E CANALI LTDA.', '31725521000130', '', '9079461188', '@', '0', 'ANDERSON', 'N', 1, '', '87502070', 'ZONA III', 'UMUARAMA', '', 5145, 'R. MIISTRO OLIVEIRA SALAZAR', 'PR', '', '', '\n', '30553590', '', '18/06/2019', 0, '180', '0'),
(223, 22333468, 4518, 0, 'TABACARIA SNAKE PATO BRANCO', 'MARIANE', 'SNAKE COMERCIO DE SUVENIRES LTDA', '33468837000119', '', '9081263431', 'financeiro@tabacariasnake.com.br', '0', '', 'N', 1, '', '85501268', 'CENTRO', 'PATO BRANCO', 'SL 01', 2715, 'AV TUPI', 'PR', '', '', '\n\n\n', '46991091153', '', '25/06/2019', 0, '200', '200'),
(224, 22431850, 4563, 0, 'DOGUELICIA & CIA', 'GENIVAL', 'GENIVAL FIGUEREO NASCIMENTO ', '31850465000165', '', '152853222', 'genival.invito@gmail.com', '0', 'THIAGO', 'N', 3, '', '47850000', 'MIMOSO DO OESTE', 'LUIZ ANT MAGALHAES', '', 1001, 'RUA GOIAS', 'BA', '', '', '\n\n\n', '7781320106', '', '26/06/2019', 0, '150', '0'),
(225, 22527498, 4563, 0, 'CHOPP CASCAVEL ', 'JANELISE', 'INDUSTRIA DE BEBIDAS CASCAVEL LTDA', '27498144000257', '', '9081549408', 'cervejariacascavel@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85813100', 'COUTRY', 'CASCAVEL', '', 366, 'R. MANAUS', 'PR', '', '', '\n', '99323159', '', '26/06/2019', 0, '150', '600'),
(226, 22612233, 4563, 0, 'PAIOLLO', 'MARCUS', 'PAIOLLO TRATTORIA LTDA ME', '12233456000180', '', '9054065318', '@', '0', '', 'N', 3, '', '85810030', 'CENTRO', 'CASCAVEL', '', 782, 'R. RECIFE', 'PR', '', '', '\n\n', '99150085', '', '29/06/2019', 0, '0', '0'),
(227, 22734005, 4390, 0, 'MASTER PIZZA', 'LEVI/ROSANGELA', 'GRATI PIZZARIA LTDA', '34005734000185', '', '9081815906', 'levysilvajunior@yahoo.com.br', '0', 'DANIEL', 'N', 1, '', '80320040', 'VILA IZABEL', 'CURITIBA', '', 331, 'R PROFESSOR ALVARO JORGE', 'PR', '', '', '\n', '41992457608', '', '01/07/2019', 0, '250', '0'),
(228, 22815843, 4589, 0, 'FLIPER BURGUER', 'JONAS', 'JONAS HENRIQUE PICCIN DE MELO', '15843107000179', '', '', '@', '0', 'DANIEL', 'N', 1, '', '85945000', 'JARDIM SAO PAULO', 'TUPASSI', '', 383, 'RUA 15 DE NOVEMBRO', 'PR', '', '', '\n\n', '44999951913', '', '03/07/2019', 0, '180', '0'),
(229, 22911821, 4589, 0, 'PORTUGUES CONVENIENCIA', 'ODAIR', 'J I H S PICAO COMERCIO DE BEBIDAS', '11821252000106', '', '9051678637', 'kukapicao@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85945000', 'CENTRO', 'TUPASSI', '', 341, 'AV PRESIDENTE CASTELO BRANCO', 'PR', '', '', '\n\nFLIPER BURGUER', '44999298885', '', '03/07/2019', 0, '0', '0'),
(230, 23022655, 4563, 0, 'MERCADO LAZARIM', 'DARCI', 'MERCADO LAZARIM', '22655472000115', '', '9069697426', '@', '0', 'ANDERSON', 'N', 1, '', '85805260', 'ALTO ALEGRE', 'CASCAVEL', '', 4794, 'RUA CUIABA', 'PR', '', '', '\n', '4530386803', '', '11/07/2019', 0, '0', '0'),
(231, 23111048, 4518, 0, 'DOM BURGUER - PATO BRANCO', 'DANIELE', 'TIAGO CICHOCKI E CIA LTDA', '11048689000140', '', '9049063870', 'domffb@hotmail.com', '0', 'DANIEL', '', 1, '', '8550101', 'CENTRO', 'PATO BRANCO', '', 1480, 'AV TUPI', 'PR', '', '', '\n\n', '46930251150', '', '25/07/2019', 0, '50', '0'),
(232, 23232017, 1778, 0, 'HOT DOG DO GORDO', 'LUCAS', 'CLAUDIA RIBEIRO SANTOS 78742277515  ', '32017047000154', '', '153354414', '@', '0', 'RAFAEL', 'N', 3, '', '45078244', 'ZABELE', 'VITORIA DA CONQUISTA', '', 26, 'VIA LOCAL F (VL SERRANA I)  ', 'BA', '', '', '\n\n\n', '7791686044', '', '25/07/2019', 0, '0', '0'),
(233, 23322073, 4569, 0, 'MANDA BRASA', 'MARIO/FRANCIELE', 'JANETE B FACIM', '22073101000125', '', '123       ', 'mariotadeu123@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85840000', 'CENTRO', 'CEU AZUL', '', 650, 'RUA TEREZINA', 'PR', '', '', '\n\n\n', '999960947', '', '26/07/2019', 0, '150', '0'),
(234, 23418505, 4563, 0, 'MOCA CHIC - CASCAVEL', 'CIDA', 'M A T S KAWABATA', '18505351000209', '', '9078274880', 'ciciliatoef3@hotmail.com', '0', '', '', 1, '', '8580101', 'CENTRO', 'CASCAVEL', '', 787, 'RUA RIO GRANDE DO SUL', 'PR', '', '', '', '44999943506', '', '03/08/2019', 0, '0', '0'),
(235, 23534385, 4725, 0, 'MOCA CHIC - CAMPINA DA LAGOA', 'CIDA', 'TORRES & NORONHA LTDA', '34385947000180', '', '9082210870', 'ludmila.angelossi@hotmail.com', '0', 'DANIEL', '', 1, '', '8734545', 'CENTRO', 'CAMPINA DA LAGOA', '', 705, 'AV BRASIL', 'PR', '', '', '', '44997492244', '', '06/08/2019', 0, '100', '0'),
(236, 23630921, 4695, 0, 'BLEND GIN BASED BAR LTDA', 'DAIANE', 'BLEND GIN BASED BAR LTDA', '30921255000158', '', '9078608924', 'daianefrison@gmail.com', '0', 'DANIEL', 'N', 1, '', '87014120', 'ZONA 04', 'MARINGA', '', 100, 'PCA MANOEL RIBAS', 'PR', '', '', '\n\n\n', '4430413424', '', '08/08/2019', 0, '280', '800'),
(237, 23732117, 4563, 0, 'PIT STOP ESPETINHOS GOURMET ', 'FERNANDO', 'FERNANDA DA SILVA MAZO 09083772900 ', '32117849000136', '', '09083772900 ', '@', '0', 'DANIEL', '', 1, '', '8581313', 'COUNTRY', 'CASCAVEL', '', 210, 'R GUIDO VIARO', 'PR', '', '', '', '999024847', '', '08/08/2019', 0, '0', '0'),
(238, 23821379, 4563, 0, 'MARIA CEREJA ATELIE DOCES', 'TESTE', 'ATELIE DE DOCES IRMAS CEREJA LTDA', '29439504000194', '', '9082210013', 'teste@teste', '0', '', 'N', 1, '', '85811180', 'CENTRO', 'CASCAVEL', '', 9049, 'AV BRASIL', 'PR', '', '', '\n\n\n\n', '4533064756', '', '13/08/2019', 0, '0', '0'),
(239, 23927902, 1778, 0, '500 RESTOLOUNGE', 'MICHELE', 'GUSMAO E SOARES LTDA  ', '27902591000149', '', '141074940', '500restoloungeadm@gmail.com', '0', 'RAFAEL', 'N', 1, '', '45028115', 'CANDEIAS', 'VITORIA DA CONQUISTA', '', 500, 'AVENIDA IRIS SILVEIRA  ', 'BA', '', '', '\n\n\n', '7788171771', '', '13/08/2019', 0, '400', '0'),
(240, 24032650, 4563, 0, 'L.M. FAGUNDES - EIRELI', 'LUCAS', 'L.M. FAGUNDES - EIRELI', '32650888000285', '', '90820240', 'lucas@luqui.com.br', '0', 'DANIEL', 'N', 1, '', '85803620', 'PARQUE SAO PAULO', 'CASCAVEL', '', 641, 'RUA ENGENHEIRO THEODORO SAMPAIO', 'PR', '', '', '\n', '4599349800', '', '22/08/2019', 0, '0', '0'),
(241, 24128794, 4563, 0, 'CHEFS HOUSE', 'MARCELO', 'PIZZARIA JU EIRELI - EPP', '28794031000180', '', '9076272686', 'maroldra@hotmail.com', '0', '', 'N', 1, '', '85812011', 'CENTRO', 'CASCAVEL', '', 2197, 'R PARANA', 'PR', '', '', '\n', '45991230150', '', '26/08/2019', 0, '400', '0'),
(242, 24278929, 4563, 0, 'GANDIN MARTIGNONI & VAROTTO LTDA - EPP', 'MUDAR', 'GANDIN MARTIGNONI & VAROTTO LTDA - EPP', '78929957000104', '', '4100860266', 'churrascariagandin@gmail.com', '0', '', 'N', 1, '', '85806470', 'SANTO ONOFRE', 'CASCAVEL', '', 0, 'AV TANCREDO NEVES', 'PR', '', '', '\n', '4599162728', '', '30/08/2019', 0, '250', '0'),
(243, 24326886, 4563, 0, 'MARIE STORE', 'FABIANA', 'MARIE STORE', '26886831000104', '', '11222333', '@', '0', '', 'N', 3, '', '85911160', 'CENTRO', 'CASCAVEL', '', 1500, 'RUA PARANA ', 'PR', '', '', '\n', '99002468', '', '30/08/2019', 0, '0', '0'),
(244, 24433826, 4507, 0, 'BECOOL LOUNGE', 'GABRIEL', 'GABRIEL PIOVESAN', '36500626000104', '', '9084226359', 'gabrielpiovesan132@gmail.com', '1', '', 'N', 1, '', '85420000', 'CENTRO', 'CORBELIA', '', 1558, 'R AMOR PERFEITO', 'PR', '', '', '\n\n\n', '45999998543', '', '31/08/2019', 0, '180', '0'),
(245, 24534708, 4563, 0, 'AQUA LIFE ', 'EMERSON', 'L AGUA MINERAL - EIRELI', '34708410000103', '', '9082522171', '@', '0', 'ANDERSON', 'N', 1, '', '85813190', 'COUNTRY', 'CASCAVEL', '', 1897, 'R. SIQUEIRA CAMPOS', 'PR', '', '', '\n\n', '30994150', '', '03/09/2019', 0, '100', '0'),
(246, 24630698, 4563, 0, 'MR GAS', 'MANOEL', 'MANOEL LEMES DE BRITO', '30698453000102', '', '9081372214', 'daianejagas@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85817160', 'PEIOLO', 'CASCAVEL', '', 294, 'RUA ANGELICA', 'PR', '', '', '\n', '99276367', '', '04/09/2019', 0, '100', '400'),
(247, 24734680, 4593, 0, 'CANTINA DAS PIZZAS MARECHAL', 'LUIZ', 'CRISTINA MAZER ', '34680648000178', '', '111222333', '@', '0', '', 'N', 1, '', '85960000', 'CENTRO', 'MARECHAL CANDIDO RONDON', '', 909, 'R. PARAIBA', 'PR', '', '', '\n\n', '998099837', '', '19/09/2019', 0, '0', '0'),
(248, 24834162, 4370, 0, 'MADA CALCADOS E ACESSORIOS', 'THAISA', 'MADA CALCADOS E ACESSORIOS EIRELI', '34162025000103', '', '284408778', '@', '0', '', 'N', 3, '', '07980011', 'CENTRO', 'DOURADOS', '', 1973, 'AV WEIMAR GONCALVES TORRES', 'MS', '', '', '\n\n', '6796313632', '', '24/09/2019', 0, '0', '0'),
(249, 24916638, 4563, 0, 'EMPRESA DEMONSTRACAO', 'DANIEL', 'EMPRESA DEMONSTRACAO', '16638863000129', '', '9068332718', 'daniel@controle.com.br', '0', '', '', 1, '', '85801240', 'TESTE BAIRRO', 'CASCAVEL', '', 666, 'TESTE DO ENDRECO', 'PR', '', '', '', '4530391786', '45999347112', '02/10/2019', 0, '0', '0'),
(250, 25034559, 4563, 0, 'VENDOLA DO TETEU', 'SHESTER', 'MIRC RESTAURANTE LTDA', '34559999000125', '', '9082369470', 'mrialto@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85810020', 'CENTRO', 'CASCAVEL', '', 225, 'RUA PERNAMBUCO', 'PR', '', '', '\n\n', '998222345', '', '02/10/2019', 0, '0', '0'),
(251, 25134867, 4693, 0, 'STYLUSCELL', 'ALYSON', 'C BEZERRA DO NASCIMENTO - ACESSORIO PARA CELULARES', '34867495000172', '', '9082685550', 'alyson.nascimento@gmail.com', '0', '', 'N', 1, '', '86975000', 'CENTRO', 'MANDAGUARI', '', 850, 'AV AMAZONAS', 'PR', '', '', '\n\n', '44997640590', '', '07/10/2019', 0, '0', '0'),
(252, 25235047, 4563, 0, 'DOGSTER', 'CICERO', 'CICERO DUTRA BORGES', '35047682000172', '', '9082862355', 'ciceroborges@gmail.com', '0', 'DANIEL', 'N', 1, '', '85810020', 'CENTRO', 'CASCAVEL', '', 255, 'RUA PERNAMBUCO ', 'PR', '', '', '\n\n', '45999090099', '', '17/10/2019', 0, '0', '0'),
(253, 25333977, 4563, 0, 'PAO NA PORTA', 'FERNANDO', 'CATIELI DIAS DOS SANTOS', '33977066000195', '', '111222333 ', '@', '0', 'ANDERSON', 'N', 1, '', '85810051', 'COUNTRY', 'CASCAVEL', '', 0, 'R. TOM JOBIM', 'PR', '', '', '\n\n\n\n', '991059393', '', '24/10/2019', 0, '0', '0'),
(254, 25416638, 4511, 0, 'CHEIA DE CHARME COSMETICOS', 'HEVELYN', 'CHEIA DE CHARME COSMETICOS', '35493682000104', '', '90832657-17', 'hevelynmolinadenardi@outlook.com', '0', '', 'N', 1, '', '85440000', 'CENTRO', 'UBIRATA', '', 1608, 'AV. NILZA DE OLIVEIRA PEPINO', 'PR', '', '', '\n\n\n\n', '44998048200', '', '30/10/2019', 0, '0', '0'),
(255, 25530087, 4563, 0, 'LO ROCCA', 'ALECSANDRO', 'L RABEL HAMBURGUERIA', '30087569000105', '', '9077712884', '@', '0', '', 'N', 3, '', '85801240', 'CENTRO', 'CASCAVEL', '', 2389, 'R. VISCONDE DO RIO BRANCO', 'PR', '', '', '\n\n\n\n', '33067772', '', '30/10/2019', 0, '100', '0'),
(256, 25633299, 4563, 0, 'SEVEN COFFE CLUB', 'BRUNO', 'K RUBI KOBER', '33299039000100', '', '9081093170', 'cristiankobber01@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85810090', 'CENTRO', 'CASCAVEL', '', 3219, 'R. SETE DE SETEMBRO', 'PR', '', '', '\n\n\n\n', '984335818', '', '04/11/2019', 0, '150', '0'),
(257, 25710895, 4563, 0, 'GALETTOS RESTAURANTE', 'JUSSARA', 'GALETTOS RESTAURANTE', '36293509000117', '', '9048379114', '@', '0', '', 'N', 1, '', '85812001', 'CENTRO', 'CASCAVEL', '', 5179, 'AV. BRASIL ', 'PR', '', '', '\n\n', '33067008', '', '07/11/2019', 0, '0', '0'),
(258, 25828433, 4563, 0, 'DOGTOWN', 'RICARDO', 'GOLDEN STATE BAR LTDA', '28433752000165', '', '9076632801', 'goldenstatebarltda@gmail.com', '0', '', 'N', 1, '', '85810011', 'CENTRO', 'CASCAVEL', '', 4444, 'RUA PARANA', 'PR', '', '', '\n', '45991334714', '', '07/11/2019', 0, '0', '0'),
(259, 25935440, 4607, 0, 'MOCA CHIC - IBIPORA', 'CIDA', 'TORRES & MENEGON LTDA', '35440091000160', '', '9083221183', 'dlegaliza.conquista@hotmail.com', '0', '', '', 1, '', '8620000', 'CENTRO', 'IBIPORA', '', 50, 'AV  SOUZA NAVES', 'PR', '', '', '', '43932589981', '', '12/11/2019', 0, '0', '0'),
(260, 26033791, 4563, 0, 'DOUCE ANNE', 'DIEGO', 'SAKATA E CIA LTDA', '33791327000188', '', '9081610093', 'fabricio190591@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85810050', 'CENTRO', 'CASCAVEL', '', 729, 'RUA FORTALEZA', 'PR', '', '', '\n\n\n\n', '4530371922', '', '18/11/2019', 0, '0', '0'),
(261, 26126826, 4587, 0, 'MENINO DO IPHONE', 'LUCAS', 'EDUARDO GABRIEL SIMOES LOUCAO', '26826116000178', '', '', 'lucas.mmarcon@hotmail.com', '0', '', 'N', 3, '', '85935000', 'JARDIM EUROPA', 'ASSIS CHATEAUBRIAND', '', 193, 'R. PORTUGAL', 'PR', '', '', '\n', '44999992295', '', '21/11/2019', 0, '0', '0'),
(262, 26234163, 1778, 0, 'RESTAURANTE MARINHEIRO', 'ERIVALDO', 'ERIVALDO RIBEIRO DE SOUZA', '34163536000140', '', '159379925', 'marinheirovdcbkp@gmail.com', '0', 'RAFAEL', 'N', 1, '', '45028080', 'CANDEIAS', 'VITORIA DA CONQUISTA', '', 2, 'AVENIDA ALIRIO SALES', 'BA', '', '', '\n\n', '07734211780', '', '21/11/2019', 0, '100', '0'),
(263, 26328433, 4563, 0, 'BERA', 'GUSTAVO', 'GOLDEN STATE BAR LTDA', '28433752000165', '', '9076632801', 'luis@gusberti.com.br', '0', 'DANIEL', 'N', 1, '', '85810011', 'CENTRO', 'CASCAVEL', '', 4144, 'RUA PARANA', 'PR', '', '', '\n', '45999160666', '', '21/11/2019', 0, '0', '0'),
(264, 26429973, 4563, 0, 'SABOR DE AROMA', 'OSMAR', 'OSMAR OGASSAWARA', '29973402000154', '', '9082896411', 'osmarogassawara@hotmail.com', '0', 'ANDERSON', 'N', 1, '', '85807090', 'RECANTO TROPICAL', 'CASCAVEL', '', 3013, 'R. FORTALEZA', 'PR', '', '', '\n\n', '999480788', '', '29/11/2019', 0, '0', '0'),
(265, 26533636, 4563, 0, 'NOVILLO NEGRO ', 'LEONARDO', 'V.B CARNES E CONVENIENCIAS LTDA', '33636573000165', '', '9081445114', 'novillonegrobr@gmail.com', '0', 'DANIEL', 'N', 1, '', '85812141', 'CENTRO', 'CASCAVEL', '', 888, 'RUA OLAVO BILAC', 'PR', '', '', 'INICIOU\n14\n', '4533067310', '', '29/11/2019', 0, '220', '0'),
(266, 26634292, 5582, 0, 'TRINDADE FOODS', 'LUCIMEIRE', 'JULIANE TRINDADE POLIS', '44076661000176', '', '159764404', 'restaurante-panorama@hotmail.com', '0', '(empty)', 'N', 1, '', '47850000', 'JARDIM PRIMAVERA', 'LUIZ EDUARDO MAGALHAES', '(empty)', 111, 'RUA FLAMBOYANT', 'BA', '', '', '(empty)', '7736390522', '(empty)', '02/12/2019', 0, '150', '0'),
(267, 26712345, 4802, 0, 'JACAREZINHO BEBIDAS ITAPEMA', 'mauricio', 'MAURICIO JOSE RAMON PREGLER 80145835901', '12345678901230', '', '', 'jacarezinhobebidas@gmail.com', '0', '', 'N', 1, '', '88220000', 'MEIA PRAIA', 'ITAPEMA', '', 499, '298', 'SC', '', '', '', '5491122386394', '', '03/12/2019', 0, '0', '0'),
(268, 26812345, 4563, 0, 'BODEGUEIRA', 'DANIEL', 'BODEGUEIRA', '12345678901230', '', '', 'suporte@controleautomacao.com.br', '0', '', 'N', 3, '', '85805070', 'ALTO ALEGRE', 'CASCAVEL', '', 123, 'RUA', 'PR', '', '', '\n', '4532260026', '', '06/12/2019', 0, '0', '0'),
(269, 26928097, 4563, 0, 'OHMY GIN', 'PAULO', 'PAO COM COSTELA ALIMENTOS LTDA', '28097386000200', '', '9078753347', 'paulopitarelo@hotmail.com', '0', '', 'N', 1, '', '85810011', 'CENTRO', 'CASCAVEL', '', 4124, 'RUA PARANA', 'PR', '', '', '\n', '45999160666', '', '06/12/2019', 0, '0', '0'),
(270, 27012345, 4563, 0, 'BODEGA', 'GABRIEL', 'SISTEMA', '12345678901230', '', '', 'email@gmail.com', '0', '', 'N', 3, '', '85802020', 'BAIRRO', 'CASCAVEL', '', 123, 'RUA ', 'PR', '', '', '\n', '4533002500', '', '09/12/2019', 0, '0', '0'),
(271, 27105758, 4518, 0, 'BODEGA PATO BRANCO', 'KAUE', 'BODEGUERO BAR E PETISCARIA LTDA', '05758812000114', '', '9028668764', 'setacpb@gmail.com.br', '0', 'DANIEL', 'N', 1, '', '85501047', 'CENTRO', 'PATO BRANCO', '', 1455, 'RUA ITABIRA ', 'PR', '', '', '\n\n1100,00 integração com Mytapp\ndespesa de um dia 150,00 + 20,00 + 30,00\ndespesa com reunião - 200,00 - combustivel\n\n', '4632250281', '', '09/12/2019', 0, '350', '0'),
(272, 27224859, 1778, 0, 'DIEGO CUNHA CALACA', 'DIEGO CUNHA', 'DIEGO CUNHA CALACA', '24859007000121', '', '132866077', 'diegoccalaca@gmail.com', '0', '', 'N', 3, '', '45028100', 'CANDEIAS', 'VITORIA DA CONQUISTA', '', 0, 'AV. OLIVIA FLORES ', 'BA', '', '', '\n', '71992825014', '', '11/12/2019', 0, '0', '0'),
(273, 27335332, 4563, 0, 'BOX12', 'MARCOS ', 'K UECKER BAR E RESTAURANTE', '35332892000102', '', '9083158635', 'contatobox12@outlook.com', '0', 'DANIEL', 'N', 1, '', '85801021', 'CENTRO', 'CASCAVEL', '', 2088, 'RUA SAO PAULO', 'PR', '', '', '300,00 RECEBER\n350,00 15/15\nINICIOU DIA 14\n\n', '45999111160', '', '12/12/2019', 0, '180', '0'),
(274, 27412345, 1778, 0, 'DELI BISCOITERIA', 'CESAR', 'DELY CAFETERIA LTDA', '35787366000137', '', '', 'cesacunha@gmail.com', '0', '', 'N', 1, '', '45026100', 'ALTO DA BOA VISTA', 'VITORIA DA CONQUISTA', '', 555, 'AV. LAURA NUNES', 'BA', '', '', '\n\n', '77988071287', '', '12/12/2019', 0, '0', '0'),
(275, 27526287, 4518, 0, 'CASA DA CERVEJA NHO LAU', 'JOAO', 'JL DE ANDRADE CONVENIENCIA LTDA', '41736220000165', '', '9089035284', 'casadacervejaecia@live.com', '0', 'DANIEL', 'N', 1, '', '85501039', 'CENTRO', 'PATO BRANCO', '', 1882, 'AVENIDA TUPI', 'PR', '', '', '+ DESPESAS\n135,00 + 60,00 +250,00', '4630252155', '', '16/12/2019', 0, '0', '0'),
(276, 27635671, 4563, 0, 'KALED SHAWARMA', 'MOACIR', 'MATHEUS ANDRIANO MULLER - LANCHES', '35671682000149', '', '9083472500', 'matheus98muller@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85810010', 'CENTRO', 'CASCAVEL', '', 4461, 'R. PARANA', 'PR', '', '', '250,00  IMPLANTAÇÃO PARA 17/12\nMENSALIDADE 90,00\nINICIOU DIA 17\n', '998294965', '', '16/12/2019', 0, '90', '250'),
(277, 27735494, 4563, 0, 'CULTURE SHOCK', 'WILSON', 'CULTURE SHOCK ENTRETENIMENTOS LTDA', '35494427000178', '', '9083266527', 'contato@arenacascavel.com.br', '0', 'DANIEL', 'N', 1, '', '85812010', 'CENTRO', 'CASCAVEL', '', 3980, 'RUA PARANA ', 'PR', '', '', '\n\n\n', '4533064756', '', '17/12/2019', 0, '300', '0'),
(278, 27816638, 4563, 0, 'CONTROLE', 'ANDESON', 'CONTROLE', '16638863000129', '', '11122222', '@@', '0', '', '', 0, '', '8581111', '1', 'CASCAVEL', '1', 1, '1', 'PR', '', '', '', '33069090', '', '19/12/2019', 0, '0', '0'),
(279, 27916638, 4563, 0, 'CONTROLE ALTEARDO', 'ANDERSON', 'CONTROLE ALTERADO DENOVO TESTE', '16638863000129', '', '1111222211', 'guiquiles@hotmail.com', '0', 'GUILHERME', 'N', 1, '', '85805540', 'PIONEIROS', 'BAHIA', '(empty)', 1234, 'RUA TESTE', 'BA', '', '', '(empty)', '33069090', '(empty)', '19/12/2019', 0, '20000.5', '1250'),
(280, 28033909, 4563, 0, 'CLODAO LANCHES', 'CLOVIS', 'CLODOALDO PEREIRA RIBEIRO', '33909422000133', '', '', 'clo_lu_lay@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85814276', 'INTERLAGOS', 'CASCAVEL', '', 754, 'AV LUIZ DE CAMOES', 'PR', '', '', '\n', '4599963952', '', '20/12/2019', 0, '0', '0'),
(281, 28135297, 4583, 0, 'MOHAMAD RAIEF RIDA FABRICACAO E COM DE ESSENCIAS P/ ARGUILE LTDA', 'MOHAMAD RAEF RIDA', 'MOHAMAD RAIEF RIDA FABRICACAO E COM DE ESSENCIAS P/ ARGUILE LTDA', '35297987000132', '', '9083094645', 'niedermayerfatima@outlook.com', '0', 'DANIEL', 'N', 1, '', '85921500', 'BOM PRINCIPIO DO OESTE', 'TOLEDO', '', 1091, 'AV PRIMEIRO DE MAIO', 'PR', '', '', '\n\n', '45999977615', '', '20/12/2019', 0, '850', '220'),
(282, 28233468, 4720, 0, 'TABACARIA SNAKE - CAMPO MOURAO', 'ANDERLE', 'ANDERLE E CARLETTO TABACARIA LTDA', '33468837000208', '', '9083518275', 'financeiro@tabacariasnake.com.br', '0', 'DANIEL', 'N', 1, '', '87301000', 'CENTRO', 'CAMPO MOURAO', '', 641, 'AV CAPITAO INDIO BANDEIRA', 'PR', '', '', '\n\n', '4530401959', '', '27/12/2019', 0, '0', '0'),
(283, 28315598, 5085, 0, 'MARQUES BIER', 'FRANCIELE', 'RESTAURANTE MARQUES GASTROBAR LTDA', '15598392000100', '', '0240448103', 'fran@galeteriacasadomarques.com.br', '0', '', 'N', 1, '', '92310200', 'CENTRO', 'CANOAS', '', 1202, 'R. DR. BARCELOS', 'RS', '', '', '\n', '33331900', '', '31/12/2019', 0, '400', '0'),
(284, 28428076, 5084, 0, 'CANTINA MARQUES ZONA SUL', 'FRAN', 'CANTINA ZONA SUL EIRELI EPP', '28076691000126', '', '0963704648', 'fran@galeteriacasadomarques.com.br', '0', '', 'N', 1, '', '91900090', 'TRISTEZA', 'PORTO ALEGRE', '', 8, 'R. TV MAJOR CUPERTINO', 'RS', '', '', '\n', '51984218488', '51984218488', '01/01/2020', 0, '350', '0'),
(285, 28533407, 4563, 0, 'BURGER E CIA', 'MARCOS', 'BURGER E CIA', '33407563000158', '', '111222333', '@', '0', 'ANDERSON', 'N', 3, '', '85811290', 'NOVO MILENIUM', 'CASCAVEL', '', 1, 'R. ', 'PR', '', '', '\n\n\n', '999860195', '', '09/01/2020', 0, '0', '0'),
(286, 28608185, 4563, 0, 'PIZZARIA VEZARO', 'JOAO PIMENTEL', 'VEZARO PIMENTEL E PIMENTEL LTDA', '08185583000184', '', '9037846101', '@', '0', 'ANDERSON', 'N', 1, '', '85814260', 'INTERLAGOS', 'CASCAVEL', '', 736, 'AV. INTERLAGOS', 'PR', '', '', '\n', '999142509', '', '13/01/2020', 0, '0', '0'),
(287, 28733966, 4563, 0, 'PAZTA FAST FOOD', 'ARI', 'PAZTA MASSAS E GRILL LTDA', '33966626000106', '', '9081787503', '@', '0', 'ANDERSON', 'N', 1, '', '85810160', 'CENTRO', 'CASCAVEL', '', 2600, 'R. PIO XII', 'PR', '', '', '\n\n', '999169179', '', '14/01/2020', 0, '150', '0'),
(288, 28833407, 4563, 0, 'BURGER E CIA', 'R', 'BURGER E CIA', '33407563000158', '', '11122233', '@', '0', '', 'N', 1, '', '85811290', 'CANADA', 'CASCAVEL', '', 49, 'R. ROBERTO FUMIO AOKI', 'PR', '', '', '\n\n\n', '999860195', '', '25/01/2020', 0, '0', '0'),
(289, 28921009, 4506, 0, 'DIVINA SKINNA', 'ALIS TENFEN', 'ALTAIR TENFEN - RESTAURANTE', '21009293000148', '', '9074680973', 'pierdona@pierdona.com.br', '0', 'DANIEL', 'N', 1, '', '85415000', 'CAFELANDIA CENTRO', 'CAFELANDIA', '', 131, 'RUA INTERVENTOR MANOEL RIBAS', 'PR', '', '', '\n\n', '999174262', '', '28/01/2020', 0, '0', '0'),
(290, 29035799, 5084, 0, 'MARQUES RESTAURANTE', 'FRANCIELE', 'MARQUES RESTAURANTE', '35799537000148', '', '0963804839', 'fran@galeteriacasadomarques.com.br', '0', '', 'N', 1, '', '95540001', 'MOINHOS DE VENTO', 'PORTO ALEGRE', '', 1814, 'R. MARQUES DO POMBAL', 'RS', '', '', '\n\n\n\n\n', '51980242419', '', '31/01/2020', 0, '0', '0'),
(291, 29123319, 4563, 0, 'R.R. ALIMENTOS LTDA ME', 'PAULO', 'R.R. ALIMENTOS LTDA ME', '23319078000179', '', '9071166209', 'kapotepaulo@gmail.com', '2', '', 'N', 1, '', '85818680', 'CATARATAS', 'CASCAVEL', '', 564, 'R. PRESIDENTE GETULIO VARGAS', 'PR', '', '', '\n', '32295588', '', '31/01/2020', 0, '0', '0'),
(292, 29236083, 4571, 0, 'THE WALKIES - FOZ DO IGUACU', 'MAICO', 'PR OLIVEIRA GASTRONOMIA LTDA', '36083992000105', '', '9083809164', 'thewalkies@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85853000', 'VILA YOLANDA', 'FOZ DO IGUACU', '', 3570, 'AV DAS CATARATAS', 'PR', '', '', '\nIniciou - 07\n', '4530281200', '', '01/02/2020', 0, '0', '0'),
(293, 29328540, 4563, 0, 'GISELI DE PAULA RECH', 'GISELE', 'GISELI DE PAULA RECH', '28540891000198', '', '9083449877', 'giselirech@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85817030', 'PERIOLO3', 'CASCAVEL', '', 63, 'R. GUARATUBA', 'PR', '', '', '\ncomeço dia 11\nmensa 100\nimpl 300\n', '99320114', '', '07/02/2020', 0, '0', '0'),
(294, 29436187, 4511, 0, 'BARBEARIA DO GAUCHO', 'FELIPE', 'FELIPE SAMPAIO ALVES 00751844004', '36187377000149', '', '', 'felipesampaioalves@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85440000', 'CENTRO', 'UBIRATA', '', 876, 'RUA MARECHAL FLORIANO PEIXOTO', 'PR', '', '', '\n', '44999981570', '', '13/02/2020', 0, '0', '0'),
(295, 29525125, 4583, 0, 'GUEDES PIZZARIA', 'FERNANDO', 'F. J. GUEDES - PIZZARIA', '25125694000114', '', '1', 'fernando_jg14@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85900050', 'CENTRO', 'TOLEDO', '', 6235, 'R SAO JOAO', 'PR', '', '', '\n\n', '4530548689', '', '15/02/2020', 0, '0', '0'),
(296, 29628718, 4563, 0, 'CAFE DA TATA', 'CHESTER', 'RIALTO & SAVARIS RESTAURANTE E CHOPERIA LTDA - ME', '28718683000136', '', '9076165847', 'rigonicontabilidadepatriki@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85810020', 'CENTRO', 'CASCAVEL', '', 225, 'RUA  PERNAMBUCO', 'PR', '', '', '\n\n\n', '45998222345', '', '17/02/2020', 0, '0', '0'),
(297, 29736181, 4563, 0, 'EMPADA CASCAVEL', 'VIVIANE', 'EMPADA CASCAVEL LTDA', '36181128000146', '', '9083901133', 'empadabrasilcac@hotmail.com', '0', 'ANDERSON', 'N', 1, '', '85810210', 'CENTRO', 'CASCAVEL', '', 1729, 'R. NEREU RAMOS', 'PR', '', '', 'Implantação para 15/02 400,00\nMENSALIDADE 100,00 OS 3 PRIMEIROS MESES\nAPOS 150,00\n\n', '30371922', '', '20/02/2020', 0, '0', '0'),
(298, 29826970, 4563, 0, 'BONI SUSHI', 'JUNIOR', 'BONI SUSHI LTDA', '26970275000141', '', '9074082308', 'bonifacio.fabricio@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85801030', 'CENTRO', 'CASCAVEL', '', 1986, 'R RIO DE JANEIRO', 'PR', '', '', '\n', '44998790304', '', '26/02/2020', 0, '0', '0'),
(299, 29926503, 4580, 0, 'ALO CAPAS SANTA HELENA', 'ANDREA', 'ANDREA CRISTINA DO CARMO MORAIS', '26503443000784', '', '9084220318', '@', '0', 'ANDERSON', 'N', 1, '', '85892000', 'CENTRO', 'SANTA HELENA', '', 1600, 'AV. BRASIL', 'PR', '', '', '\n', '45998410881', '', '06/03/2020', 0, '0', '0'),
(300, 30035671, 4563, 0, 'KALED SHAWARMA', 'MOACIR', 'MATHEUS ANDRIANO MULLER - LANCHES', '35671682000149', '', '9083472500', '@', '0', '', 'N', 3, '', '85810010', 'CENTRO', 'CASCAVEL', '', 4461, 'R. PARANA', 'PR', '', '', '\n', '98294965', '', '12/03/2020', 0, '0', '0'),
(301, 30116638, 4563, 0, 'B SISTEMAS', 'CRESPIN', 'B SISTEMAS', '16638863000129', '', '111222333', 'crespin.anderson@hotmail.com', '0', '', 'N', 1, '', '85811290', 'TROPICAL', 'CASCAVEL', '', 1136, 'AV. TOLEDO ', 'PR', '', '', '\n', '999865700', '', '13/03/2020', 0, '0', '0'),
(302, 30211333, 4563, 0, 'MODA DEZ', 'ILDA', 'ILDA ALVES FERNANDES', '11333962000189', '', '111222333', '@', '0', 'ANDERSON', 'N', 1, '', '85816446', 'PERIOLO', 'CASCAVEL', '', 1479, 'AV. CORBELIA', 'PR', '', '', '\n', '32240277', '', '17/03/2020', 0, '0', '0'),
(303, 30334470, 1778, 0, 'CARNEIRO MANIA BAR E RESTAURANTE', 'LARISSA', 'CARNEIRO MANIA BAR E RESTAURANTE LTDA', '34470938000197', '', '160272870', 'contabille.assessoria@hotmail.com', '0', '', 'N', 3, '', '45057200', 'AYRTON SENNA', 'VITORIA DA CONQUISTA', '', 0, 'ROD BA 415', 'BA', '', '', '\n', '7734211780', '', '17/03/2020', 0, '0', '0'),
(304, 30434060, 4563, 0, 'MUNDO COLONIAL', 'OSIR', 'OSIR MORO COMERCIO DE PRODUTOS COLONIAIS LTDA.', '34060396000184', '', '9081875801', 'paiolcolonial@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85801090', 'CENTRO', 'CASCAVEL', '', 3917, 'R. CARLOS GOMES', 'PR', '', '', '\n', '999232209', '', '20/03/2020', 0, '0', '0'),
(305, 30516638, 4563, 0, 'ANDERSON', 'ANDERSON CRESPIN', 'ANDERSON', '16638863000129', '', '111222333', 'anderson@controleautomacao.com.br', '2', '', '', 0, '', '85810020', 'CENTRO', 'CASCAVEL', '', 516, 'R. PERNAMBUCO', 'PR', '', '', '', '30966096', '', '02/04/2020', 0, '0', '0'),
(306, 30635672, 4563, 0, 'TEXHOUSE', 'MARCELO/RAFAEL', 'HAMBURGUERIA MR LTDA', '35672414000141', '', '9083477579', 'rafaeljheck@gmail.com', '0', 'DANIEL', 'N', 1, '', '85810001', 'CENTRO', 'CASCAVEL', '', 7654, 'AV BRASIL', 'PR', '', '', '\n', '45991563085', '', '06/04/2020', 0, '0', '0'),
(307, 30790391, 5374, 0, 'RESTAURANTE E LANCHERIA VILA RICA', 'RODRIGO FRAPORTI', 'SUELI S FRAPORTI E CIA LTDA.', '90391426000106', '', '0340041692', '@', '0', '', 'N', 1, '', '98035210', 'CENTRO', 'CRUZ ALTA', '', 535, 'AV. PLACIDO DE CASTRO', 'RS', '', '', '\n', '33224868', '', '28/04/2020', 0, '0', '0'),
(308, 30835950, 4563, 0, 'IKIGAI', 'ROSE', 'ROSELY TOMIKO SAKAI SANO', '35950803000191', '', '111333222', '@', '0', '', 'N', 1, '', '85807040', 'COQUERIAL', 'CASCAVEL', '', 5246, 'R. PARANA', 'PR', '', '', '\n', '33063141', '', '07/05/2020', 0, '0', '0'),
(309, 30933468, 4583, 0, 'TABACARIA SNAKE - TOLEDO', 'MARIANA', 'TABACARIA SNAKE COMERCIO DE SUVENIRES LTDA', '33468837000380', '', '9084127709', 'financeiro@tabacariasnake.com.br', '0', 'DANIEL', '', 0, '', '8590000', 'CENTRO', 'TOLEDO', '', 3282, 'RUA SANTOS DUMONT', 'PR', '', '', '', '45933068013', '', '21/05/2020', 0, '0', '0'),
(310, 31010373, 4563, 0, 'LUA COSMETICOS', 'RENATA', 'KN2 COMERCIO DE COSMETICOS LTDA', '10373833000151', '', '9045666678', 'luacosmeticos@gmail.com', '0', '', 'N', 1, '', '85801050', 'CENTRO', 'CASCAVEL', '', 735, 'R. MARANHAO', 'PR', '', '', '\n', '999683037', '', '08/06/2020', 0, '0', '0'),
(311, 31122503, 5582, 0, 'ARABE & PIZZA', 'TIAGO', 'LUSILENE SOARES DE ALMEIDA', '22503493000115', '', '124833405', '@', '0', '', 'N', 1, '', '47850000', 'MIMOSO DO OESTE', 'LUIS EDUARDO MAGALHAES', '', 2394, 'AVENIDA JK', 'BA', '', '', '\n\n\n', '7799853785', '', '10/06/2020', 0, '0', '0'),
(312, 31237184, 4563, 0, 'CASA DAS BEBIDAS', 'TESTE', 'FERRAZ BEBIDAS E CONVENIENCIA LTDA', '37184412000139', '', '9084832275', 'ferraztm@hotmail.com', '0', '', 'N', 3, '', '85805050', 'CENTRO', 'CASCAVEL', '', 4603, 'RUA CUIABA', 'PR', '', '', '', '0000045', '', '10/06/2020', 0, '0', '0'),
(313, 31334300, 4563, 0, 'FRUTARIA REAL - FACULDADE', 'DANI/ZECA', 'MULLER E MULLER REPRESENTACOES COMERCIAIS LTDA', '34300026000177', '', '', 'frutariareal01@gmail .com', '0', '', '', 1, '', '8580303', 'FACULDADE', 'CASCAVEL', '', 902, 'RUA RIO DA PAZ', 'PR', '', '', '', '999263709', '', '30/06/2020', 0, '0', '0'),
(314, 31434500, 4430, 0, 'FOX TABACARIA - PONTA GROSSA', 'WILLIAN/ALISON', 'FOX TABACARIA LTDA', '34500070000201', '', '9085137112', 'alison@bigboss.com.br', '0', '', 'N', 1, '', '84010050', 'CENTRO', 'PONTA GROSSA', '', 676, 'RUA BALDUINO TAQUES', 'PR', '', '', '\n', '4530283563', '', '06/07/2020', 0, '0', '0'),
(315, 31535544, 4563, 0, 'LOJA DO VILAO', 'EDUARDO', 'EDUARDO BELO DA SILVA', '35544495000102', '', '1112222333', 'beloeduardo3@gmail.com', '0', '', 'N', 1, '', '85815460', 'BRASILIA', 'CASCAVEL', '', 1212, 'R. ALTEMAR DUTRA', 'PR', '', '', '\n', '999290130', '', '22/07/2020', 0, '100', '300'),
(316, 31615291, 4563, 0, 'DENNEG FILMS E ACESSORIOS', 'SANDRO', 'SANDRO MARTINS DE OLIVEIRA FRARE-ME', '15291398000130', '', '9059440451', 'dennegcvel@hotmail.com', '0', '', 'N', 3, '', '85810030', 'CENTRO', 'CASCAVEL', '', 250, 'R. RECIFE', 'PR', '', '', '\n', '4532225231', '', '23/07/2020', 0, '0', '0'),
(317, 31716638, 4563, 0, 'LOJA SINTONIA', 'DAVI', 'SINTONIA STORE LTDA', '41421889000168', '', '111222333', '@', '0', '', 'N', 1, '', '85811290', 'SÃO CRISTOVAO', 'CASCAVEL', '', 1495, 'RUA JACAREZINHO', 'PR', '', '', '\n\n\n', '998037563', '', '24/07/2020', 0, '0', '0'),
(318, 31834225, 4563, 0, 'NINO ESPETINHOS', 'NINO', 'NINO ESPETINHOS', '34225620000140', '', '111222333', '@', '0', '', 'N', 1, '', '85810220', 'CENTRO', 'CASCAVEL', '', 386, 'R. JORGE LACERDA', 'PR', '', '', '\n', '999894889', '', '03/08/2020', 0, '0', '0'),
(319, 31937753, 4563, 0, 'PIZZARIA PALAZZO', 'RAYHA', 'RAYHA DOS SANTOS & CIA. LTDA.', '37753051000102', '', '9085390950', 'pizzariapalazzocvel@gmail.com', '0', '', 'N', 1, '', '85814260', 'INTERLAGOS', 'CASCAVEL', '', 268, 'AV. INTERLAGOS', 'PR', '', '', '\n', '999370404', '', '04/08/2020', 0, '0', '0'),
(320, 32036169, 4563, 0, 'CLEAN UP', 'LEANDRO', 'CLEAN UP', '36169026000105', '', '111222333', 'vendascleanup@outlook.com', '0', '', 'N', 1, '', '85814660', 'FLORESTA', 'CASCAVEL', '', 1446, 'R. GALO DA SERRA', 'PR', '', '', '\n', '999170154', '', '07/08/2020', 0, '0', '0'),
(321, 32110804, 5084, 0, 'CANTINA MARQUES MATRIZ', 'FRANCIELE', 'CANTINA MARQUES MATRIZ', '10804684000138', '', '111222333', 'fran@galeteriacasadomarques.com.br', '0', '', 'N', 1, '', '85811290', 'FLORESTA', 'PORTO ALEGRE', '', 1, 'R. MARQUES DO POMBAL', 'RS', '', '', '\n', '5199608266', '', '12/08/2020', 0, '0', '0'),
(322, 32230572, 4563, 0, 'PLUTAO LANCHES', 'EDILSON', 'PLUTAO LANCHES', '30572357000105', '', '111222333', '@', '0', '', 'N', 1, '', '85814165', 'BRASMADEIRA', 'CASCAVEL', '', 79, 'R. ORESTES KOLMAN', 'PR', '', '', '\n\n\n\n\n', '999544911', '', '19/08/2020', 0, '0', '0'),
(323, 32337724, 4563, 0, 'AL MONDO AGENCIA E CAFE', 'MARCUS VINICIUS CORBELINO JR', 'M & F AGENCIA CAFE', '37724934000186', '', '908536015 ', 'almondoturismo@hotmail.com', '0', '', 'N', 1, '', '85817090', 'RECANTO TROPICAL', 'CASCAVEL', '', 3037, 'RUA FORTALEZA ', 'PR', '', '', '\n', '45999497739', '', '24/08/2020', 0, '0', '0'),
(324, 32416638, 4563, 0, 'PIT STOP', 'ELIANE BETIM', 'ELIANE APARECIDA BETIN', '16638863000129', '', '111222333', 'elianebetim5@gmail.com', '0', '', 'N', 1, '', '85907448', 'PINHEIRINHO', 'CASCAVEL', '', 25, 'R. OSORIO DE OLIVEIRA', 'PR', '', '', '\n\n', '45999357111', '', '25/08/2020', 0, '0', '0'),
(325, 32522908, 4563, 0, 'PIZZARIA VILA RICA', 'FELIPE', 'F. DE MORAES LIMA PIZZARIA', '22908157000152', '', '9084743922', 'felippe19lima@hotmail.com', '0', '', 'N', 1, '', '85815410', 'BRASILIA', 'CASCAVEL', '', 1771, 'RUA AGOSTINHO DOS SANTOS', 'PR', '', '', '\n', '998037444', '', '25/08/2020', 0, '0', '0'),
(326, 32616638, 4563, 0, 'TESTE', 'TESTE', 'TESTE', '16638863000129', '', '111222333', '@', '0', '', 'N', 1, '', '85811290', 'CENTRO', 'CASCAVEL', '', 123, 'R.TAL', 'PR', '', '', '\n\n', '111222333', '', '27/08/2020', 0, '0', '0'),
(327, 32730987, 3250, 0, 'MAIS QUE PAO', 'SANDRA', 'MAIS QUE PAO LTDA', '30987802000106', '', '9823762', 'panificadoramaisquepao@outlook.com', '0', '', 'N', 1, '', '65066844', 'CHACARA BRASIL', 'SAO LUIS', '', 50, 'AV MATO GROSSO', 'MA', '', '', '\n', '98991879998', '', '15/09/2020', 0, '0', '0'),
(328, 32836863, 4563, 0, 'CAVERNOSO DO CHURRASCO', 'DIEGO', 'DIEGO TUPI REINHARDT SOUZA NETO ARTIGOS P/CHURRASCO', '36863811000163', '', '9086012461', '@', '0', '', 'N', 1, '', '85805250', 'ALTO ALEGRE', 'CASCAVEL', '', 1232, 'R. CASEMIRO DE ABREU', 'PR', '', '', '\n', '30376699', '', '15/09/2020', 0, '0', '0'),
(329, 32923670, 4563, 0, 'LOJA KIWI', 'MARCELO', 'M S LEMES CONFECCOES ERIELE ME', '23670760000101', '', '9070842480', 'marcelos_lemes@yahoo.com.br', '0', '', 'N', 1, '', '85810000', 'CENTRO', 'CASCAVEL', '', 2810, 'R. PARANA', 'PR', '', '', '\n', '30351819', '', '21/09/2020', 0, '0', '0'),
(330, 33026699, 4563, 0, 'THE DOCTOR ', 'RAFAEL', 'BISINELLA & SOUZA LTDA - ME', '26699347000168', '', '9073931786', '@', '0', '', 'N', 1, '', '85801150', 'CENTRO', 'CASCAVEL', '', 1, 'R. SAO PAULO', 'PR', '', '', '\n', '991455562', '', '22/09/2020', 0, '0', '0'),
(331, 33129133, 4504, 0, 'COMERCIO DE GAS O PONTO', 'LUCAS', 'V. FERREIRA COMERCIO DE GAS O PONTO LTDA', '29133800000162', '', '9086009240', '@', '0', '', 'N', 1, '', '85408000', 'DIAMANTE', 'DIAMANTE DO SUL', '', 1, 'AV. ROSE CARRIEL RIBEIRO', 'PR', '', '', '', '999861583', '', '23/09/2020', 0, '0', '0'),
(332, 33239021, 4563, 0, 'FRUTARIA REAL - CASCAVEL VELHO', 'DANI', 'SANTOS COMERCIO DE HORTIFRUTI GRANJEIROS', '39021891000106', '', '', 'frutariareal01@gmail.com', '0', '', '', 0, '', '8581818', 'CASCAVEL VELHO', 'CASCAVEL', '', 1122, 'RUA ITALIA', 'PR', '', '', '', '4599912767', '', '29/09/2020', 0, '0', '0'),
(333, 33339239, 4563, 0, 'KIWI FLORESTA', 'ADRIANA', 'A L COMERCIO DE CONFECCOES LTDA', '39239558000160', '', '9086350510', '@', '0', '', 'N', 1, '', '85814760', 'FLORESTA', 'CASCAVEL', '', 1429, 'AVENIDA PAPAGAIOS', 'PR', '', '', '', '999933129', '', '30/09/2020', 0, '0', '0'),
(334, 33435040, 4563, 0, 'BASI CAPAS', 'PEDRO', 'BASI CAPAS', '35040235000191', '', '11222333', 'pedro.basiblemer@gmail.com', '0', '', 'N', 1, '', '85819351', 'MARIA LUIZA', 'CASCAVEL', '', 2532, 'AV. CARLOS GOMES', 'PR', '', '', '\n\n', '4599285271', '', '05/10/2020', 0, '0', '0'),
(335, 33537991, 4563, 0, 'DIAS MOTO PECAS', 'CLAUDIO', 'DIAS MOTO PECAS CASCAVEL LTDA', '37991849000184', '', '9085631664', 'diasmotoscascavel@gmail.com', '0', '', 'N', 1, '', '85810000', 'CENTRO', 'CASCAVEL', '', 7342, 'AV BRASIL', 'PR', '', '', '\n', '30963334', '', '06/10/2020', 0, '0', '0'),
(336, 33610259, 4563, 0, 'BAR DO JO', 'CLAUDIO', 'VINIBEL COMERCIO DE LANCHES LTDA', '10259212000222', '', '9085479501', '@', '0', '', 'N', 1, '', '85812001', 'CENTRO', 'CASCAVEL', '', 5794, 'AV. BRASIL', 'PR', '', '', '\n', '30382266', '', '09/10/2020', 0, '0', '0'),
(337, 33704231, 4563, 0, 'BOMBAR', '', 'GEANI LIMA BARBATO RESTAURANTE', '04231860000197', '', '9082767794', '@', '0', '', 'N', 1, '', '85806135', 'ESMERALDA', 'CASCAVEL', '', 803, 'R. CASSIA', 'PR', '', '', '\n\n\n99090806', '99090806', '', '09/10/2020', 0, '0', '0'),
(338, 33838414, 4583, 0, 'M T BRIZOLA PIZZARIA LTDA', 'JOAO BRIZOLA', 'M T BRIZOLA PIZZARIA LTDA', '38414038000183', '', '9086102452', '@', '0', '', 'N', 1, '', '85900020', 'CENTRO', 'TOLEDO', '', 2488, 'R. ALMIRANTE BARROSO', 'PR', '', '', '\n', '99798071', '', '10/10/2020', 0, '0', '0'),
(339, 33936040, 5111, 0, 'PIZZARIA MARQUES CACHOEIRINHA', 'FRAN', 'DIEGO SANTOS RESTAURANTE LTDA', '36040104000177', '', '1770235067', 'fran@galeteriacasadomarques.com.br', '0', '', 'N', 1, '', '94931023', 'CENTRO', 'CACHOEIRINHA', '', 595, 'AV. OBEDY CANDIDO VIEIRA', 'RS', '', '', '', '51999608266', '', '13/10/2020', 0, '0', '0'),
(340, 34011740, 4563, 0, 'TONHO RESTAURANTES', 'SAMARA ANZOLIN', 'ANZOLIN & CECHIN LTDA', '11740649000165', '', '9053032017', 'samaraanzolin@hotmail.com', '0', '', 'N', 1, '', '85805260', 'ALTO ALEGRE', 'CASCAVEL', '', 4533, 'RUA CUIABA', 'PR', '', '', '', '984049328', '', '19/10/2020', 0, '0', '0'),
(341, 34134832, 4563, 0, 'CASCAVEL BEBIDAS', 'WILSON/ADRIEL/MONICA', 'UNICONAN BEBIDAS E CONVENIENCIA LTDA', '34832208000199', '', '9085485749', 'contato@arenacascavel.com.br', '0', 'DANIEL', 'N', 3, '', '85810000', 'CENTRO', 'CASCAVEL', '', 7298, 'AV BRASIL', 'PR', '', '', '\n\n', '4533064756', '', '20/10/2020', 0, '0', '0'),
(342, 34239442, 4563, 0, 'BEBIDAS BARTINIK', 'ALISON', 'BEBIDAS BARTINIK EIRELI', '39442741000168', '', '9086572416', 'scherrersilva97@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85807550', 'COQUEIRAL', 'CASCAVEL', '', 1537, 'R. FRANCISCO BARTINIK', 'PR', '', '', '\n', '98431876', '', '25/10/2020', 0, '0', '0'),
(343, 34334631, 4563, 0, 'CONTAINERCHOPP BEBIDAS', 'JAMILA', 'CONTAINERCHOPP BEBIDAS LTDA.', '34631050000199', '', '9082437492', '@', '0', '', 'N', 1, '', '85802030', 'PQ SAO PAULO', 'CASCAVEL', '', 2307, 'R. CUIABA', 'PR', '', '', '\n', '999980114', '', '29/10/2020', 0, '0', '0'),
(344, 34432759, 1779, 0, 'AÇAI DO CARIOCA', 'MARCOS', 'NILZELIA GOMES DA SILVA 00902099582', '32759635000163', '', '155597701', 'marcoscariocabbg@gmail.com', '0', 'RAFAEL', 'N', 1, '', '45120000', 'CENTRO', 'BARRA DO CHOCA', '', 305, '10 AVENIDA GETULIO VARGAS  ', 'BA', '', '', '\n', '77988590859', '', '03/11/2020', 0, '0', '0'),
(345, 34510331, 4563, 0, 'BELLAS PISCINAS', 'IVONETE', 'C NUNES & CIA LTDA', '10331256000135', '', '9045404550', '@', '0', '', 'N', 1, '', '85812000', 'CENTRO', 'CASCAVEL', '', 4188, 'AV. BRASIL', 'PR', '', '', '\n', '32240185', '', '05/11/2020', 0, '0', '0'),
(346, 34628624, 4725, 0, 'BONI SUSHI - CAMPINA DA LAGOA', 'FABRICIO ', 'A. C. ZAFALON BONIFACIO', '28624881000130', '', '9076036362', '@', '0', '', 'N', 1, '', '87345000', 'CENTRO', 'CAMPINA DA LAGOA', '', 1036, 'AV BRASIL', 'PR', '', '', '\n', '4498790304', '', '07/11/2020', 0, '0', '0'),
(347, 34716638, 4563, 0, 'ESKINA DO SABOR', 'MARCOS', 'MARCO A. FORCELLINI VIVIAN', '39696530000151', '', '9086842499', '@', '0', '', 'N', 1, '', '85814200', 'BRAZMADEIRA', 'CASCAVEL', '', 39, 'R. OSWALDO EXPEDITO DALLOGLIO', 'PR', '', '', '', '99865700', '', '09/11/2020', 0, '0', '0'),
(348, 34816638, 4563, 0, 'FEIRA MODERNA', 'KARLA', 'FEIRA MODERNA', '16638863000129', '', '11122233', '@', '0', '', 'N', 1, '', '85811290', 'TROPICAL', 'CASCAVEL', '', 3037, 'R. FORTALEZA', 'PR', '', '', '\n', '4197347275', '', '11/11/2020', 0, '0', '0'),
(349, 34916638, 4563, 0, 'ATELIE DONNA CHICA', 'CHICO', 'ATELIE DONNA CHICA', '08690312951', '', '11122233', '@', '0', '', 'N', 1, '', '85811260', 'CONSOLATA', 'CASCAVEL', '', 1648, 'R. AGOSTINHO DOS SANTOS', 'PR', '', '', '\n\n', '98185940', '', '17/11/2020', 0, '0', '0'),
(350, 35039281, 5084, 0, 'CANDY DREAMS ', 'ANNE', 'CANDY DREAMS', '39281112000101', '', '0963831739', 'annekbiehl@gmail.com', '0', '', 'N', 1, '', '90560003', 'FLORESTA', 'PORTO ALEGRE', '', 2209, 'AV. CRSITOVAO COLOMBO', 'RS', '', '', '\n', '51996006808', '', '18/11/2020', 0, '0', '0'),
(351, 35139281, 5084, 0, 'STORE IN STORE', 'ANNE', 'STORE IN STORE', '39281112000284', '', '0963836382', 'annekbiehl@gmail.com', '0', '', 'N', 1, '', '90560003', 'FLORESTA', 'PORTO ALEGRE', '', 545, 'AV. CRISTOVAO COLOMBO', 'RS', '', '', '\n', '51996006808', '', '20/11/2020', 0, '0', '0');
INSERT INTO `EMPRESAS` (`ID`, `IDCLOUD`, `IDCIDADE`, `IDREPRESENTANTE`, `NOMEFANTASIA`, `NOMECONTATO`, `RAZAOSOCIAL`, `CNPJ`, `CNAE`, `INSCRICAOESTADUAL`, `EMAIL`, `RAMOATIVIDADE`, `REPRESENTANTE`, `NOVO`, `STATUS`, `ATIVO`, `CEP`, `BAIRRO`, `CIDADE`, `COMPLEMENTO`, `NUMERO`, `ENDERECO`, `UF`, `DATAVIGENCIA`, `CADASTRADAPOR`, `OBSERVACOES`, `FONECOBRANCA`, `FONEADICIONAL`, `DATAINICIO`, `DIASLICENCAPROVISORIA`, `VALORMENSALIDADE`, `VALORIMPLANTACAO`) VALUES
(352, 35216638, 4563, 0, 'PASTELARIA', 'DENISE', 'PASTELARIA', '16638863000129', '', '111222333', '@', '0', '', 'N', 3, '', '85811290', 'NEVA', 'CASCAVEL', '', 3639, 'R. CUIABA', 'PR', '', '', '\n\n', '999812961', '', '25/11/2020', 0, '0', '0'),
(353, 35333960, 4563, 0, 'ROYER & ROYER', 'LUIZ', 'ROYER & ROYER', '39829630000109', '', '9087014883', 'cleanupvendas@hotmail.com', '2', '', 'N', 1, '', '85816294', 'SÃO CRISTOVÃO', 'CASCAVEL', 'LOJA 8-9', 3182, 'AV. BRASIL', 'PR', '', '', '\ncomeçou dia  07/12\n\n', '45998602369', '', '26/11/2020', 0, '0', '0'),
(354, 35439605, 613, 0, 'GIU SUSHI', 'GIU', 'GIULIANO SOARES RIBEIRO 43893076816', '39605930000104', '', '563066699115', 'contatodogiusushi@gamil.com', '0', 'DANIEL', 'N', 1, '', '19400000', 'CENTRO', 'PRESIDENTE VENCESLAU', '', 324, 'AVENIDA JOAO PESSOA', 'SP', '', '', 'PERMUTA POR PUBLICIDADE\n', '18996668230', '', '03/12/2020', 0, '0', '0'),
(355, 35516638, 4563, 0, 'LAS VEGAS LANCHES', 'EDENILSON', 'LAS VEGAS LANCHES', '16638863000129', '', '11122233', '@', '0', '', 'N', 3, '', '85811290', 'BRASMEADEIRA', 'CASCAVEL', '', 1, 'R. ', 'PR', '', '', '\n', '99507839', '', '08/12/2020', 0, '0', '0'),
(356, 35616638, 4563, 0, 'CONTROLE', 'DANIEL', 'CONTROLE', '16638863000135', '', '', 'daniel@daniel.com', '0', '', 'N', 1, '', '85080000', 'CENTRO', 'CASCAVEL', '', 15, 'AV BRASI', 'PR', '', '', '\n', '4530391786', '', '09/12/2020', 0, '0', '0'),
(357, 35738049, 1673, 0, 'FAST POINT ', 'CRISTIANO', 'ACL CONVENIENCIA LTDA', '38049131000136', '', '38071800023', 'cristianodutra87@hotmail.com', '0', '', '', 0, '', '3997070', 'CENTRO', 'PEDRA AZUL', '', 635, 'AVENIDA SETE DE SETEMBRO', 'MG', '', '', '', '33991576222', '', '09/12/2020', 0, '0', '0'),
(358, 35839553, 4571, 0, 'KAMI DELIVERY', 'FRAN', 'SILVA ASIAN FOOD LTDA', '39553315000100', '', '5611201', 'alexandredasilva8991@gmail.com', '0', '', 'N', 1, '', '85853000', 'VILA YOLANDA', 'FOZ DO IGUACU', '', 3570, 'AV DAS CATARATAS', 'PR', '', '', '\n', '45991483611', '', '16/12/2020', 0, '0', '0'),
(359, 35920916, 4563, 0, 'SENSACAO CHURROS', 'ELISETE', 'SENSACAO CHURROS GOURMET', '20916120000140', '', '9068354100', '@', '0', '', 'N', 3, '', '85812001', 'CENTRO', 'CASCAVEL', '', 7624, 'AV. BRASIL', 'PR', '', '', '\n', '98202015', '', '16/12/2020', 0, '0', '0'),
(360, 36038663, 4563, 0, 'LOJA DA MANDRAKA', 'LUANA', 'LOJA DA MANDRAKA', '38663809000176', '', '111222333', '@', '0', '', 'N', 1, '', '85815460', 'BRASILIA', 'CASCAVEL', '', 1459, 'R.ALTEMAR DULTRA', 'PR', '', '', '\n', '99062273', '', '05/01/2021', 0, '0', '0'),
(361, 36139362, 4563, 0, 'C CONVENIENCIA E MERCIARIA LTDA', 'MONIKA', 'C CONVENIENCIA E MERCIARIA LTDA', '39362620000106', '', '	90864774-21', '@', '0', '', 'N', 1, '', '85806747', 'ESMERALDA', 'CASCAVEL', '', 2210, 'R. BOROROS', 'PR', '', '', '\n', '91367742', '', '07/01/2021', 0, '0', '0'),
(362, 36216638, 4563, 0, 'JMC CENTRO AUTOMOTIVO', 'PATRICIA', 'JMC CENTRO AUTOMOTIVO', '40570815000120', '', '11223333', '@', '0', 'ANDERSON', 'N', 1, '', '85805210', 'CENTRO', 'CASCAVEL', '', 2198, 'R. SANTA CATARINA', 'PR', '', '', '\n\n\n', '45 9916 8895', '', '12/01/2021', 0, '0', '0'),
(363, 36312345, 2940, 0, 'BELLA LIMA SEMIJOIAS', 'FRANCIELLI', 'FRANCIELLI DOS SANTOS LIMA', '12345678901230', '', '', 'bellalimasemijoias@outlook.com.br', '0', '', 'N', 1, '', '85807845', 'FELICITA', 'CASCAVEL', '', 200, 'AV DAS TORRES', 'CE', '', '', '\n\n\n\n', '459966661', '', '19/01/2021', 0, '0', '0'),
(364, 36422956, 4563, 0, 'LOJA DO CERVEJEIRO', 'LUANA', 'LOJA DO CERVEJEIRO LTDA', '22956193000191', '', '9070450809', 'luana@lojadocervejeiro.com.br', '0', 'DANIEL', 'N', 1, '', '85801170', 'CENTRO', 'CASCAVEL', '', 1801, 'MARECHAL CANDIDO RONDON', 'PR', '', '', '\n', '4530353830', '', '22/01/2021', 0, '0', '0'),
(365, 36523734, 4563, 0, 'PREMIER ESPETINHOS', 'PATRICIA OU ANDERSON', 'PREMIER COMERCIO DE ALIMENTOS LTDA', '23734634000173', '', '', 'premier@premierespetinhos.com.br', '0', '', 'N', 1, '', '85810011', 'CENTRO', 'CASCAVEL', '', 2527, 'PARANA', 'PR', '', '', '\n\n', '45998348293', '', '28/01/2021', 0, '0', '0'),
(366, 36623734, 4563, 0, 'PREIMIER ESPETINHOS VICENTE', 'PATRICIA, ANDERSON OU DANIEL', 'PREMIER COMERCIO DE ALIMENTOS LTDA', '23734634000173', '', '', 'premier@premierespetinhos.com.br', '0', '', 'N', 1, '', '85810011', 'CENTRO', 'CASCAVEL', '', 123, 'VICENTE MACHADO', 'PR', '', '', '\n\n', '45999343477', '', '28/01/2021', 0, '0', '0'),
(367, 36734734, 4560, 0, 'RUSTICO BAR E PETISCARIA', 'ROSE', 'WAGNER JOSE JOAO 03884636944', '34734748000130', '', '', 'rusticobarva@gmail.com', '0', 'DANIEL', 'N', 1, '', '85780000', 'CENTRO', 'BOA VISTA DA APARECIDA', '', 1056, 'AV TANCREDO NEVES', 'PR', '', '', '\n', '4591087837', '', '03/02/2021', 0, '180', '500'),
(368, 36822020, 4563, 0, 'DISTRIBUIDORA RIO DA PAZ', 'RICARDO', 'E J OLIVEIRA DOS SANTOS - DISTRIBUIDORA DE BEBIDAS - LTDA', '22020140000164', '', '9086269667', '@', '0', 'DANIEL', 'N', 1, '', '85803100', 'SANTA FELICIDADE', 'CASCAVEL', '', 1906, 'R. RIO DA PAZ', 'PR', '', '', '', '998621435', '', '04/02/2021', 0, '150', '100'),
(369, 36939577, 4571, 0, 'CONTAINER CHOPP', 'MAURICIO', 'MPG COMERCIO DE BEBIDAS LTDA', '39577338000146', '', '9086831705', '@', '0', 'ANDERSON', 'N', 1, '', '85852000', 'CENTRO', 'FOZ DO IGUACU', '', 1089, 'AV. PARANA', 'PR', '', '', '\n\n', '45999426400', '', '11/02/2021', 0, '300', '0'),
(370, 37029615, 4563, 0, 'CAO VEIO BURGER', 'ELYS', 'J. W. FERREIRA DOS SANTOS - HAMBURGUERIA', '29615984000105', '', '', 'caoveioburguer@outlook.com.br', '0', 'DANIEL', 'N', 1, '', '85812001', 'CENTRO', 'CASCAVEL', '', 5276, 'AV BRASIL', 'PR', '', '', '\n', '4599187132', '', '11/02/2021', 0, '250', '0'),
(371, 37116638, 4563, 0, 'ZZLANCHES', 'ZZ', 'ZZLANCHES LTDA', '16638863000129', '', '111222333', '@', '0', '(empty)', 'N', 3, '', '85811290', 'CENTRO', 'CASCAVEL', '(empty)', 12, 'R.', 'PR', '', '', '(empty)', '45999102545', '(empty)', '12/02/2021', 0, '0', '0'),
(372, 37227216, 5582, 0, 'HONORIOS CALDOS', 'HONORIO', 'MARIA DE FATIMA SANTOS', '27216281000170', '', '138860509', 'honorioscaldos@hotmail.com', '0', '', 'N', 1, '', '47850000', 'CENTRO', 'LUIS EDUARDO MAGALHAES', '', 301, 'RUA MATO GROSSO', 'BA', '', '', '380,00 mensalidade + 450,00 implantação- não iniciou ainda\n\n\n', '7736285920', '', '12/02/2021', 0, '0', '0'),
(373, 37309563, 4563, 0, 'TABERNA DO ALEMAO', 'DENISE', 'TABERNA DO ALEMAO', '45984730000102', '', '9094582692', '@', '0', '', 'N', 3, '', '85811290', 'NEVA', 'CASCAVEL', '', 3639, 'R. CUIABA', 'PR', '', '', '100 mensalidade', '999812961', '', '16/02/2021', 0, '0', '0'),
(374, 37440168, 4563, 0, 'BRASA HOOKAH', '4', 'BRASA HOOKAH TABACARIA LTDA', '40168515000110', '', '90874262-19', 'wlavancini@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85813010', 'SAO CRISTOVAO', 'CASCAVEL', '', 100, 'RUA PARANA', 'PR', '', '', '\n', '00047911128', '', '17/02/2021', 0, '150', '0'),
(375, 37530506, 4563, 0, 'HOOKAH BLACK', 'ANTENOR', 'N. L. MACHADO - TABACARIA', '30506732000119', '', '90781649-45', 'pedrojr@organac.com.br', '0', '(empty)', 'N', 1, '', '85817310', 'PERIOLO', 'CASCAVEL', '(empty)', 1418, 'RUA EUROPA', 'PR', '', '', '80,00\n MENSALIDADES, JUNTO COM A LOJA ANTIGA', '00453099415', '(empty)', '18/02/2021', 0, '80', '0'),
(376, 37623469, 5082, 0, 'GALETO D PRIMO', 'A', 'LUTIANE URNAUER 01512909033', '23469540000114', '', '111222333', '@', '0', '', 'N', 1, '', '11122233', 'CENTRO', 'PORTO ALEGRE', '', 123, 'R.', 'RS', '', '', 'começou dia 01/03  150,00 mensalidade/ s IMPLANTAÇÃO', '5195887070', '', '18/02/2021', 0, '0', '0'),
(377, 37716638, 4563, 0, 'ZZ LANCHES', 'FAGNER', 'ZZ LANCHES', '16638863000129', '', '111222333', '@', '0', '', 'N', 3, '', '85811290', 'SANTA CRUZ', 'CASCAVEL', '', 1, 'R.', 'PR', '', '', 'PARADADO DEVIDO A PANDEMIA', '998477574', '', '19/02/2021', 0, '0', '0'),
(378, 37816638, 4563, 0, 'LASVEGAS', 'A', 'LAS VEGAS', '16638863000129', '', '111222333', '@', '0', '', 'N', 3, '', '11122233', 'CENTRO', 'CASCAVEL', '', 1, 'R.', 'PR', '', '', 'iniciar depois do dia 15/03\n\n\n', '0000045', '', '22/02/2021', 0, '0', '0'),
(379, 37922516, 4563, 0, 'LIGA BRAZUCA', 'A', 'LIGA BRAZUCA', '22516469000110', '', '11122233', '@', '0', '', 'N', 3, '', '11122233', 'BR', 'CASCAVEL', '', 15308, 'PR-486', 'PR', '', '', 'mens 150,00   n 400,000 impl   -  c depois da  pandemia\nTALVEZ INICIA DIA 12', '0984338595', '', '24/02/2021', 0, '0', '0'),
(380, 38015072, 4563, 0, 'L BACCIN RESTAURANTE ME', 'LEONIR', 'L BACCIN RESTAURANTE ME', '15072417000137', '', '9058674823', '@', '0', '', 'N', 1, '', '85801095', 'CENTRO', 'CASCAVEL', '', 10, 'R. JARLINDO JOAO GRANDO', 'PR', '', '', '\n\n', '999186846', '', '24/02/2021', 0, '0', '0'),
(381, 38140933, 4563, 0, 'JORJAO LANCHES', 'JORGE', 'JORJAO LANCHES', '40933819000126', '', '11122233', 'jorjaolanhes0@gmail.com', '0', '', 'N', 1, '', '85811350', 'CLAUDETE', 'CASCAVEL', '', 1445, 'R. JORGE LACERDA', 'PR', '', '', '150,00 - dia do cadastro\n\n\n', '98346019', '', '25/02/2021', 0, '0', '0'),
(382, 38216638, 4563, 0, 'CONTROLE SISTEMAS (OFICIAL)', 'DANIEL', 'MOLINA E PAIXAO SIST INFORMACAO LTDA', '16638863000129', '', '', '', '0', '', 'N', 1, '', '85811290', 'CENTRO', '', '', 1774, 'AV BRASIL', 'PR', '', '', '\n', '4530391786', '', '26/02/2021', 0, '0', '0'),
(383, 38311408, 5084, 0, 'EMPÓRIO MARQUÊS', 'THAIS', 'EMPÓRIO MARQUÊS REST E BOUTIQUE DE CARNES LTDA', '11408789000130', '', '111222333', '@', '0', '', 'N', 1, '', '90480005', 'AUXILIADORA', 'PORTO ALEGRE', '', 1249, 'AV CARLOS GOMES', 'RS', '', '', '\n\nfechado, devido a PANDEMIA\n\n\n\n', '91161052', '', '03/03/2021', 0, '0', '0'),
(384, 38440716, 4563, 0, 'NONA LUCIA BOLO CASEIRO', 'JOSI COUTO', 'ROSANGELA BOLOS CASEIROS LTDA', '40716981000192', '', '9087913209', 'nona4728@gmail.com', '0', 'DANIEL', 'N', 1, '', '85812035', 'CENTRO', 'CASCAVEL', '', 2425, 'RUA MINAS GERAIS', 'PR', '', '', '\n\n\n\n', '4588137191', '', '05/03/2021', 0, '180', '0'),
(385, 38539960, 4563, 0, 'SOS MECANICA', 'SALETE', 'SOS MECANICA', '39960789000168', '', '111222333', '@', '0', '', 'N', 1, '', '85816010', 'SAO CRISTOVAO', 'CASCAVEL', '', 1902, 'R. JACAREZINH', 'PR', '', '', '\n\n', '999652839', '', '08/03/2021', 0, '0', '0'),
(386, 38621379, 4563, 0, 'CONTROLE SISTEMAS', 'CLARICE/VALDEMAR', 'CONTROLE SISTEMAS', '21379999000100', '', '9068332718', '@', '0', '', 'N', 3, '', '85801240', 'CENTRO', 'CASCAVEL', '', 2999, 'RUA  VISCONDE DO RIO BRANCO', 'PR', '', '', '\n\n', '4530269509', '', '10/03/2021', 0, '0', '0'),
(387, 38721379, 4563, 0, 'CONTROLE SISTEMAS', 'CLARICE/VALDEMAR', 'CONTROLE SISTEMAS', '21379999000100', '', '9068332718', '@', '0', '', 'N', 3, '', '85801240', 'CENTRO', 'CASCAVEL', '', 2999, 'RUA  VISCONDE DO RIO BRANCO', 'PR', '', '', '\n\n', '4530269509', '', '10/03/2021', 0, '0', '0'),
(388, 38821379, 4563, 0, 'CONTROLE SISTEMAS', 'DANIEL', 'CONTROLE SISTEMAS', '21379999000100', '', '9068332718', '@', '0', '', 'N', 1, '', '85801240', 'CENTRO', 'CASCAVEL', '', 2999, 'RUA  VISCONDE DO RIO BRANCO', 'PR', '', '', 'teste\n\n', '4530269509', '', '10/03/2021', 0, '100', '0'),
(389, 38940836, 4563, 0, 'SWEET WORLD', 'ANDERSON', 'ANDERSON LUIZ GONCALVES DA ROCHA', '40836477000126', '', '', 'sweetworldcascavel@gmail.com', '2', '', 'N', 1, '', '85804260', 'GUARUJA', 'CASCAVEL', '', 396, 'AV GRALHA AZUL', 'PR', '', '', 'NAO POSSUI EMISSAO DE NOTA FISCAL ELETRONICA\n1 PDV\n\n\n\n', '32265146', '999125022', '10/03/2021', 0, '120', '0'),
(390, 39034020, 4563, 0, 'RICARDO HENRIQUE VIGO', 'RICARDO', 'RICARDO HENRIQUE VIGO', '34020712000194', '', '9088055770', '@', '2', '', 'N', 1, '', '85814580', 'FLORESTA', 'CASCAVEL', '', 493, 'R. FLAMINGO', 'PR', '', '', 'Implantacao boleto para 30 dias direto.\n\n\n\n', '99981987', '', '18/03/2021', 0, '0', '0'),
(391, 39135926, 4563, 0, 'VALE VERDE', 'VALRDELI', 'WILLY HENRIQUE FARIAS DE PAULA', '35926854000188', '', '9083691651', '@', '0', 'ANDERSON', 'N', 1, '', '85817310', 'PERIOLO', 'CASCAVEL', '', 1965, 'R. EUROPA', 'PR', '', '', 'VARDELI FARIAS (VALE VERDE) FOI BAIXADA NÃO EXISTE MAIS, ESTÁ É A NOVA EMPRESA.\n\n', '999432043', '', '24/03/2021', 0, '0', '0'),
(392, 39240462, 4478, 0, 'SAKA SUSHI', 'PAULO', 'SAKA GUARAPUAVA COZINHA ORIENTAL LTDA', '40462527000152', '', '9087629080', '@', '0', '', 'N', 1, '', '85015240', 'SANTA CRUZ', 'GUARAPUAVA', '', 989, 'R. COMENDADOR NORBERTO', 'PR', '', '', 'sem implantação vai iniciar dia 07 de abril.\n\n', '42991113031', '', '06/04/2021', 0, '200', '0'),
(393, 39323931, 4563, 0, 'FORMIGUEIRO', 'GRAZIELA', 'G.P. DE OLIVEIRA - ME', '23931234000158', '', '9073177658', 'formigueirobolocaseiro@hotmail.com', '0', 'ANDERSON', 'N', 1, '', '85810020', 'CENTRO', 'CASCAVEL', '', 516, 'R. PERNAMBUCO', 'PR', '', '', 'IMPLANTACAO 50% PERMUTA 75.00 ANDERSON 75.00 JECIKA\n150.00 BOLETO JUNTO COM A PRIMEIRA MENSALIDADE.', '30966096', '', '12/04/2021', 0, '90', '150'),
(394, 39426029, 4563, 0, 'TOCA DO REI', 'FRANCIELE', 'TOCA DO REI', '26029400000113', '', '9073387202', '@', '0', '', 'N', 1, '', '85806330', 'SANTA CRUZ', 'CASCAVEL', '', 155, 'R. AIMORES', 'PR', '', '', 'vai iniciar dia 16 de abril, implantação vai decidir se a vista ou no boleto.mensalidade 250,00\n\nimplantação 600,00\n\niniciou dia 23/04\n\n', '30963722', '998046646', '15/04/2021', 0, '0', '0'),
(395, 39523931, 4563, 0, 'FORMIGUEIRO', 'GRAZIELA', 'G.P. DE OLIVEIRA - ME', '23931234000158', '', '9073177658', 'formigueirobolocaseiro@hotmail.com', '0', '', 'N', 1, '', '85810020', 'CENTRO', 'CASCAVEL', '', 516, 'R. PERNAMBUCO', 'PR', '', '', '', '30966096', '', '20/04/2021', 0, '0', '0'),
(396, 39614984, 4563, 0, 'YAKI SOBARIA', 'JULIANA', 'YAKI SOBARIA', '14984118000106', '', '9086519442', '@', '0', '', 'N', 1, '', '85805000', 'CENTRO', 'CASCAVEL', '', 2320, 'AV. TANCREDO NEVES', 'PR', '', '', 'segunda empresa do sabor e aroma, funciona no mesmo lugar, sem implantação.\n\n', '998018551', '', '23/04/2021', 0, '100', '0'),
(397, 39732251, 4563, 0, 'ALYSSON HICALLO MENDONCA', 'ANA PAULA', 'ALYSSON HICALLO MENDONCA 04978701180', '45665482000137', '', '', 'alyssonhicallo.md@gmail.com', '0', '', 'N', 1, '', '85805075', 'ALTO ALEGRE', 'CASCAVEL', '', 631, 'RUA FLAMBOYANT', 'PR', '', '', 'IMPLANTAÇÃO 750,00\nMENSALIDADES 170,00\nINICIO 24/06\nVENCIMENTO 05/08', '00459850690', '', '26/04/2021', 0, '0', '0'),
(398, 39824903, 4563, 0, 'LATA VELHA BURGER', 'FELIPE', 'OZEIAS NOVAES RODRIGO', '24903435000104', '', '111222333', '@', '0', '', 'N', 1, '', '85810010', 'NEVA', 'CASCAVEL', '', 1327, 'R. PIO XII', 'PR', '', '', '', '99837706', '', '27/04/2021', 0, '0', '0'),
(399, 39900631, 4563, 0, 'FHERAS ARTIGOS ESPORTIVOS', 'GILVANE', 'GILVANI SBAQUIERO CASCAVEL', '00631071000192', '', '9031701403', 'vendas@fheras.com.br', '2', '', 'N', 1, '', '85805090', 'ALTO ALEGRE', 'CASCAVEL', '', 476, 'R. GRACILIANO RAMOS', 'PR', '', '', 'iniciou dia 06/07 -  vai tentar cobrar 900,00 pelo muito trabalho era 500,00', '4530351878', '4530351878', '04/05/2021', 0, '180', '0'),
(400, 40041260, 4563, 0, 'CLUBE 2000 - RESTAURANTE E EVENTOS LTDA', 'DIAKSON', 'CLUBE 2000 - RESTAURANTE E EVENTOS LTDA', '41260975000136', '', '9088520367', '@', '0', 'ANDERSON', 'N', 1, '', '85812002', 'CENTRO', 'CASCAVEL', '', 4899, 'AV. BRASIL', 'PR', '', '', '', '33220776', '', '04/05/2021', 0, '0', '0'),
(401, 40141598, 4506, 0, 'BRASA STEAK & BAR', 'MOARA', 'BRASA STEAK LTDA', '41598524000103', '', '90888840-59', 'moaracaroline@hotmail.com', '0', 'DANIEL', 'N', 3, '', '85415000', 'PRIMAVERA', 'CAFELANDIA', '', 18, 'RUA JOAO LILI CIRICO', 'PR', '', '', '', '4599248916', '', '10/05/2021', 0, '220', '0'),
(402, 40241761, 4563, 0, 'FRUTARIA SABOR DO CAMPO', 'ZE RAIMUNDO', 'JOSE ROMUALDO PEDRO 02364238943', '41761395000122', '', '', 'jozerpedro@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85807550', 'COQUEIRAL', 'CASCAVEL', '', 1561, 'R FRANCISCO BARTNIK', 'PR', '', '', '', '4598165022', '', '12/05/2021', 0, '120', '0'),
(403, 40340093, 4695, 0, 'WORLD PODS', 'CAIO BERALDO', 'CAIO JUNIOR GOMES BERALDO', '40093428898', '', '', 'caiojgb@hotmail.com', '0', 'DANIEL', 'N', 1, '', '87113090', 'JD PANORAMA', 'MARINGA', '', 1070, 'RUA MACHADO DE ASSIS', 'PR', '', '', 'PRIMEIRA MENSALIDADE PRA SEGUNDA FEIRA. METODO DE COBRANCA: PAGA PARA USAR (PRE-PAGO)\nCPF 40093428898', '44999861465', '', '12/05/2021', 0, '0', '0'),
(404, 40437176, 4505, 0, 'NA PETISCARIA', 'NATHALIA', 'NATHALIA MARQUES', '37176965000140', '', '111222333', '@', '0', 'ANDERSON', 'N', 1, '', '85410000', 'CENTRO', 'NOVA AURORA', '', 10, 'AV. SAO LUIZ', 'PR', '', '', '', '99954816', '', '14/05/2021', 0, '0', '0'),
(405, 40539903, 4587, 0, 'VOVO SISI', 'WANYLA KEROLAYNE BERNARDO', 'SIRLEY APARECIDA MARTIN 02894339836', '39903027000120', '', '', 'vovo.sisi@hotmail.com', '0', '', 'N', 1, '', '85935000', 'BRAGANTINA', 'ASSIS CHATEAUBRIAND', '', 476, 'AV PARANA', 'PR', '', '', '', '4499181183', '', '17/05/2021', 0, '0', '400'),
(406, 40641283, 4740, 0, 'SAKA SHOPPING', 'DIAKSON', 'SAKA SHOPPING COZINHA ORIENTAL LTDA', '41283246000103', '', '9088544622', 'saka.palladium@gmail.com', '0', '', 'N', 1, '', '87502000', 'ZONA III', 'UMUARAMA', 'L67 PALLADIUM', 8455, 'AV PARANA', 'PR', '', '', 'saka sushi shopping', '999694447', '', '03/06/2021', 0, '0', '0'),
(407, 40741162, 4740, 0, 'CHOCOSTORY', 'DOUGLAS', 'CHOCOSTORY COMERCIO LTDA', '41162763000116', '', '9088407633', '@', '0', 'DANIEL', 'N', 1, '', '87502000', 'ZONA III', 'UMUARAMA', '', 8455, 'AV PARANA', 'PR', '', '', '', '44988074348', '', '03/06/2021', 0, '180', '0'),
(408, 40837644, 4571, 0, 'ROYAL CAKE', 'PATRICIA', 'PATRICIA BRAGHIN CANDELORO', '37644768000108', '', '', 'patricia.braghin@hotmail.com', '0', '', 'N', 1, '', '85851020', 'CENTRO', 'FOZ DO IGUACU', '', 1986, 'R MARECHAL FLORIANO PEIXOTO', 'PR', '', '', 'INSTALADO PACOTE BASICO A PRINCIPIO. CLIENTE VAI VER A NECESSIDADE DE IMPLANTACAO DO PACOTE COMPLETO MAIS ADIANTE.', '45999523192', '', '07/06/2021', 0, '220', '0'),
(409, 40938946, 5107, 0, 'MARQUES GASTRONOMIA', 'RODRIGO', 'GR RESTAURANTES LTDA', '38946123000192', '', '0570354927', '@', '0', 'ANDERSON', 'N', 1, '', '94010021', 'CENTRO', 'GRAVATAI', '', 1471, 'RUA DR LUIZ BASTOS DO PRADO', 'RS', '', '', '', '519715616', '', '08/06/2021', 0, '800', '350'),
(410, 41017928, 4563, 0, 'EVANDRO JORGE FERRONATTO', 'EVANNDRO', 'EVANDRO JORGE FERRONATTO', '17928467000107', '', '9063052679', 'Kas.ferronatto@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85815385', 'JARDIM CONSOLATA', 'CASCAVEL', '', 163, 'R. ARNALDO ESTRELA', 'PR', '', '', '', '32278041', '', '14/06/2021', 0, '0', '0'),
(411, 41124371, 4563, 0, 'RESTAURANTE PAZ', 'VALDECIR', 'GUIMARAES RUGINSKI LTDA', '24371666000114', '', '9071657520', 'valdecir_marines@hotmail.com', '0', '', 'N', 1, '', '85816540', 'SAO CRISTOVAO', 'CASCAVEL', '', 487, 'AV. ROCHA POMBO', 'PR', '', '', 'somente nota\n99972 4290', '32293030', '', '15/06/2021', 0, '100', '0'),
(412, 41242063, 4563, 0, 'TATU BEBIDAS', 'LUZIA', 'LUZIA DE FATIMA DA SILVA MARTINS BALESTERO', '42437396000189', '', '111222333', '@', '0', '', 'N', 1, '', '85801010', 'INTERLAGOS', 'CASCAVEL', '', 1359, 'R. LEONARDO DA VINCE', 'PR', '', '', 'ERA PRA SER 400,00 A IMPLANTAÇÃO, TEVE MAL ENTENDIDO E  ENTÃO O ANDERSON COBROU 150,00 ( MENSALIDADE ANTECIPADA)', '988360342', '', '16/06/2021', 0, '150', '150'),
(413, 41336127, 4563, 0, 'KONING CONVENIENCIA E TABACARIA', 'OTAVIO', 'OTAVIO LIMA DALLA NORA COMERCIO DE BEBIDAS LTDA', '36127556000190', '', '90853839-03', 'koningchoppcascavel@gmail.com', '0', 'DANIEL', 'N', 1, '', '85805265', 'ALTO ALEGRE', 'CASCAVEL', '', 5834, 'RUA CUIABA', 'PR', '', '', 'IMPLANTAÇÃO 600,00\nMENSALIDADE 200,00  \nINICIOU 01/07', '45984016452', '', '17/06/2021', 0, '200', '600'),
(414, 41422516, 4563, 0, 'ARENA BRAZUCA', 'KASSIANE', 'ARENA BRAZUCA', '22516469000110', '', '111222333', '@', '0', '', 'N', 3, '', '85801101', 'CEASA', 'CASCAVEL', '', 1, 'BR. 186', 'PR', '', '', 'Mesmo contato do Ferronato Carrocerias\nainda não começou 22/02', '984338295', '', '22/06/2021', 0, '150', '0'),
(415, 41541397, 4563, 0, 'M I PRADO PRODUTOS DE LIMPEZA LTDA', 'MIGUEL', 'M I PRADO PRODUTOS DE LIMPEZA LTDA', '41397210000142', '', '9088658717', 'miguelprado1975@gmail.com', '0', '', 'N', 1, '', '85803760', 'PARQUE SAO PAULO', 'CASCAVEL', '', 1078, 'R. GENERAL OSORIO', 'PR', '', '', '', '999968190', '', '24/06/2021', 0, '0', '0'),
(416, 41640032, 4598, 0, 'SHS STORE', 'WILLIAN', 'JVL TABACARIA LTD', '40032074000124', '', '9087247632', 'viniciusmoreira.m.s@gmail.com', '0', '', 'N', 1, '', '86070545', 'JARDIM SHANGRI-LA A', 'LONDRINA', 'SALA', 122, 'AV TIRADENTES', 'PR', '', '', '', '4333619435', '4330284052', '01/07/2021', 0, '0', '0'),
(417, 41729019, 5010, 0, 'BOLO DA NONNA', 'LUCIA', 'MARIA SALETE DA ROSA EPP', '29019184000113', '', '', 'gra.bolodanonna@hotmail.com', '0', '', 'N', 3, '', '89801080', 'CENTRO', 'CHAPECO', '', 304, 'QUINTINO BOCAIUVA', 'SC', '', '', 'não vai rodar.', '4930260828', '', '06/07/2021', 0, '0', '0'),
(418, 41802895, 5084, 0, 'ALTIS RESTAURANTE', 'ALINE', 'ALTIS QUERO BIS ALIMENTOS LTDA', '02895507000186', '', '0962729027', '@', '0', '', 'N', 1, '', '90480200', 'MONT SERRAT', 'PORTO ALEGRE', '', 1246, 'R. ANITA GARIBALDI', 'RS', '', '', '', '5130844444', '', '06/07/2021', 0, '400', '0'),
(419, 41942560, 4563, 0, 'CAFE CHARLOTTE', '4584034169', 'TJ SANTOS CAFETERIA LTDA.', '42560246000168', '', '90898888-48', 'adm3@lorenzoassociados.com.br', '0', 'DANIEL', 'N', 1, '', '85801041', 'CENTRO', 'CASCAVEL', '', 1556, 'RUA SANTA CATARINA', 'PR', '', '', '180,00 MENSALIDADE\n700,00 IMPLATAÇÃO - ENTRADA + 30 DIAS\ninicio dia 10', '32222100', '', '07/07/2021', 0, '180', '750'),
(420, 42028621, 4506, 0, 'PARADA DO ESPETINHO', 'FABIO', 'ESPETINHO DOS AMIGOS LTDA', '28621229000162', '', '9083865234', 'paradadoespetinhocaf@gmail.com', '0', '', 'N', 1, '', '85415000', 'CENTRO', 'CAFELANDIA', 'QDRA 07 LT 20 SL 2', 374, 'R INTES DOLAR FONTANA', 'PR', '', '', 'vai começar', '45999438403', '45999262269', '09/07/2021', 0, '0', '0'),
(421, 42141600, 4563, 0, 'BURGZ', 'LORRANE', 'ZZ LANCHES LTDA', '41600371000191', '', '9088888127', '@', '0', 'ANDERSON', 'N', 1, '', '85811290', 'CANCELLI', 'CASCAVEL', '(empty)', 107, 'R. ALBERI ANTONIO RICHARDI', 'PR', '', '', 'VAI INICIAR DIA 02', '998477574', '(empty)', '10/07/2021', 0, '100', '0'),
(422, 42241357, 4563, 0, 'ARENA MATCH POINT LTDA', 'GALANI', 'ARENA MATCH POINT LTDA', '41357430000142', '', '9088617794', 'escritorio@contabilintegral.com.br', '0', '', 'N', 1, '', '85807450', 'CENTRO', 'CASCAVEL', 'QUADRA VOLEI', 8607, 'AV BRASIL', 'PR', '', '', 'IMPLANTAÇÃO 500,00\nMENSALIDADE 150,00\ninicio 16/07', '4532224064', '', '12/07/2021', 0, '150', '450'),
(423, 42318383, 4563, 0, 'HAPPYOGGE BURGUER', 'DIOGENES', 'HAPPYOGGE BURGER', '18383247000108', '', '9063475472', '@', '0', 'ANDERSON', 'N', 3, '', '85816090', 'SAO CRISTÓVÃO', 'CASCAVEL', '', 330, 'R. DESEMBARGADOR FERREIRA DA COSTA', 'PR', '', '', '', '998229991', '', '13/07/2021', 0, '180', '0'),
(424, 42423064, 4563, 0, 'PIZZARIA AGUA NA BOCA', 'JESSICA', 'J MICOANSKI PIZZARIA', '23064559000180', '', '9081216948', 'jessicamicoanski@gmail.com', '0', 'DANIEL', 'N', 1, '', '85816330', 'PACAEMBU', 'CASCAVEL', '', 936, 'RUA OLINDO PERIOLO', 'PR', '', '', 'deve iniciar dia 27', '4532221676', '', '15/07/2021', 0, '250', '0'),
(425, 42542422, 4563, 0, 'SANTA RUAH LTDA', 'PORTAL', 'SANTA RUAH LTDA', '42422870000107', '', '9089729618', 'real@realcontadores.com.br', '0', '', 'N', 1, '', '85810001', 'CENTRO', 'CASCAVEL', '', 7654, 'AV BRASIL', 'PR', '', '', 'restaurante Osni da Portal\nvai começar dia 10', '4532250011', '', '19/07/2021', 0, '190', '0'),
(426, 42610738, 4563, 0, 'HOOLIGANS PUB', 'ANDERSON', 'HOOLIGANS BAR E RESTAURANTE LTDA ME', '10738913000163', '', '9047538901', '@', '0', '', 'N', 3, '', '85810210', 'CENTRO', 'CASCAVEL', '', 4024, 'R. PARANA', 'PR', '', '', '', '99865700', '', '30/07/2021', 0, '0', '0'),
(427, 42741420, 4563, 0, 'AKITEM REPRESENTACOES', 'JAQUE', 'AKITEM REPRESENTACOES', '08911792000168', '', '9094625332', '@', '0', '', 'N', 1, '', '85810080', 'CENTRO', 'CASCAVEL', '', 4191, 'R. CARLOS DE CARVALHO', 'PR', '', '', 'inicio 08/08/2021\nmensalidade dia 10 de cada mes\nimplantação a vista', '4530394848', '', '08/08/2021', 0, '0', '0'),
(428, 42839658, 4809, 0, 'SUMMER SHOP CONVENIENCIA', 'JEZICA', 'SUMMER SHOP CONVENIENCIA', '39658634000171', '', '111222333', 'jezicaaf.jf@gmail.com', '0', '', 'N', 1, '', '88830482', 'CENTRO', 'BALNEARIO CAMBORIU', '', 129, 'RUA 1900', 'SC', '', '', '', '47996980001', '', '10/08/2021', 0, '200', '0'),
(429, 42930761, 5582, 0, 'ASPEN GELADOS COMESTIVEIS', 'REPRESENTANTE', 'ASPEN GELADOS COMESTIVEIS INDUSTRIA E COMERCIO EIRELI', '30761066000165', '', '149768087', 'diegolauck84@hotmail.com', '0', '', 'N', 1, '', '47850000', 'MIMOSO DO OESTE', 'LUIS EDUARDO MAGALHOES', '', 416, 'RUA PERNANBUCO', 'BH', '', '', '', '7791918314', '', '16/08/2021', 0, '0', '0'),
(430, 43011671, 1138, 0, 'KADU BARMAN', 'KADU', 'CARLOS EDUARDO MIRANDA ALMEIDA', '11671642000139', '', '0026084600000', '@', '0', '', 'N', 3, '', '36570000', 'JOAO BRAZ DA COSTA VAL', 'VICOSA', '', 251, 'RUA DA MANTIQUEIRA', 'MG', '', '', 'criente desistiu antes de começar', '3138913663', '', '18/08/2021', 0, '0', '0'),
(431, 43133710, 4802, 0, 'BOTEQUIM DO GORDINHO', 'CAROL', 'IRENE ALVES DE OLIVEIRA', '33710112915', '', '', 'irenejacarezinho@gmail.com', '0', '', 'N', 1, '', '88220000', 'MEIA PRAIA', 'ITAPEMA', '', 5533, 'AV NEREU RAMOS', 'SC', '', '', 'MESMO VALOR DA MENSALIDADE DA LOJA DE BEBIDAS.\nmensalidade para o dia 15', '47997386715', '', '19/08/2021', 0, '0', '0'),
(432, 43233262, 4563, 0, 'RESTAURANTE EUROPA', 'CARLA', 'VALDIR EDUARDO TIDES', '33262000000119', '', '9087798191', 'valdirtides@gmail.com', '0', '', 'N', 1, '', '85817310', 'SL2', 'CASCAVEL', '', 2101, 'R. EUROPA', 'PR', '', '', '', '84078257', '', '22/08/2021', 0, '120', '0'),
(433, 43342927, 4563, 0, 'REI DA GULA', 'JULIANA', 'JULIANA FAUSTINO DOS SANOTS CHAGAS 327118211838', '42927143000193', '', '', 'oreidagula@hotmail.com', '0', '', 'N', 1, '', '85806750', 'ESMERALDA', 'CASCAVEL', '', 281, 'R DOS PINUS', 'PR', '', '', '', '4530160648', '', '24/08/2021', 0, '0', '0'),
(434, 43433101, 4695, 0, 'RESTAURANTE ARMAZEM', 'DALMO FERRARI', 'RESTAURANTE E PETISCARIA BERTE E BERTE LTDA', '33101153000184', '', '9080875425', 'dalmoferrari@gmail.com', '0', '', 'N', 1, '', '87014450', 'JARDIM ALAMAR', 'MARINGA', '', 1801, 'AV JOAQUIM DUARTE MOLEIRINHO', 'PR', '', '', '', '45988423015', '', '24/08/2021', 0, '0', '0'),
(435, 43531779, 5084, 0, 'MAESTRO GASTRONOMIA', 'FRAN', 'MAESTRO GASTRONOMIA', '31779287000123', '', '0963895907', '@', '0', '', 'N', 1, '', '90430091', 'RIO BRANCO.', 'PORTO ALEGRE', '', 307, 'R. DONA LAURA', 'RS', '', '', '', '980338594', '', '29/08/2021', 0, '0', '0'),
(436, 43629439, 4563, 0, 'ATELIE DE DOCES IRMAS CEREJAS LTDA', 'LUANA', 'ATELIE DE DOCES IRMAS CEREJAS LTDA', '29439504000275', '', '', 'docesmariacereja@gmail.com', '0', '', 'N', 1, '', '85812010', 'CENTRO', 'CASCAVEL', '', 979, 'R PARANA', 'PR', '', '', 'iniciou dia 13/09', '4599671087', '', '30/08/2021', 0, '0', '0'),
(437, 43740917, 2007, 0, 'ASPEN SORVETES', 'MAYARA REPRESENTANTE', 'LEOCLECIA LAUCK 71965238149', '30744466000162', '', '', 'leoclecialauck@hotmail.com', '0', '', 'N', 1, '', '47800181', 'CENTRO', 'BARREIRAS', '', 308, 'R CAFE FILHO', 'BA', '', '', 'iniciou dia 23/11', '7799749744', '', '31/08/2021', 0, '180', '360'),
(438, 43837184, 4563, 0, 'CASA DAS BEBIDAS', 'KETTY', 'DB NORONHA COMERCIO DE BEBIDAS LTDA', '43904645000161', '', '9091372336', 'vallor16@hotmail.com', '2', '', 'N', 1, '', '85805260', 'ALTO ALEGRE', 'CASCAVEL', '', 4603, 'RUA CUIABA', 'PR', '', '', '', '4530381500', '4599498442', '01/09/2021', 0, '0', '0'),
(439, 43942620, 4563, 0, 'HORIZON BARBER E PUB', 'RODRIGO', 'HORIZON BARBER E PUB', '42620721000144', '', '9090247066', 'rodmeiras@gmail.com', '0', '', 'N', 1, '', '85806001', 'SANTA CRUZ', 'CASCAVEL', '', 11835, 'AV. BRASIL', 'PR', '', '', 'vai iniciar dia 06', '999148522', '', '08/09/2021', 0, '200', '0'),
(440, 44043371, 4563, 0, 'MEGA TRON LOUGE', 'ADEMIR', 'A F CORREIA TABACARIA', '43371556000105', '', '9090787842', '@', '0', '', 'N', 1, '', '85814430', 'INTERLAGOS', 'CASCAVEL', '', 897, 'R. LEONARDO DA VINCI', 'PR', '', '', 'INICIA DIA 11\n\nSEM IMPLANTACAO', '30968365', '999308205', '09/09/2021', 0, '150', '0'),
(441, 44142771, 5316, 0, 'SNAKE SANTA MARIA', 'MARI', 'SNAKE SANTA MARIA LTDA', '42771624000152', '', '1090413324', 'financeiro@tabacariasnake.com.br', '0', '', 'N', 1, '', '97015513', 'NOSSA SENHORA DE FATIMA', 'SANTA MARIA', '', 2075, 'AV  PRESIDENTE VARGAS', 'RS', '', '', '', '55991085571', '55991085571', '10/09/2021', 0, '250', '350'),
(442, 44243263, 5582, 0, 'LANCHONETE E PIZZARIA SHALLON LTDA', 'MAICOM', 'LANCHONETE E PIZZARIA SHALLON LTDA', '43263129000103', '', '184165186', 'anaclarabrito1999@gmail.com', '0', 'MAICON', 'N', 1, '', '47850000', 'MIMOSO DO OESTE', 'LUIS EDUARDO MAGALHAES', '', 699, 'RUA PARANA', 'BH', '', '', '', '8981399392', '', '14/09/2021', 0, '220', '500'),
(443, 44315372, 4583, 0, 'MIST LOUNGE', 'LUCAS', 'IC COMERCIO DE BEBIDAS LTDA', '15372080000183', '', '9059244350', 'misttoledo@gmail.com', '0', '', 'N', 1, '', '85905390', 'CENTRO', 'TOLEDO', '', 353, 'RUA HAROLDO  HAMBILTON', 'PR', '', '', 'vai iniciar dia 06', '4530565486', '', '14/09/2021', 0, '0', '0'),
(444, 44414823, 4563, 0, 'SW PNEUS', 'VILMAR', 'SW PNEUS', '14823535000177', '', '9089698046', '@', '0', 'ANDERSON', 'N', 1, '', '85817170', 'BRASILIA', 'CASCAVEL', '', 997, 'R. SÃO GABRIEL', 'PR', '', '', 'INICIOU DIA 05/11', '984132415', '', '21/09/2021', 0, '100', '0'),
(445, 44542236, 4725, 0, 'ADEGA 81', 'LUCIA', 'S G DA SILVA DISTRIBUIDORA DE BEBIDAS LTDA', '42236696000108', '', '9089520140', 'seriogabriel-81@hotmail.com', '0', '', 'N', 1, '', '87345000', 'JARDIM FORNARI', 'CAMPINA DA LAGOA', '', 1, 'RUA BARTOLOMEU DE GUSMAO', 'PR', '', '', 'Adega 83', '12981619149', '', '30/09/2021', 0, '100', '350'),
(446, 44632995, 4563, 0, 'IMPERIAL BEBIDAS', 'GABRIEL MORAES', 'IMPERIAL COMERCIO DE BEBIDAS LTDA', '32995181000120', '', '9080740090', 'julianopriimon@hotmail.com', '2', '(empty)', 'N', 1, '', '85811030', 'CANCELLI', 'CASCAVEL', 'SL 02;', 2108, 'RUA MANAUS', 'PR', '', '', '(empty)', '33032001', '(empty)', '01/10/2021', 0, '200', '0'),
(447, 44703816, 4563, 0, 'TRAJE STYLE', 'LUCAS MEDEIROS', 'TRAJE STYLE', '03816243908', '', '', 'crischastalo@hotmail.com', '2', '', 'N', 3, '', '85817310', 'PERIOLLO', 'CASCAVEL', 'SALA 4', 1750, 'RUA EUROPA', 'PR', '', '', 'SEM IMPLANTACAO', '45999991488', '45998170411', '06/10/2021', 0, '50', '0'),
(448, 44837844, 4563, 0, 'SUN7', 'JULIANO', 'SUN7 BAR E RESTAURANTE LTDA', '37844217000198', '', '9085485820', 'julianopriimon@hotmail.com', '0', '', 'N', 1, '', '85810160', 'CENTRO', 'CASCAVEL', '', 2850, 'RUA PIO XII', 'PR', '', '', '', '45998540001', '', '06/10/2021', 0, '200', '0'),
(449, 44915532, 4563, 0, 'DELICIAS DLU', 'LUCIA', 'LUCIA SALRES RAMOS GONCALVES 02759480992', '15532730000100', '', '', 'lucia.salres@gmail.com', '0', '', 'N', 1, '', '85806000', 'FAG', 'CASCAVEL', '', 11424, 'AV BRASIL', 'PR', '', '', '', '45999682979', '', '09/10/2021', 0, '150', '150'),
(450, 45043686, 4563, 0, 'MAMIS BABY MODA INFANTIL', 'CAROLINE', 'MAMIS BABY MODA INFANTIL', '43686235000191', '', '', '@', '0', 'ANDERSON', 'N', 1, '', '85819195', 'MARIA LUIZA', 'CASCAVEL', '', 722, 'R. EXPEDICIONÁRIO', 'PR', '', '', 'INICIOU DIA 26/10', '999130117', '', '11/10/2021', 0, '120', '0'),
(451, 45135773, 4560, 0, 'CHOPERIA PERCISA', 'GUSTAVO', 'SIGNORINI E BERTI RESTAURANTE LTDA', '35773335000127', '', '9083558498', 'leandro.signorini@hotmail.com / percisamateriais@hotmail.com', '0', '', 'N', 1, '', '85780000', 'CENTRO', 'BOA VISTA DA APARECIDA', '', 753, 'AV TANCREDO NEVES', 'PR', '', '', '', '4591091491', '', '15/10/2021', 0, '130', '500'),
(452, 45239682, 4560, 0, 'DESTILARIA BOA VISTA', 'LUCAS', 'DESTILARIA BOA VISTA S/A', '39682618000114', '', '', 'destilariaboavista@hotmail.com', '0', '', 'N', 3, '', '85780000', 'ZONA RURAL', 'BOA VISTA DA APARECIDA', '', 651, 'EST LINHA PINHEIRINHO', 'PR', '', '', '', '4599715889', '', '20/10/2021', 0, '0', '0'),
(453, 45336114, 4583, 0, 'SHELBY', 'EMANUEL', 'DLR EVENTOS LAUGEMUSIC LTDA', '36114193000159', '', '9083842455', 'carmen.agilcontabilidade@gmail.com', '0', '', 'N', 1, '', '85903170', 'JARDIM SANTA MARIA', 'TOLEDO', '', 3369, 'AV PARIGOT DE SOUZA', 'PR', '', '', '', '4530552489', '', '26/10/2021', 0, '450', '0'),
(454, 45439645, 4898, 0, 'CRISTAL INDUSTRIAL LTDA', 'FÁTIMA MARIA NIEDERMAYER', 'CRISTAL INDUSTRIAL LTDA', '39645693000105', '', '260767638', 'mipremium@yahoo.com', '0', 'DANIEL', 'N', 1, '', '89108000', 'INDUSTRIAL ZEFERINO KUKLINSKI', 'MASSARANDUBA', '', 190, 'R 081', 'SC', '', '', 'iniciou 29/10', '4797588888', '', '26/10/2021', 0, '150', '450'),
(455, 45543474, 4563, 0, 'HIMAGE AGRO PET', 'JOAO', 'HIMAGE AGRO PET', '43474831000108', '', '111222333', '@', '0', '', 'N', 1, '', '85818280', 'JARDIM ITALIA', 'CASCAVEL', '', 839, 'R. ITALIA', 'PR', '', '', 'iniciou dia 10/11', '999375265', '', '27/10/2021', 0, '100', '0'),
(456, 45630761, 5582, 0, 'ASPEN GELADOS COMESTIVEIS INDUSTRIA E COMERCIO EIRELI', 'MAYARA', 'ASPEN GELADOS COMESTIVEIS INDUSTRIA E COMERCIO EIRELI', '30761066000165', '', '149768087', 'diegolauck84@hotmail.com', '0', '', 'N', 1, '', '47850000', 'MIMOSO DO OESTE', 'LUIS EDUARDO MAGALHAES', '', 416, 'RUA PERNAMBUCO', 'BA', '', '', '', '7791918314', '', '28/10/2021', 0, '0', '0'),
(457, 45740917, 5582, 0, 'ASPEN BRS', 'REP BAHIA', 'BRUNO LAUCK MARIANO 03237220590', '40917180000195', '', '', 'brunolauck@gmail.com', '0', '', 'N', 1, '', '47810719', 'BARREIRINHAS', 'BARREIRAS', '', 133, 'R SAO BERNARDO', 'BA', '', '', 'iniciou dia 23/11', '7799989485', '', '28/10/2021', 0, '180', '360'),
(458, 45826434, 4563, 0, 'TABACARIA SNAKE', 'MARIANE', 'TABACARIA SNAKE LTDA', '26434428000136', '', '', 'financeiro@tabacariasnake.com.br', '0', 'DANIEL', 'N', 1, '', '85810001', 'CENTRP', 'CASCAVEL', '', 7356, 'AV BRASIL', 'PR', '', '', '', '64533068813', '', '07/11/2021', 0, '0', '0'),
(459, 45943317, 4563, 0, 'DUBAI BEBIDAS E TABACARIA', 'DARI PEREIRA', 'STEFHANY GABRIELLY RANGHETTI PEREIRA', '43317037000150', '', '', 'stefhanydarydary@gmail.com', '0', 'DANIEL', 'N', 1, '', '85802340', 'NEVA', 'CASCAVEL', '', 27, 'RUA JOAO POLLES', 'PR', '', '', '', '45984171231', '', '08/11/2021', 0, '100', '0'),
(460, 46034040, 4725, 0, 'AGRO-VIDA', 'VANDERLEIA', 'K. TAGO JUNIOR CONFECCOES', '34040598000164', '', '9081852003', 'tconfeccoes@outlook.com', '0', 'DANIEL', 'N', 3, '', '87345000', 'CENTRO', 'CAMPINA DA LAGOA', '', 512, 'RUA VEREADOR NELSON DA SILVEIRA', 'PR', '', '', '', '4497226700', '', '10/11/2021', 0, '0', '0'),
(461, 46134638, 4571, 0, 'ELIANE BALENA PASTIFICIO', 'DELACIR', 'ELIANE BALENA E CIA LTDA', '34638017000190', '', '9082445401', 'financeiro@goldcereais.com.br', '0', '', 'N', 1, '', '85853222', 'JARDIM IGUACU', 'FOZ DO IGUACU', '', 2456, 'AV FELIPE WANDSCHEER', 'PR', '', '', 'Essa empresa é a mesma do La Mafia.', '4530552120', '', '12/11/2021', 0, '280', '0'),
(462, 46238088, 4563, 0, 'SEKAI SUSHI', 'ALINE', 'RESTAURANTE GABELINI EIRELI', '38088105000117', '', '9085739198', 'contavelcontabilidade@gmail.com', '0', 'DANIEL', 'N', 1, '', '85807060', 'COQUEIRAL', 'CASCAVEL', '', 2938, 'RUA RECIFE', 'PR', '', '', '', '45988138318', '', '12/11/2021', 0, '150', '0'),
(463, 46330272, 4563, 0, 'CACAROLA RESTAURANTE', 'LEONARDO', 'ALESSANDRA GASPARETO', '30272982000131', '', '9077913863', 'leonardogilio@hotmail.com', '0', '', 'N', 1, '', '85819690', 'MARIA LUIZA', 'CASCAVEL', '', 1481, 'RUA DR SANDINO ERASMO DE AMORIM', 'PR', '', '', 'INICIOU DIA 01/12', '91342102', '', '16/11/2021', 0, '0', '0'),
(464, 46442272, 4563, 0, 'LOJA FCC', 'BRUNA', 'ENSINO DE ESPORTE E TREINAMENTOS EMPRESARIAL', '35220439000104', '', '111222333', '@', '0', '', 'N', 1, '', '85816294', 'SAO CRISTOVAO', 'CASCAVEL', '', 2962, 'AV. BRASIL', 'PR', '', '', 'vai iniciar dia 1/12', '988107385', '', '16/11/2021', 0, '0', '0'),
(465, 46529764, 4563, 0, 'MARQUINHOS BEBIDAS', 'MARQUINHOS', 'MJF COMERCIO DE BEBIDAS LTDA', '29764161000133', '', '9084457326', '@', '0', '(empty)', 'N', 1, '', '85214860', 'INTERLAGOS', 'CASCAVEL', '(empty)', 241, 'AV. INTERLAGOS', 'PR', '', '', 'iniciou dia 26/11', '999025592', '(empty)', '22/11/2021', 0, '0', '0'),
(466, 46636599, 4727, 0, 'EMPRESTIMO JA', 'NADIR', 'E NUNES DE AZEVEDO - INFORMATICA', '36599653000186', '', '9084332701', 'emprestimoconsignado29@gmail.com', '0', 'DANIEL', 'N', 1, '', '87360000', 'JARDIM PRIMAVERA', 'GOIOERE', '', 145, 'RUA ITAIPU', 'PR', '', '', 'SEM MENSALIDADES', '999234956', '', '23/11/2021', 0, '0', '0'),
(467, 46744373, 4563, 0, 'I NUNES COMERCIO DE PISCINAS LTDA', 'IVONETE', 'I NUNES COMERCIO DE PISCINAS LTDA', '44373409000129', '', '9091911300', '@', '0', '', 'N', 1, '', '85812000', 'CENTRO', 'CASCAVEL', '', 4188, 'AV. BRASIL', 'PR', '', '', 'I NUNES 70,00 JUNTAR COM A BELLAS', '30351500', '', '26/11/2021', 0, '0', '0'),
(468, 46826029, 4563, 0, 'TOCA DO REI', 'JUNIOR', 'TOCA DO REI', '26029400000113', '', '9073387202', '@', '0', '', 'N', 1, '', '85806460', 'SANTA CRUZ', 'CASCAVEL', '', 155, 'RUA YANOMANIS', 'PR', '', '', 'novo not servidor, antigo foi roubado', '98502514', '', '26/11/2021', 0, '0', '0'),
(469, 46938407, 4563, 0, 'CAFE COM PAO', 'CRISTIANE', 'CRISTIANE LEOCADIA TELLES DE SOUZA', '38407799000108', '', '9088111513', '@', '0', '', 'N', 1, '', '85810010', 'BRASILIA', 'CASCAVEL', '', 367, 'R. VINICIUS DE MORAES', 'PR', '', '', '(empty)', '999096863', '', '30/11/2021', 0, '0', '0'),
(470, 47041267, 4591, 0, 'VINCOLA BORDIGNON', 'RICARDO', 'GRACIELA BORDIGNON SELINGER 04353569929', '41267242000123', '', '(empty)', 'viniculabordignon@gmail.com', '0', '(empty)', 'N', 1, '', '85950000', 'RURAL', 'PALOTINA', '', 0, 'PROJ LINHA ALVORADA', 'PR', '', '', '(empty)', '4498976851', '', '30/11/2021', 0, '420', '0'),
(471, 47144037, 5084, 0, 'DELIVERY ZONA SUL', 'CRIS', 'DELIVERY ZONA SUL', '44037534000168', '', '0963887599', '@', '0', '', 'N', 1, '', '91740001', 'CENTRO', 'PORTO ALEGRE', '', 2395, 'AV. CARVALHADA', 'RS', '', '', 'BOLETO JUNTO COM A CANTINA ZONA SUL', '99865700', '', '07/12/2021', 0, '0', '0'),
(472, 47240611, 1, 0, 'NICK INFORMATICA', 'NICK', 'HEBERSON LUIS DOS SANTOS', '40611265000140', '', '', 'hebersonluis1996@gmail.com', '0', '', 'N', 1, '', '87345000', 'CENTRO', 'NAO DEFINIDO', '', 856, 'AV BRASIL', 'PR', '', '', 'Só pra Teste', '44997432631', '', '09/12/2021', 0, '0', '0'),
(473, 47335455, 4563, 0, 'ESTACAO DA MAKE', 'TIEISY', 'ESTACAO DA MAKE', '35455358000193', '', '11222333', 'contato@estacaodamake.com.br', '2', '', 'S', 0, '', '85810010', 'CENTRO', 'CASCAVEL', '', 2516, 'R. VISCONDE DO RIO BRANCO', 'PR', '', '', '', '999270097', '', '14/12/2021', 0, '150', '400'),
(474, 47443573, 4563, 0, 'RESTAURANTE RED KOI', 'ROGERIO', 'RESTAURANTE RED KOI', '43573811000194', '', '9090995526', '@', '0', '', 'S', 0, '', '85806068', 'FAG', 'CASCAVEL', '', 792, 'R.EMIR SFAIR', 'PR', '', '', '', '999598248', '', '14/12/2021', 0, '150', '400'),
(475, 47540825, 4563, 0, 'BRUTTOS BEBIDAS', 'MARCOS', 'MATEUS BRUNETTO CARI', '40825973000184', '', '9092979153', 'bruttosbeer@gmail.com', '0', '', 'N', 1, '', '85814250', 'BRAZMADEIRA', 'CASCAVEL', '', 844, 'R. ADOLFO GARCIA', 'PR', '', '', '(empty)', '999198113', '', '17/12/2021', 0, '0', '0'),
(476, 47630356, 4563, 0, 'SKINAO BEBIDAS', 'ELISANGELA', 'ELISANGELA GUARDA', '30356586000192', '', '9081203889', 'dirceucontabilidade@gmail.com', '0', 'DANIEL', 'S', 0, '', '85806080', 'SANTA CRUZ', 'CASCAVEL', '', 2615, 'AV TITO MUFFATO', 'PR', '', '', '180,00 mensalidade\n400,00 implantação', '998488694', '', '21/12/2021', 0, '180', '0'),
(477, 47716638, 5302, 0, 'ANGUS STEAKHOUSE MARQUES', 'FRAN', 'ANGUS STEAKHOUSE MARQUES', '31944406000237', '', '1080208140', '@', '0', 'ANDERSON', 'N', 1, '', '96810178', 'CENTRO', 'SANTA CRUZ DO SUL', '(empty)', 929, 'R. BORGES DE MEDEIROS', 'RS', '', '', '(empty)', '99865700', '99865700', '22/12/2021', 0, '400', '0'),
(478, 47839582, 4563, 0, 'PODVEL', 'TROY', 'VERMONDS HOOKAH', '39582864000102', '', '1', 'podpodvel@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85805540', 'PIONEIROS CATARINENSES', 'CASCAVEL', 'SOBRADO', 549, 'R. ORLANDO VASCONCELOS', 'PR', '', '', '(empty)', '45999599663', '45991555574', '22/12/2021', 0, '150', '500'),
(479, 47917616, 4725, 0, 'GRUPO G4I TRANSPORTES LTDA ME', 'RICARDO', 'GRUPO G4I TRANSPORTES LTDA ME', '17616237000102', '', '9062173766', 'grupog4i@hotmail.com', '2', '', 'N', 1, '', '87345000', 'AREA INDUSTRIAL', 'CAMPINA DA LAGOA', '', 689, 'AV DAS INDUSTRIAS', 'PR', '', '', '', '44998790304', '', '03/01/2022', 0, '0', '0'),
(480, 48007773, 4563, 0, 'CERVEJARIA & RESTAURANTE MARTIGNONI BIER', 'A', 'G MARTIGNONI & CIA LTDA', '07773731000119', '', '9035968641', 'a', '0', '(empty)', 'N', 1, '', '85810160', 'CENTRO', 'CASCAVEL', '', 2809, 'RUA PIO XII', 'PR', '', '', '(empty)', '30357878', '', '04/01/2022', 0, '0', '0'),
(481, 48116638, 4563, 0, 'BANCO TESTE ANDERSON SISTEMA', 'ANDERSON', 'BANCO TESTE ANDERSON SISTEMA', '16638863000129', '', '11122233', '@', '0', '', 'N', 1, '', '85811290', 'CENTRO', 'CASCAVEL', '', 1, 'OSVALDO CRUZ', 'PR', '', '', '', '99865700', '', '06/01/2022', 0, '0', '0'),
(482, 48226620, 4563, 0, 'DONNA FOODS', 'LOAI', 'MARCIA DA SILVA RESTAURANTE GASTRONOMICO LTDA', '26620363000113', '', '9075857605', 'bazanin13@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85810200', 'CENTRO', 'CASCAVEL', '', 3202, 'RUA MARECHAL DEODORO', 'PR', '', '', '', '4533254288', '', '12/01/2022', 0, '350', '0'),
(483, 48317764, 5582, 0, 'CELSO LANCHES', 'KASTIONY', 'TRENTIN COMERCIO E SERVICOS LTDA', '17764987000113', '', '107653189', 'thionyy@gmail.com', '0', '', 'N', 1, '', '47850000', 'JARDIM PARAISO 3 ETAPA', 'LUIS EDUARDO MAGALHAES', '', 1760, 'RUA 21 DE ABRIL', 'BA', '', '', '', '77998496933', '', '13/01/2022', 0, '0', '0'),
(484, 48402494, 4563, 0, 'BAR DO CATARINA', 'MARCELO', 'M. J. ANTUNES NETO E CIA LTDA', '02494186000108', '', '9032207836', '@', '0', 'ANDERSON', 'N', 1, '', '85810110', 'CENTRO', 'CASCAVEL', '(empty)', 2605, 'R. VISCONDE DE GUARANPUAVA', 'PR', '', '', '(empty)', '999799701', '(empty)', '20/01/2022', 0, '100', '200'),
(485, 48544533, 4563, 0, 'RIB GASTRONOMIA', 'SANDRO', 'R.B GASTRONOMIA', '44533217000132', '', '9092144833', '@', '0', 'ANDERSON', 'N', 1, '', '85812260', 'CENTRO', 'CASCAVEL', '', 1015, 'R. ERECHIM', 'PR', '', '', 'sem implantação.', '45991211599', '', '25/01/2022', 0, '0', '0'),
(486, 48634292, 5582, 0, 'WEST POINT', 'REGINA', 'REGINA TRINDADE DA SILVA LTDA', '34292684000164', '', '159764404', 'reginatrindademarmitaria@gmail.com', '0', 'MAICON', 'N', 1, '', '47805000', 'FLORAES LEA', 'LUIS EDUARDO MAGALHAES', '', 1090, 'RUA CARMEM MIRANDA', 'BA', '', '', 'ANTIGA PANORAMA RESTAURANTE', '7798572659', '', '28/01/2022', 0, '245', '660'),
(487, 48728016, 4563, 0, 'DONA MARI DELICIA SEM GLUTEN', 'LUCAS', 'DSG ALIMENTOS SEM GLUTEN LTDA', '28016338000150', '', '9093052339', '@', '0', '', 'N', 1, '', '85814240', 'BRAZMADEIRA', 'CASCAVEL', '', 575, 'R. RIO DAS ONDAS', 'PR', '', '', '', '4599802133', '', '11/02/2022', 0, '100', '0'),
(488, 48828544, 4563, 0, 'ACAI DA BINA', 'SABRINA', 'ACAI DA BINA ACAITERIA LTDA', '28544960000131', '', '9087787742', 'acaidabina.contabil@gmail.com', '0', '', 'N', 1, '', '85817180', 'PERIOLO', 'CASCAVEL', '', 766, 'R. PANAMA', 'PR', '', '', 'boletos para o dia 15', '999461099', '', '17/02/2022', 0, '150', '0'),
(489, 48922516, 4563, 0, 'ARENA BRAZUCA', 'KASSIANE', 'ARENA BRAZUCA', '22516469000110', '', '1122233', 'arenaabrazuca@gmail.com', '0', '', 'N', 1, '', '85811290', 'LINHA LINDOIA', 'CASCAVEL', '', 486, 'PR 486', 'PR', '', '', 'SEM IMPLANTAÇÃO.\nINICIO DIA DO CADASTRO', '45984338295', '', '22/02/2022', 0, '150', '0'),
(490, 49007258, 4563, 0, 'RESTAURANTE PAZ', 'LUIZ', 'L. E. PAZ & CIA LTDA', '07258117000119', '', '9093414265', '@', '0', '', 'N', 1, '', '85816540', 'SAO CRISTOVAO', 'CASCAVEL', '', 487, 'AV. ROCHA POMBO', 'PR', '', '', '', '45999567373', '', '22/02/2022', 0, '130', '0'),
(491, 49145433, 4563, 0, 'PIZZA DELIVERY LTDA', 'FRANCIELY', 'DONITA PIZZA DELIVERY LTDA', '45433587000160', '', '9093494439', 'donitacascavel@gmail.com', '0', '', 'N', 1, '', '85512010', 'CENTRO', 'CASCAVEL', 'LJ 01', 1591, 'RUA PARANA', 'PR', '', '', 'vai começar dia 16', '45999643829', '', '24/02/2022', 0, '0', '0'),
(492, 49245030, 4563, 0, 'LOJA CELULARES', 'AMANDA', 'RUBENICH COMERCIO DE ACESSORIOS E ELETRONICOS LTDA', '45030005000103', '', '9092888000', 'livecell.shopp@outlook.com', '0', '', 'N', 1, '', '85801021', 'CENTRO', 'CASCAVEL', '', 2721, 'RUA SAO PAULO', 'PR', '', '', '', '45998182900', '', '03/03/2022', 0, '0', '0'),
(493, 49339274, 4563, 0, 'SPOT BEER COMPANY', 'HUGO', 'VITOR HUGO PEREIRA DO SANTOS', '39274021000130', '', '111222333', 'vitorhugo6674@gmail.com', '0', '', 'N', 1, '', '85815460', 'BRASILIA', 'CASCAVEL', '', 151, 'R. ALTEMAR DUTRA', 'PR', '', '', 'INICIOU DIA 09', '45998167278', '', '09/03/2022', 0, '115', '0'),
(494, 49420916, 4571, 0, 'CHICAGO BURGER FOZ DO IGUACU', 'PEDRO', 'CHICAGO BURGER COMERCIO DE ALIMENTOS LTDA', '20916120000140', '', '111222333', '@', '0', '', 'N', 1, '', '85863370', 'JD ITAMARATY', 'FOZ DO IGUACU', '', 145, 'AV. GUSTAVO DOBRADINHO', 'PR', '', '', '', '45991029393', '', '15/03/2022', 0, '0', '0'),
(495, 49538099, 4563, 0, 'HANABI SUSHI LTDA', 'ALESSANDRO', 'HANABI SUSHI LTDA', '38099506000172', '', '9092812704', 'hanabisushi2019@gmail.com', '0', 'DANIEL', 'N', 1, '', '85801160', 'CENTRO', 'CASCAVEL', '', 1764, 'RUA VISCONDE DE GUARAPUAVA', 'PR', '', '', '', '45999333141', '', '16/03/2022', 0, '0', '350'),
(496, 49624222, 4563, 0, 'OESTE PADRAO COMERCIO DE POSTES', 'MARCO A DA IGREJA', 'MARCO AURELIO DA IGREJA', '24222490000139', '', '9092638089', 'oestepadrao@gmail.com', '0', 'ANDERSON', 'N', 1, '', '85805270', 'ALTO ALEGRE', 'CASCAVEL', '', 225, 'R. PUBLIO PIMENTEL', 'PR', '', '', 'nota 55', '45998487797', '', '16/03/2022', 0, '115', '0'),
(497, 49731905, 4563, 0, 'ARTE BRASIL ESPORTE LTDA', 'FERNANDA', 'ARTE BRASIL ESPORTE LTDA', '31905534000190', '', '1112233', '@', '0', 'ANDERSON', 'N', 1, '', '85801240', 'CENTRO', 'CASCAVEL', '', 406, 'R. RUI BARBOSA', 'PR', '', '', 'IMPLANTACAO EM 4X JUNTO COM AS MENSALIDADES\nVENCIMENTO DIA 10', '998236362', '', '30/03/2022', 0, '150', '0'),
(498, 49845395, 4740, 0, 'BAR DO MUKA', 'EDUARDO', 'BAR EVENTOS E CLUB DE POKER DO MUKA LTDA', '45395866000187', '', '9093455530', '@', '0', 'DANIEL', 'N', 1, '', '87502230', 'CENTRO', 'UMUARAMA', '', 4046, 'RUA JOSE HONORIO RAMOS', 'PR', '', '', '', '49991344718', '', '12/04/2022', 0, '0', '0'),
(499, 49941600, 4563, 0, 'BURGZ', 'LORRANE', 'ZZ BURGUER LTDA', '41600371000191', '', '9088888127', '@', '0', 'ANDERSON', 'N', 1, '', '85811290', 'CANCELLI', 'CASCAVEL', '', 107, 'R. ALBERI ANTONIO RICHARD', 'PR', '', '', '', '998477574', '', '12/04/2022', 0, '0', '0'),
(500, 50030173, 4563, 0, 'BRASA BURGUER', 'YAN', 'BBC BURGUER RESTAURANTE EIRELI', '30173085000170', '', '90777797421', 'brasaburguer@hotmail.com', '0', 'DANIEL', 'N', 1, '', '85812100', 'CENTRO', 'CASCAVEL', '', 1732, 'RUA AFONSO PENA', 'PR', '', '', '', '4530383181', '', '14/04/2022', 0, '0', '0'),
(501, 50105440, 4563, 0, 'LUXX', 'EVAIR', 'LUXX', '05440803000261', '', '9077574554', '@', '0', '', 'N', 3, '', '85810020', 'CENTRO', 'CASCAVEL', '', 225, 'RUA PERNAMBUCO', 'PR', '', '', '', '84035833', '', '16/04/2022', 0, '0', '0'),
(502, 50239675, 4563, 0, 'BK IPHONES', 'BRUNO KOBER', 'BRUNO AUGUSTO RUBI KOBER', '39675948000182', '', '11122333', '@', '0', '', 'N', 1, '', '85805530', 'PIONEIROS CATARINENSE', 'CASCAVEL', '', 1, 'COMPROVANTE DE COMPRA', 'PR', '', '', '', '45991456628', '', '21/04/2022', 0, '115', '0'),
(503, 50346033, 4563, 0, 'ARTE E SABOR RESTAURANTE', 'ADRIANA', 'EVELLIN PEREIRA FROHICH', '46033248000150', '', '111222333', 'evellinf02@gmail.com', '0', '', 'N', 1, '', '85805260', 'ALTO ALEGRE', 'CASCAVEL', '', 5434, 'R. CUIABA', 'PR', '', '', '', '998378423', '', '25/04/2022', 0, '150', '0'),
(504, 50446174, 4563, 0, 'CAROLINA\'S', 'EMANUELLE', 'CAROLINAS COMERCIO DE ALIMENTOS LTDA', '46174466000104', '', '9094412185', 'mflex@mflexcontadores.com.br', '0', '', 'S', 0, '', '85810051', 'CENTRO', 'CASCAVEL', '', 729, 'R FORTALEZA', 'PR', '', '', '', '4598408549', '', '04/05/2022', 0, '0', '0'),
(505, 50537797, 4563, 0, 'ANDERSON CRESPIN 2022', 'LUCAS', 'ANDERSON CRESPIN 2022', '37797794000176', '', '11122233', 'lukcas.alexandre@gmail.com', '0', '', 'S', 0, '', '85817480', 'CATARATAS', 'CASCAVEL', '', 718, 'R. MEDIANEIRA', 'PR', '', '', '', '45999256133', '', '05/05/2022', 0, '150', '400'),
(506, 50645945, 4563, 0, 'THE WALKIERS', 'MAICON', 'PO COMERCIO DE PRODUTOS ALIMENTICIOS LTDA', '45945602000150', '', '9094154119', 'nilson@audiconcontabilidade.net', '0', 'DANIEL', 'N', 1, '', '85801030', 'CENTRO', 'CASCAVEL', '', 1155, 'R RIO DE JANEIRO', 'PR', '', '', '', '00459955016', '', '09/05/2022', 0, '0', '0'),
(507, 50745581, 4511, 0, 'QUINTAL DO ESPETO', 'DANIEL', 'T S LEMES SOUZA', '45581215000181', '', '9093666744', 'quintaldoespetoubirata@gmail.com', '0', 'DANIEL', 'N', 1, '', '85440000', 'CENTRO', 'UBIRATA', '', 895, 'AVENIDA ASCANIO DE MOREIRA CARVALHO', 'PR', '', '', '', '19992282963', '', '10/05/2022', 0, '0', '0'),
(508, 50845557, 4563, 0, 'BOROGODO DO SERTAO', 'MARCUS', 'BOROGODO DO SERTAO RESTAURANTE LTDA', '45557510000100', '', '9093643884', 'adm@contafercontabilidade.com.br', '0', '', 'N', 1, '', '85812045', 'CENTRO', 'CASCAVEL', '', 2637, 'RUA ANTONINA', 'PR', '', '', '', '4532245872', '', '10/05/2022', 0, '0', '0'),
(509, 50978682, 4501, 0, 'CLUBE SORELA', 'ELVIO', 'SOCIEDADE RECREATIVA NOVA LARANJEIRAS', '78682085000122', '', '11122233', '@', '0', '', 'N', 1, '', '85350000', 'CENTRO', 'NOVA LARANJEIRAS', '', 1, 'R. RAIMUNDO MIORANZA', 'PR', '', '', '', '42998346865', '', '12/05/2022', 0, '180', '0');
INSERT INTO `EMPRESAS` (`ID`, `IDCLOUD`, `IDCIDADE`, `IDREPRESENTANTE`, `NOMEFANTASIA`, `NOMECONTATO`, `RAZAOSOCIAL`, `CNPJ`, `CNAE`, `INSCRICAOESTADUAL`, `EMAIL`, `RAMOATIVIDADE`, `REPRESENTANTE`, `NOVO`, `STATUS`, `ATIVO`, `CEP`, `BAIRRO`, `CIDADE`, `COMPLEMENTO`, `NUMERO`, `ENDERECO`, `UF`, `DATAVIGENCIA`, `CADASTRADAPOR`, `OBSERVACOES`, `FONECOBRANCA`, `FONEADICIONAL`, `DATAINICIO`, `DIASLICENCAPROVISORIA`, `VALORMENSALIDADE`, `VALORIMPLANTACAO`) VALUES
(510, 51033572, 5084, 0, 'B9 RESTAURANTE', 'BIA', 'B9 RESTAURANTE EIRELI', '33572311000184', '', '0963775170', '@', '0', '', 'S', 0, '', '90450090', 'BELA VISTA', 'PORTO ALEGRE', '', 9, 'R. BARÃO DE UBA', 'RS', '', '', '27/05', '51985614337', '', '16/05/2022', 0, '0', '0'),
(511, 51141479, 4563, 0, 'O CAIS BEER', 'LUIS', 'S COMERCIO DE BEBIDAS E CONVENIENCIA LTDA', '41479120000109', '', '9088747736', 'ocaisbeer@gmail.com', '0', '', 'N', 1, '', '85811125', 'CANCELLI', 'CASCAVEL', '', 3829, 'RUA PIO XII', 'PR', '', '', '', '04599528948', '', '16/05/2022', 0, '180', '0'),
(512, 51242510, 5097, 0, 'SUPER VETTER', 'FRAN', 'C S SANTOS SUPERMERCADOS LTDA', '42510147000171', '', '0190138670', '@', '2', '', 'S', 0, '', '93700000', 'GENUINO SAMPAIO', 'CAMPO BOM', '', 462, 'R. EMILIO VETTER', 'RS', '', '', '', '5135973234', '', '17/05/2022', 0, '0', '0'),
(513, 51332741, 4563, 0, 'ANDRESSA CARLA SULZBACH EBLING', 'DOUGLAS', 'ANDRESSA CARLA SULZBACH EBLING', '32741400000144', '', '9094468482', 'contato@paosemsegredo.com.br', '0', '', 'S', 0, '', '85803570', 'PARQUE SAO PAULO', 'CASCAVEL', 'SL FUNDOS', 494, 'RUA NILO PECANHA', 'PR', '', '', '', '988249506', '', '23/05/2022', 0, '0', '0'),
(514, 51443950, 4571, 0, 'PE VERMELHO ALIMENTOS', 'NEIA', 'P E ZEPONE COMERCIO DE ALIMENTOS LTDA', '43950854000141', '', '9091431103', 'neiazepone@outlook.com', '0', 'DANIEL', 'N', 1, '', '85869554', 'LANCASTER', 'FOZ DO IGUACU', '', 1002, 'R ESTEIO JARDIM LANCASTER', 'PR', '', '', '', '4599026882', '', '24/05/2022', 0, '0', '0'),
(515, 51546379, 4563, 0, 'MAD PLASTIC', 'SAMARA', 'MAD PLASTIC ARTIGOS DE MADEIRAS PLASTICA LTDA', '46379779000107', '', '9094647220', '@', '0', 'ANDERSON', 'N', 1, '', '85812003', 'CENTRO', 'CASCAVEL', '', 51, 'AV. BRASIL', 'PR', '', '', '', '4532621484', '', '02/06/2022', 0, '80', '400'),
(516, 51646423, 4563, 0, 'DENISE ROSS DA SILVA', 'DENISE', 'DENISE ROSS DA SILVA', '46423395000136', '', '11222333', '@', '0', '', 'S', 0, '', '85810010', 'CENTRO', 'CASCAVEL', '', 3207, 'R. PARANÁ', 'PR', '', '', '', '45999025582', '', '03/06/2022', 0, '150', '800'),
(517, 51740894, 4563, 0, 'UNIBIER', 'OTAVIO', 'UNIBIER COMERCIO DE BEBIDAS EIRELI', '40894697000106', '', '9088101399', 'koningchoppcascavel@gmail.com', '0', '', 'S', 0, '', '85806096', 'FAG', 'CASCAVEL', '', 462, 'AV DA FAG', 'PR', '', '', '', '4584016452', '', '08/06/2022', 0, '0', '0'),
(518, 51813579, 5107, 0, 'PANQUECARIA PANDOOR', 'ARTHUR', 'PANQUECARIA PANDOOR', '13579589000176', '', '111222333', '@', '0', '', 'N', 1, '', '94010150', 'CENTRO', 'GRAVATAI', '', 212, 'R. ERNESTO FONSECA', 'RS', '', '', '', '5134880064', '', '09/06/2022', 0, '150', '400'),
(519, 51946562, 5097, 0, 'RESTAURANTE VETTER', 'JULI', 'RESTAURANTE VETTER LTDA', '46562507000130', '', '0190141220', '@', '0', '', 'S', 0, '', '93700000', 'GENUINO SAMPAIO', 'CAMPO BOM', '', 482, 'AV. EMILIO VETTER', 'RS', '', '', '', '51983221789', '', '15/06/2022', 0, '0', '0'),
(520, 52046127, 4589, 0, 'VIKING\'S CONVENIENCIA E BEBIDAS', 'JOZIELI', 'JOZIELI DAIANE ANDRADE 09960366952', '46127081000196', '', '', 'jozydaiane@hotmail.com', '0', '', 'S', 0, '', '85945000', 'CENTRO', 'TUPASSI', 'SALA 1', 83, 'PC DA INDEPENDENCIA', 'PR', '', '', '', '4498495445', '', '15/06/2022', 0, '0', '0'),
(521, 52144352, 4563, 0, 'SILOSYSTEM MONTAGEM DE ESTRUTURA METALICA LTDA', 'JOCILDO', 'SILOSYSTEM MONTAGEM DE ESTRUTURA METALICA LTDA', '44352091000108', '', '9091878345', '@', '0', '', 'N', 1, '', '85804055', 'GUARUJA', 'CASCAVEL', '', 1345, 'RUA DAS AZALEIAS', 'PR', '', '', 'implantacao dividido em 2x no boleto com a mensalidade\nINICIOU 27/06', '33220776', '', '18/06/2022', 0, '150', '600'),
(522, 52245556, 4695, 0, 'BOSQUE BAR E RESTAURANTE LTDA', 'DANIEL', 'BOSQUE BAR E RESTAURANTE LTDA', '45556705000128', '', '9093641598', 'ligiasalinas@gmail.com', '0', '', 'S', 0, '', '87014180', 'ZONA 04', 'MARINGA', '', 874, 'AV NOBREGA', 'PR', '', '', '', '44991339292', '', '21/06/2022', 0, '0', '0'),
(523, 52342536, 4563, 0, 'CASA DO LAGO', 'ADRIANO', 'CASA DO LAGO', '42536039000178', '', '11111111111', 'adrf_ferreira@hotmail.com', '0', 'ANDERSON', 'S', 0, '', '85810160', 'CENTRO', 'CASCAVEL', '', 3242, 'PIO XII', 'PR', '', '', 'iniciou  26/09', '45998310016', '', '24/06/2022', 0, '250', '0'),
(524, 52438114, 4695, 0, 'PERUGIA TRATTORIA LTDA', 'CAIO', 'PERUGIA TRATTORIA LTDA', '38114820000187', '', '9085770001', 'contato@diverkidsmaringa.com.br', '0', '', 'S', 0, '', '87010000', 'ZONA 02', 'MARINGA', '', 108, 'AV CERRO AZUL', 'PR', '', '', '', '4499628380', '', '28/06/2022', 0, '0', '0'),
(532, 123456, 0, 0, 'CONTROLE SISTEMAS DE INFORMACAO', 'Daniel', 'MOLINA & PAIXAO SISTEMAS DE INFORMACAO LTDA', '16638863000129', '', '', 'danielmedpaixao@gmail.com', '', '', 'N', 0, '', '85.810-150', 'CENTRO', 'CASCAVEL', 'APT 01', 2515, 'R OSVALDO CRUZ', 'PR', '', '', '', '(45) 3228-2714', '', '2022-08-01', 0, '', ''),
(533, 654321, 999, 999, 'LANDER LANCHES', 'Lander', 'LANDER LANCHES LTDA', '78088682000123', '', '', 'landwixxx@gmail.com', '', '', 'N', 1, 'S', '85.065-000', 'CENTRO', 'GUARAPUAVA', 'APT 01', 6273, 'XV de Novembro', 'PR', '', '', '', '(45) 3211-7669', '', '2022-09-17', 0, '', '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `FILIAIS`
--

CREATE TABLE `FILIAIS` (
  `ID` int NOT NULL,
  `IDMATRIZ` int NOT NULL,
  `IDCLOUD` int NOT NULL,
  `CNPJ` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `FILIAIS`
--

INSERT INTO `FILIAIS` (`ID`, `IDMATRIZ`, `IDCLOUD`, `CNPJ`) VALUES
(8, 5, 56911781, '11781957000139'),
(9, 5, 59441914, '41914253000158'),
(10, 5, 59524713, '24713873000100'),
(11, 6, 43433101, '33101153000184'),
(12, 7, 44142771, '42771624000152'),
(13, 7, 30933468, '33468837000380'),
(14, 7, 16509563, '26434428000217'),
(15, 7, 28233468, '33468837000208'),
(16, 7, 53933468, '33468837000461'),
(17, 7, 57133468, '33468837000542'),
(18, 7, 22333468, '33468837000119');

-- --------------------------------------------------------

--
-- Estrutura para tabela `INTERNOS`
--

CREATE TABLE `INTERNOS` (
  `ID` int NOT NULL,
  `NOME` varchar(200) NOT NULL,
  `USUARIO` varchar(200) NOT NULL,
  `SENHA` varchar(200) NOT NULL,
  `EMAIL` varchar(200) NOT NULL,
  `SETOR` int NOT NULL,
  `ATIVO` tinyint(1) NOT NULL DEFAULT '1',
  `ADMIN` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `INTERNOS`
--

INSERT INTO `INTERNOS` (`ID`, `NOME`, `USUARIO`, `SENHA`, `EMAIL`, `SETOR`, `ATIVO`, `ADMIN`) VALUES
(1, 'Lander (Web)', 'landwixxx', '$2b$05$Bg7A2u1So3Hg4YlpTwBT3ODotv.QVoCN0/xlA3ubr21.wOesWwFfq', 'lander@controleautomacao.com.br', 5, 1, 1),
(2, 'excluir', 'excluir', '$2b$05$i4uI.uCee3n9ldy2ZEWGAeY6EjskD9euWVAfvT3g9.KARuk7uKFlu', 'suporte@controleautomacao.com.br', 6, 0, 0),
(3, 'Yan', 'Yan', '$2b$05$E9IhEcyVhT.1Mf1wH6FZpeEcrx7QFnOM7V.yqyHd3yHBpOa50KW.y', 'yan@controleautomacao.com.br', 1, 1, 1),
(4, 'Financeiro', 'financeiro', '$2b$05$cyQKNlAXazDSbUeezhCn..TaMlT2Om9O8jpxlfr2S/eBPFgPTGu16', 'financeiro@controleautomacao.com.br', 4, 1, 0),
(5, 'Daniel', 'Daniel', '$2b$05$ghG7PrQ6l2Iqc4u2ka1r5.5BtuxP0jgXkw1k2tRYz4jVJlh7DMXR6', 'daniel@controleautomacao.com.br', 5, 1, 1),
(6, 'Excluir', 'excluir', '$2b$05$JyA9RZgeuDB3vaIPUO/5T.8YrFVzng6K6p5iJR5x4Q8nI32zeW042', 'lucas@controleautomacao.com.br', 6, 0, 0),
(7, 'Excluir', 'excluir', '$2b$05$UjhVP8YUmjUq9eT8LVS43.xWFa2PpUMpu1Mqxynq1gLhpCB94lBDe', 'luiz@controleautomacao.com.br', 6, 0, 0),
(8, 'Maurício', 'Mauricio (Delphi)', '$2b$05$PBY5B5TZZYZip627pt.7vu/OTByrYEKC89DDVpysibYCfzLn6RYlS', 'mauricio@controleautomacao.com.br', 5, 1, 1),
(9, 'Suporte', 'suporte', '$2b$05$/kFTyOVpkgUG4.QEr7CZke08Q044y3lFwysseemF5ZjEGsk.O8KCW', 'suporte@controleautomacao.com.br', 6, 1, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `MATRIZES`
--

CREATE TABLE `MATRIZES` (
  `ID` int NOT NULL,
  `IDCLOUDMATRIZ` int NOT NULL,
  `CNPJ` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `MATRIZES`
--

INSERT INTO `MATRIZES` (`ID`, `IDCLOUDMATRIZ`, `CNPJ`) VALUES
(5, 50030173, '30173085000170'),
(6, 13709546, '09546588000158'),
(7, 12326434, '26434428000136');

-- --------------------------------------------------------

--
-- Estrutura para tabela `OCORRENCIAS`
--

CREATE TABLE `OCORRENCIAS` (
  `ID` int NOT NULL,
  `IDCHAMADO` int NOT NULL,
  `IDINTERNO` int NOT NULL,
  `SETOR` int NOT NULL,
  `DESCRICAO` text NOT NULL,
  `DATAINCLUSAO` varchar(20) NOT NULL,
  `ATIVO` tinyint(1) NOT NULL DEFAULT '1',
  `STATUS` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `OCORRENCIAS`
--

INSERT INTO `OCORRENCIAS` (`ID`, `IDCHAMADO`, `IDINTERNO`, `SETOR`, `DESCRICAO`, `DATAINCLUSAO`, `ATIVO`, `STATUS`) VALUES
(3, 8, 99, 6, '<p>fasdfasdfsad</p>', '2023-07-07 9:8:54', 1, 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `SETORES`
--

CREATE TABLE `SETORES` (
  `ID` int NOT NULL,
  `NOME` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DESCRICAO` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Despejando dados para a tabela `SETORES`
--

INSERT INTO `SETORES` (`ID`, `NOME`, `DESCRICAO`) VALUES
(1, 'T.I', 'Desenvolvimento'),
(3, 'Comercial', ''),
(4, 'Financeiro', ''),
(5, 'Desenvolvedor', ''),
(6, 'Suporte', 'Suporte');

-- --------------------------------------------------------

--
-- Estrutura para tabela `STATUSCHAMADOS`
--

CREATE TABLE `STATUSCHAMADOS` (
  `ID` int NOT NULL,
  `NOME` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DESCRICAO` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Despejando dados para a tabela `STATUSCHAMADOS`
--

INSERT INTO `STATUSCHAMADOS` (`ID`, `NOME`, `DESCRICAO`) VALUES
(1, 'Pendente', ''),
(2, 'Andamento', ''),
(3, 'Finalizado', ''),
(5, 'Atrasado', '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `SYSAPICONF`
--

CREATE TABLE `SYSAPICONF` (
  `id` int NOT NULL,
  `APISERVERADRESS` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `APIDEFAULTUSER` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `APIDEFAULTPASSWORD` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `APIDEFAULTTOKEN` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `APIDEFAULTINSTANCE` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `SYSLOGINREQUEST`
--

CREATE TABLE `SYSLOGINREQUEST` (
  `ID` int NOT NULL,
  `NOME` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `NOMEESTABELECIMENTO` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `EMAIL` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `CNPJ` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `IDCLOUD` int NOT NULL,
  `RAMODEATIVIDADE` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `STATUS` int NOT NULL DEFAULT '0',
  `PASSWORD` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `REASONBLOCKING` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `ADMIN` int NOT NULL DEFAULT '0',
  `ISVISIBLE` int NOT NULL DEFAULT '1',
  `isRepresentative` int NOT NULL DEFAULT '0',
  `REPRESENTANTE` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `HASHTOKEN` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Despejando dados para a tabela `SYSLOGINREQUEST`
--

INSERT INTO `SYSLOGINREQUEST` (`ID`, `NOME`, `NOMEESTABELECIMENTO`, `EMAIL`, `CNPJ`, `IDCLOUD`, `RAMODEATIVIDADE`, `STATUS`, `PASSWORD`, `REASONBLOCKING`, `ADMIN`, `ISVISIBLE`, `isRepresentative`, `REPRESENTANTE`, `HASHTOKEN`) VALUES
(24, 'Dev Acco', 'Controle Sistemas', 'controlesistemasgithub@gmail.com', '69634116000189', 696341, 'Todos', 1, '$2b$05$BoVFc/EatCuuUlmOoESKLehVdZZIK/OwFW/LlTJYHE7UVGP/0Jtnm', '', 1, 1, 0, 'Daniel', ''),
(25, 'Marcio Alves', 'Mercado Lar', 'controlesistemasgithub@gmail.com', '97027837000166', 970278, 'Mercados', 1, '$2b$05$4X.QLk.ozyQWy5yQo3xWR.qBBIuKIOSdX3wgxxsihbDAuSotdybO.', '', 0, 1, 0, 'Daniel', ''),
(27, 'Daniel Paixão', 'Controle Sistemas', 'daniel@controleautomacao.com.br', '16638863000129', 166388, 'Todos', 1, '$2b$05$2bj6ETULiuuOJPpA8vpXNO7RZtADoLOgKpcmDJM1cSSxGG9VyFtVi', '', 0, 1, 0, 'Daniel', ''),
(35, 'Lander Lancher', 'Estabelecimento Teste', 'landwixxx@gmail.com', '78088682000123', 12326434, 'Restaurante', 1, '$2b$05$SPmDnbyJv7t70APy3ipZOO6.QLQznjM61x6XPA9TKeuqcgwuFmpeS', NULL, 1, 1, 0, 'Lander', '$2b$08$GDD6RTv/F/YfwlG6JNp1MOuwYsFiXIZkZONcNb0RSZm/agWJ2Qcau'),
(40, 'Snake', 'Snake tabacaria Cascavel', 'yan@controleautomacao.com.br', '26434428000136', 12326434, 'Distribuidora', 1, '$2b$05$xKGDriSkWpZTqcjwV28weO1n.94FSv8j4uNlrD3Q4B2jLTx9rH46S', NULL, 0, 1, 0, 'Daniel', '$2b$08$veT7KkIxuA1l/D4pGHAG1Oq4FhWFI/UgDHPMiQG3feEmDAs5zIsa2'),
(42, 'Samantha', 'Deck Conveniencia', 'danielmedpaixao@gmail.com', '45928834000108', 58745928, 'Conveniência', 1, '$2b$05$5TLWrsp64FBGNK5auqkoK.rZ/AmjvKlSZABNw0z7Y3AlYgpW.eNXi', NULL, 0, 1, 0, 'Controle Sistemas-Matriz', '$2b$08$keYMzoPILNbTr0tFxWjSBOk6SvXSaIHL3laBwLePb8BchoS8pRyhi'),
(43, 'BrasaCascavel', 'Brasa Burger Cascavel', 'brasaburguercvel@gmail.com', '30173085000170', 50030173, 'Restaurante', 1, '$2b$05$/b1N6YfwFAXVUIudpY8Bh.Ih3MLw./DrDAUen.larxZVMrlTgJ1uW', NULL, 0, 1, 0, 'Empresa', '$2b$08$nSq630bRHBz/QxM/nWSHuu4mWXX7QRjkKdDJWiWJYnrM2c8LLRm7e'),
(44, 'Daniel', 'Brasa Burger Foz', 'landerwilker@yahoo.com.br', '11781957000139', 56911781, 'Restaurante', 1, '$2b$05$b/.idSwqY3uZss/MI7uRJOlYZTzcv5x7JciqcexlTV07InNwnp1xC', NULL, 0, 1, 0, 'Daniel', '$2b$08$leEhoGwH4E..IxpFchj8lOHKX3KTQJtUWws38KuK5VZqVcyPW5GAm'),
(45, 'Angus Santa Cruz', 'Angus Steak House Sta Cruz', 'danielmedpaixao@gmail.com', '31944406000237', 47716638, 'Restaurante', 1, '$2b$05$ZOxw0mnkcQtfFj7MxI355empWZWeqRed37bR4zjY8UQkrWXAwF.wu', NULL, 0, 1, 0, 'EMPRESA', '$2b$08$hGljZpkvKR8seDq5vlkWK.8jdPD3ceO12weYW7QxRPXnOUi7vDfLO'),
(46, 'Chicago Burger', 'Chicago Burger', 'danielmedpaixao@gmail.com', '20916120000140', 20220916, 'Restaurante', 1, '$2b$05$dhotxel7GchfYql3zixgpuukfBtIb40Q3tJFPJtvdTAQVEQZ8M6De', NULL, 0, 1, 0, 'EMPRESA', '$2b$08$BW5ASMIhVpHnnU3hMN4mLeK7qugikwslYnXi6tA/c01nTTCgBzx1a'),
(47, 'Parada do Espetinho', 'Parada do Espetinho', 'paradadoespetinhocaf@gmail.com', '28621229000162', 42028621, 'Restaurante', 1, '$2b$05$Z4Im/xAFjjRzzAvuXYrHZe3Tcb5o9AUegVqsOSu1sDfvPn0TnxYmG', NULL, 0, 1, 0, 'EMPRESA', '$2b$08$OD6LLlxoJi1PtlXd2dbShOrblGLZPLkJ8880QNh3EsLgcO68Vd9Ce'),
(48, 'Brasa JL', 'Brasa Burguer JL', 'yanfelipe@live.de', '41914253000158', 59441914, 'Restaurante', 1, '$2b$05$PO8UWMkeCQMg6bIXpWpLGekLpeyCH0N42wsVBqaZ1kCi1DOObJEXy', NULL, 0, 1, 0, 'Yan', '$2b$08$BNiEM8JRGw1EUF3wg95Ex.4dWRS3e9nKLfCNHlJIN3uOJcOeH0YlC'),
(49, 'Brasa Catuaí', 'Brasa Burguer Catuaí', 'yanfelipe@live.de', '24713873000100', 59524713, 'Restaurante', 1, '$2b$05$j2GbK2tND3TGhYygG3Ok2..QlW3qRahgpBJpNK./0fD2Amtza7MV6', NULL, 0, 1, 0, 'Yan', '$2b$08$51PkUh5XGeiMsH1JfRzmrO0VA6wyYuHZQ9CzJVfGRWk7dxIeB1TA6'),
(50, 'Leonardo', 'Yuu Cascavel', 'yuuasianbar@gmail.com', '43579429000198', 4908282, 'Restaurante', 1, '$2b$05$rEdq9bnv86Pwy.wUAhrQQerXSYcUno6zl7o0/lO6BAhrZ0pCekq8G', NULL, 0, 1, 0, 'DANIEL', '$2b$08$cb1em0C3YxVAusSWPN.qau0qGDfjQsr.nCZLTtM8UX/QwyvmsJklC'),
(51, 'Arena Lounge', 'Arena Lounge', 'danielmedpaixao@gmail.com', '21379999000100', 8521379, 'Bares,Balada', 1, '$2b$05$uQq8h8MpjY4UYYc6khILseyRnJzQnoqnVS7Z0o.HcDoiKuiIN3T2u', NULL, 0, 1, 0, 'Daniel', '$2b$08$s2TjcBiyWUJs4pI4qTHzEOB7orrdVMAL2iItev5UnuYKasaHUELrm'),
(52, 'Bar do Urso', 'Bar do Urso', 'peracioperacio8@gmail.com', '45889329000193', 59845889, 'Bares', 1, '$2b$05$IDSNhOGBqKzWRg7epZqp1O4GqsXV3M1c2hF5Ftspjc5IZNNxnujdC', NULL, 0, 1, 0, 'EMPRESA', '$2b$08$J413aYU.VJhvht8tMmgN0O3W/qqxBFEPnuKTRG/W0XDrfsedan2cy'),
(53, 'Barraco', 'BARRACO LTDA', 'peracioperacio8@gmail.com', '36773262000136', 54736773, 'Bares', 1, '$2b$05$wAbSDSldif5ZINLg2kWqL.qD9oT3xgJ0TW/AeL/HS9dA0zLzivd2m', NULL, 0, 1, 0, 'Controle', '$2b$08$UjUTwsaJtStMCuzF6mHT1.YYGO0tPObl4Zgef40Z9oubFZH0naDqq'),
(54, 'DIAS MOTOS', 'DIAS MOTO PECAS CASCAVEL LTDA', 'diasmotoscascavel@gmail.com', '37991849000184', 33537991, 'Todos', 1, '$2b$05$TvtXVKxVceuQVcMacAICWOH/zx0Wi6WZivnLgt/LgslFW1WR.2qNO', NULL, 0, 1, 0, 'Controle', '$2b$08$UAX6X8DVVswzt.2lNmgl7OS3NSZGU/kruIWJ/UkkolPWN1k5sPVJG'),
(55, 'ARMAZÉM CASCAVEL', 'ARMAZÉM CASCAVEL', 'dalmoferrari@gmail.com', '09546588000158', 13709546, 'Restaurante', 1, '$2b$05$eSewF3TQOIJyGtUPpxuyZOnZ2naKnIvmGZqM9N6wyOXzXmZtfrJeK', NULL, 0, 1, 0, 'Controle', '$2b$08$y23V3kmz/BE0pxhiXqg26e0VFwZcH8sXScvq0MIq39Mlnb2H.vsge'),
(56, 'ARMAZÉM MARINGÁ', 'ARMAZÉM MARINGÁ', 'dalmoferrari@gmail.com', '33101153000184', 43433101, 'Restaurante', 1, '$2b$05$hhKNN3c6cZKK2Puz5ZlgbexjYvA3jufkJ1gxjcOANRWjn0fCdzvqu', NULL, 0, 1, 0, 'Controle', '$2b$08$y089asR0nbOTipLfRaAT3eEujncKWIhoyyysgP7fGnXl1FYMea0oK'),
(57, 'Mercado Lar', 'Mercado Lar', 'yan@controleautomacao.com.br', '47365314000151', 2429291, 'Mercados', 1, '$2b$05$X.93twpR7LFCEjI61SBHJu.eIRlZGNKMXnYtxlDlCidav2E0DV.de', NULL, 0, 1, 0, 'Controle', '$2b$08$.HsC6.xGgDehtr4SqWxHU.BVfZOppMhvd2yrmnj8XAe6atKm4wHcW'),
(58, 'LA MÁFIA FOZ', 'LA MÁFIA FOZ', 'leo@hotmail.com', '28867625000174', 7728867, 'Restaurante', 1, '$2b$05$DyJqpDrXAFr.vtcoJGjbkeWlUwfvbNAQOiTtjsAuWg9Z6sFnyZcwy', NULL, 0, 1, 0, 'Controle', '$2b$08$3HPPvOOrIvB5nqwB4wL66eOClNv4bzlbkGWV8AJh8CG.xHSAUxfo2'),
(59, 'BBQ Burguer', 'BBQ Burguer', 'vcamargo@publiciza.com', '21368273000163', 59721368, 'Restaurante', 1, '$2b$05$j.lRRN8kU4tvWgTzcK3P9uBzY4XTjO2.6zFoPA.CzDkUqNhBqEfCe', NULL, 0, 1, 0, 'Controle', '$2b$08$W6Du6HClIMO/Vz.U9yUObOY8UF01B6QVuv1Gqta1/W.R4W.lzIWsS'),
(60, 'Snake Santa Maria', 'Snake Santa Maria', 'yan@controleautomacao.com.br', '42771624000152', 44142771, 'Conveniência', 1, '$2b$05$9Xc3Ha0iMIaMJwWGDo55fetZbjX6xOnT04yz5vrPojbklZGIupwjK', NULL, 0, 1, 0, 'Daniel', '$2b$08$mNnPf3mcTz6c6Cye/wJ6K.58ThaLVrn1B5sz1bXByqeUvBArVkdbO'),
(61, 'Snake toledo', 'Snake toledo', 'yan@controleautomacao.com.br', '33468837000380', 30933468, 'Conveniência', 1, '$2b$05$SJz.kIvbugwdI2M47OS72OF4fJ8FveY2/eUVvuFbCaC1U7kNd3nlu', NULL, 0, 1, 0, 'Daniel', '$2b$08$zt6BY0IYltM8RPDO/x4zROrrFaOKqzU6lEQD00nFETsJDs76/X6BO'),
(62, 'SC RESTAURANTE E EVENTOS LTDA', 'SC RESTAURANTE E EVENTOS LTDA', 'yan@controleautomacao.com.br', '50915857000100', 60650915, 'Restaurante', 1, '$2b$05$NSaBobGTOk2ImWC2rkQKi.F/ykT9Bby9u/7gaF8TvKTsdTSBrwvSu', NULL, 0, 1, 0, 'daniel', '$2b$08$GXpQmn6qbkLnnh2JcAGi7OLy5h0dN7h5EWkTPf0RDFwCY1FP5BOCC'),
(63, 'snake chapeco', 'snake chapeco', 'yan@controleautomacao.com.br', '26434428000217', 16509563, 'Conveniência', 1, '$2b$05$RAt7r6F3yfrJlj/WU.r1i.zL/MxYrQI6r2Vn4E8qGKuHQN/7ZrlI2', NULL, 0, 1, 0, 'daniel', '$2b$08$UyqWQD9lvRVbpn9EKBmkDudldyjeCw8WhXXZu1ThspSYYLDBqBNXm'),
(65, 'Snake campo mourão', 'Snake campo mourão', 'yan@controleautomacao.com.br', '33468837000208', 28233468, 'Conveniência', 1, '$2b$05$6ncRdNTMJwzCG1rjL35bZul0WxPV8qI9XM2c0afqB8akiw2y8fsIq', NULL, 0, 1, 0, 'daniel', '$2b$08$GapEEtOgBAaKKRu.npJLYOoiiba2RisSHeI69acs0lDTTg/a/qKaG'),
(66, 'Snake porto alegre', 'Snake porto alegre', 'yan@controleautomacao.com.br', '33468837000461', 53933468, '', 1, '$2b$05$aOuU/SnPYR5eF6iy4wTVE.mmQSZHioO43Z4Tf3xglM1AuJYXICyca', NULL, 0, 1, 0, 'daniel', '$2b$08$0KVF2y3QAKYPTxNIP0/w1ev04PfYzQG6ptJOXSWrDrg90b2NYuuFq'),
(67, 'Snake caxias do sul', 'Snake caxias do sul', 'yan@controleautomacao.com.br', '33468837000542', 57133468, 'Conveniência', 1, '$2b$05$Hp5AoLf/XG9/.ArOjjQoZ.HOIpEUh4tN4fv6a3zPeioqGVzyM06Re', NULL, 0, 1, 0, 'daniel', '$2b$08$crD7PdywNchr2ncJs3KzBuZ2t8oM3yoN0cWKTt8FsMWFTiSChHpIm'),
(68, 'Snake pato branco', 'Snake pato branco', 'yan@controleautomacao.com.br', '33468837000119', 22333468, '', 1, '$2b$05$P5NSBZNw3DHrfSqkABVii.vbQ6Yn2teMBxt7tGL4CAdgYCM8ZLCbm', NULL, 0, 1, 0, 'daniel', '$2b$08$C.PDPjDDQYGzcP.G/lWDIeUPWrEAYHrJYzOhlqu5TwwtjpD.kcyti');

-- --------------------------------------------------------

--
-- Estrutura para tabela `SYSMENUITEM`
--

CREATE TABLE `SYSMENUITEM` (
  `id` int NOT NULL,
  `descricao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '0',
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `idPai` int DEFAULT NULL,
  `iconNameFontAwesome` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `RAMODEATIVIDADE` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `link` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Despejando dados para a tabela `SYSMENUITEM`
--

INSERT INTO `SYSMENUITEM` (`id`, `descricao`, `ativo`, `admin`, `idPai`, `iconNameFontAwesome`, `RAMODEATIVIDADE`, `link`) VALUES
(1, 'Contas', 0, 1, 0, 'fa-solid fa-users', '', '/admin/contas'),
(2, 'Menus', 0, 1, 0, 'fa-solid fa-list', '', '/admin/menu'),
(4, 'Relatórios', 0, 0, 0, 'fa-solid fa-file-invoice', 'Balada,Bares,Conveniência,Mercados,Distribuidora,Posto de combustível,Restaurante', '/user/relatorios'),
(6, 'Vinhos', 0, 0, 5, 'fa-solid fa-champagne-glasses', '', '/user/bebidas/vinhos'),
(7, 'Drinks', 0, 0, 5, 'fa-solid fa-martini-glass-citrus', '', '/user/bebidas/drinks'),
(9, 'Lucros', 0, 0, 3, 'fa-solid fa-money-bill-trend-up', '', '/lucros'),
(11, 'Percas', 0, 0, 3, '', '', '/percas'),
(12, 'Café', 0, 0, 5, 'fa-solid fa-mug-saucer', '', '/user/bebidas/cafe'),
(14, 'test', 0, 0, 3, 'fa-solid fa-money-bill-trend-up', '', '/users/financias/pago'),
(17, 'Admin', 0, 0, 13, '', '', '/users/relatorios/clientes/admin'),
(19, 'Licenças', 0, 1, 0, 'fa-solid fa-lock-open', '', '/admin/licencas'),
(23, 'Vendas', 0, 0, 4, 'fa-solid fa-cash-register', '', '/user/relatorios/vendas'),
(24, 'Gastos', 0, 0, 4, 'fa-solid fa-cart-arrow-down', '', '/user/relatorios/gastos'),
(25, 'Admin - Docs', 0, 1, 0, 'fa-solid fa-print', '', '/admin/documentos'),
(26, 'Central Docs', 1, 0, 0, 'fa-solid fa-print', 'Todos', '/user/documentos'),
(27, 'Tutoriais', 0, 0, 0, 'fa-solid fa-video', 'Todos', '/user/tutoriais'),
(28, ' Admin - Tutoriais', 1, 1, 0, 'fa-solid fa-video', 'Todos', '/admin/tutoriais'),
(29, 'Admin - Internos', 0, 1, 0, 'fa-solid fa-puzzle-piece', 'Todos', '/admin/setores'),
(31, 'Admin - Chamados', 0, 1, 0, 'fa-solid fa-tower-cell', 'Todos', '/admin/chamados'),
(32, 'Chamados', 1, 0, 0, 'fa-solid fa-tower-cell', '', '/interno/chamados'),
(33, 'Portal Chamados', 0, 1, 0, 'fa-solid fa-chart-area', '', '/admin/portal-chamados'),
(34, 'Dashboard', 1, 0, NULL, 'fa fa-dashboard', 'Todos', '/user/dashboard'),
(36, 'Admin - Grupos', 1, 1, NULL, 'fa fa-users', '', '/admin/grupos'),
(38, 'Admin - Tipos ', 1, 1, NULL, 'fa fa-check-square-o', '', '/admin/tipo-chamado'),
(39, 'Estoque', 0, 0, NULL, 'fa-solid fa-boxes-stacked', 'Todos', '/user/estoque');

-- --------------------------------------------------------

--
-- Estrutura para tabela `SYSRAMOSATIVIDADE`
--

CREATE TABLE `SYSRAMOSATIVIDADE` (
  `descricao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Despejando dados para a tabela `SYSRAMOSATIVIDADE`
--

INSERT INTO `SYSRAMOSATIVIDADE` (`descricao`, `ativo`) VALUES
('Balada', 1),
('Bares', 1),
('Conveniência', 1),
('Distribuidora', 1),
('Mercados', 1),
('Posto de combustível', 1),
('Restaurante', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `SYSSELECTTABLECOLUMN`
--

CREATE TABLE `SYSSELECTTABLECOLUMN` (
  `id` int NOT NULL,
  `idUser` int NOT NULL,
  `idTable` int NOT NULL,
  `fieldName` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `fieldIndex` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `fieldCaption` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `defaultIndex` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Despejando dados para a tabela `SYSSELECTTABLECOLUMN`
--

INSERT INTO `SYSSELECTTABLECOLUMN` (`id`, `idUser`, `idTable`, `fieldName`, `fieldIndex`, `fieldCaption`, `visible`, `defaultIndex`) VALUES
(239, 24, 1, 'ID', '', 'ID', 1, 0),
(240, 24, 1, 'NOME', '', 'NOME', 1, 0),
(241, 24, 1, 'NOMEESTABELECIMENTO', '', 'NOMEESTABELECIMENTO', 1, 0),
(242, 24, 1, 'EMAIL', '', 'EMAIL', 1, 0),
(243, 24, 1, 'CNPJ', '', 'CNPJ', 1, 0),
(244, 24, 1, 'IDCLOUD', '', 'IDCLOUD', 1, 0),
(245, 24, 1, 'RAMODEATIVIDADE', '', 'RAMODEATIVIDADE', 1, 0),
(246, 24, 1, 'STATUS', '', 'STATUS', 1, 0),
(247, 24, 1, 'ADMIN', '', 'ADMIN', 1, 0),
(248, 24, 1, 'AÇÕES', '', 'AÇÕES', 1, 0),
(249, 24, 2, 'IDCLOUD', '', 'IDCLOUD', 1, 0),
(250, 24, 2, 'ID', '', 'ID', 1, 0),
(251, 24, 2, 'IDCIDADE', '', 'IDCIDADE', 0, 0),
(252, 24, 2, 'IDREPRESENTANTE', '', 'IDREPRESENTANTE', 0, 0),
(253, 24, 2, 'NOMEFANTASIA', '', 'NOMEFANTASIA', 0, 0),
(254, 24, 2, 'NOMECONTATO', '', 'NOMECONTATO', 1, 1),
(255, 24, 2, 'RAZAOSOCIAL', '', 'RAZAOSOCIAL', 0, 0),
(256, 24, 2, 'CNPJ', '', 'CNPJ', 1, 0),
(257, 24, 2, 'CNAE', '', 'CNAE', 0, 0),
(258, 24, 2, 'INSCRICAOESTADUAL', '', 'INSCRICAOESTADUAL', 0, 0),
(259, 24, 2, 'EMAIL', '', 'EMAIL', 1, 0),
(260, 24, 2, 'RAMOATIVIDADE', '', 'RAMOATIVIDADE', 0, 0),
(261, 24, 2, 'REPRESENTANTE', '', 'REPRESENTANTE', 1, 0),
(262, 24, 2, 'NOVO', '', 'NOVO', 0, 0),
(263, 24, 2, 'STATUS', '', 'STATUS', 0, 0),
(264, 24, 2, 'ATIVO', '', 'ATIVO', 0, 0),
(265, 24, 2, 'CEP', '', 'CEP', 0, 0),
(266, 24, 2, 'BAIRRO', '', 'BAIRRO', 0, 0),
(267, 24, 2, 'CIDADE', '', 'CIDADE', 0, 0),
(268, 24, 2, 'COMPLEMENTO', '', 'COMPLEMENTO', 0, 0),
(269, 24, 2, 'NUMERO', '', 'NUMERO', 0, 0),
(270, 24, 2, 'ENDERECO', '', 'ENDERECO', 0, 0),
(271, 24, 2, 'UF', '', 'UF', 0, 0),
(272, 24, 2, 'DATAVIGENCIA', '', 'DATAVIGENCIA', 0, 0),
(273, 24, 2, 'CADASTRADAPOR', '', 'CADASTRADAPOR', 0, 0),
(274, 24, 2, 'OBSERVACOES', '', 'OBSERVACOES', 0, 0),
(275, 24, 2, 'FONECOBRANCA', '', 'FONECOBRANCA', 0, 0),
(276, 24, 2, 'FONEADICIONAL', '', 'FONEADICIONAL', 0, 0),
(277, 24, 2, 'DATAINICIO', '', 'DATAINICIO', 0, 0),
(278, 24, 2, 'DIASLICENCAPROVISORIA', '', 'DIASLICENCAPROVISORIA', 0, 0),
(279, 24, 2, 'VALORMENSALIDADE', '', 'VALORMENSALIDADE', 0, 0),
(280, 24, 2, 'VALORIMPLANTACAO', '', 'VALORIMPLANTACAO', 0, 0),
(281, 24, 2, 'AÇÕES', '', 'AÇÕES', 1, 0),
(282, 25, 1, 'ID', '', 'ID', 1, 1),
(283, 25, 1, 'NOME', '', 'NOME', 1, 0),
(284, 25, 1, 'NOMEESTABELECIMENTO', '', 'NOMEESTABELECIMENTO', 1, 0),
(285, 25, 1, 'EMAIL', '', 'EMAIL', 1, 0),
(286, 25, 1, 'CNPJ', '', 'CNPJ', 1, 0),
(287, 25, 1, 'IDCLOUD', '', 'IDCLOUD', 0, 0),
(288, 25, 1, 'RAMODEATIVIDADE', '', 'RAMODEATIVIDADE', 0, 0),
(289, 25, 1, 'STATUS', '', 'STATUS', 1, 0),
(290, 25, 1, 'ADMIN', '', 'ADMIN', 1, 0),
(291, 25, 1, 'AÇÕES', '', 'AÇÕES', 1, 0),
(292, 25, 2, 'IDCLOUD', '', 'IDCLOUD', 1, 1),
(293, 25, 2, 'ID', '', 'ID', 0, 0),
(294, 25, 2, 'IDCIDADE', '', 'IDCIDADE', 0, 0),
(295, 25, 2, 'IDREPRESENTANTE', '', 'IDREPRESENTANTE', 0, 0),
(296, 25, 2, 'NOMEFANTASIA', '', 'NOMEFANTASIA', 1, 0),
(297, 25, 2, 'NOMECONTATO', '', 'NOMECONTATO', 0, 0),
(298, 25, 2, 'RAZAOSOCIAL', '', 'RAZAOSOCIAL', 1, 0),
(299, 25, 2, 'CNPJ', '', 'CNPJ', 1, 0),
(300, 25, 2, 'CNAE', '', 'CNAE', 0, 0),
(301, 25, 2, 'INSCRICAOESTADUAL', '', 'INSCRICAOESTADUAL', 0, 0),
(302, 25, 2, 'EMAIL', '', 'EMAIL', 1, 0),
(303, 25, 2, 'RAMOATIVIDADE', '', 'RAMOATIVIDADE', 0, 0),
(304, 25, 2, 'REPRESENTANTE', '', 'REPRESENTANTE', 0, 0),
(305, 25, 2, 'NOVO', '', 'NOVO', 0, 0),
(306, 25, 2, 'STATUS', '', 'STATUS', 0, 0),
(307, 25, 2, 'ATIVO', '', 'ATIVO', 0, 0),
(308, 25, 2, 'CEP', '', 'CEP', 1, 1),
(309, 25, 2, 'BAIRRO', '', 'BAIRRO', 0, 0),
(310, 25, 2, 'CIDADE', '', 'CIDADE', 0, 0),
(311, 25, 2, 'COMPLEMENTO', '', 'COMPLEMENTO', 0, 0),
(312, 25, 2, 'NUMERO', '', 'NUMERO', 0, 0),
(313, 25, 2, 'ENDERECO', '', 'ENDERECO', 0, 0),
(314, 25, 2, 'UF', '', 'UF', 0, 0),
(315, 25, 2, 'DATAVIGENCIA', '', 'DATAVIGENCIA', 0, 0),
(316, 25, 2, 'CADASTRADAPOR', '', 'CADASTRADAPOR', 0, 0),
(317, 25, 2, 'OBSERVACOES', '', 'OBSERVACOES', 0, 0),
(318, 25, 2, 'FONECOBRANCA', '', 'FONECOBRANCA', 0, 0),
(319, 25, 2, 'FONEADICIONAL', '', 'FONEADICIONAL', 0, 0),
(320, 25, 2, 'DATAINICIO', '', 'DATAINICIO', 0, 0),
(321, 25, 2, 'DIASLICENCAPROVISORIA', '', 'DIASLICENCAPROVISORIA', 0, 0),
(322, 25, 2, 'VALORMENSALIDADE', '', 'VALORMENSALIDADE', 0, 0),
(323, 25, 2, 'VALORIMPLANTACAO', '', 'VALORIMPLANTACAO', 0, 0),
(324, 25, 2, 'AÇÕES', '', 'AÇÕES', 1, 0),
(368, 27, 1, 'ID', '', 'ID', 1, 0),
(369, 27, 1, 'NOME', '', 'NOME', 1, 1),
(370, 27, 1, 'NOMEESTABELECIMENTO', '', 'NOMEESTABELECIMENTO', 0, 0),
(371, 27, 1, 'EMAIL', '', 'EMAIL', 1, 0),
(372, 27, 1, 'CNPJ', '', 'Cnpj', 1, 0),
(373, 27, 1, 'IDCLOUD', '', 'IDCLOUD', 0, 0),
(374, 27, 1, 'RAMODEATIVIDADE', '', 'RAMODEATIVIDADE', 1, 0),
(375, 27, 1, 'STATUS', '', 'STATUS', 1, 0),
(376, 27, 1, 'ADMIN', '', 'ADMIN', 1, 0),
(377, 27, 1, 'AÇÕES', '', 'AÇÕES', 1, 0),
(378, 27, 2, 'IDCLOUD', '', 'IDCLOUD', 1, 0),
(379, 27, 2, 'ID', '', 'ID', 1, 0),
(380, 27, 2, 'IDCIDADE', '', 'IDCIDADE', 0, 0),
(381, 27, 2, 'IDREPRESENTANTE', '', 'IDREPRESENTANTE', 0, 0),
(382, 27, 2, 'NOMEFANTASIA', '', 'Empresa', 1, 0),
(383, 27, 2, 'NOMECONTATO', '', 'Nome', 1, 0),
(384, 27, 2, 'RAZAOSOCIAL', '', 'RAZAOSOCIAL', 1, 0),
(385, 27, 2, 'CNPJ', '', 'CNPJ', 1, 0),
(386, 27, 2, 'CNAE', '', 'CNAE', 0, 0),
(387, 27, 2, 'INSCRICAOESTADUAL', '', 'INSCRICAOESTADUAL', 0, 0),
(388, 27, 2, 'EMAIL', '', 'EMAIL', 0, 0),
(389, 27, 2, 'RAMOATIVIDADE', '', 'RAMOATIVIDADE', 0, 0),
(390, 27, 2, 'REPRESENTANTE', '', 'REPRESENTANTE', 0, 0),
(391, 27, 2, 'NOVO', '', 'NOVO', 0, 0),
(392, 27, 2, 'STATUS', '', 'STATUS', 0, 0),
(393, 27, 2, 'ATIVO', '', 'ATIVO', 0, 0),
(394, 27, 2, 'CEP', '', 'CEP', 0, 0),
(395, 27, 2, 'BAIRRO', '', 'BAIRRO', 0, 0),
(396, 27, 2, 'CIDADE', '', 'CIDADE', 0, 0),
(397, 27, 2, 'COMPLEMENTO', '', 'COMPLEMENTO', 0, 0),
(398, 27, 2, 'NUMERO', '', 'NUMERO', 0, 0),
(399, 27, 2, 'ENDERECO', '', 'ENDERECO', 0, 0),
(400, 27, 2, 'UF', '', 'Unidade Federativa', 0, 0),
(401, 27, 2, 'DATAVIGENCIA', '', 'DATAVIGENCIA', 0, 0),
(402, 27, 2, 'CADASTRADAPOR', '', 'CADASTRADAPOR', 0, 0),
(403, 27, 2, 'OBSERVACOES', '', 'OBSERVACOES', 0, 0),
(404, 27, 2, 'FONECOBRANCA', '', 'FONECOBRANCA', 0, 0),
(405, 27, 2, 'FONEADICIONAL', '', 'FONEADICIONAL', 0, 0),
(406, 27, 2, 'DATAINICIO', '', 'DATAINICIO', 0, 0),
(407, 27, 2, 'DIASLICENCAPROVISORIA', '', 'DIASLICENCAPROVISORIA', 0, 0),
(408, 27, 2, 'VALORMENSALIDADE', '', 'Vlr.Mens', 0, 0),
(409, 27, 2, 'VALORIMPLANTACAO', '', 'VALORIMPLANTACAO', 0, 0),
(410, 27, 2, 'AÇÕES', '', 'AÇÕES', 1, 0),
(712, 35, 1, 'ID', NULL, 'ID', 1, 0),
(713, 35, 1, 'NOME', NULL, 'NOME', 1, 0),
(714, 35, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(715, 35, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(716, 35, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(717, 35, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(718, 35, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(719, 35, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(720, 35, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(721, 35, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(722, 35, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(723, 35, 2, 'ID', NULL, 'ID', 1, 0),
(724, 35, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(725, 35, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(726, 35, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(727, 35, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(728, 35, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(729, 35, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(730, 35, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(731, 35, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(732, 35, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(733, 35, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(734, 35, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(735, 35, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(736, 35, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(737, 35, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(738, 35, 2, 'CEP', NULL, 'CEP', 1, 0),
(739, 35, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(740, 35, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(741, 35, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(742, 35, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(743, 35, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(744, 35, 2, 'UF', NULL, 'UF', 1, 0),
(745, 35, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(746, 35, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(747, 35, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(748, 35, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(749, 35, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(750, 35, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(751, 35, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(752, 35, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(753, 35, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(754, 35, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(927, 40, 1, 'ID', NULL, 'ID', 1, 0),
(928, 40, 1, 'NOME', NULL, 'NOME', 1, 0),
(929, 40, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(930, 40, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(931, 40, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(932, 40, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(933, 40, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(934, 40, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(935, 40, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(936, 40, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(937, 40, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(938, 40, 2, 'ID', NULL, 'ID', 1, 0),
(939, 40, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(940, 40, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(941, 40, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(942, 40, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(943, 40, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(944, 40, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(945, 40, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(946, 40, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(947, 40, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(948, 40, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(949, 40, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(950, 40, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(951, 40, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(952, 40, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(953, 40, 2, 'CEP', NULL, 'CEP', 1, 0),
(954, 40, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(955, 40, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(956, 40, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(957, 40, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(958, 40, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(959, 40, 2, 'UF', NULL, 'UF', 1, 0),
(960, 40, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(961, 40, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(962, 40, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(963, 40, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(964, 40, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(965, 40, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(966, 40, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(967, 40, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(968, 40, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(969, 40, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1013, 42, 1, 'ID', NULL, 'ID', 1, 0),
(1014, 42, 1, 'NOME', NULL, 'NOME', 1, 0),
(1015, 42, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1016, 42, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1017, 42, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1018, 42, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1019, 42, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1020, 42, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1021, 42, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1022, 42, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1023, 42, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1024, 42, 2, 'ID', NULL, 'ID', 1, 0),
(1025, 42, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1026, 42, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1027, 42, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1028, 42, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1029, 42, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1030, 42, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1031, 42, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1032, 42, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1033, 42, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1034, 42, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1035, 42, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1036, 42, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1037, 42, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1038, 42, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1039, 42, 2, 'CEP', NULL, 'CEP', 1, 0),
(1040, 42, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1041, 42, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1042, 42, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1043, 42, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1044, 42, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1045, 42, 2, 'UF', NULL, 'UF', 1, 0),
(1046, 42, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1047, 42, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1048, 42, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1049, 42, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1050, 42, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1051, 42, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1052, 42, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1053, 42, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1054, 42, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1055, 42, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1056, 43, 1, 'ID', NULL, 'ID', 1, 0),
(1057, 43, 1, 'NOME', NULL, 'NOME', 1, 0),
(1058, 43, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1059, 43, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1060, 43, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1061, 43, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1062, 43, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1063, 43, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1064, 43, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1065, 43, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1066, 43, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1067, 43, 2, 'ID', NULL, 'ID', 1, 0),
(1068, 43, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1069, 43, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1070, 43, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1071, 43, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1072, 43, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1073, 43, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1074, 43, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1075, 43, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1076, 43, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1077, 43, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1078, 43, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1079, 43, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1080, 43, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1081, 43, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1082, 43, 2, 'CEP', NULL, 'CEP', 1, 0),
(1083, 43, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1084, 43, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1085, 43, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1086, 43, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1087, 43, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1088, 43, 2, 'UF', NULL, 'UF', 1, 0),
(1089, 43, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1090, 43, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1091, 43, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1092, 43, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1093, 43, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1094, 43, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1095, 43, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1096, 43, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1097, 43, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1098, 43, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1099, 44, 1, 'ID', NULL, 'ID', 1, 0),
(1100, 44, 1, 'NOME', NULL, 'NOME', 1, 0),
(1101, 44, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1102, 44, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1103, 44, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1104, 44, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1105, 44, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1106, 44, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1107, 44, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1108, 44, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1109, 44, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1110, 44, 2, 'ID', NULL, 'ID', 1, 0),
(1111, 44, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1112, 44, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1113, 44, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1114, 44, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1115, 44, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1116, 44, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1117, 44, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1118, 44, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1119, 44, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1120, 44, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1121, 44, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1122, 44, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1123, 44, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1124, 44, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1125, 44, 2, 'CEP', NULL, 'CEP', 1, 0),
(1126, 44, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1127, 44, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1128, 44, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1129, 44, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1130, 44, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1131, 44, 2, 'UF', NULL, 'UF', 1, 0),
(1132, 44, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1133, 44, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1134, 44, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1135, 44, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1136, 44, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1137, 44, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1138, 44, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1139, 44, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1140, 44, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1141, 44, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1142, 45, 1, 'ID', NULL, 'ID', 1, 0),
(1143, 45, 1, 'NOME', NULL, 'NOME', 1, 0),
(1144, 45, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1145, 45, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1146, 45, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1147, 45, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1148, 45, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1149, 45, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1150, 45, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1151, 45, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1152, 45, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1153, 45, 2, 'ID', NULL, 'ID', 1, 0),
(1154, 45, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1155, 45, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1156, 45, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1157, 45, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1158, 45, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1159, 45, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1160, 45, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1161, 45, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1162, 45, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1163, 45, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1164, 45, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1165, 45, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1166, 45, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1167, 45, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1168, 45, 2, 'CEP', NULL, 'CEP', 1, 0),
(1169, 45, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1170, 45, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1171, 45, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1172, 45, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1173, 45, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1174, 45, 2, 'UF', NULL, 'UF', 1, 0),
(1175, 45, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1176, 45, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1177, 45, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1178, 45, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1179, 45, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1180, 45, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1181, 45, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1182, 45, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1183, 45, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1184, 45, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1185, 46, 1, 'ID', NULL, 'ID', 1, 0),
(1186, 46, 1, 'NOME', NULL, 'NOME', 1, 0),
(1187, 46, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1188, 46, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1189, 46, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1190, 46, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1191, 46, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1192, 46, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1193, 46, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1194, 46, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1195, 46, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1196, 46, 2, 'ID', NULL, 'ID', 1, 0),
(1197, 46, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1198, 46, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1199, 46, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1200, 46, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1201, 46, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1202, 46, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1203, 46, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1204, 46, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1205, 46, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1206, 46, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1207, 46, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1208, 46, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1209, 46, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1210, 46, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1211, 46, 2, 'CEP', NULL, 'CEP', 1, 0),
(1212, 46, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1213, 46, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1214, 46, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1215, 46, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1216, 46, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1217, 46, 2, 'UF', NULL, 'UF', 1, 0),
(1218, 46, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1219, 46, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1220, 46, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1221, 46, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1222, 46, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1223, 46, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1224, 46, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1225, 46, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1226, 46, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1227, 46, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1228, 47, 1, 'ID', NULL, 'ID', 1, 0),
(1229, 47, 1, 'NOME', NULL, 'NOME', 1, 0),
(1230, 47, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1231, 47, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1232, 47, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1233, 47, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1234, 47, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1235, 47, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1236, 47, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1237, 47, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1238, 47, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1239, 47, 2, 'ID', NULL, 'ID', 1, 0),
(1240, 47, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1241, 47, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1242, 47, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1243, 47, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1244, 47, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1245, 47, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1246, 47, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1247, 47, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1248, 47, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1249, 47, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1250, 47, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1251, 47, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1252, 47, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1253, 47, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1254, 47, 2, 'CEP', NULL, 'CEP', 1, 0),
(1255, 47, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1256, 47, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1257, 47, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1258, 47, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1259, 47, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1260, 47, 2, 'UF', NULL, 'UF', 1, 0),
(1261, 47, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1262, 47, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1263, 47, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1264, 47, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1265, 47, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1266, 47, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1267, 47, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1268, 47, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1269, 47, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1270, 47, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1271, 48, 1, 'ID', NULL, 'ID', 1, 0),
(1272, 48, 1, 'NOME', NULL, 'NOME', 1, 0),
(1273, 48, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1274, 48, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1275, 48, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1276, 48, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1277, 48, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1278, 48, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1279, 48, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1280, 48, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1281, 48, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1282, 48, 2, 'ID', NULL, 'ID', 1, 0),
(1283, 48, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1284, 48, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1285, 48, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1286, 48, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1287, 48, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1288, 48, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1289, 48, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1290, 48, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1291, 48, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1292, 48, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1293, 48, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1294, 48, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1295, 48, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1296, 48, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1297, 48, 2, 'CEP', NULL, 'CEP', 1, 0),
(1298, 48, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1299, 48, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1300, 48, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1301, 48, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1302, 48, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1303, 48, 2, 'UF', NULL, 'UF', 1, 0),
(1304, 48, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1305, 48, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1306, 48, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1307, 48, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1308, 48, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1309, 48, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1310, 48, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1311, 48, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1312, 48, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1313, 48, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1314, 49, 1, 'ID', NULL, 'ID', 1, 0),
(1315, 49, 1, 'NOME', NULL, 'NOME', 1, 0),
(1316, 49, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1317, 49, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1318, 49, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1319, 49, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1320, 49, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1321, 49, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1322, 49, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1323, 49, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1324, 49, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1325, 49, 2, 'ID', NULL, 'ID', 1, 0),
(1326, 49, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1327, 49, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1328, 49, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1329, 49, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1330, 49, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1331, 49, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1332, 49, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1333, 49, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1334, 49, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1335, 49, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1336, 49, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1337, 49, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1338, 49, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1339, 49, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1340, 49, 2, 'CEP', NULL, 'CEP', 1, 0),
(1341, 49, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1342, 49, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1343, 49, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1344, 49, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1345, 49, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1346, 49, 2, 'UF', NULL, 'UF', 1, 0),
(1347, 49, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1348, 49, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1349, 49, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1350, 49, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1351, 49, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1352, 49, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1353, 49, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1354, 49, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1355, 49, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1356, 49, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1357, 50, 1, 'ID', NULL, 'ID', 1, 0),
(1358, 50, 1, 'NOME', NULL, 'NOME', 1, 0),
(1359, 50, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1360, 50, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1361, 50, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1362, 50, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1363, 50, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1364, 50, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1365, 50, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1366, 50, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1367, 50, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1368, 50, 2, 'ID', NULL, 'ID', 1, 0),
(1369, 50, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1370, 50, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1371, 50, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1372, 50, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1373, 50, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1374, 50, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1375, 50, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1376, 50, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1377, 50, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1378, 50, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1379, 50, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1380, 50, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1381, 50, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1382, 50, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1383, 50, 2, 'CEP', NULL, 'CEP', 1, 0),
(1384, 50, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1385, 50, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1386, 50, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1387, 50, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1388, 50, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1389, 50, 2, 'UF', NULL, 'UF', 1, 0),
(1390, 50, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1391, 50, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1392, 50, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1393, 50, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1394, 50, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1395, 50, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1396, 50, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1397, 50, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1398, 50, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1399, 50, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1400, 51, 1, 'ID', NULL, 'ID', 1, 0),
(1401, 51, 1, 'NOME', NULL, 'NOME', 1, 0),
(1402, 51, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1403, 51, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1404, 51, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1405, 51, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1406, 51, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1407, 51, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1408, 51, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1409, 51, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1410, 51, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1411, 51, 2, 'ID', NULL, 'ID', 1, 0),
(1412, 51, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1413, 51, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1414, 51, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1415, 51, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1416, 51, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1417, 51, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1418, 51, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1419, 51, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1420, 51, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1421, 51, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1422, 51, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1423, 51, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1424, 51, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1425, 51, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1426, 51, 2, 'CEP', NULL, 'CEP', 1, 0),
(1427, 51, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1428, 51, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1429, 51, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1430, 51, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1431, 51, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1432, 51, 2, 'UF', NULL, 'UF', 1, 0),
(1433, 51, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1434, 51, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1435, 51, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1436, 51, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1437, 51, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1438, 51, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1439, 51, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1440, 51, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1441, 51, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1442, 51, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1443, 52, 1, 'ID', NULL, 'ID', 1, 0),
(1444, 52, 1, 'NOME', NULL, 'NOME', 1, 0),
(1445, 52, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1446, 52, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1447, 52, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1448, 52, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1449, 52, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1450, 52, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1451, 52, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1452, 52, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1453, 52, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1454, 52, 2, 'ID', NULL, 'ID', 1, 0),
(1455, 52, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1456, 52, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1457, 52, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1458, 52, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1459, 52, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1460, 52, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1461, 52, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1462, 52, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1463, 52, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1464, 52, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1465, 52, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1466, 52, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1467, 52, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1468, 52, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1469, 52, 2, 'CEP', NULL, 'CEP', 1, 0),
(1470, 52, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1471, 52, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1472, 52, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1473, 52, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1474, 52, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1475, 52, 2, 'UF', NULL, 'UF', 1, 0),
(1476, 52, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1477, 52, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1478, 52, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1479, 52, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1480, 52, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1481, 52, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1482, 52, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1483, 52, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1484, 52, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1485, 52, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1486, 53, 1, 'ID', NULL, 'ID', 1, 0),
(1487, 53, 1, 'NOME', NULL, 'NOME', 1, 0),
(1488, 53, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1489, 53, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1490, 53, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1491, 53, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1492, 53, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1493, 53, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1494, 53, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1495, 53, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1496, 53, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1497, 53, 2, 'ID', NULL, 'ID', 1, 0),
(1498, 53, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1499, 53, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1500, 53, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1501, 53, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1502, 53, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1503, 53, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1504, 53, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1505, 53, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1506, 53, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1507, 53, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1508, 53, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1509, 53, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1510, 53, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1511, 53, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1512, 53, 2, 'CEP', NULL, 'CEP', 1, 0),
(1513, 53, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1514, 53, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1515, 53, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1516, 53, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1517, 53, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1518, 53, 2, 'UF', NULL, 'UF', 1, 0),
(1519, 53, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1520, 53, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1521, 53, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1522, 53, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1523, 53, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1524, 53, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1525, 53, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1526, 53, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1527, 53, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1528, 53, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1529, 54, 1, 'ID', NULL, 'ID', 1, 0),
(1530, 54, 1, 'NOME', NULL, 'NOME', 1, 0),
(1531, 54, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1532, 54, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1533, 54, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1534, 54, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1535, 54, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1536, 54, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1537, 54, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1538, 54, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1539, 54, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1540, 54, 2, 'ID', NULL, 'ID', 1, 0),
(1541, 54, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1542, 54, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1543, 54, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1544, 54, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1545, 54, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1546, 54, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1547, 54, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1548, 54, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1549, 54, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1550, 54, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1551, 54, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1552, 54, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1553, 54, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1554, 54, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1555, 54, 2, 'CEP', NULL, 'CEP', 1, 0),
(1556, 54, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1557, 54, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1558, 54, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1559, 54, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1560, 54, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1561, 54, 2, 'UF', NULL, 'UF', 1, 0),
(1562, 54, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1563, 54, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1564, 54, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1565, 54, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1566, 54, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1567, 54, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1568, 54, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1569, 54, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1570, 54, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1571, 54, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1572, 55, 1, 'ID', NULL, 'ID', 1, 0),
(1573, 55, 1, 'NOME', NULL, 'NOME', 1, 0),
(1574, 55, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1575, 55, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1576, 55, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1577, 55, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1578, 55, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1579, 55, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1580, 55, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1581, 55, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1582, 55, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1583, 55, 2, 'ID', NULL, 'ID', 1, 0),
(1584, 55, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1585, 55, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1586, 55, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1587, 55, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1588, 55, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1589, 55, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1590, 55, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1591, 55, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1592, 55, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1593, 55, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1594, 55, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1595, 55, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1596, 55, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1597, 55, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1598, 55, 2, 'CEP', NULL, 'CEP', 1, 0),
(1599, 55, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1600, 55, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1601, 55, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1602, 55, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1603, 55, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1604, 55, 2, 'UF', NULL, 'UF', 1, 0),
(1605, 55, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1606, 55, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1607, 55, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1608, 55, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1609, 55, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1610, 55, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1611, 55, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1612, 55, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1613, 55, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1614, 55, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1615, 56, 1, 'ID', NULL, 'ID', 1, 0),
(1616, 56, 1, 'NOME', NULL, 'NOME', 1, 0),
(1617, 56, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1618, 56, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1619, 56, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1620, 56, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1621, 56, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1622, 56, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1623, 56, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1624, 56, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1625, 56, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1626, 56, 2, 'ID', NULL, 'ID', 1, 0),
(1627, 56, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1628, 56, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1629, 56, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1630, 56, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1631, 56, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1632, 56, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1633, 56, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1634, 56, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1635, 56, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1636, 56, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1637, 56, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1638, 56, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1639, 56, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1640, 56, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1641, 56, 2, 'CEP', NULL, 'CEP', 1, 0),
(1642, 56, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1643, 56, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1644, 56, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1645, 56, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1646, 56, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1647, 56, 2, 'UF', NULL, 'UF', 1, 0),
(1648, 56, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1649, 56, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1650, 56, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1651, 56, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1652, 56, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1653, 56, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1654, 56, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1655, 56, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1656, 56, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1657, 56, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1658, 57, 1, 'ID', NULL, 'ID', 1, 0),
(1659, 57, 1, 'NOME', NULL, 'NOME', 1, 0),
(1660, 57, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1661, 57, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1662, 57, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1663, 57, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1664, 57, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1665, 57, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1666, 57, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1667, 57, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1668, 57, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1669, 57, 2, 'ID', NULL, 'ID', 1, 0),
(1670, 57, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1671, 57, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1672, 57, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1673, 57, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1674, 57, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1675, 57, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1676, 57, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1677, 57, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1678, 57, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1679, 57, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1680, 57, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1681, 57, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1682, 57, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1683, 57, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1684, 57, 2, 'CEP', NULL, 'CEP', 1, 0),
(1685, 57, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1686, 57, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1687, 57, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1688, 57, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1689, 57, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1690, 57, 2, 'UF', NULL, 'UF', 1, 0),
(1691, 57, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1692, 57, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1693, 57, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1694, 57, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1695, 57, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1696, 57, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1697, 57, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1698, 57, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1699, 57, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1700, 57, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1701, 58, 1, 'ID', NULL, 'ID', 1, 0),
(1702, 58, 1, 'NOME', NULL, 'NOME', 1, 0),
(1703, 58, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1704, 58, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1705, 58, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1706, 58, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1707, 58, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1708, 58, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1709, 58, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1710, 58, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1711, 58, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1712, 58, 2, 'ID', NULL, 'ID', 1, 0),
(1713, 58, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1714, 58, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1715, 58, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1716, 58, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1717, 58, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1718, 58, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1719, 58, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1720, 58, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1721, 58, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1722, 58, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1723, 58, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1724, 58, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1725, 58, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1726, 58, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1727, 58, 2, 'CEP', NULL, 'CEP', 1, 0),
(1728, 58, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1729, 58, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1730, 58, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1731, 58, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1732, 58, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1733, 58, 2, 'UF', NULL, 'UF', 1, 0),
(1734, 58, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1735, 58, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1736, 58, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1737, 58, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1738, 58, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1739, 58, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1740, 58, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1741, 58, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1742, 58, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1743, 58, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1744, 59, 1, 'ID', NULL, 'ID', 1, 0),
(1745, 59, 1, 'NOME', NULL, 'NOME', 1, 0),
(1746, 59, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1747, 59, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1748, 59, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1749, 59, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1750, 59, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1751, 59, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1752, 59, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1753, 59, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1754, 59, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1755, 59, 2, 'ID', NULL, 'ID', 1, 0),
(1756, 59, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1757, 59, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1758, 59, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1759, 59, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1760, 59, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1761, 59, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1762, 59, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1763, 59, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1764, 59, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1765, 59, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1766, 59, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1767, 59, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1768, 59, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1769, 59, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1770, 59, 2, 'CEP', NULL, 'CEP', 1, 0),
(1771, 59, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1772, 59, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1773, 59, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1774, 59, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1775, 59, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1776, 59, 2, 'UF', NULL, 'UF', 1, 0),
(1777, 59, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1778, 59, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1779, 59, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1780, 59, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1781, 59, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1782, 59, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1783, 59, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1784, 59, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1785, 59, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1786, 59, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1787, 60, 1, 'ID', NULL, 'ID', 1, 0),
(1788, 60, 1, 'NOME', NULL, 'NOME', 1, 0),
(1789, 60, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1790, 60, 1, 'EMAIL', NULL, 'EMAIL', 1, 0);
INSERT INTO `SYSSELECTTABLECOLUMN` (`id`, `idUser`, `idTable`, `fieldName`, `fieldIndex`, `fieldCaption`, `visible`, `defaultIndex`) VALUES
(1791, 60, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1792, 60, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1793, 60, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1794, 60, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1795, 60, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1796, 60, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1797, 60, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1798, 60, 2, 'ID', NULL, 'ID', 1, 0),
(1799, 60, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1800, 60, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1801, 60, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1802, 60, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1803, 60, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1804, 60, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1805, 60, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1806, 60, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1807, 60, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1808, 60, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1809, 60, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1810, 60, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1811, 60, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1812, 60, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1813, 60, 2, 'CEP', NULL, 'CEP', 1, 0),
(1814, 60, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1815, 60, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1816, 60, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1817, 60, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1818, 60, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1819, 60, 2, 'UF', NULL, 'UF', 1, 0),
(1820, 60, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1821, 60, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1822, 60, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1823, 60, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1824, 60, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1825, 60, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1826, 60, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1827, 60, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1828, 60, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1829, 60, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1830, 61, 1, 'ID', NULL, 'ID', 1, 0),
(1831, 61, 1, 'NOME', NULL, 'NOME', 1, 0),
(1832, 61, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1833, 61, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1834, 61, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1835, 61, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1836, 61, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1837, 61, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1838, 61, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1839, 61, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1840, 61, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1841, 61, 2, 'ID', NULL, 'ID', 1, 0),
(1842, 61, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1843, 61, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1844, 61, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1845, 61, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1846, 61, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1847, 61, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1848, 61, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1849, 61, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1850, 61, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1851, 61, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1852, 61, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1853, 61, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1854, 61, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1855, 61, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1856, 61, 2, 'CEP', NULL, 'CEP', 1, 0),
(1857, 61, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1858, 61, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1859, 61, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1860, 61, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1861, 61, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1862, 61, 2, 'UF', NULL, 'UF', 1, 0),
(1863, 61, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1864, 61, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1865, 61, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1866, 61, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1867, 61, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1868, 61, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1869, 61, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1870, 61, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1871, 61, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1872, 61, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1873, 62, 1, 'ID', NULL, 'ID', 1, 0),
(1874, 62, 1, 'NOME', NULL, 'NOME', 1, 0),
(1875, 62, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1876, 62, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1877, 62, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1878, 62, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1879, 62, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1880, 62, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1881, 62, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1882, 62, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1883, 62, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1884, 62, 2, 'ID', NULL, 'ID', 1, 0),
(1885, 62, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1886, 62, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1887, 62, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1888, 62, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1889, 62, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1890, 62, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1891, 62, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1892, 62, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1893, 62, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1894, 62, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1895, 62, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1896, 62, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1897, 62, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1898, 62, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1899, 62, 2, 'CEP', NULL, 'CEP', 1, 0),
(1900, 62, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1901, 62, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1902, 62, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1903, 62, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1904, 62, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1905, 62, 2, 'UF', NULL, 'UF', 1, 0),
(1906, 62, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1907, 62, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1908, 62, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1909, 62, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1910, 62, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1911, 62, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1912, 62, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1913, 62, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1914, 62, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1915, 62, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1916, 63, 1, 'ID', NULL, 'ID', 1, 0),
(1917, 63, 1, 'NOME', NULL, 'NOME', 1, 0),
(1918, 63, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(1919, 63, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1920, 63, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1921, 63, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1922, 63, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(1923, 63, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(1924, 63, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(1925, 63, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(1926, 63, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(1927, 63, 2, 'ID', NULL, 'ID', 1, 0),
(1928, 63, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(1929, 63, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(1930, 63, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(1931, 63, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(1932, 63, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(1933, 63, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(1934, 63, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(1935, 63, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(1936, 63, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(1937, 63, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(1938, 63, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(1939, 63, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(1940, 63, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(1941, 63, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(1942, 63, 2, 'CEP', NULL, 'CEP', 1, 0),
(1943, 63, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(1944, 63, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(1945, 63, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(1946, 63, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(1947, 63, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(1948, 63, 2, 'UF', NULL, 'UF', 1, 0),
(1949, 63, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(1950, 63, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(1951, 63, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(1952, 63, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(1953, 63, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(1954, 63, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(1955, 63, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(1956, 63, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(1957, 63, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(1958, 63, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(2002, 65, 1, 'ID', NULL, 'ID', 1, 0),
(2003, 65, 1, 'NOME', NULL, 'NOME', 1, 0),
(2004, 65, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(2005, 65, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(2006, 65, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(2007, 65, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(2008, 65, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(2009, 65, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(2010, 65, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(2011, 65, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(2012, 65, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(2013, 65, 2, 'ID', NULL, 'ID', 1, 0),
(2014, 65, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(2015, 65, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(2016, 65, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(2017, 65, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(2018, 65, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(2019, 65, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(2020, 65, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(2021, 65, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(2022, 65, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(2023, 65, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(2024, 65, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(2025, 65, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(2026, 65, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(2027, 65, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(2028, 65, 2, 'CEP', NULL, 'CEP', 1, 0),
(2029, 65, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(2030, 65, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(2031, 65, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(2032, 65, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(2033, 65, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(2034, 65, 2, 'UF', NULL, 'UF', 1, 0),
(2035, 65, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(2036, 65, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(2037, 65, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(2038, 65, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(2039, 65, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(2040, 65, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(2041, 65, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(2042, 65, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(2043, 65, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(2044, 65, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(2045, 66, 1, 'ID', NULL, 'ID', 1, 0),
(2046, 66, 1, 'NOME', NULL, 'NOME', 1, 0),
(2047, 66, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(2048, 66, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(2049, 66, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(2050, 66, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(2051, 66, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(2052, 66, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(2053, 66, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(2054, 66, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(2055, 66, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(2056, 66, 2, 'ID', NULL, 'ID', 1, 0),
(2057, 66, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(2058, 66, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(2059, 66, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(2060, 66, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(2061, 66, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(2062, 66, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(2063, 66, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(2064, 66, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(2065, 66, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(2066, 66, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(2067, 66, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(2068, 66, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(2069, 66, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(2070, 66, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(2071, 66, 2, 'CEP', NULL, 'CEP', 1, 0),
(2072, 66, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(2073, 66, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(2074, 66, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(2075, 66, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(2076, 66, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(2077, 66, 2, 'UF', NULL, 'UF', 1, 0),
(2078, 66, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(2079, 66, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(2080, 66, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(2081, 66, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(2082, 66, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(2083, 66, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(2084, 66, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(2085, 66, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(2086, 66, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(2087, 66, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(2088, 67, 1, 'ID', NULL, 'ID', 1, 0),
(2089, 67, 1, 'NOME', NULL, 'NOME', 1, 0),
(2090, 67, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(2091, 67, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(2092, 67, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(2093, 67, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(2094, 67, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(2095, 67, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(2096, 67, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(2097, 67, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(2098, 67, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(2099, 67, 2, 'ID', NULL, 'ID', 1, 0),
(2100, 67, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(2101, 67, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(2102, 67, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(2103, 67, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(2104, 67, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(2105, 67, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(2106, 67, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(2107, 67, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(2108, 67, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(2109, 67, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(2110, 67, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(2111, 67, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(2112, 67, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(2113, 67, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(2114, 67, 2, 'CEP', NULL, 'CEP', 1, 0),
(2115, 67, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(2116, 67, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(2117, 67, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(2118, 67, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(2119, 67, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(2120, 67, 2, 'UF', NULL, 'UF', 1, 0),
(2121, 67, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(2122, 67, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(2123, 67, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(2124, 67, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(2125, 67, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(2126, 67, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(2127, 67, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(2128, 67, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(2129, 67, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(2130, 67, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(2131, 68, 1, 'ID', NULL, 'ID', 1, 0),
(2132, 68, 1, 'NOME', NULL, 'NOME', 1, 0),
(2133, 68, 1, 'NOMEESTABELECIMENTO', NULL, 'NOMEESTABELECIMENTO', 1, 0),
(2134, 68, 1, 'EMAIL', NULL, 'EMAIL', 1, 0),
(2135, 68, 1, 'CNPJ', NULL, 'CNPJ', 1, 0),
(2136, 68, 1, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(2137, 68, 1, 'RAMODEATIVIDADE', NULL, 'RAMODEATIVIDADE', 1, 0),
(2138, 68, 1, 'STATUS', NULL, 'STATUS', 1, 0),
(2139, 68, 1, 'ADMIN', NULL, 'ADMIN', 1, 0),
(2140, 68, 1, 'AÇÕES', NULL, 'AÇÕES', 1, 0),
(2141, 68, 2, 'IDCLOUD', NULL, 'IDCLOUD', 1, 0),
(2142, 68, 2, 'ID', NULL, 'ID', 1, 0),
(2143, 68, 2, 'IDCIDADE', NULL, 'IDCIDADE', 1, 0),
(2144, 68, 2, 'IDREPRESENTANTE', NULL, 'IDREPRESENTANTE', 1, 0),
(2145, 68, 2, 'NOMEFANTASIA', NULL, 'NOMEFANTASIA', 1, 0),
(2146, 68, 2, 'NOMECONTATO', NULL, 'NOMECONTATO', 1, 0),
(2147, 68, 2, 'RAZAOSOCIAL', NULL, 'RAZAOSOCIAL', 1, 0),
(2148, 68, 2, 'CNPJ', NULL, 'CNPJ', 1, 0),
(2149, 68, 2, 'CNAE', NULL, 'CNAE', 1, 0),
(2150, 68, 2, 'INSCRICAOESTADUAL', NULL, 'INSCRICAOESTADUAL', 1, 0),
(2151, 68, 2, 'EMAIL', NULL, 'EMAIL', 1, 0),
(2152, 68, 2, 'RAMOATIVIDADE', NULL, 'RAMOATIVIDADE', 1, 0),
(2153, 68, 2, 'REPRESENTANTE', NULL, 'REPRESENTANTE', 1, 0),
(2154, 68, 2, 'NOVO', NULL, 'NOVO', 1, 0),
(2155, 68, 2, 'STATUS', NULL, 'STATUS', 1, 0),
(2156, 68, 2, 'ATIVO', NULL, 'ATIVO', 1, 0),
(2157, 68, 2, 'CEP', NULL, 'CEP', 1, 0),
(2158, 68, 2, 'BAIRRO', NULL, 'BAIRRO', 1, 0),
(2159, 68, 2, 'CIDADE', NULL, 'CIDADE', 1, 0),
(2160, 68, 2, 'COMPLEMENTO', NULL, 'COMPLEMENTO', 1, 0),
(2161, 68, 2, 'NUMERO', NULL, 'NUMERO', 1, 0),
(2162, 68, 2, 'ENDERECO', NULL, 'ENDERECO', 1, 0),
(2163, 68, 2, 'UF', NULL, 'UF', 1, 0),
(2164, 68, 2, 'DATAVIGENCIA', NULL, 'DATAVIGENCIA', 1, 0),
(2165, 68, 2, 'CADASTRADAPOR', NULL, 'CADASTRADAPOR', 1, 0),
(2166, 68, 2, 'OBSERVACOES', NULL, 'OBSERVACOES', 1, 0),
(2167, 68, 2, 'FONECOBRANCA', NULL, 'FONECOBRANCA', 1, 0),
(2168, 68, 2, 'FONEADICIONAL', NULL, 'FONEADICIONAL', 1, 0),
(2169, 68, 2, 'DATAINICIO', NULL, 'DATAINICIO', 1, 0),
(2170, 68, 2, 'DIASLICENCAPROVISORIA', NULL, 'DIASLICENCAPROVISORIA', 1, 0),
(2171, 68, 2, 'VALORMENSALIDADE', NULL, 'VALORMENSALIDADE', 1, 0),
(2172, 68, 2, 'VALORIMPLANTACAO', NULL, 'VALORIMPLANTACAO', 1, 0),
(2173, 68, 2, 'AÇÕES', NULL, 'AÇÕES', 1, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `TERMINAIS`
--

CREATE TABLE `TERMINAIS` (
  `Id` int NOT NULL,
  `CodigoEmpresa` int NOT NULL,
  `DataInclusao` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DataLicencaProvisoria` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `DataSolicitacaoProvisoria` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `DataVigencia` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `DiasLicencaProvisoria` int NOT NULL DEFAULT '0',
  `IdCloudTerminal` int NOT NULL,
  `IdEmpresa` int NOT NULL,
  `Identificacao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `KeyTerminal` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Licenca` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `LicencaProvisoria` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `NomeMaquina` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Provisoria` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT 'N',
  `Restricao` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `TUTORIAIS`
--

CREATE TABLE `TUTORIAIS` (
  `ID` int NOT NULL,
  `CATEGORIA` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `TITULO` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DESCRICAO` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `FILE` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `DATAINCLUSAO` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `ATIVO` tinyint(1) NOT NULL DEFAULT '1',
  `TIPO` int NOT NULL,
  `TEXTO` varchar(5000) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `LINK` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Despejando dados para a tabela `TUTORIAIS`
--

INSERT INTO `TUTORIAIS` (`ID`, `CATEGORIA`, `TITULO`, `DESCRICAO`, `FILE`, `DATAINCLUSAO`, `ATIVO`, `TIPO`, `TEXTO`, `LINK`) VALUES
(3, '7', 'Novo tutorial', 'Como repor caixas de Leite rapidamente', NULL, '2022-11-24', 1, 1, '<p>aSasASasa</p>', ''),
(4, '5', 'Tutorial Antigo', 'Venda para 30 dias', NULL, '2022-11-23', 1, 1, '<p>Nota Fiscal para pagamentos em 30 dias</p>', ''),
(5, '8', 'Novo tutorial 2', 'Emissão de DDE para pagamento', NULL, '2022-11-24', 1, 1, '<p>O DAE deve ser emitido pelo empregador dom&eacute;stico diretamente do sistema eSocial. O eSocial para o empregador dom&eacute;stico &eacute; uma solu&ccedil;&atilde;o web para presta&ccedil;&atilde;o de informa&ccedil;&atilde;o simplificada e online, por meio do endere&ccedil;o www.gov.br/esocial ou atrav&eacute;s do App para dispositivos m&oacute;veis (celulares e tablets).</p>', ''),
(6, '9', 'Novo tutorial 3', 'Venda para 30 dias', NULL, '2022-11-24', 1, 1, '<p>O DAE deve ser emitido pelo empregador dom&eacute;stico diretamente do sistema eSocial. O eSocial para o empregador dom&eacute;stico &eacute; uma solu&ccedil;&atilde;o web para presta&ccedil;&atilde;o de informa&ccedil;&atilde;o simplificada e online, por meio do endere&ccedil;o www.gov.br/esocial ou atrav&eacute;s do App para dispositivos m&oacute;veis (celulares e tablets).</p>', ''),
(8, '12', 'Estoque Limpo', 'Boas maneiras para higienização de estoque', NULL, '2022-11-24', 1, 1, '<p>Teste</p>', ''),
(9, '13', 'Cadastro de Categoria', 'Como cadastrar uma categoria de produtos', NULL, '2022-11-30', 1, 1, '<p>Acesse o menu&nbsp;<strong>Cadastro&gt;Produtos&gt;Grupo</strong></p>\n<p>Informe a descri&ccedil;&atilde;o, marque se o grupo est&aacute; ativo e confirme</p>', ''),
(11, '14', 'Teste chamado', 'Como repor caixas de Leite rapidamente', NULL, '2022-12-23', 1, 1, '<p>asdasas</p>', ''),
(12, '15', 'Múltiplas empresas', 'Como adicionar filiais para vizualizar no portal', NULL, '2022-12-27', 1, 1, '<p>Realize o cadastro de todas as empresas que deseja ter acesso na tela de Dashboard. Em seguida abra um chamado solicitando o v&iacute;nculo das mesmas a uma matriz de sua escolha. Assim que realizado as altera&ccedil;&otilde;es ser&aacute; poss&iacute;vel ver as telas das outras empresas vinculadas.</p>', ''),
(13, '13', 'Estoque Limpo', 'Boas maneiras para higienização de estoque', NULL, '2023-01-06', 1, 1, '<p>asdasdasdawdasdw</p>', ''),
(14, '', 'link tutorial', 'Teste de upload', NULL, '2023-01-06', 1, 3, 'null', 'https://www.youtube.com/watch?v=D0lvBB96D6o');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TUTORIAISCATEGORIA`
--

CREATE TABLE `TUTORIAISCATEGORIA` (
  `ID` int NOT NULL,
  `NOME` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DESCRICAO` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Despejando dados para a tabela `TUTORIAISCATEGORIA`
--

INSERT INTO `TUTORIAISCATEGORIA` (`ID`, `NOME`, `DESCRICAO`) VALUES
(11, 'Teste', 'Teste'),
(13, 'Estoque', ''),
(15, 'Portal ', 'Funcionalidades e Dúvidas do Portal Facility');

-- --------------------------------------------------------

--
-- Estrutura para tabela `USERCARD`
--

CREATE TABLE `USERCARD` (
  `ID` int NOT NULL,
  `IDUSER` int NOT NULL,
  `TITLE` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `INFO` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `VALUE` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `TIPOCARD` int NOT NULL DEFAULT '0',
  `TIPOVALOR` int NOT NULL DEFAULT '0',
  `ICON` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `SUBTEXTO` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `LINK` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Despejando dados para a tabela `USERCARD`
--

INSERT INTO `USERCARD` (`ID`, `IDUSER`, `TITLE`, `INFO`, `VALUE`, `TIPOCARD`, `TIPOVALOR`, `ICON`, `SUBTEXTO`, `LINK`) VALUES
(16, 27, 'Teste', 'GASTOS MENSAIS', '999', 1, 1, 'fa-solid fa-money-bill', 'Gastos de Janeiro', '/user/relatorios/gastos'),
(18, 27, 'Lucro', 'LUCROS ANUAIS', '999', 2, 2, 'fa-solid fa-percent', 'Lucro Janeiro', '/user/relatorios/lucros'),
(19, 25, 'Vendas', 'VENDAS MENSAIS', '999', 2, 1, 'fa-solid fa-money-bill', 'Vendas desse mês', '/user/relatorios/vendas'),
(20, 25, 'Despesas Efetuadas', 'GASTOS MENSAIS', '999', 2, 1, 'fa-solid fa-chart-line', 'Gastos do mes por periodo', '/user/relatorios/gastos'),
(21, 35, 'Card Teste', 'Descrição do card', '999', 0, 1, 'home', NULL, '/user/relatorios/descrição');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `CHAMADOS`
--
ALTER TABLE `CHAMADOS`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `SETOR` (`SETOR`),
  ADD KEY `IDCLIENTE` (`IDCLIENTE`),
  ADD KEY `IDINTERNO` (`IDINTERNO`),
  ADD KEY `TIPOCHAMADO` (`TIPOCHAMADO`),
  ADD KEY `STATUS` (`STATUS`);

--
-- Índices de tabela `CHAMADOSECTIONITEM`
--
ALTER TABLE `CHAMADOSECTIONITEM`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_TYPE` (`IDSECTIONITEMTYPE`),
  ADD KEY `FK_CHAMADO` (`IDCHAMADO`);

--
-- Índices de tabela `CHAMADOTYPE`
--
ALTER TABLE `CHAMADOTYPE`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `CHAMADOTYPESECTION`
--
ALTER TABLE `CHAMADOTYPESECTION`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDTYPE` (`IDTYPE`);

--
-- Índices de tabela `CHAMADOTYPESECTIONITEM`
--
ALTER TABLE `CHAMADOTYPESECTIONITEM`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDSECTION` (`IDSECTION`);

--
-- Índices de tabela `DOCUMENTOS`
--
ALTER TABLE `DOCUMENTOS`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDUSER` (`IDUSER`);

--
-- Índices de tabela `FILIAIS`
--
ALTER TABLE `FILIAIS`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDMATRIZ` (`IDMATRIZ`);

--
-- Índices de tabela `INTERNOS`
--
ALTER TABLE `INTERNOS`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `SETOR` (`SETOR`);

--
-- Índices de tabela `MATRIZES`
--
ALTER TABLE `MATRIZES`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `OCORRENCIAS`
--
ALTER TABLE `OCORRENCIAS`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDCHAMADO` (`IDCHAMADO`),
  ADD KEY `STATUS` (`STATUS`),
  ADD KEY `SETOR` (`SETOR`);

--
-- Índices de tabela `SETORES`
--
ALTER TABLE `SETORES`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `STATUSCHAMADOS`
--
ALTER TABLE `STATUSCHAMADOS`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `SYSAPICONF`
--
ALTER TABLE `SYSAPICONF`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `SYSLOGINREQUEST`
--
ALTER TABLE `SYSLOGINREQUEST`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `SYSMENUITEM`
--
ALTER TABLE `SYSMENUITEM`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `SYSRAMOSATIVIDADE`
--
ALTER TABLE `SYSRAMOSATIVIDADE`
  ADD PRIMARY KEY (`descricao`);

--
-- Índices de tabela `SYSSELECTTABLECOLUMN`
--
ALTER TABLE `SYSSELECTTABLECOLUMN`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Índices de tabela `TERMINAIS`
--
ALTER TABLE `TERMINAIS`
  ADD PRIMARY KEY (`Id`);

--
-- Índices de tabela `TUTORIAIS`
--
ALTER TABLE `TUTORIAIS`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `TUTORIAISCATEGORIA`
--
ALTER TABLE `TUTORIAISCATEGORIA`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `USERCARD`
--
ALTER TABLE `USERCARD`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDUSER` (`IDUSER`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `CHAMADOS`
--
ALTER TABLE `CHAMADOS`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de tabela `CHAMADOSECTIONITEM`
--
ALTER TABLE `CHAMADOSECTIONITEM`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de tabela `DOCUMENTOS`
--
ALTER TABLE `DOCUMENTOS`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `FILIAIS`
--
ALTER TABLE `FILIAIS`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `INTERNOS`
--
ALTER TABLE `INTERNOS`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `MATRIZES`
--
ALTER TABLE `MATRIZES`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `OCORRENCIAS`
--
ALTER TABLE `OCORRENCIAS`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `SETORES`
--
ALTER TABLE `SETORES`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `STATUSCHAMADOS`
--
ALTER TABLE `STATUSCHAMADOS`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `SYSAPICONF`
--
ALTER TABLE `SYSAPICONF`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `SYSLOGINREQUEST`
--
ALTER TABLE `SYSLOGINREQUEST`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de tabela `SYSMENUITEM`
--
ALTER TABLE `SYSMENUITEM`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de tabela `SYSSELECTTABLECOLUMN`
--
ALTER TABLE `SYSSELECTTABLECOLUMN`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2174;

--
-- AUTO_INCREMENT de tabela `TERMINAIS`
--
ALTER TABLE `TERMINAIS`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `TUTORIAIS`
--
ALTER TABLE `TUTORIAIS`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `TUTORIAISCATEGORIA`
--
ALTER TABLE `TUTORIAISCATEGORIA`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `USERCARD`
--
ALTER TABLE `USERCARD`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `CHAMADOS`
--
ALTER TABLE `CHAMADOS`
  ADD CONSTRAINT `CHAMADOS_ibfk_1` FOREIGN KEY (`SETOR`) REFERENCES `SETORES` (`ID`),
  ADD CONSTRAINT `CHAMADOS_ibfk_2` FOREIGN KEY (`IDCLIENTE`) REFERENCES `SYSLOGINREQUEST` (`ID`),
  ADD CONSTRAINT `CHAMADOS_ibfk_3` FOREIGN KEY (`IDINTERNO`) REFERENCES `INTERNOS` (`ID`),
  ADD CONSTRAINT `CHAMADOS_ibfk_4` FOREIGN KEY (`TIPOCHAMADO`) REFERENCES `CHAMADOTYPE` (`ID`),
  ADD CONSTRAINT `CHAMADOS_ibfk_5` FOREIGN KEY (`STATUS`) REFERENCES `STATUSCHAMADOS` (`ID`);

--
-- Restrições para tabelas `CHAMADOSECTIONITEM`
--
ALTER TABLE `CHAMADOSECTIONITEM`
  ADD CONSTRAINT `FK_CHAMADO` FOREIGN KEY (`IDCHAMADO`) REFERENCES `CHAMADOS` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_TYPE` FOREIGN KEY (`IDSECTIONITEMTYPE`) REFERENCES `CHAMADOTYPESECTIONITEM` (`ID`) ON DELETE CASCADE;

--
-- Restrições para tabelas `CHAMADOTYPESECTION`
--
ALTER TABLE `CHAMADOTYPESECTION`
  ADD CONSTRAINT `CHAMADOTYPESECTION_ibfk_1` FOREIGN KEY (`IDTYPE`) REFERENCES `CHAMADOTYPE` (`ID`) ON DELETE CASCADE;

--
-- Restrições para tabelas `CHAMADOTYPESECTIONITEM`
--
ALTER TABLE `CHAMADOTYPESECTIONITEM`
  ADD CONSTRAINT `CHAMADOTYPESECTIONITEM_ibfk_1` FOREIGN KEY (`IDSECTION`) REFERENCES `CHAMADOTYPESECTION` (`ID`) ON DELETE CASCADE;

--
-- Restrições para tabelas `DOCUMENTOS`
--
ALTER TABLE `DOCUMENTOS`
  ADD CONSTRAINT `documentos_ibfk_1` FOREIGN KEY (`IDUSER`) REFERENCES `SYSLOGINREQUEST` (`ID`);

--
-- Restrições para tabelas `FILIAIS`
--
ALTER TABLE `FILIAIS`
  ADD CONSTRAINT `FILIAIS_ibfk_1` FOREIGN KEY (`IDMATRIZ`) REFERENCES `MATRIZES` (`ID`) ON DELETE CASCADE;

--
-- Restrições para tabelas `INTERNOS`
--
ALTER TABLE `INTERNOS`
  ADD CONSTRAINT `INTERNOS_ibfk_1` FOREIGN KEY (`SETOR`) REFERENCES `SETORES` (`ID`);

--
-- Restrições para tabelas `OCORRENCIAS`
--
ALTER TABLE `OCORRENCIAS`
  ADD CONSTRAINT `OCORRENCIAS_ibfk_1` FOREIGN KEY (`IDCHAMADO`) REFERENCES `CHAMADOS` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `OCORRENCIAS_ibfk_2` FOREIGN KEY (`STATUS`) REFERENCES `STATUSCHAMADOS` (`ID`),
  ADD CONSTRAINT `OCORRENCIAS_ibfk_3` FOREIGN KEY (`SETOR`) REFERENCES `SETORES` (`ID`);

--
-- Restrições para tabelas `SYSSELECTTABLECOLUMN`
--
ALTER TABLE `SYSSELECTTABLECOLUMN`
  ADD CONSTRAINT `SYSSELECTTABLECOLUMN_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `SYSLOGINREQUEST` (`ID`);

--
-- Restrições para tabelas `USERCARD`
--
ALTER TABLE `USERCARD`
  ADD CONSTRAINT `USERCARD_ibfk_1` FOREIGN KEY (`IDUSER`) REFERENCES `SYSLOGINREQUEST` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
