/*
Navicat MySQL Data Transfer

Source Server         : stu
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : exam

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2024-10-29 14:49:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for pre_banner
-- ----------------------------
DROP TABLE IF EXISTS `pre_banner`;
CREATE TABLE `pre_banner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `href` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_banner
-- ----------------------------
INSERT INTO `pre_banner` VALUES ('15', '广告标题6400978135938289', '/static/imgs/photo-20241025-1729837072681.jpg', 'https://www.ohmycode.cn/xxxx?id1729837069160');
INSERT INTO `pre_banner` VALUES ('14', '广告标题80082634365038', '/static/imgs/photo-20241025-1729837068257.jpg', 'https://www.ohmycode.cn/xxxx?id1729837064201');
INSERT INTO `pre_banner` VALUES ('12', '广告标题27315450294444843', '/static/imgs/photo-20241025-1729837056803.jpg', 'https://www.ohmycode.cn/xxxx?id1729837041225');
INSERT INTO `pre_banner` VALUES ('13', '广告标题8010208350889818', '/static/imgs/photo-20241025-1729837063129.jpg', 'https://www.ohmycode.cn/xxxx?id1729837057851');

-- ----------------------------
-- Table structure for pre_email
-- ----------------------------
DROP TABLE IF EXISTS `pre_email`;
CREATE TABLE `pre_email` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `vcode` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_email
-- ----------------------------

-- ----------------------------
-- Table structure for pre_exam_category
-- ----------------------------
DROP TABLE IF EXISTS `pre_exam_category`;
CREATE TABLE `pre_exam_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(32) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_exam_category
-- ----------------------------
INSERT INTO `pre_exam_category` VALUES ('11', '后端', '/static/imgs/photo-20241015-1728974499638.png');
INSERT INTO `pre_exam_category` VALUES ('19', '网络安全', '/static/imgs/photo-20241015-1728996560369.png');
INSERT INTO `pre_exam_category` VALUES ('17', '前端', '/static/imgs/photo-20241015-1728996543719.png');
INSERT INTO `pre_exam_category` VALUES ('18', '嵌入式', '/static/imgs/photo-20241015-1728996553179.png');
INSERT INTO `pre_exam_category` VALUES ('20', '软件测试', '/static/imgs/photo-20241016-1729045791786.png');
INSERT INTO `pre_exam_category` VALUES ('21', 'AI智能', '/static/imgs/photo-20241016-1729045809153.png');

-- ----------------------------
-- Table structure for pre_exam_list
-- ----------------------------
DROP TABLE IF EXISTS `pre_exam_list`;
CREATE TABLE `pre_exam_list` (
  `eid` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `passline` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `createAt` datetime DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `score` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`eid`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_exam_list
-- ----------------------------
INSERT INTO `pre_exam_list` VALUES ('5', '前端', '17', 'Javascript考试', '100', '60', '2', null, '50', '2.00');
INSERT INTO `pre_exam_list` VALUES ('6', '网络安全', '19', '网络基础考试', '75', '45', '1', null, '75', '1.00');
INSERT INTO `pre_exam_list` VALUES ('3', '后端', '11', 'Java基础', '100', '60', '1', null, '20', '5.00');
INSERT INTO `pre_exam_list` VALUES ('4', '嵌入式', '18', 'C语言考试', '100', '60', '1', null, '20', '5.00');
INSERT INTO `pre_exam_list` VALUES ('7', 'AI智能', '21', 'AI应用考试', '100', '60', '2', null, '20', '5.00');
INSERT INTO `pre_exam_list` VALUES ('8', '前端', '17', 'HTML5考试', '100', '60', '2', null, '20', '5.00');
INSERT INTO `pre_exam_list` VALUES ('9', '前端', '17', 'Vue考试', '100', '60', '2', null, '20', '5.00');
INSERT INTO `pre_exam_list` VALUES ('10', '后端', '11', '数据库考试', '120', '60', '2', null, '30', '4.00');
INSERT INTO `pre_exam_list` VALUES ('11', '嵌入式', '18', '单片机考试', '150', '60', '2', null, '15', '10.00');

-- ----------------------------
-- Table structure for pre_exam_score
-- ----------------------------
DROP TABLE IF EXISTS `pre_exam_score`;
CREATE TABLE `pre_exam_score` (
  `uid` int(11) NOT NULL,
  `nickName` varchar(255) DEFAULT NULL,
  `account` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `score` decimal(10,0) DEFAULT NULL,
  `wrong` int(11) DEFAULT NULL,
  `right2` int(11) DEFAULT NULL,
  `myanswer` text,
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` varchar(255) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_exam_score
-- ----------------------------
INSERT INTO `pre_exam_score` VALUES ('8', '柱子', '876222342@qq.com', 'HTML5考试', '45', '11', '9', '[\"B\",\"B\",\"A\",\"D\",\"A\",\"C\",\"D\",\"D\",\"A\",\"B\",\"B\",\"D\",\"C\",\"D\",\"C\",\"B\",\"B\",\"D\",\"B\",\"C\"]', '3', '1729473751289', '66');

-- ----------------------------
-- Table structure for pre_exam_topic
-- ----------------------------
DROP TABLE IF EXISTS `pre_exam_topic`;
CREATE TABLE `pre_exam_topic` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `eid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer` varchar(4) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `opt` longtext,
  PRIMARY KEY (`tid`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_exam_topic
-- ----------------------------
INSERT INTO `pre_exam_topic` VALUES ('34', '8', 'HTML5考试', '以下哪个是 HTML5 中用于定义页面底部信息的语义化标签？（ ）', 'A', '5', '[{\"key\":\"A\",\"value\":\"<footer>\"},{\"key\":\"B\",\"value\":\"<bottom>\"},{\"key\":\"C\",\"value\":\"<page-footer>\"},{\"key\":\"D\",\"value\":\"<end>\"}]');
INSERT INTO `pre_exam_topic` VALUES ('15', '8', 'HTML5考试', '以下哪个标签用于定义 HTML5 文档的头部？（ ）', 'A', '5', '[{\"key\":\"A\",\"value\":\"<head>\"},{\"key\":\"B\",\"value\":\"<header>\"},{\"key\":\"C\",\"value\":\"<h5head>\"},{\"key\":\"D\",\"value\":\"<h5header>\"}]');
INSERT INTO `pre_exam_topic` VALUES ('16', '8', 'HTML5考试', '在 HTML5 中，用于播放音频的标签是？（ ）', 'A', '5', '[{\"key\":\"A\",\"value\":\"<audio>\"},{\"key\":\"B\",\"value\":\"<sound>\"},{\"key\":\"C\",\"value\":\"<music>\"},{\"key\":\"D\",\"value\":\"<playaudio>\"}]');
INSERT INTO `pre_exam_topic` VALUES ('17', '8', 'HTML5考试', 'HTML5 中新增的输入类型不包括以下哪个？（ ）', 'D', '5', '[{\"key\":\"A\",\"value\":\"email\"},{\"key\":\"B\",\"value\":\"number\"},{\"key\":\"C\",\"value\":\"color\"},{\"key\":\"D\",\"value\":\"size\"}]');
INSERT INTO `pre_exam_topic` VALUES ('18', '8', 'HTML5考试', '在 HTML5 中，以下哪个属性可以用于设置<canvas>元素的宽度？', 'A', '5', '[{\"key\":\"A\",\"value\":\"width\"},{\"key\":\"B\",\"value\":\"canvas-width\"},{\"key\":\"C\",\"value\":\"w\"},{\"key\":\"D\",\"value\":\"canvasW\"}]');
INSERT INTO `pre_exam_topic` VALUES ('19', '8', 'HTML5考试', '以下哪个方法可以在<canvas>中绘制矩形？（ ）', 'C', '5', '[{\"key\":\"A\",\"value\":\"drawRect()\"},{\"key\":\"B\",\"value\":\"rect()\"},{\"key\":\"C\",\"value\":\"fillRect()\"},{\"key\":\"D\",\"value\":\"makeRect()\"}]');
INSERT INTO `pre_exam_topic` VALUES ('20', '8', 'HTML5考试', 'HTML5 中的本地存储有两种方式，分别是？（ ）', 'A', '5', '[{\"key\":\"A\",\"value\":\"localStorage和sessionStorage\"},{\"key\":\"B\",\"value\":\"localData和sessionData\"},{\"key\":\"C\",\"value\":\"persistentStorage和temporaryStorage\"},{\"key\":\"D\",\"value\":\"documentStorage和browserStorage\"}]');
INSERT INTO `pre_exam_topic` VALUES ('21', '8', 'HTML5考试', '以下哪个事件在 HTML5 中用于检测设备方向的改变？', 'A', '5', '[{\"key\":\"A\",\"value\":\"geolocation\"},{\"key\":\"B\",\"value\":\"location\"},{\"key\":\"C\",\"value\":\"geo\"},{\"key\":\"D\",\"value\":\"position\"}]');
INSERT INTO `pre_exam_topic` VALUES ('22', '8', 'HTML5考试', '以下哪个不是 HTML5 语义化标签？（ ）', 'A', '5', '[{\"key\":\"A\",\"value\":\"<div>\"},{\"key\":\"B\",\"value\":\"<article>\"},{\"key\":\"C\",\"value\":\"<section>\"},{\"key\":\"D\",\"value\":\"<aside>\"}]');
INSERT INTO `pre_exam_topic` VALUES ('23', '8', 'HTML5考试', 'HTML5 中，以下哪个属性用于设置<input>标签为必填项？（ ）', 'A', '5', '[{\"key\":\"A\",\"value\":\"required\"},{\"key\":\"B\",\"value\":\"must-fill\"},{\"key\":\"C\",\"value\":\"necessary\"},{\"key\":\"D\",\"value\":\"mandatory\"}]');
INSERT INTO `pre_exam_topic` VALUES ('24', '8', 'HTML5考试', '在 HTML5 的<video>标签中，哪个属性用于设置视频的预加载方式为自动加载？（ ）', 'A', '5', '[{\"key\":\"A\",\"value\":\"preload=auto\"},{\"key\":\"B\",\"value\":\"autopreload\"},{\"key\":\"C\",\"value\":\"preload=true\"},{\"key\":\"D\",\"value\":\"load=auto\"}]');
INSERT INTO `pre_exam_topic` VALUES ('25', '8', 'HTML5考试', '以下哪个是 HTML5 中用于定义文档大纲的元素？（ ）', 'D', '5', '[{\"key\":\"A\",\"value\":\"<nav>\"},{\"key\":\"B\",\"value\":\"<outline>\"},{\"key\":\"C\",\"value\":\"<h1> - <h6>\"},{\"key\":\"D\",\"value\":\"<section>和<article>\"}]');
INSERT INTO `pre_exam_topic` VALUES ('26', '8', 'HTML5考试', 'HTML5 中，以下哪个方法可以用于在<canvas>上绘制一条直线？（ ）', 'D', '5', '[{\"key\":\"A\",\"value\":\"drawLine()\"},{\"key\":\"B\",\"value\":\"line()\"},{\"key\":\"C\",\"value\":\"strokeLine()\"},{\"key\":\"D\",\"value\":\"moveTo()和lineTo()\"}]');
INSERT INTO `pre_exam_topic` VALUES ('27', '8', 'HTML5考试', '以下哪个不是 HTML5 支持的视频格式？（ ）', 'D', '5', '[{\"key\":\"A\",\"value\":\"MP4\"},{\"key\":\"B\",\"value\":\"WebM\"},{\"key\":\"C\",\"value\":\"Ogg\"},{\"key\":\"D\",\"value\":\"AVI\"}]');
INSERT INTO `pre_exam_topic` VALUES ('28', '8', 'HTML5考试', '在 HTML5 中，以下哪个标签用于定义网页的导航栏？（ ）', 'A', '5', '[{\"key\":\"A\",\"value\":\"<nav>\"},{\"key\":\"B\",\"value\":\"<navigation>\"},{\"key\":\"C\",\"value\":\"<menu>\"},{\"key\":\"D\",\"value\":\"<navbar>\"}]');
INSERT INTO `pre_exam_topic` VALUES ('29', '8', 'HTML5考试', 'HTML5 中，以下哪个属性可以用于设置<audio>标签的循环播放？（ ）', 'A', '5', '[{\"key\":\"A\",\"value\":\"loop\"},{\"key\":\"B\",\"value\":\"repeat\"},{\"key\":\"C\",\"value\":\"circular\"},{\"key\":\"D\",\"value\":\"continuous\"}]');
INSERT INTO `pre_exam_topic` VALUES ('30', '8', 'HTML5考试', '以下哪个是 HTML5 中用于定义可拖动元素的属性？（ ）', 'B', '5', '[{\"key\":\"A\",\"value\":\"draggable\"},{\"key\":\"B\",\"value\":\"drag\"},{\"key\":\"C\",\"value\":\"movable\"},{\"key\":\"D\",\"value\":\"pullable\"}]');
INSERT INTO `pre_exam_topic` VALUES ('31', '8', 'HTML5考试', '以下哪个不是 HTML5 中<canvas>的绘图环境方法？（ ）', 'D', '5', '[{\"key\":\"A\",\"value\":\"fillStyle()\"},{\"key\":\"B\",\"value\":\"strokeStyle()\"},{\"key\":\"C\",\"value\":\"lineWidth()\"},{\"key\":\"D\",\"value\":\"drawStyle()\"}]');
INSERT INTO `pre_exam_topic` VALUES ('32', '8', 'HTML5考试', '在 HTML5 中，以下哪个属性可以用于设置<input>标签为密码输入框？（ ）', 'A', '5', '[{\"key\":\"A\",\"value\":\"type=\'password\'\"},{\"key\":\"B\",\"value\":\"input-type=\'password\'\"},{\"key\":\"C\",\"value\":\"password-field\"},{\"key\":\"D\",\"value\":\"is-password\"}]');
INSERT INTO `pre_exam_topic` VALUES ('33', '8', 'HTML5考试', 'HTML5 中，以下哪个标签可以用于嵌入外部网页内容？（ ）', 'A', '5', '[{\"key\":\"A\",\"value\":\"<iframe>\"},{\"key\":\"B\",\"value\":\"<embed-web>\"},{\"key\":\"C\",\"value\":\"<external-content>\"},{\"key\":\"D\",\"value\":\"<import-web>\"}]');

-- ----------------------------
-- Table structure for pre_interview_category
-- ----------------------------
DROP TABLE IF EXISTS `pre_interview_category`;
CREATE TABLE `pre_interview_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_text` varchar(255) DEFAULT NULL,
  `category_icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_interview_category
-- ----------------------------
INSERT INTO `pre_interview_category` VALUES ('17', '大数据', '/static/imgs/photo-20241028-1730079606024.png');
INSERT INTO `pre_interview_category` VALUES ('18', 'UI设计', '/static/imgs/photo-20241028-1730079616188.png');
INSERT INTO `pre_interview_category` VALUES ('16', '软件测试', '/static/imgs/photo-20241028-1730079582571.png');
INSERT INTO `pre_interview_category` VALUES ('15', '嵌入式', '/static/imgs/photo-20241028-1730079570189.png');
INSERT INTO `pre_interview_category` VALUES ('14', '后端', '/static/imgs/photo-20241028-1730079554266.png');
INSERT INTO `pre_interview_category` VALUES ('13', 'Web前端', '/static/imgs/photo-20241028-1730079546102.png');
INSERT INTO `pre_interview_category` VALUES ('19', '小程序', '/static/imgs/photo-20241028-1730079824693.png');
INSERT INTO `pre_interview_category` VALUES ('20', '鸿蒙开发', '/static/imgs/photo-20241028-1730079836589.png');

-- ----------------------------
-- Table structure for pre_interview_collect
-- ----------------------------
DROP TABLE IF EXISTS `pre_interview_collect`;
CREATE TABLE `pre_interview_collect` (
  `collect_id` int(11) NOT NULL AUTO_INCREMENT,
  `topic_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `topic_question` varchar(255) DEFAULT NULL,
  `topic_answer` varchar(255) DEFAULT NULL,
  `collect_createAt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`collect_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_interview_collect
-- ----------------------------

-- ----------------------------
-- Table structure for pre_interview_correction
-- ----------------------------
DROP TABLE IF EXISTS `pre_interview_correction`;
CREATE TABLE `pre_interview_correction` (
  `correction_id` int(11) NOT NULL AUTO_INCREMENT,
  `topic_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `topic_question` varchar(255) DEFAULT NULL,
  `correction_answer` varchar(255) DEFAULT NULL,
  `correction_createAt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`correction_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_interview_correction
-- ----------------------------

-- ----------------------------
-- Table structure for pre_interview_menu
-- ----------------------------
DROP TABLE IF EXISTS `pre_interview_menu`;
CREATE TABLE `pre_interview_menu` (
  `category_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(255) DEFAULT NULL,
  `category_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_interview_menu
-- ----------------------------
INSERT INTO `pre_interview_menu` VALUES ('13', '14', 'jQuery', 'Web前端');
INSERT INTO `pre_interview_menu` VALUES ('13', '13', 'Vue', 'Web前端');
INSERT INTO `pre_interview_menu` VALUES ('13', '12', 'Javascript', 'Web前端');
INSERT INTO `pre_interview_menu` VALUES ('13', '11', 'HTMLCSS', 'Web前端');
INSERT INTO `pre_interview_menu` VALUES ('13', '15', 'ES6', 'Web前端');
INSERT INTO `pre_interview_menu` VALUES ('13', '16', 'Git', 'Web前端');
INSERT INTO `pre_interview_menu` VALUES ('13', '17', 'Webpack', 'Web前端');
INSERT INTO `pre_interview_menu` VALUES ('13', '18', 'Bootstrap', 'Web前端');
INSERT INTO `pre_interview_menu` VALUES ('13', '19', 'AJAX', 'Web前端');
INSERT INTO `pre_interview_menu` VALUES ('13', '20', 'React', 'Web前端');
INSERT INTO `pre_interview_menu` VALUES ('13', '21', 'uni-app', 'Web前端');
INSERT INTO `pre_interview_menu` VALUES ('14', '22', 'Java基础', '后端');
INSERT INTO `pre_interview_menu` VALUES ('14', '23', 'Springboot', '后端');
INSERT INTO `pre_interview_menu` VALUES ('14', '24', 'MySQL', '后端');
INSERT INTO `pre_interview_menu` VALUES ('15', '25', 'C语言', '嵌入式');
INSERT INTO `pre_interview_menu` VALUES ('15', '26', '单片机', '嵌入式');
INSERT INTO `pre_interview_menu` VALUES ('15', '27', 'C++', '嵌入式');
INSERT INTO `pre_interview_menu` VALUES ('19', '28', '框架', '小程序');
INSERT INTO `pre_interview_menu` VALUES ('19', '29', 'API', '小程序');
INSERT INTO `pre_interview_menu` VALUES ('19', '30', '云开发', '小程序');
INSERT INTO `pre_interview_menu` VALUES ('20', '31', 'ArkTS', '鸿蒙开发');
INSERT INTO `pre_interview_menu` VALUES ('20', '32', '组件', '鸿蒙开发');
INSERT INTO `pre_interview_menu` VALUES ('20', '33', '路由导航', '鸿蒙开发');

-- ----------------------------
-- Table structure for pre_interview_topic
-- ----------------------------
DROP TABLE IF EXISTS `pre_interview_topic`;
CREATE TABLE `pre_interview_topic` (
  `topic_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `topic_question` varchar(255) DEFAULT NULL,
  `topic_answer` longtext,
  `menu_name` varchar(255) DEFAULT NULL,
  `topic_img` varchar(255) DEFAULT NULL,
  `hot` int(11) DEFAULT NULL,
  PRIMARY KEY (`topic_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_interview_topic
-- ----------------------------
INSERT INTO `pre_interview_topic` VALUES ('6', '13', '11', '请解释一下 HTML5 的语义化标签及其优点。', '语义化标签是 HTML5 新增的具有明确语义的标签，例如<header>、<nav>、<article>、<section>、<footer>等。\n优点：\n代码可读性增强：对于开发者来说，语义化标签使 HTML 代码结构更加清晰。例如，看到<header>标签就知道这部分内容是页面的头部区域，可能包含网站的标题、logo、导航栏等相关元素。而<article>标签表示文档、页面、应用或网站中的独立结构，通常用于博客文章、新闻报道等内容。\n搜索引擎优化（SEO）：搜索引擎的爬虫能够更好地理解网页的内容结构。比如，当搜索引擎读取到<article>标签内的内容时，会知道这是主要的内容部分，从而可以更准确地对网页进行索引和排名。\n无障碍访问支持：屏幕阅读器等辅助技术可以更好地理解网页内容，为视力障碍等用户提供更好的访问体验。例如，当屏幕阅读器遇到<nav>标签时，会知道这是导航部分，能够更准确地为用户进行导航信息的朗读。', 'HTMLCSS', 'undefined', null);
INSERT INTO `pre_interview_topic` VALUES ('7', '13', '11', '如何在 HTML 中实现页面内的锚点链接？', '首先，在要跳转到的目标位置定义一个锚点。可以通过在目标元素上添加id属性来创建锚点。例如，如果想跳转到页面中的某个段落，可以在该段落标签上添加id属性，如<p id=\"target\">这是目标段落</p>。\n然后，在链接中使用#加上锚点的id值来创建链接。例如，<a href=\"#target\">跳转到目标段落</a>。当用户点击这个链接时，页面会自动滚动到id为target的元素位置。', 'HTMLCSS', 'undefined', null);
INSERT INTO `pre_interview_topic` VALUES ('8', '13', '12', '请说明 JavaScript 中的变量提升。', '变量提升是 JavaScript 中的一种特性。在 JavaScript 中，变量和函数声明会在代码执行之前被提升到它们所在作用域的顶部。\n对于变量声明（使用var关键字），只有声明会被提升，而初始化不会。', 'Javascript', 'undefined', '1');
INSERT INTO `pre_interview_topic` VALUES ('9', '13', '13', '请简单说明 Vue.js 中的生命周期钩子函数。', 'beforeCreate：在实例初始化之后，数据观测（data observer）和event/watcher事件配置之前被调用。此时，组件的选项对象还没有被处理，data和methods等属性还不能访问。\ncreated：在实例创建完成后被调用。此时，data、methods等属性已经初始化完成，可以访问数据和方法，但是模板还没有编译，虚拟 DOM 也还没有挂载。通常可以在这里进行一些数据的初始化操作，如发送 Ajax 请求获取初始数据。\nbeforeMount：在挂载开始之前被调用。此时，模板已经编译成了渲染函数，但是还没有将虚拟 DOM 挂载到真实 DOM 上。可以在这里对挂载前的虚拟 DOM 进行操作。\nmounted：在实例挂载到真实 DOM 后被调用。这是最常用的生命周期钩子之一，可以在这里进行 DOM 操作，比如获取 DOM 元素、添加事件监听器等。例如，在一个组件挂载后，可以通过this.$refs来获取组件内的 DOM 元素。\nbeforeUpdate：在数据更新时，虚拟 DOM 重新渲染和打补丁之前被调用。可以在这里进行一些在更新前的准备工作，如记录旧的数据状态。\nupdated：在数据更新导致虚拟 DOM 重新渲染和打补丁之后被调用。此时，组件的 DOM 已经更新，但是要注意避免在这个钩子中修改数据，否则可能会导致无限循环更新。\nbeforeDestroy：在实例销毁之前被调用。可以在这里进行一些清理工作，如清除定时器、解绑事件监听器等。\ndestroyed：在实例销毁之后被调用。此时，组件的所有指令和事件监听器都已经被移除，子组件也已经被销毁。', 'Vue', 'undefined', null);
INSERT INTO `pre_interview_topic` VALUES ('10', '13', '13', '在 Vue.js 中，v - model指令的原理是什么？', 'v - model是 Vue.js 中的一个指令，它在表单元素（如<input>、<textarea>、<select>等）上创建双向数据绑定。\n原理：\n对于文本输入框（<input type=\"text\">）来说，v - model实际上是v - bind:value和v - on:input的语法糖。v - bind:value用于将数据绑定到输入框的value属性，使得输入框显示的数据是组件data中的值。v - on:input用于监听输入框的input事件，当用户在输入框中输入内容时，会触发input事件，然后将输入框的值更新到组件data中的相应变量。\n例如，在一个 Vue 组件中有<input v - model=\"message\">，它等价于<input v - bind:value=\"message\" v - on:input=\"message = $event.target.value\">。这样就实现了数据从组件data到输入框，以及从输入框到组件data的双向流动。', 'Vue', 'undefined', '1');
INSERT INTO `pre_interview_topic` VALUES ('11', '13', '11', '请列举一些 Web 前端性能优化的方法。', 'HTML 方面：\n减少 HTML 文件的大小：删除不必要的空格、注释等。例如，在开发完成后，可以通过工具压缩 HTML 文件。\n合理使用 HTML5 语义化标签：让搜索引擎和浏览器更好地理解页面结构，优化渲染。', 'HTMLCSS', 'undefined', '1');
INSERT INTO `pre_interview_topic` VALUES ('12', '13', '11', '如何优化 Web 前端的图片加载？', '图片格式选择：\nJPEG：适合用于照片等色彩丰富的图像，它采用有损压缩，在保证一定视觉质量的情况下可以大幅减小文件大小。例如，对于一张风景照片，使用 JPEG 格式可以在较小的文件大小下保持较好的画质。\nPNG：支持透明通道，适用于需要透明背景的图像，如图标等。对于简单的图标，PNG - 8 格式通常可以提供较好的压缩效果，文件大小也比较小。\nWebP：是一种新兴的图片格式，它具有比 JPEG 和 PNG 更高的压缩率。可以根据浏览器支持情况，优先使用 WebP 格式。\n图片尺寸优化：\n根据实际显示需求，提供合适尺寸的图片。例如，如果一个图片在页面上只需要显示 300px×300px 的大小，就不要使用原始的高分辨率的大尺寸图片。可以在服务器端或者通过构建工具对图片进行尺寸调整。\n懒加载（Lazy Loading）：\n对于页面中不在可视区域内的图片，采用懒加载的方式。只有当图片进入可视区域时才进行加载。这样可以避免一次性加载大量图片，提高页面的初始加载速度。例如，在一个很长的网页中有很多图片，当用户滚动页面时，图片才逐个加载。\n使用图片 CDN（Content Delivery Network）：\nCDN 可以根据用户的地理位置，从离用户最近的服务器上提供图片，加快图片的传输速度。例如，一些大型的云服务提供商（如阿里云、腾讯云等）都提供图片 CDN 服务。\n', 'HTMLCSS', 'undefined', '1');
INSERT INTO `pre_interview_topic` VALUES ('13', '14', '22', '请解释 Java 中的基本数据类型和引用数据类型的区别。', '基本数据类型：\n包括byte、short、int、long、float、double、char、boolean。它们在内存中存储的是具体的值。例如，int类型的变量a = 5;，变量a直接存储数字 5。\n基本数据类型的变量在栈内存中分配空间，它们的大小是固定的。例如，int类型占 4 个字节，byte类型占 1 个字节等。\n当基本数据类型作为方法参数传递时，是值传递。也就是说，传递的是变量的值的副本。例如，有一个方法void changeValue(int num)，在方法内部修改num的值，不会影响调用该方法时传入的原始变量的值。\n引用数据类型：\n包括类、接口、数组等。引用数据类型的变量存储的是对象的引用（内存地址）。例如，String str = \"Hello\";，变量str存储的是指向\"Hello\"这个字符串对象在内存中的地址。\n引用数据类型的对象本身存储在堆内存中，而变量在栈内存中。当创建一个对象时，对象的成员变量和方法等信息存储在堆内存中，栈内存中的变量只是指向这个对象。\n当引用数据类型作为方法参数传递时，是引用传递（实际上是传递引用的副本）。例如，有一个方法void changeObjectValue(Person p)，在方法内部修改p对象的属性，会影响到原始的对象，因为方法内部和外部的变量都指向同一个对象。', 'Java基础', 'undefined', '1');
INSERT INTO `pre_interview_topic` VALUES ('14', '14', '22', '什么是变量的作用域？请举例说明 Java 中不同作用域的变量。', '变量的作用域：是指变量在程序中可以被访问的范围。\n局部变量：在方法内部定义的变量，其作用域仅限于该方法内部。', 'Java基础', 'undefined', null);

-- ----------------------------
-- Table structure for pre_user
-- ----------------------------
DROP TABLE IF EXISTS `pre_user`;
CREATE TABLE `pre_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickName` varchar(255) DEFAULT NULL,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createAt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pre_user
-- ----------------------------
INSERT INTO `pre_user` VALUES ('4', '杰瑞', '222222@qq.com', '$2a$10$JT5dnj4RiXD624rDL2kk6eqngFdchw1oftG1K0fKimDfREQESdKAy', '/static/images/2.jpg', '18', '女', '北京市', '222222@qq.com', '133111111111', null, '1728461649623');
INSERT INTO `pre_user` VALUES ('3', '汤姆', '111111@qq.com', '$2a$10$UYZVrEKNHTZ32DBMB22I1OR09FhXhDpvbETOrcATkkMAx5/0KJiTG', '/static/images/1.jpg', '21', '男', '重庆市', '111111@qq.com', '153111111111', '1', '1728461649456');
INSERT INTO `pre_user` VALUES ('5', '派斯克', '333333@qq.com', '$2a$10$RWELEMzjlEVHhDwUU985aOmXWXQVFLtgeMoVokOcCd325wczI/q2.', '/static/images/4.jpg', '20', '男', '广州市从化区教育路999号', '333333@qq.com', '183111111111', null, '1728461649012');
INSERT INTO `pre_user` VALUES ('6', '八戒', '8888888@qq.com', '$2a$10$5PJPl9XE3R4lUw3/2eqFUO1F/Vfp9dSmAqxdeanQbTJ13Au.B5/0e', '/static/images/3.jpg', null, null, null, '8888888@qq.com', null, null, '1728461649651');
INSERT INTO `pre_user` VALUES ('7', 'administrator', 'admin', '$2a$10$lSkLpDYMMX9AD1y05WnD/ekZ4YcUp3t.T7M6Ci9kY0pUIM6lOtd8a', '/static/images/1.jpg', null, '女', null, 'admin@qq.com', null, '1', '1728875442966');
INSERT INTO `pre_user` VALUES ('8', '二狗', '876222342@qq.com', '$2a$10$E1DkvQAwAEr8P6ntjdJ8oeUlwBiO4G6eSh9jD4CHS7eXYi.2xEIY6', '/static/imgs/photo-20241021-1729473114918.jpeg', '100', '男', '深圳', '876222342@qq.com', '13588888888', null, '1729151431266');
