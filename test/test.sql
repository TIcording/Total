create database test;
use test;

create table student(
	number varchar(20) primary key,
    name   varchar(20) not null,
    hp     varchar(20) not null,
    email  varchar(20) not null,
    address varchar(20) not null,
    regdate datetime default now()
    
);

create table grade(
	number varchar(20) not null ,
    javagrade varchar(20) not null,
    pythongrade varchar(20) not null,
    Cgrade varchar(20) not null,
    regdate datetime default now(),
    total varchar(20) not null,
    avg   varchar(20),
    foreign key(number) references student(number)
);

#부모 테이블 삭제시 자식 테이블도 삭제
ALTER TABLE grade
ADD CONSTRAINT FK_B_1 FOREIGN KEY (number)
REFERENCES student (number) ON DELETE CASCADE;



create or replace view vw_Pr8 as select s.number, s.name , s.hp, s.email,s.address,s.regdate, g.javagrade,g.pythongrade,g.cgrade,g.avg,g.total
from student as s left join grade as g on s.number = g.number order by g.avg desc,s.number desc;

select * from vw_pr8;


