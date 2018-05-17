-- Reminder: Number method.
-- insert into heroes (name, powers, age, secret_identity, picture) values ($1, $2, $3, $4, $5);

insert into heroes (name, powers, age, secret_identity, picture) values (${name}, ${powers}, ${age}, ${secret_identity}, ${picture})

returning *;