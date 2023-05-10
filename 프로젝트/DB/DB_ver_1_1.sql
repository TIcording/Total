use TeamProject;

create table User_info(
	ui_idx int auto_increment primary key,
    ui_userid varchar(20) not null COMMENT '유저 아이디',
    ui_password varchar(20) not null COMMENT '유저 비밀번호',
    ui_name varchar(20) not null COMMENT'유저 이름',
    ui_hp varchar(11) not null COMMENT '유저 번호',
    ui_join tinyint not null DEFAULT 1 COMMENT '탈퇴회원:0 가입회원:1',
    ui_regdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    ui_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


/*INSERT INTO User_info (ui_userid, ui_password, ui_name, ui_hp, ui_join,ui_regdate)
VALUES ('유저아이디값', '비밀번호값', '이름값', '전화번호값', 1,now());
*/
/* SELECT * FROM User_info; */

create table User_Route(
	ui_userid varchar(20) not null COMMENT '유저 아이디',
    ur_idx int auto_increment primary key,
    ur_detail TEXT COMMENT '즐겨찾기 내용',
    ur_regdate DATETIME DEFAULT CURRENT_TIMESTAMP
);

/* INSERT INTO User_Route (ui_userid, ur_detail, ur_regdate)
VALUES ('유저아이디값', '즐겨찾기내용값',now());*/
/* SELECT * FROM User_Route; */

create table User_location(
	ul_userid varchar(20) not null COMMENT '유저 아이디',
    ul_idx int auto_increment primary key,
    ul_detail TEXT COMMENT '즐겨찾기 내용',
    ul_regdate DATETIME DEFAULT CURRENT_TIMESTAMP
);


/*INSERT INTO User_location (ul_userid, ul_detail) VALUES ('유저아이디값', '즐겨찾기내용값');*/
/* INSERT INTO User_location (ul_userid, ul_detail, ul_regdate) VALUES ('유저아이디값', '즐겨찾기내용값', NOW());*/ 
/* SELECT * FROM User_location; */

CREATE TABLE Manager_info (
    mi_idx INT AUTO_INCREMENT PRIMARY KEY COMMENT '관리자 인덱스',
    mi_userid VARCHAR(20) NOT NULL COMMENT '관리자 아이디',
    mi_password VARCHAR(20) NOT NULL COMMENT '관리자 비밀번호',
    mi_name VARCHAR(20) NOT NULL COMMENT '관리자 이름',
    mi_hp VARCHAR(11) NOT NULL COMMENT '관리자 번호',
    mi_join TINYINT NOT NULL DEFAULT 1 COMMENT '탈퇴 관리자:0 가입 관리자:1',
    mi_regdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    mi_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


/*INSERT INTO Manager_info (mi_userid, mi_password, mi_name, mi_hp, mi_join) VALUES ('관리자아이디값', '비밀번호값', '이름값', '전화번호값', 1); */
/* SELECT * FROM Manager_info; */

create table FAQ_info(
	fi_idx int auto_increment primary key COMMENT 'FAQ 인덱스',
    fi_detail TEXT COMMENT '문의 내용',
    mi_name varchar(20) not null COMMENT'관리자 이름',
    fi_answer  TEXT COMMENT '답변 내용',
    fi_regdate DATETIME DEFAULT CURRENT_TIMESTAMP
);

/* INSERT INTO FAQ_info (fi_idx fi_detail, mi_name, fi_answer) VALUES ('FAQ 인덱스', '문의내용값', '관리자이름값', '답변내용값'); */
/* SELECT * FROM FAQ_info; */

create table User_answer(
	ua_idx int auto_increment primary key  COMMENT '고객센터 인덱스',
    ui_userid varchar(20) not null COMMENT '유저 아이디',
    ui_name varchar(20) not null COMMENT'유저 이름',
    mi_name VARCHAR(20) NOT NULL COMMENT '관리자 이름',
    ua_title VARCHAR(100) not null COMMENT '문의 제목',
	ua_contents TEXT COMMENT '문의 내용',
    ua_answer TEXT COMMENT '답변 내용',
    ua_type int COMMENT '0:기타, 1:불편사항, 2:고장접수',
    ua_resolution int COMMENT '0:해결, 1:미해결',
    ua_regdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    ua_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


/*INSERT INTO User_answer (ui_userid, ui_name, mi_name, ua_title, ua_contents, ua_answer, ua_type, ua_resolution,ua_regdate) 
VALUES ('유저아이디값', '유저이름값', '관리자이름값', '문의제목값', '문의내용값', '답변내용값', 0, 0,now());*/
/* SELECT * FROM User_answer; */