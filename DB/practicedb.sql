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
  `content` VARCHAR(45) NULL,
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
INSERT INTO `practice_log` (`id`, `content`) VALUES (1, 'this is a practice log. asdfasdfjalsdkfjas');

COMMIT;

