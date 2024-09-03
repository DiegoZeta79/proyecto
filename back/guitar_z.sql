-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 01-09-2024 a las 23:03:38
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `guitar_z`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Introducción al curso', 'Bienvenidos', 'El propósito fundamental de éste curso es ofrecerte un detallado y completo estudio de lo más básico del estudio de la guitarra a lo mas complejo.\r\n'),
(2, 'Estructura de la Guitarra', 'Cuales son las partes de la guitarra?', 'Cuerdas\r\nClavijero\r\nLa Cejuela (Superior)\r\nMástil - Diapasón\r\nCuerpo\r\nPuente\r\nPastilla\r\nAlma del Mástil \r\nGolpeador\r\n'),
(3, 'Técnica', 'Técnica de la Púa', 'Forma de Agarrar la Púa.\r\n\r\nToma tu púa y sostenla entre tus dedos pulgar e índice de tu mano derecha (izquierda si eres zurdo), coloca el lado puntiagudo de la púa enfrente de las cuerdas. Los otros tres dedos deben estar curvados hacia adentro. Esa es la manera estándar y la más lógica para sostener la púa. Algunos guitarristas lo hacen diferente: unos las sostienen entre los dedos pulgar y medio, otros usan los dedos pulgar, índice y medio. Si tu tienes una manera más cómoda de agarrarla, entonces adelante. \r\n\r\nEl mercado laboral demanda profesionales con habilidades específicas que permitan a las organizaciones enfrentar situaciones diversas y adversas. El especialista expresó que estos requerimientos se traducen en preguntas como: “¿Qué tan bueno eres para trabajar en equipo? ¿Eres resiliente? ¿Puedes sobreponerte ante una situación de adversidad?“. Estas habilidades, también conocidas como soft skills, facilitan la capacitación y adaptación del empleado a la cultura organizacional.\r\n\r\nSobre el tan recurrente término de resiliencia, Markel Lehman diferenció del trabajar bajo presión, ya que el primero se refiere a la capacidad de sobreponerse y superarse después del trabajo, mientras que el segundo término implica cumplir con tareas en tiempos limitados y con recursos escasos. “El fracaso no es sinónimo de fallar; realmente fracasas cuando lo deja de intentar”. Además, sostuvo que la transformación digital ha intensificado la necesidad de estas competencias. Indicó: “Con la evolución tecnológica de todas estas herramientas [...] colaboramos, pero también nos aislamos, por lo que las soft skills se vuelven imprescindibles para trabajar eficazmente en entornos digitales y diversos”.\r\n\r\nMarkel Lehman concluyó que estas habilidades no solo son cruciales para la adaptación al entorno laboral, sino también para la vida personal. En su experiencia como docente de posgrado, resaltó la importancia de enseñar competencias ejecutivas que fomenten una actitud resiliente y adaptativa ante los desafíos.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Alejandro', '827ccb0eea8a706c4c34a16891f84e7b'),
(2, 'Claudio', '827ccb0eea8a706c4c34a16891f84e7b'),
(3, 'Elizabeth', '827ccb0eea8a706c4c34a16891f84e7b'),
(4, 'Helena', '827ccb0eea8a706c4c34a16891f84e7b'),
(5, 'Pedro', '827ccb0eea8a706c4c34a16891f84e7b');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
