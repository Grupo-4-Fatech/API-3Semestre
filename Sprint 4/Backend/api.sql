-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: api
-- ------------------------------------------------------
-- Server version	8.0.30

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
  `unidade_de_medida` int NOT NULL,
  `certificacao` varchar(50) NOT NULL,
  `motor` varchar(50) NOT NULL,
  `peso` int NOT NULL,
  `reversor` int NOT NULL,
  `landing_flap` varchar(50) DEFAULT NULL,
  `peso_referencia` int NOT NULL,
  `altitude` int NOT NULL,
  `isa` int NOT NULL,
  `vento` int NOT NULL,
  `peso_max` int NOT NULL,
  `peso_min` int NOT NULL,
  `owerweight` int NOT NULL,
  `overspeed` int NOT NULL,
  `slope` float NOT NULL,
  `temp_ref` int NOT NULL,
  PRIMARY KEY (`modelo_de_aeronave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aeronaves`
--

LOCK TABLES `aeronaves` WRITE;
/*!40000 ALTER TABLE `aeronaves` DISABLE KEYS */;
INSERT INTO `aeronaves` VALUES ('Cessna',1,'EASA','trimotor',2,3,NULL,10,10,11,11,11,10,11,11,0.9,0),('Teste Flap Calculo',1,'ANAC','model',20000,2,NULL,18000,1000,15,5,23000,15000,25000,12,1,5);
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
-- Table structure for table `cadastro_flaps`
--

DROP TABLE IF EXISTS `cadastro_flaps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadastro_flaps` (
  `id` int NOT NULL AUTO_INCREMENT,
  `aeronaves` varchar(50) DEFAULT NULL,
  `udm` int DEFAULT NULL,
  `flap` varchar(50) NOT NULL,
  `ice` tinyint(1) DEFAULT NULL,
  `runway_condicion` int DEFAULT NULL,
  `ref` int NOT NULL,
  `below_weight` int NOT NULL,
  `above_weight` int NOT NULL,
  `alt` int NOT NULL,
  `below_isa` int NOT NULL,
  `above_isa` int NOT NULL,
  `head_wind` int NOT NULL,
  `tall_wind` int NOT NULL,
  `up_hill` int NOT NULL,
  `down_hill` int NOT NULL,
  `vap` int DEFAULT NULL,
  `rev` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_flaps`
--

LOCK TABLES `cadastro_flaps` WRITE;
/*!40000 ALTER TABLE `cadastro_flaps` DISABLE KEYS */;
INSERT INTO `cadastro_flaps` VALUES (55,'Teste Flap Calculo',0,'220',2,1,1721,-81,83,61,-19,59,-43,228,-32,362,138,1425),(56,'Teste Flap Calculo',0,'220',2,2,1575,-76,79,58,-19,59,-39,237,-24,317,143,1039),(57,'Teste Flap Calculo',0,'220',2,5,1239,-57,59,41,-15,37,-29,160,-11,209,136,515),(58,'Teste Flap Calculo',0,'220',2,6,1068,-46,47,29,-11,23,-23,107,-7,170,114,129),(59,'Teste Flap Calculo',0,'220',2,3,1446,-63,64,45,-16,40,-34,161,-19,238,126,606),(60,'Teste Flap Calculo',0,'220',2,4,1357,-58,59,41,-15,35,-31,143,-16,214,120,515),(61,'Teste Flap Calculo',0,'220',1,2,1669,-80,82,62,-20,63,-40,241,-24,327,117,1064),(62,'Teste Flap Calculo',0,'220',1,3,1534,-67,68,48,-17,43,-34,165,-20,248,106,611),(63,'Teste Flap Calculo',0,'220',1,1,1813,-86,87,64,-20,63,-44,233,-32,371,114,1400),(64,'Teste Flap Calculo',0,'220',1,4,1443,-62,62,43,-16,38,-32,148,-17,222,105,504),(65,'Teste Flap Calculo',0,'220',1,5,1330,-62,63,45,-16,40,-30,165,-12,219,115,516),(66,'Teste Flap Calculo',0,'220',1,6,1145,-49,51,32,-12,26,-23,111,-8,179,103,135);
/*!40000 ALTER TABLE `cadastro_flaps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flaps`
--

DROP TABLE IF EXISTS `flaps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flaps` (
  `id` int NOT NULL AUTO_INCREMENT,
  `flap` varchar(50) NOT NULL,
  `aeronave` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flaps`
--

LOCK TABLES `flaps` WRITE;
/*!40000 ALTER TABLE `flaps` DISABLE KEYS */;
INSERT INTO `flaps` VALUES (9,'220','Teste Flap Calculo');
/*!40000 ALTER TABLE `flaps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametros`
--

DROP TABLE IF EXISTS `parametros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parametros` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Udm` int NOT NULL,
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
  `rev` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametros`
--

LOCK TABLES `parametros` WRITE;
/*!40000 ALTER TABLE `parametros` DISABLE KEYS */;
INSERT INTO `parametros` VALUES (1,1,220,0,6,1068,-46,47,29,-11,23,-23,107,-7,170,114,129),(2,1,220,0,5,1239,-57,59,41,-15,37,-29,160,-11,209,136,515),(3,1,220,0,4,1357,-58,59,41,-15,35,-31,143,-16,214,120,515),(4,1,220,0,3,1446,-63,64,45,-16,40,-34,161,-19,238,126,606),(5,1,220,0,2,1575,-76,79,58,-19,59,-39,237,-24,317,143,1039),(6,1,220,0,1,1721,-81,83,61,-19,59,-43,228,-32,362,138,1425),(7,1,220,1,6,1145,-49,51,32,-12,26,-23,111,-8,179,103,134),(8,1,220,1,5,1330,-62,63,45,-16,40,-30,165,-12,219,115,516),(9,1,220,1,4,1443,-62,62,43,-16,38,-32,148,-17,222,105,504),(10,1,220,1,3,1534,-67,68,48,-17,43,-34,165,-20,248,106,611),(11,1,220,1,2,1669,-80,82,62,-20,63,-40,241,-24,327,117,1065),(12,1,220,1,1,1813,-86,87,64,-20,63,-44,233,-32,371,114,1400),(13,1,450,0,6,1009,-40,41,27,-10,20,-21,94,-6,102,98,84),(14,1,450,0,5,1213,-55,54,39,-14,34,-28,151,-10,139,116,380),(15,1,450,0,4,1328,-56,55,39,-14,33,-30,140,-14,149,107,364),(16,1,450,0,3,1404,-61,60,43,-15,37,-33,157,-18,169,110,497),(17,1,450,0,2,1495,-71,70,53,-18,51,-37,217,-20,222,119,935),(18,1,450,0,1,1637,-76,75,56,-18,53,-41,218,-27,273,117,1461),(19,1,450,1,6,1074,-43,45,29,-11,22,-21,97,-6,107,101,91),(20,1,450,1,5,1288,-58,58,42,-15,37,-29,154,-11,148,112,403),(21,1,450,1,4,1399,-60,59,42,-15,35,-31,143,-15,154,107,372),(22,1,450,1,3,1477,-64,64,46,-16,40,-34,160,-18,174,109,509),(23,1,450,1,2,1571,-74,74,56,-19,54,-37,220,-20,228,117,953),(24,1,450,1,1,1711,-80,79,59,-19,56,-42,221,-28,278,115,1426);
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
  `tipo_usuario` int NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('Admin@Admin','Admin','Admin123',2),('cliente2@cliente','cliente','Teste123',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-26 20:16:09
