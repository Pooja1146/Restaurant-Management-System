package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.UserHandlingException;
import com.app.dao.UserRepository;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	// dependency : dao layer i/f
	@Autowired
	private UserRepository userRepo;
	

	@Override
	public User getValidatedUser(String email, String Password) {
		
		return userRepo.findByEmail(email, Password);
	}
	
	@Override
	public List<User> getAllUsers() {
		// invoke dao's method
		return userRepo.findAll();
	}
	//
	@Override
	public User addUser(User user) 
	{

		return userRepo.save(user);
	}
	
	@Override
	public String deleteUser(int userId) {
		userRepo.deleteById(userId);
		return"User details deleted for ID="+userId;
	}
	
    @Override
	public User getDetails(int userId) {
		//Method of CrudRepository:
		System.out.println("");
	    return userRepo.findById(userId).
	         orElseThrow(()-> new UserHandlingException("Invalid User Id!!!"));
     
    }	
	

	@Override
	public User updateDetails( User detachedUser) {
	    return userRepo.save(detachedUser);
		
	}


}



 