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
import com.app.pojos.OrderDetails;
import com.app.service.IOrderDetailsService;

@RestController
@CrossOrigin
public class OrderDetailsRestController {
	
	@Autowired
	private IOrderDetailsService orderDetailsService;
    public OrderDetailsRestController() {
    	System.out.println("in ctor " + getClass().getName());
    }
    
    @GetMapping("/getAllOrderDetails")
    public List <OrderDetails> fetchAllOrderDetails()
    {
    	System.out.println("in fetch all ordersDetails");
    	return orderDetailsService.getAllOrderDetails();
    }
    
    @PostMapping("/addOrderDetails")
    public ResponseEntity<?> addNewOrderDetails(@RequestBody OrderDetails transientOrderDetails){
    	System.out.println("in add orderdetails " + transientOrderDetails);
		
			try {
				return new ResponseEntity<>(orderDetailsService.addOrderDetails(transientOrderDetails), HttpStatus.CREATED);
			} catch (RuntimeException e) {
				System.out.println("err in add " + e);
				return new ResponseEntity<>(new ErrorResponse("Adding Orderdetails failed!!!!!", e.getMessage()),
						HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}


    @GetMapping ("/orderDetail/{Id}/{dishName}")
public ResponseEntity<?> getOrderDetails(@PathVariable int Id,@PathVariable int dishName)  {
	System.out.println("in get orderDetails " + Id + ", " +dishName);
	try {
		return ResponseEntity.ok(orderDetailsService.getDetails(Id,dishName));
	} catch (RuntimeException e) {
		System.out.println("err in get " + e);
		return new ResponseEntity<>(new ErrorResponse("Fetching OrderDetails failed", e.getMessage()),
				HttpStatus.BAD_REQUEST);
	}	
}
    @PutMapping("/orderDetail/{Id}/{dishName}")
    public ResponseEntity<?> updateOrderDetails(@RequestBody OrderDetails detachedOrderDetails,@PathVariable int Id,@PathVariable int dishName){
    	System.out.println("in update orderDetails " + detachedOrderDetails + " " + Id + ", " +dishName);
    try {
    	OrderDetails existingOrderDetails =orderDetailsService.getDetails(Id, dishName);
    	System.out.println("in update existing orderDetails " + existingOrderDetails + " ");
    	detachedOrderDetails.setOrderDetailId(existingOrderDetails.getOrderDetailId());
    	return ResponseEntity.ok(orderDetailsService.updateDetails(detachedOrderDetails));
    }catch (RuntimeException e) {
		System.out.println("err in get " + e);
		return new ResponseEntity<>(new ErrorResponse("Updating OrderDetails failed", e.getMessage()),
				HttpStatus.BAD_REQUEST);
    }

}
    @DeleteMapping("/orderDetail/{Id}/{dishName}")
    public ResponseEntity<ResponseDTO> deleteOrderDetails(@PathVariable int Id,@PathVariable int dishName) {
    	System.out.println("in delete orderDetails " + Id + ", " +dishName);
    	return ResponseEntity.ok(new ResponseDTO(orderDetailsService.deleteOrderDetails(Id, dishName)));
    }
}


/*
   
   
   */