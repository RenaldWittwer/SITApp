-- phpMyAdmin SQL Dump
-- version 4.0.5
-- http://www.phpmyadmin.net
--
-- Host: 
-- Erstellungszeit: 12. Jun 2016 um 14:58
-- Server Version: 5.6.29-1~dotdeb+7.1
-- PHP-Version: 5.3.29-1~dotdeb.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank:
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sitRegistration`
--

CREATE TABLE IF NOT EXISTS `sitRegistration` (
  `RegistrationId` int(11) NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Name` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `LinkToBio` varchar(126) CHARACTER SET utf8 DEFAULT NULL,
  `Twitter` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  `FridayEvent` int(1) DEFAULT NULL,
  `SaturdayEvent` int(1) DEFAULT NULL,
  `Email` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  `Phone` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  `Receipt` tinyint(1) DEFAULT NULL,
  `Address` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  `Company` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  `Relation` varchar(20) COLLATE latin1_german2_ci DEFAULT NULL,
  PRIMARY KEY (`RegistrationId`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_german2_ci AUTO_INCREMENT=153 ;

--
-- Daten für Tabelle `sitRegistration`
--

