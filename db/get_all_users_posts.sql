SELECT posts.title,
    posts.img, 
    posts.content, 
    users.username
FROM posts 
INNER JOIN users ON posts.author_id = users.id;