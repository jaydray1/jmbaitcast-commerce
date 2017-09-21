insert into tasks (task, description, in_progress, user_id)
values ($1, $2, true, $3);