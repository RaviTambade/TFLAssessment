USE membership_db;

INSERT INTO roles (role_name) VALUES
('ADMIN'),
('MENTOR'),
('STUDENT'),
('SME');

INSERT INTO users (first_name, last_name, email, password_hash)
VALUES
('Ravi','Tambade','ravi@tfl.com','hashedpassword'),
('Kajal','Ghule','kajal@student.com','hashedpassword'),
('Sarthak','Kadam','sarthak@student.com','hashedpassword'),
('Nikita','Bansode','nikita@student.com','hashedpassword'),
('Rutuja','Mokale','rutuja@student.com','hashedpassword'),
('Pranita','Mane','pranita@student.com','hashedpassword');
('Sahil','Kamble','sahil@student.com','hashedpassword'),
('Nirjala','Naik','nirjala@student.com','hashedpassword');

INSERT INTO user_roles (user_id, role_id) VALUES
(1,1),
(1,2),
(2,3);

INSERT INTO mentor_profiles (user_id, bio, experience_years)
VALUES
(1,'Full Stack Mentor',15),
(2,'Dotnet Mentor',3);