package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.MenuHandlingException;
import com.app.dao.MenuRepository;
import com.app.pojos.Menu;


@Service
@Transactional
public class MenuServiceImpl implements IMenuService {
	@Autowired
	private MenuRepository menuRepo;
	
	@Override
	public List<Menu> getAllMenus(){
		return menuRepo.findAll();
	}
	
	@Override
	public Menu addMenu(Menu menu)
	{
	  return menuRepo.save(menu);	
	}
	
	
	@Override
	public String deleteMenu(int categoryId) {
		menuRepo.deleteById(categoryId);
		return"Menu details deleted for ID="+categoryId;
	}

	@Override
	public Menu getDetails(int categoryId) {
		System.out.println("");
	    return menuRepo.findById(categoryId).
	   orElseThrow(()-> new MenuHandlingException("Invalid User Id!!!"));
	}
	
	@Override
	public Menu updateDetails(Menu detachedMenu) {
		return menuRepo.save(detachedMenu);
	}
}
