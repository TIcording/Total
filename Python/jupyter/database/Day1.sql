use kdt;


drop table test_word;

create table test_word(
	eng varchar(20) not null,
    kor varchar(20) not null,
    lev varchar(5)
	

);


select * from test_word where eng='apple';

select eng from test_word;
desc test_word;


create table words(
	eng varchar(50) primary key,
    kor varchar(50) not null,
    lev varchar(10) 
);


select * from words;




