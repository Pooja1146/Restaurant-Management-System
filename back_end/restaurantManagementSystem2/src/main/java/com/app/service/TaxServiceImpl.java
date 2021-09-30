package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.TaxHandlingException;
import com.app.dao.TaxRepository;
import com.app.pojos.Tax;

@Service
@Transactional
public class TaxServiceImpl implements ITaxService {

	@Autowired
	private TaxRepository taxRepo;
	
	@Override
	public List <Tax> getAllTaxes() {
		return taxRepo.findAll();
	}
	
	
	@Override
	public Tax addTax(Tax tax)
	{
		return taxRepo.save(tax);
	}
	
	
	
	@Override
	public String deleteTax(int taxId) {
		taxRepo.deleteById(taxId);
		return "Tax details deleted for TaxId="+taxId;
	}
	
	@Override
	public Tax getDetails(int taxId) {
		return taxRepo.findById(taxId).orElseThrow(()-> new TaxHandlingException("invalid Tax Id!!") );
	}
	
	
	@Override
	public Tax updatDetails(Tax detachedTax) {
		return taxRepo.save(detachedTax);
	}
	
	
	
	
	
}
