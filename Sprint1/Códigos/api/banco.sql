-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: api
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
-- Table structure for table `aeronave`
--

DROP TABLE IF EXISTS `aeronave`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aeronave` (
  `modelo_de_aeronave` varchar(50) NOT NULL,
  `motor` varchar(50) NOT NULL,
  `certificação` varchar(50) NOT NULL,
  `peso` varchar(50) NOT NULL,
  `reversor` varchar(50) NOT NULL,
  `overspeed` varchar(50) NOT NULL,
  `flap_de_pouso` varchar(50) NOT NULL,
  PRIMARY KEY (`modelo_de_aeronave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aeronave`
--

LOCK TABLES `aeronave` WRITE;
/*!40000 ALTER TABLE `aeronave` DISABLE KEYS */;
/*!40000 ALTER TABLE `aeronave` ENABLE KEYS */;
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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `email` varchar(256) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `senha` varchar(50) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('teste@teste','testeUpdate','teste123'),('teste@teste2','testeUpdate','teste123'),('teste@teste3','testeUpdate','teste123');
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

-- Dump completed on 2022-09-17 13:03:30
