-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-02-2019 a las 22:36:18
-- Versión del servidor: 10.1.9-MariaDB
-- Versión de PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mesainteractiva`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `celulares`
--

CREATE TABLE `celulares` (
  `idcelulares` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL DEFAULT 'Celular',
  `url` varchar(200) NOT NULL,
  `marcas_idmarcas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `celulares`
--

INSERT INTO `celulares` (`idcelulares`, `nombre`, `url`, `marcas_idmarcas`) VALUES
(1, 'Celular', 'Imagenes/Celulares/cel1-huawei.jpg', 1),
(2, 'Celular', 'Imagenes/Celulares/cel2-huawei.jpg', 1),
(3, 'Celular', 'Imagenes/Celulares/cel3-huawei.jpg', 1),
(4, 'Celular', 'Imagenes/Celulares/cel4-huawei.jpg', 1),
(5, 'Celular', 'Imagenes/Celulares/cel5-huawei.jpg', 1),
(6, 'Celular', 'Imagenes/Celulares/cel6-huawei.jpg', 1),
(7, 'Celular', 'Imagenes/Celulares/cel7-huawei.jpg', 1),
(8, 'Celular', 'Imagenes/Celulares/cel8-huawei.jpg', 1),
(9, 'Celular', 'Imagenes/Celulares/cel9-huawei.jpg', 1),
(10, 'Celular', 'Imagenes/Celulares/cel10-huawei.jpg', 1),
(11, 'Celular', 'Imagenes/Celulares/cel1-lanix.jpg', 2),
(12, 'Celular', 'Imagenes/Celulares/cel2-lanix.jpg', 2),
(13, 'Celular', 'Imagenes/Celulares/cel3-lanix.jpg', 2),
(14, 'Celular', 'Imagenes/Celulares/cel4-lanix.jpg', 2),
(15, 'Celular', 'Imagenes/Celulares/cel5-lanix.jpg', 2),
(16, 'Celular', 'Imagenes/Celulares/cel6-lanix.jpg', 2),
(17, 'Celular', 'Imagenes/Celulares/cel7-lanix.jpg', 2),
(18, 'Celular', 'Imagenes/Celulares/cel8-lanix.jpg', 2),
(19, 'Celular', 'Imagenes/Celulares/cel9-lanix.jpg', 2),
(20, 'Celular', 'Imagenes/Celulares/cel10-lanix.jpg', 2),
(21, 'Celular', 'Imagenes/Celulares/cel1-moto.jpg', 3),
(22, 'Celular', 'Imagenes/Celulares/cel2-moto.jpg', 3),
(23, 'Celular', 'Imagenes/Celulares/cel3-moto.jpg', 3),
(24, 'Celular', 'Imagenes/Celulares/cel4-moto.jpg', 3),
(25, 'Celular', 'Imagenes/Celulares/cel5-moto.jpg', 3),
(26, 'Celular', 'Imagenes/Celulares/cel6-moto.jpg', 3),
(27, 'Celular', 'Imagenes/Celulares/cel7-moto.jpg', 3),
(28, 'Celular', 'Imagenes/Celulares/cel8-moto.jpg', 3),
(29, 'Celular', 'Imagenes/Celulares/cel9-moto.jpg', 3),
(30, 'Celular', 'Imagenes/Celulares/cel10-moto.jpg', 3),
(31, 'Celular', 'Imagenes/Celulares/cel1-samsung.jpg', 4),
(32, 'Celular', 'Imagenes/Celulares/cel2-samsung.jpg', 4),
(33, 'Celular', 'Imagenes/Celulares/cel3-samsung.jpg', 4),
(34, 'Celular', 'Imagenes/Celulares/cel4-samsung.jpg', 4),
(35, 'Celular', 'Imagenes/Celulares/cel5-samsung.jpg', 4),
(36, 'Celular', 'Imagenes/Celulares/cel6-samsung.jpg', 4),
(37, 'Celular', 'Imagenes/Celulares/cel7-samsung.jpg', 4),
(38, 'Celular', 'Imagenes/Celulares/cel8-samsung.jpg', 4),
(39, 'Celular', 'Imagenes/Celulares/cel9-samsung.jpg', 4),
(40, 'Celular', 'Imagenes/Celulares/cel10-samsung.jpg', 4),
(41, 'Celular', 'Imagenes/Celulares/cel1-sony.jpg', 5),
(42, 'Celular', 'Imagenes/Celulares/cel2-sony.jpg', 5),
(43, 'Celular', 'Imagenes/Celulares/cel3-sony.jpg', 5),
(44, 'Celular', 'Imagenes/Celulares/cel4-sony.jpg', 5),
(45, 'Celular', 'Imagenes/Celulares/cel5-sony.jpg', 5),
(46, 'Celular', 'Imagenes/Celulares/cel6-sony.jpg', 5),
(47, 'Celular', 'Imagenes/Celulares/cel7-sony.jpg', 5),
(48, 'Celular', 'Imagenes/Celulares/cel8-sony.jpg', 5),
(49, 'Celular', 'Imagenes/Celulares/cel9-sony.jpg', 5),
(50, 'Celular', 'Imagenes/Celulares/cel10-sony.jpg', 5),
(51, 'Celular', 'Imagenes/Celulares/cel1-xiaomi.jpg', 6),
(52, 'Celular', 'Imagenes/Celulares/cel2-xiaomi.jpg', 6),
(53, 'Celular', 'Imagenes/Celulares/cel3-xiaomi.jpg', 6),
(54, 'Celular', 'Imagenes/Celulares/cel4-xiaomi.jpg', 6),
(55, 'Celular', 'Imagenes/Celulares/cel5-xiaomi.jpg', 6),
(56, 'Celular', 'Imagenes/Celulares/cel6-xiaomi.jpg', 6),
(57, 'Celular', 'Imagenes/Celulares/cel7-xiaomi.jpg', 6),
(58, 'Celular', 'Imagenes/Celulares/cel8-xiaomi.jpg', 6),
(59, 'Celular', 'Imagenes/Celulares/cel9-xiaomi.jpg', 6),
(60, 'Celular', 'Imagenes/Celulares/cel10-xiaomi.jpg', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `color`
--

CREATE TABLE `color` (
  `idcolor` int(11) NOT NULL,
  `url` varchar(200) NOT NULL,
  `celulares_idcelulares` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descripcion`
--

CREATE TABLE `descripcion` (
  `iddescripcion` int(11) NOT NULL,
  `texto` varchar(45) NOT NULL,
  `url` varchar(45) NOT NULL,
  `celulares_idcelulares` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `idmarcas` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `url` varchar(200) NOT NULL,
  `ventana_idventana` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`idmarcas`, `nombre`, `url`, `ventana_idventana`) VALUES
(1, 'Huawei', 'C:/xampp/htdocs/Parcial-1-DBM/Parcial-1-DBM/Imagenes/Marcas/logo-huawei.jpg', 1),
(2, 'Lanix', 'C:/xampp/htdocs/Parcial-1-DBM/Parcial-1-DBM/Imagenes/Marcas/logo-lanix.jpg', 1),
(3, 'Motorola', 'C:/xampp/htdocs/Parcial-1-DBM/Parcial-1-DBM/Imagenes/Marcas/logo-moto.jpg', 1),
(4, 'Samsung', 'C:/xampp/htdocs/Parcial-1-DBM/Parcial-1-DBM/Imagenes/Marcas/logo-sam.jpg', 1),
(5, 'Sony', 'C:/xampp/htdocs/Parcial-1-DBM/Parcial-1-DBM/Imagenes/Marcas/logo-sony.jpg', 1),
(6, 'Xiaomi', 'C:/xampp/htdocs/Parcial-1-DBM/Parcial-1-DBM/Imagenes/Marcas/logo-xiaomi.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventana`
--

CREATE TABLE `ventana` (
  `idventana` int(11) NOT NULL,
  `estado` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ventana`
--

INSERT INTO `ventana` (`idventana`, `estado`) VALUES
(1, 0),
(2, 0),
(3, 0),
(4, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `celulares`
--
ALTER TABLE `celulares`
  ADD PRIMARY KEY (`idcelulares`),
  ADD KEY `fk_celulares_marcas1_idx` (`marcas_idmarcas`);

--
-- Indices de la tabla `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`idcolor`),
  ADD KEY `fk_color_celulares1_idx` (`celulares_idcelulares`);

--
-- Indices de la tabla `descripcion`
--
ALTER TABLE `descripcion`
  ADD PRIMARY KEY (`iddescripcion`),
  ADD KEY `fk_descripcion_celulares1_idx` (`celulares_idcelulares`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`idmarcas`),
  ADD KEY `fk_marcas_ventana_idx` (`ventana_idventana`);

--
-- Indices de la tabla `ventana`
--
ALTER TABLE `ventana`
  ADD PRIMARY KEY (`idventana`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `celulares`
--
ALTER TABLE `celulares`
  MODIFY `idcelulares` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT de la tabla `color`
--
ALTER TABLE `color`
  MODIFY `idcolor` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `descripcion`
--
ALTER TABLE `descripcion`
  MODIFY `iddescripcion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `idmarcas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `ventana`
--
ALTER TABLE `ventana`
  MODIFY `idventana` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `celulares`
--
ALTER TABLE `celulares`
  ADD CONSTRAINT `fk_celulares_marcas1` FOREIGN KEY (`marcas_idmarcas`) REFERENCES `marcas` (`idmarcas`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `color`
--
ALTER TABLE `color`
  ADD CONSTRAINT `fk_color_celulares1` FOREIGN KEY (`celulares_idcelulares`) REFERENCES `celulares` (`idcelulares`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `descripcion`
--
ALTER TABLE `descripcion`
  ADD CONSTRAINT `fk_descripcion_celulares1` FOREIGN KEY (`celulares_idcelulares`) REFERENCES `celulares` (`idcelulares`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD CONSTRAINT `fk_marcas_ventana` FOREIGN KEY (`ventana_idventana`) REFERENCES `ventana` (`idventana`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
