package com.app.service;

import java.util.List;

import com.app.pojos.Menu;


public interface IMenuService {

List<Menu> getAllMenus();
Menu addMenu(Menu menu);
String deleteMenu(int categoryId);
Menu getDetails(int categoryId);
Menu updateDetails(Menu detachedMenu);





}
