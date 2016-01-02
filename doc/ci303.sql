/*
Navicat MySQL Data Transfer

Source Server         : E_Mysql
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : ci303

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2016-01-02 17:31:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `menuType` varchar(255) DEFAULT NULL,
  `mName` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `imgs` varchar(255) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  `grades` int(255) DEFAULT NULL,
  `orderNum` int(11) DEFAULT NULL,
  `customerGrades` int(255) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `orderID` int(11) NOT NULL AUTO_INCREMENT,
  `midArray` varchar(255) DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `orderTime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`orderID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uname` varchar(255) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `logtime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin', 'admin', null);
