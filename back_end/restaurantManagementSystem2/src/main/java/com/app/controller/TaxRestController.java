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
import com.app.pojos.Tax;
import com.app.service.ITaxService;



@RestController
@CrossOrigin
public class TaxRestController {
	@Autowired
	private ITaxService taxService;
	public TaxRestController() {
		System.out.println("in ctor " + getClass().getName());
		}
	


	@GetMapping("/getAllTaxes")
	public List<Tax> fetchAllTaxes()
	{
		System.out.println("in fetch all taxes");
		return taxService.getAllTaxes();
	}
	
	
	@PostMapping("/addTax")
	public ResponseEntity<?> addNewTaxDetails(@RequestBody Tax transientTax){
		System.out.println("in add tax " + transientTax);
		try {
			return new ResponseEntity<>(taxService.addTax(transientTax), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("err in add " + e);
			return new ResponseEntity<>(new ErrorResponse("Adding Tax failed!!!!!", e.getMessage()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/tax/{taxId}")
	public ResponseEntity<ResponseDTO> deleteTaxDetails(@PathVariable int taxId) {
		System.out.println("in delete tax details " + taxId);
		return ResponseEntity.ok(new ResponseDTO(taxService.deleteTax(taxId)));
	}
	
	
	
	@GetMapping("/tax/{Id}")
	public ResponseEntity<?> getTaxDetails(@PathVariable int Id) {
		System.out.println("in get tax details " + Id);
		try {
			return ResponseEntity.ok(taxService.getDetails(Id));
		} catch (RuntimeException e) {
			System.out.println("err in get " + e);
			return new ResponseEntity<>(new ErrorResponse("Fetching Tax details failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}
	}
	
	
	@PutMapping("/tax/{id}")
	public ResponseEntity<?> updateTaxDetails(@RequestBody Tax detachedTax, @PathVariable int id) {
		System.out.println("in update tax " + detachedTax + " " + id);
		try {
			Tax existingTax = taxService.getDetails(id);
			System.out.println("in update existing tax " + existingTax + " " );
			detachedTax.setTaxId(existingTax.getTaxId());
			return ResponseEntity.ok(taxService.updatDetails(detachedTax));
		} catch (RuntimeException e) {
			System.out.println("err in get " + e);
			return new ResponseEntity<>(new ErrorResponse("Updating Tax details failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
	}
	
}
}

