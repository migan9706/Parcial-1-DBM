-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-02-2019 a las 03:36:57
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
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
(1, 'Celular', 'Imagenes/Celulares/cel1-huawei.png', 1),
(2, 'Celular', 'Imagenes/Celulares/cel2-huawei.png', 1),
(3, 'Celular', 'Imagenes/Celulares/cel3-huawei.png', 1),
(4, 'Celular', 'Imagenes/Celulares/cel4-huawei.png', 1),
(5, 'Celular', 'Imagenes/Celulares/cel5-huawei.png', 1),
(6, 'Celular', 'Imagenes/Celulares/cel6-huawei.png', 1),
(7, 'Celular', 'Imagenes/Celulares/cel7-huawei.png', 1),
(8, 'Celular', 'Imagenes/Celulares/cel8-huawei.png', 1),
(9, 'Celular', 'Imagenes/Celulares/cel9-huawei.png', 1),
(10, 'Celular', 'Imagenes/Celulares/cel10-huawei.png', 1),
(11, 'Celular', 'Imagenes/Celulares/cel1-lanix.png', 2),
(12, 'Celular', 'Imagenes/Celulares/cel2-lanix.png', 2),
(13, 'Celular', 'Imagenes/Celulares/cel3-lanix.png', 2),
(14, 'Celular', 'Imagenes/Celulares/cel4-lanix.png', 2),
(15, 'Celular', 'Imagenes/Celulares/cel5-lanix.png', 2),
(16, 'Celular', 'Imagenes/Celulares/cel6-lanix.png', 2),
(17, 'Celular', 'Imagenes/Celulares/cel7-lanix.png', 2),
(18, 'Celular', 'Imagenes/Celulares/cel8-lanix.png', 2),
(19, 'Celular', 'Imagenes/Celulares/cel9-lanix.png', 2),
(20, 'Celular', 'Imagenes/Celulares/cel10-lanix.png', 2),
(21, 'Celular', 'Imagenes/Celulares/cel1-moto.png', 3),
(22, 'Celular', 'Imagenes/Celulares/cel2-moto.png', 3),
(23, 'Celular', 'Imagenes/Celulares/cel3-moto.png', 3),
(24, 'Celular', 'Imagenes/Celulares/cel4-moto.png', 3),
(25, 'Celular', 'Imagenes/Celulares/cel5-moto.png', 3),
(26, 'Celular', 'Imagenes/Celulares/cel6-moto.png', 3),
(27, 'Celular', 'Imagenes/Celulares/cel7-moto.png', 3),
(28, 'Celular', 'Imagenes/Celulares/cel8-moto.png', 3),
(29, 'Celular', 'Imagenes/Celulares/cel9-moto.png', 3),
(30, 'Celular', 'Imagenes/Celulares/cel10-moto.png', 3),
(31, 'Celular', 'Imagenes/Celulares/cel1-samsung.png', 4),
(32, 'Celular', 'Imagenes/Celulares/cel2-samsung.png', 4),
(33, 'Celular', 'Imagenes/Celulares/cel3-samsung.png', 4),
(34, 'Celular', 'Imagenes/Celulares/cel4-samsung.png', 4),
(35, 'Celular', 'Imagenes/Celulares/cel5-samsung.png', 4),
(36, 'Celular', 'Imagenes/Celulares/cel6-samsung.png', 4),
(37, 'Celular', 'Imagenes/Celulares/cel7-samsung.png', 4),
(38, 'Celular', 'Imagenes/Celulares/cel8-samsung.png', 4),
(39, 'Celular', 'Imagenes/Celulares/cel9-samsung.png', 4),
(40, 'Celular', 'Imagenes/Celulares/cel10-samsung.png', 4),
(41, 'Celular', 'Imagenes/Celulares/cel1-sony.png', 5),
(42, 'Celular', 'Imagenes/Celulares/cel2-sony.png', 5),
(43, 'Celular', 'Imagenes/Celulares/cel3-sony.png', 5),
(44, 'Celular', 'Imagenes/Celulares/cel4-sony.png', 5),
(45, 'Celular', 'Imagenes/Celulares/cel5-sony.png', 5),
(46, 'Celular', 'Imagenes/Celulares/cel6-sony.png', 5),
(47, 'Celular', 'Imagenes/Celulares/cel7-sony.png', 5),
(48, 'Celular', 'Imagenes/Celulares/cel8-sony.png', 5),
(49, 'Celular', 'Imagenes/Celulares/cel9-sony.png', 5),
(50, 'Celular', 'Imagenes/Celulares/cel10-sony.png', 5),
(51, 'Celular', 'Imagenes/Celulares/cel1-xiaomi.png', 6),
(52, 'Celular', 'Imagenes/Celulares/cel2-xiaomi.png', 6),
(53, 'Celular', 'Imagenes/Celulares/cel3-xiaomi.png', 6),
(54, 'Celular', 'Imagenes/Celulares/cel4-xiaomi.png', 6),
(55, 'Celular', 'Imagenes/Celulares/cel5-xiaomi.png', 6),
(56, 'Celular', 'Imagenes/Celulares/cel6-xiaomi.png', 6),
(57, 'Celular', 'Imagenes/Celulares/cel7-xiaomi.png', 6),
(58, 'Celular', 'Imagenes/Celulares/cel8-xiaomi.png', 6),
(59, 'Celular', 'Imagenes/Celulares/cel9-xiaomi.png', 6),
(60, 'Celular', 'Imagenes/Celulares/cel10-xiaomi.png', 6),
(61, 'Celular', 'Imagenes/Celulares/cel1-zte.png', 8),
(62, 'Celular', 'Imagenes/Celulares/cel2-zte.png', 8),
(63, 'Celular', 'Imagenes/Celulares/cel3-zte.png', 8),
(64, 'Celular', 'Imagenes/Celulares/cel4-zte.png', 8),
(65, 'Celular', 'Imagenes/Celulares/cel5-zte.png', 8),
(66, 'Celular', 'Imagenes/Celulares/cel1-alcatel.png', 7),
(67, 'Celular', 'Imagenes/Celulares/cel2-alcatel.png', 7),
(68, 'Celular', 'Imagenes/Celulares/cel3-alcatel.png', 7),
(69, 'Celular', 'Imagenes/Celulares/cel4-alcatel.png', 7),
(70, 'Celular', 'Imagenes/Celulares/cel5-alcatel.png', 7);

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
(1, 'Huawei', 'Imagenes/Marcas/logo-huawei.png', 1),
(2, 'Lanix', 'Imagenes/Marcas/logo-lanix.png', 1),
(3, 'Motorola', 'Imagenes/Marcas/logo-moto.png', 1),
(4, 'Samsung', 'Imagenes/Marcas/logo-sam.png', 1),
(5, 'Sony', 'Imagenes/Marcas/logo-sony.png', 1),
(6, 'Xiaomi', 'Imagenes/Marcas/logo-xiaomi.png', 1),
(7, 'Alcatel', 'Imagenes/Marcas/logo-alcatel.png', 1),
(8, 'Zte', 'Imagenes/Marcas/logo-zte.png', 1);

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
  MODIFY `idcelulares` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

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
  MODIFY `idmarcas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
