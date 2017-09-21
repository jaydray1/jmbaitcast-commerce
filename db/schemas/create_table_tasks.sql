create table tasks (
    id serial primary key,
    task varchar(60),
    description varchar(120),
    in_progress boolean,
    user_id varchar(40) references user_tasks(user_name)
);