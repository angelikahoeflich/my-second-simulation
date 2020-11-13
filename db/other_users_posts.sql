SELECT posts.title,
    posts.img, 
    posts.content, 
    users.username
FROM posts 
WHERE posts.author_id != $1
INNER JOIN users ON posts.author_id = users.id;