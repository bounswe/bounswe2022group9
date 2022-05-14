"""
 This python script creates tables, triggers and procedures in database.
"""
import mysql.connector
import environ

env = environ.Env()
environ.Env.read_env()

connection = mysql.connector.connect(
  host=env("MYSQL_HOST"),
  user=env("MYSQL_USER"),
  password=env("MYSQL_PASSWORD"),
  database=env("MYSQL_DATABASE"),
  auth_plugin='mysql_native_password'
)

cursor = connection.cursor()

# ---------------------------------------------------Create tables-----------------------------------------------------

cursor.execute("""
DROP TABLE IF EXISTS User, Event;
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS User (
  username	VARCHAR(500) NOT NULL,
  password	VARCHAR(500) NOT NULL,
  UNIQUE(username),
  PRIMARY KEY(username)
);
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS Event (
  username VARCHAR(500) NOT NULL,
  event_name VARCHAR(500) NOT NULL,
  date VARCHAR(500) NOT NULL,
  definition TEXT NOT NULL,
  UNIQUE(username),
  PRIMARY KEY(username),
  FOREIGN KEY (username)
  REFERENCES User(username)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
""")

# -------------------------------------------------TRIGGERS-------------------------------------------------------------

cursor.execute("""
DROP TRIGGER IF EXISTS before_user_insert;
""")
cursor.execute("""
CREATE TRIGGER before_user_insert
BEFORE INSERT ON User
FOR EACH ROW
BEGIN
  SET NEW.password = (SELECT SHA2(NEW.password, 256));
END;""")

# -----------------------------------------------Create procedures-----------------------------------------------------

cursor.execute("""
DROP PROCEDURE IF EXISTS AddUser;
""")
cursor.execute("""
CREATE PROCEDURE AddUser(IN username VARCHAR(500), IN password VARCHAR(500))
BEGIN
INSERT INTO User VALUES (username,password);
END;
""")


connection.commit()

# ---------------------------------------------------INSERT-------------------------------------------------------------

cursor.execute('INSERT INTO User VALUES ("user1","123456");')
cursor.execute('INSERT INTO User VALUES ("user2","123456");')
cursor.execute('INSERT INTO User VALUES ("user3","123456");')

connection.commit()
