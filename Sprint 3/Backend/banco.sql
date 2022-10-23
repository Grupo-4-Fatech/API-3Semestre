-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: api
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aeronaves`
--

DROP TABLE IF EXISTS `aeronaves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aeronaves` (
  `modelo_de_aeronave` varchar(50) NOT NULL,
  `motor` varchar(50) NOT NULL,
  `certificacao` varchar(50) DEFAULT NULL,
  `peso` varchar(50) NOT NULL,
  `reversor` varchar(50) NOT NULL,
  PRIMARY KEY (`modelo_de_aeronave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aeronaves`
--

LOCK TABLES `aeronaves` WRITE;
/*!40000 ALTER TABLE `aeronaves` DISABLE KEYS */;
INSERT INTO `aeronaves` VALUES ('lkjgildfjgkldfg','jnhsdkjfhsdjk','jsdnjkas','434','33');
/*!40000 ALTER TABLE `aeronaves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `braking_mode`
--

DROP TABLE IF EXISTS `braking_mode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `braking_mode` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `braking_mode`
--

LOCK TABLES `braking_mode` WRITE;
/*!40000 ALTER TABLE `braking_mode` DISABLE KEYS */;
INSERT INTO `braking_mode` VALUES (1,'Manual'),(2,'Autobrake MED'),(3,'Autobrake LOW');
/*!40000 ALTER TABLE `braking_mode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `break_type`
--

DROP TABLE IF EXISTS `break_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `break_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `break_type`
--

