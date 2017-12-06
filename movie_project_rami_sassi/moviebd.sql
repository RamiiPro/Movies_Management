-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 18 Septembre 2017 à 22:26
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `moviebd`
--

-- --------------------------------------------------------

--
-- Structure de la table `movie`
--

CREATE TABLE IF NOT EXISTS `movie` (
  `idMovie` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `actor` varchar(255) DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idMovie`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Contenu de la table `movie`
--

INSERT INTO `movie` (`idMovie`, `title`, `duration`, `actor`, `director`) VALUES
(1, 'The Voyage of the Dawn Treader', 90, 'kalin', 'Michael Apted'),
(2, 'Gulliver''s Travels', 90, 'alex', 'Rob Letterman'),
(3, 'Alice in Wonderland', 60, 'Jerimy', 'Tim Burton'),
(6, 'Arrietty', 655, 'maoly', 'Hiromasa Yonebayashi'),
(7, 'aaa', 0, 'brad', 'xxx');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
