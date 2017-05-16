### Schema

CREATE DATABASE plants_db;
USE plants_db;

CREATE TABLE `plants_db`.`fruit_trees`
(
   `tree_id` INTEGER NOT NULL AUTO_INCREMENT,
   `common_name` VARCHAR(255) NOT NULL,
   `cultivar` VARCHAR(255) NULL,
   `botanical_name` VARCHAR(255) NULL,
   `ripening_season` VARCHAR(255) NULL,
   `chill_min` INTEGER NULL,
   `chill_max` INTEGER NULL,
   `cold_hardiness` INTEGER NULL,
   `fruit` VARCHAR(4000) NULL,
   `water_needs` VARCHAR(4000) NULL,
   `soil_type` VARCHAR(45) NULL,
   'ph_low' INTEGER NULL,
   'ph_high' INTEGER NULL,
   `fertilizer` VARCHAR(4000) NULL,
   `originating_region` VARCHAR(255) NULL,
   `description` VARCHAR(4000) NULL,
   `parentage` VARCHAR(255) NULL,
   PRIMARY KEY (`tree_id`)
);