LOCK TABLES `break_type` WRITE;
/*!40000 ALTER TABLE `break_type` DISABLE KEYS */;
INSERT INTO `break_type` VALUES (1,'MAX_MAN '),(2,'HI'),(3,'MED'),(4,'LO');
/*!40000 ALTER TABLE `break_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conf_3`
--

DROP TABLE IF EXISTS `conf_3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conf_3` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brk_conf` int NOT NULL,
  `ref` int NOT NULL,
  `weight_below` smallint NOT NULL,
  `weight_above` smallint NOT NULL,
  `spd` smallint NOT NULL,
  `alt` smallint NOT NULL,
  `wind` smallint NOT NULL,
  `temp` smallint NOT NULL,
  `slope` smallint NOT NULL,
  `rev` smallint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brk_conf` (`brk_conf`),
  CONSTRAINT `conf_3_ibfk_1` FOREIGN KEY (`brk_conf`) REFERENCES `braking_mode` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conf_3`
--

LOCK TABLES `conf_3` WRITE;
/*!40000 ALTER TABLE `conf_3` DISABLE KEYS */;
INSERT INTO `conf_3` VALUES (1,1,1570,-20,20,100,90,170,50,40,-60),(2,2,1620,-20,20,100,90,180,60,40,-40),(3,3,2130,-20,30,130,100,180,60,20,-10);
/*!40000 ALTER TABLE `conf_3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conf_full`
--

DROP TABLE IF EXISTS `conf_full`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conf_full` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brk_conf` int NOT NULL,
  `ref` int NOT NULL,
  `weight_below` smallint NOT NULL,
  `weight_above` smallint NOT NULL,
  `spd` smallint NOT NULL,
  `alt` smallint NOT NULL,
  `wind` smallint NOT NULL,
  `temp` smallint NOT NULL,
  `slope` smallint NOT NULL,
  `rev` smallint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brk_conf` (`brk_conf`),
  CONSTRAINT `conf_full_ibfk_1` FOREIGN KEY (`brk_conf`) REFERENCES `braking_mode` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conf_full`
--

LOCK TABLES `conf_full` WRITE;
/*!40000 ALTER TABLE `conf_full` DISABLE KEYS */;
INSERT INTO `conf_full` VALUES (1,1,1420,-20,30,90,80,150,40,30,-50),(2,2,1470,-20,30,90,80,160,40,30,-40),(3,3,1970,-20,40,120,90,180,60,30,-10);
/*!40000 ALTER TABLE `conf_full` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flap_x_with`
--

DROP TABLE IF EXISTS `flap_x_with`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flap_x_with` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brk_conf` int NOT NULL,
  `ref` int NOT NULL,
  `weight_below` smallint NOT NULL,
  `weight_above` smallint NOT NULL,
  `alt` smallint NOT NULL,
  `temp_below` smallint NOT NULL,
  `temp_above` smallint NOT NULL,
  `wind_head` smallint NOT NULL,
  `wind_tail` smallint NOT NULL,
  `slope_uphill` smallint NOT NULL,
  `slope_downhill` smallint NOT NULL,
  `vap` smallint NOT NULL,
  `rev` smallint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brk_conf` (`brk_conf`),
  CONSTRAINT `flap_x_with_ibfk_1` FOREIGN KEY (`brk_conf`) REFERENCES `break_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flap_x_with`
--

LOCK TABLES `flap_x_with` WRITE;
/*!40000 ALTER TABLE `flap_x_with` DISABLE KEYS */;
INSERT INTO `flap_x_with` VALUES (1,1,1115,-18,18,29,-11,20,-23,111,-6,148,115,30),(2,2,1317,-21,21,32,-13,22,-27,113,-4,135,119,13),(3,3,1629,-29,27,43,-16,30,-34,154,-5,129,155,0),(4,4,2389,-47,44,70,-25,50,-53,257,-9,138,251,0);
/*!40000 ALTER TABLE `flap_x_with` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flap_x_without`
--

DROP TABLE IF EXISTS `flap_x_without`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flap_x_without` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brk_conf` int NOT NULL,
  `ref` int NOT NULL,
  `weight_below` smallint NOT NULL,
  `weight_above` smallint NOT NULL,
  `alt` smallint NOT NULL,
  `temp_below` smallint NOT NULL,
  `temp_above` smallint NOT NULL,
  `wind_head` smallint NOT NULL,
  `wind_tail` smallint NOT NULL,
  `slope_uphill` smallint NOT NULL,
  `slope_downhill` smallint NOT NULL,
  `vap` smallint NOT NULL,
  `rev` smallint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brk_conf` (`brk_conf`),
  CONSTRAINT `flap_x_without_ibfk_1` FOREIGN KEY (`brk_conf`) REFERENCES `break_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flap_x_without`
--

LOCK TABLES `flap_x_without` WRITE;
/*!40000 ALTER TABLE `flap_x_without` DISABLE KEYS */;
INSERT INTO `flap_x_without` VALUES (1,1,1026,-17,16,26,-10,18,-22,101,-5,139,110,24),(2,2,1209,-19,19,29,-11,20,-26,108,-4,128,114,9),(3,3,1485,-26,25,39,-14,27,-33,147,-4,123,149,0),(4,4,2157,-42,39,63,-22,45,-51,245,-8,131,247,0);
/*!40000 ALTER TABLE `flap_x_without` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flap_y_with`
--

DROP TABLE IF EXISTS `flap_y_with`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flap_y_with` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brk_conf` int NOT NULL,
  `ref` int NOT NULL,
  `weight_below` smallint NOT NULL,
  `weight_above` smallint NOT NULL,
  `alt` smallint NOT NULL,
  `temp_below` smallint NOT NULL,
  `temp_above` smallint NOT NULL,
  `wind_head` smallint NOT NULL,
  `wind_tail` smallint NOT NULL,
  `slope_uphill` smallint NOT NULL,
  `slope_downhill` smallint NOT NULL,
  `vap` smallint NOT NULL,
  `rev` smallint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brk_conf` (`brk_conf`),
  CONSTRAINT `flap_y_with_ibfk_1` FOREIGN KEY (`brk_conf`) REFERENCES `break_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flap_y_with`
--

LOCK TABLES `flap_y_with` WRITE;
/*!40000 ALTER TABLE `flap_y_with` DISABLE KEYS */;
INSERT INTO `flap_y_with` VALUES (1,1,959,-14,17,24,-9,17,-22,95,-5,127,100,18),(2,2,1156,-17,20,28,-10,19,-26,106,-3,118,110,3),(3,3,1415,-23,26,37,-13,26,-33,144,-4,114,147,0),(4,4,2045,-36,41,59,-21,42,-50,239,-8,122,242,0);
/*!40000 ALTER TABLE `flap_y_with` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flap_y_without`
--

DROP TABLE IF EXISTS `flap_y_without`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flap_y_without` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brk_conf` int NOT NULL,
  `ref` int NOT NULL,
  `weight_below` smallint NOT NULL,
  `weight_above` smallint NOT NULL,
  `alt` smallint NOT NULL,
  `temp_below` smallint NOT NULL,
  `temp_above` smallint NOT NULL,
  `wind_head` smallint NOT NULL,
  `wind_tail` smallint NOT NULL,
  `slope_uphill` smallint NOT NULL,
  `slope_downhill` smallint NOT NULL,
  `vap` smallint NOT NULL,
  `rev` smallint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brk_conf` (`brk_conf`),
  CONSTRAINT `flap_y_without_ibfk_1` FOREIGN KEY (`brk_conf`) REFERENCES `break_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flap_y_without`
--

LOCK TABLES `flap_y_without` WRITE;
/*!40000 ALTER TABLE `flap_y_without` DISABLE KEYS */;
INSERT INTO `flap_y_without` VALUES (1,1,959,-14,17,24,-9,17,-22,95,-5,127,100,18),(2,2,1156,-17,20,28,-10,19,-26,106,-3,118,110,3),(3,3,1415,-23,26,37,-13,26,-33,144,-4,114,147,0),(4,4,2045,-36,41,59,-21,42,-50,239,-8,122,242,0);
/*!40000 ALTER TABLE `flap_y_without` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametros`
--

DROP TABLE IF EXISTS `parametros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parametros` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Flap` int NOT NULL,
  `Ice` tinyint(1) NOT NULL,
  `RunwayCondicion` int NOT NULL,
  `Ref` int NOT NULL,
  `BelowWeight` int NOT NULL,
  `AboveWeight` int NOT NULL,
  `Alt` int NOT NULL,
  `BelowISA` int NOT NULL,
  `AboveISA` int NOT NULL,
  `HeadWind` int NOT NULL,
  `TallWind` int NOT NULL,
  `UpHill` int NOT NULL,
  `DownHill` int NOT NULL,
  `Vap` int DEFAULT NULL,
  `Rev` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametros`
--

LOCK TABLES `parametros` WRITE;
/*!40000 ALTER TABLE `parametros` DISABLE KEYS */;
INSERT INTO `parametros` VALUES (1,220,0,6,1068,-46,47,29,-11,23,-23,107,-7,170,114,129),(2,220,0,5,1239,-57,59,41,-15,37,-29,160,-11,209,136,515),(3,220,0,4,1357,-58,59,41,-15,35,-31,143,-16,214,120,515),(4,220,0,3,1446,-63,64,45,-16,40,-34,161,-19,238,126,606),(5,220,0,2,1575,-76,79,58,-19,59,-39,237,-24,317,143,1039),(6,220,0,1,1721,-81,83,61,-19,59,-43,228,-32,362,138,1425),(7,220,1,6,1145,-49,51,32,-12,26,-23,111,-8,179,103,134),(8,220,1,5,1330,-62,63,45,-16,40,-30,165,-12,219,115,516),(9,220,1,4,1443,-62,62,43,-16,38,-32,148,-17,222,105,504),(10,220,1,3,1534,-67,68,48,-17,43,-34,165,-20,248,106,611),(11,220,1,2,1669,-80,82,62,-20,63,-40,241,-24,327,117,1065),(12,220,1,1,1813,-86,87,64,-20,63,-44,233,-32,371,114,1400),(13,450,0,6,1009,-40,41,27,-10,20,-21,94,-6,102,98,84),(14,450,0,5,1213,-55,54,39,-14,34,-28,151,-10,139,116,380),(15,450,0,4,1328,-56,55,39,-14,33,-30,140,-14,149,107,364),(16,450,0,3,1404,-61,60,43,-15,37,-33,157,-18,169,110,497),(17,450,0,2,1495,-71,70,53,-18,51,-37,217,-20,222,119,935),(18,450,0,1,1637,-76,75,56,-18,53,-41,218,-27,273,117,1461),(19,450,1,6,1074,-43,45,29,-11,22,-21,97,-6,107,101,91),(20,450,1,5,1288,-58,58,42,-15,37,-29,154,-11,148,112,403),(21,450,1,4,1399,-60,59,42,-15,35,-31,143,-15,154,107,372),(22,450,1,3,1477,-64,64,46,-16,40,-34,160,-18,174,109,509),(23,450,1,2,1571,-74,74,56,-19,54,-37,220,-20,228,117,953),(24,450,1,1,1711,-80,79,59,-19,56,-42,221,-28,278,115,1426);
/*!40000 ALTER TABLE `parametros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `email` varchar(256) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `TipoUsuario` int DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('','','',NULL),('1','','',NULL),('Admin@Admin','Admin','Admin123',2),('cliente2@cliente','cliente','Teste123',1),('cliente3@cliente','cliente','Teste123',2),('cliente4@cliente','cliente','Teste123',1),('cliente@cliente','cliente','Teste123',1),('email23y374@teste733','teste2324','hgdjhefj',NULL),('emailteste2@emailteste','Fernanda Nicole Almeida','Teste123',NULL),('emailteste@emailteste','Fernanda Nicole Almeida','Teste123',NULL),('jdcdshkjshoidhjoiese','jhedjhesjkdhkjhf','skldjhesiodoilceiod',1),('test5654@teste','testeAtualizar23','tetsebhbsb',NULL),('teste@teste2','testeAtualizar23','tetsebhbsb',NULL),('testeMil','teste@mil','teste123',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'api'
--

--
-- Dumping routines for database 'api'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-04 10:05:57
