SELECT task, description
    FROM tasks
    JOIN user_tasks ON tasks.user_id = user_tasks.user_name
    WHERE user_id = $1