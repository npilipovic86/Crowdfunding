create database crowdfund;


-- pass je admin
insert into security_user (username, password, first_name, last_name, role) values 
	('admin', '$2a$10$bMAvk.OlEW/ZKdidfl6dKO9/ZVOtvpTiNZeMJF6oPmzpb9dZWgbd.', 'Admin', 'Admin', 'ADMINISTRATOR');
    
    
