package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ErrorResponse;
import com.app.dto.ResponseDTO;
import com.app.pojos.User;
import com.app.service.IUserService;

@RestController
//@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")

public class UserRestController {
	//dependency : service layer i/f
	@Autowired
	private IUserService userService;
	public UserRestController() {
		System.out.println("in ctor " + getClass().getName());
	}
	//add REST API endpoint : for getting all users 
	@PostMapping("/login")
	public String ValidateUser(@RequestBody User u)
	{
		System.out.println("in fetch valid user");
		return userService.getValidatedUser(u.getEmail(),u.getPassword()).getUsertype().toString();
	}
	//
	//add REST API endpoint : for getting all users 
		@GetMapping("/getAllUsers")
		public List<User> fetchAllUsers()
		{
			System.out.println("in fetch all users");
			return userService.getAllUsers();
		}
		
	@PostMapping("/addUser")
	public ResponseEntity<?> addNewUserDetails(@RequestBody User transientUser) {
		System.out.println("in add user " + transientUser);
		// invoke service layer's method for saving user details
		try {
			return new ResponseEntity<>(userService.addUser(transientUser), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("err in add " + e);
			return new ResponseEntity<>(new ErrorResponse("Adding User failed!!!!!", e.getMessage()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	
	
	// add REST API to delete user details by id
	@DeleteMapping("/{userId}") // URI template
	public ResponseEntity<ResponseDTO> deleteUserDetails(@PathVariable int userId) {
		System.out.println("in delete user details " + userId);
		// invoke service layer method for deleting user details
		//return new ResponseEntity<>(new ResponseDTO(userService.deleteUser(userId)), 
		//HttpStatus.OK);
	return ResponseEntity.ok(new ResponseDTO(userService.deleteUser(userId)));
	}
	

	// add REST API to get user details by id
			@GetMapping("/{id}")
			public ResponseEntity<?> getUserDetails(@PathVariable int id) {
				System.out.println("in get user details " + id);
				// invoke service method to get user details
				try {
					return ResponseEntity.ok(userService.getDetails(id));
				} catch (RuntimeException e) {
					System.out.println("err in get " + e);
					return new ResponseEntity<>(new ErrorResponse("Fetching User details failed", e.getMessage()),
							HttpStatus.BAD_REQUEST);
				}
			
			}



	// add REST API to update existing user details
			@PutMapping("/{id}")
			public ResponseEntity<?> updateUserDetails(@RequestBody User detachedUser, @PathVariable int id) {
				System.out.println("in update user " + detachedUser + " " + id);
				try {
					// invoke service layer method for validating user id
					User existingUser = userService.getDetails(id);
					System.out.println("in update existing user " + existingUser + " " );
					detachedUser.setUserId(existingUser.getUserId());
					// => user is valid
					// existingUser => user details fetched from DB (stale)
					// detachedUser => updated user details from front end.
					return ResponseEntity.ok(userService.updateDetails(detachedUser));
				} catch (RuntimeException e) {
					System.out.println("err in get " + e);
					return new ResponseEntity<>(new ErrorResponse("Updating User details failed", e.getMessage()),
							HttpStatus.BAD_REQUEST);
				}

			}



	
	
	


	
}

