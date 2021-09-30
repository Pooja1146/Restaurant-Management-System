package com.app.service;

import java.util.List;

import com.app.pojos.User;

public interface IUserService {
	User getValidatedUser(String email, String Password);
	
	List<User> getAllUsers();
	User addUser(User user);
   String deleteUser(int userId);
   User getDetails(int userId);
   User updateDetails(User detachedUser);

}
