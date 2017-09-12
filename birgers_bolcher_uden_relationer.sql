-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Vært: 127.0.0.1
-- Genereringstid: 12. 09 2017 kl. 07:52:55
-- Serverversion: 10.1.10-MariaDB
-- PHP-version: 7.0.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `birgers_bolcher`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `bolche`
--

CREATE TABLE `bolche` (
  `id` int(11) NOT NULL,
  `navn` varchar(30) NOT NULL,
  `farve` varchar(30) NOT NULL,
  `vaegt` int(11) NOT NULL,
  `smag` varchar(30) NOT NULL,
  `styrke` varchar(30) NOT NULL,
  `pris` int(11) NOT NULL,
  `surhed` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `bolche`
--

INSERT INTO `bolche` (`id`, `navn`, `farve`, `vaegt`, `smag`, `styrke`, `pris`, `surhed`) VALUES
(2, 'Jordbær', 'rød', 11, 'jordbær', 'mild', 16, 'sødt'),
(3, 'Appelsin', 'orange', 12, 'appelsin', 'mild', 13, 'sødt'),
(5, 'Citron', 'gul', 10, 'citron', 'mild', 14, 'bittert'),
(6, 'Salmiaktop', 'sort', 6, 'salmiak', 'medium', 12, 'sødt'),
(7, 'Blå Haj', 'blå', 22, 'anis', 'medium', 19, 'let bittert'),
(8, 'Rød Perle', 'rød', 8, 'jordbær', 'medium', 9, 'sødt'),
(9, 'Gul perle', 'gul', 8, 'citron', 'medium', 10, 'bittert'),
(10, 'Blå Perle', 'blå', 8, 'anis', 'stærk', 11, 'let bittert');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `bolche`
--
ALTER TABLE `bolche`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `bolche`
--
ALTER TABLE `bolche`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
