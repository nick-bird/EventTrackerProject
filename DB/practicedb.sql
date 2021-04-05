-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema practicedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `practicedb` ;

-- -----------------------------------------------------
-- Schema practicedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `practicedb` DEFAULT CHARACTER SET utf8 ;
USE `practicedb` ;

-- -----------------------------------------------------
-- Table `practice_log`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `practice_log` ;

CREATE TABLE IF NOT EXISTS `practice_log` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `materials_played` TEXT NULL,
  `start_time` DATETIME NULL,
  `end_time` DATETIME NULL,
  `notes` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS practiceuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'practiceuser'@'localhost' IDENTIFIED BY 'practiceuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'practiceuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `practice_log`
-- -----------------------------------------------------
START TRANSACTION;
USE `practicedb`;
INSERT INTO `practice_log` (`id`, `materials_played`, `start_time`, `end_time`, `notes`) VALUES (1, 'Carcassi Op. 60 No. 4 | F major scales and coils ', NULL, NULL, 'First page of Carcassi piece at 84 bpm. Scale work at 80 bpm, 100 bpm');
INSERT INTO `practice_log` (`id`, `materials_played`, `start_time`, `end_time`, `notes`) VALUES (2, 'Gymnopedie No. 3 | Arpeggios book page 14 | Arpeggios book page 20', NULL, NULL, 'Gymno at 76 bpm, trouble at second bridge - played at 60 bpm.');
INSERT INTO `practice_log` (`id`, `materials_played`, `start_time`, `end_time`, `notes`) VALUES (3, 'Sons de Carillhoes | Aguado No. 3, C Major', NULL, NULL, NULL);
INSERT INTO `practice_log` (`id`, `materials_played`, `start_time`, `end_time`, `notes`) VALUES (4, 'Just scales', NULL, NULL, 'Played through at 70 bpm, 90 bpm, 110 bpm. Need to work on fretting and tone ');
INSERT INTO `practice_log` (`id`, `materials_played`, `start_time`, `end_time`, `notes`) VALUES (DEFAULT, 'Sons de Carillhoes', NULL, NULL, NULL);

COMMIT;

