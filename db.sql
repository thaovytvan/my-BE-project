CREATE DATABASE sample_app

-- Create the 'user' table
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255)
);

-- Create the 'post' table
CREATE TABLE "post" (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author INT REFERENCES "user"(id)
);


-- Create the 'user_post_share' table
CREATE TABLE "user_post_share" (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "user"(id) ON DELETE CASCADE,
    post_id INT REFERENCES "post"(id) ON DELETE CASCADE
);

-- Insert into post table
INSERT INTO "post" (content, title, author)
VALUES
('This is the content of the first post', 'First Post', 1),
('Here is some more content for the second post', 'Second Post', 1),
('Another interesting post content', 'Third Post', 2),
('This post talks about various topics', 'Fourth Post', 2),
('Final post content goes here', 'Fifth Post', 1);

-- Insert values into the 'user' table
INSERT INTO "user" (name, age, email, phone, company)
VALUES 
('John Doe', 30, 'john.doe@example.com', '1234567890', 'Example Corp'),
('Jane Smith', 25, 'jane.smith@example.com', '0987654321', 'Acme Inc'),
('Alice Johnson', 28, 'alice.johnson@example.com', '5551234567', 'Widget Co');

