package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Menu;



public interface MenuRepository extends JpaRepository<Menu, Integer> {

}
