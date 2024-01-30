USE employee_management_db;

INSERT INTO departments (department_name) VALUES
    ('Sales'),
    ('Reasearch & Development'),
    ('Skeeball'),
    ('Manufacturing'),
    ('Information Security'),
    ('Support & Logistics'),
    ('Baking');


INSERT INTO roles (title, salary, department_id) VALUES
    ('Department Head', 100000, 1),
    ('Department Head', 100000, 2),
    ('Department Head', 100000, 3),
    ('Department Head', 100000, 4),
    ('Department Head', 100000, 5),
    ('Department Head', 100000, 6),
    ('Head Baker', 100000, 7),
    ('Shoe scrubber', 10000, 1),
    ('Shoe scrubber', 10000, 2),
    ('Shoe scrubber', 10000, 3),
    ('Shoe scrubber', 10000, 4),
    ('Shoe scrubber', 10000, 5),
    ('Shoe scrubber', 10000, 6),
    ('Shoe baker', 10000, 7),
    ('Assistant shoe scrubber', 1000, 1),
    ('Assistant shoe scrubber', 1000, 2),
    ('Assistant shoe scrubber', 1000, 3),
    ('Assistant shoe scrubber', 1000, 4),
    ('Assistant shoe scrubber', 1000, 5),
    ('Assistant shoe scrubber', 1000, 6),
    ('Assistant shoe baker', 1000, 7);


INSERT INTO employees (first_name, last_name,role_id, manager_id) VALUES 
    ("Gary1", 'Smith2', 1, null),
    ("Under", 'Gary1', 8, 1),
    ("Under Under", 'Gary', 15, 2),
    ("Joe", 'Baker', 7, null),
    ("Tommy", 'Shoebaker', 14, 4),
    ("Tanty", 'Shoebaker', 21, 5),
    ("Bob", 'Johnson', 2, null),
    ("Meredith", 'Crow', 9, 7),
    ("Larry", 'Watermelon', 9, 7),
    ("Beth", 'Coopernuts', 16, 1),
    ("Tony", 'Scrumpkin', 17, 1);