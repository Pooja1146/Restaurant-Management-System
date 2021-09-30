package com.app.service;

import java.util.List;

import com.app.pojos.Tax;


public interface ITaxService {

	List<Tax> getAllTaxes();
    Tax addTax(Tax tax);
    String deleteTax (int taxId);
    Tax getDetails(int taxId);
    
	Tax updatDetails(Tax detachedTax);
 
  
  
}
