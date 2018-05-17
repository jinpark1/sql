drop table if exists heroes;

create table if not exists heroes (
    id serial primary key,
    name text,
    powers text,
    age int,
    secret_identity text,
    picture text
);

insert into heroes (name, powers, age, secret_identity, picture) values ('Paul Batman', 'riching, smarting', 30, 'Not Paul', 'http://media.indiedb.com/images/games/1/36/35866/paul1-01.png');
insert into heroes (name, powers, age, secret_identity, picture) values ('Superman', 'Fly', 11, 'pilot', 'https://vignette.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125');
insert into heroes (name, powers, age, secret_identity, picture) values ('Panther', 'Hiding', 23, 'runner', 'https://www.zooportraits.com/wp-content/uploads/2017/03/Black-Panther-Panthera-Pardus.jpg');
insert into heroes (name, powers, age, secret_identity, picture) values ('Wolverine', 'Healing', 52, 'detective', 'https://i.annihil.us/u/prod/marvel//universe3zx/images/d/df/Jstephens--Wolverine_James_detail.jpg');
insert into heroes (name, powers, age, secret_identity, picture) values ('Electro', 'Magic', 50, 'bodyguard', 'https://pre00.deviantart.net/be43/th/pre/i/2015/212/5/3/electro_by_aim_art-d93mdr7.jpg');


select * from heroes;