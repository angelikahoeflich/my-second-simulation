ALTER TABLE users
DROP column password

ALTER TABLE users
ADD COLUMN password text

OR

ALTER TABLE users
ALTER COLUMN password TYPE text

