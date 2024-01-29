USE employee_management_db;

INSERT INTO departments (dep_name) VALUES
    ('Sales'),
    ('Reasearch & Development'),
    ('Human Resources'),
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
    ("Gary1", 'Smith2', 1, 1);