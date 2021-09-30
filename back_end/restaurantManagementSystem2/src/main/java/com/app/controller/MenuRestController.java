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
import com.app.pojos.Menu;
import com.app.service.IMenuService;


@RestController
@CrossOrigin
public class MenuRestController {

	@Autowired
	private IMenuService menuService;
    public MenuRestController() {
    	System.out.println("in ctor " + getClass().getName());
    }
	
  //add REST API endpoint : for getting all menus 
    @GetMapping("/getAllMenus")
    public List<Menu> fetchAllMenus()
    {
    	System.out.println("in fetch all menus");
    	return menuService.getAllMenus();
    }
    
	@PostMapping("/addMenu")
	public ResponseEntity<?> addNewMenuDetails(@RequestBody Menu transientMenu ) {
		System.out.println("in add menu " + transientMenu );
		try {
			return new ResponseEntity<>(menuService.addMenu(transientMenu), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("err in add " + e);
			return new ResponseEntity<>(new ErrorResponse("Adding Menu failed!!!!!", e.getMessage()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
		 
	}
	
	
	@DeleteMapping("/menu/{categoryId}")
	public ResponseEntity<ResponseDTO> deleteMenuDetails(@PathVariable int categoryId) {
		System.out.println("in delete menu details " + categoryId);
		return ResponseEntity.ok(new ResponseDTO(menuService.deleteMenu(categoryId)));
	}
	
    @GetMapping("/menu/{id}")
    public ResponseEntity<?> getMenuDetails(@PathVariable int id) {
    	System.out.println("in get menu details " + id);
    	try {
			return ResponseEntity.ok(menuService.getDetails(id));
    	} catch (RuntimeException e) {
			System.out.println("err in get " + e);
			return new ResponseEntity<>(new ErrorResponse("Fetching Menu details failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}
	
    }

@PutMapping("/menu/{id}")
public ResponseEntity<?> updateMenuDetails(@RequestBody Menu detachedMenu, @PathVariable int id) {
	System.out.println("in update menu " + detachedMenu + " " + id);
	try {
		Menu existingMenu = menuService.getDetails(id);
		System.out.println("in update existing menu " + existingMenu + " " );
		detachedMenu.setCategoryId(existingMenu.getCategoryId());
		return ResponseEntity.ok(menuService.updateDetails(detachedMenu));
	} catch (RuntimeException e) {
		System.out.println("err in get " + e);
		return new ResponseEntity<>(new ErrorResponse("Updating Menu details failed", e.getMessage()),
				HttpStatus.BAD_REQUEST);
	}
}








}
