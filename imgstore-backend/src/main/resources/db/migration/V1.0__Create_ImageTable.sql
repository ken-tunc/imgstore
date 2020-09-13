CREATE TABLE `image`
(
    `image_id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `caption` VARCHAR(100) NOT NULL,
    `binary` MEDIUMBLOB NOT NULL ,
    primary key (image_id)
);
