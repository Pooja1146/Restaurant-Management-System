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
import com.app.pojos.Order;
import com.app.service.IOrderService;

@RestController
@CrossOrigin
public class OrderRestController {
	@Autowired
	private IOrderService orderService;
    public OrderRestController() {
		System.out.println("in ctor " + getClass().getName());
    }
    
    
    @GetMapping("/getAllOrders")
    public List <Order> fetchAllOrders()
    {
		System.out.println("in fetch all orders");
		return orderService.getAllOrders();
    }
    
    @PostMapping("/addOrder")
    public ResponseEntity<?> addNewOrderDetails(@RequestBody Order transientOrder) {
    	System.out.println("in add order " + transientOrder);
		try {
			return new ResponseEntity<>(orderService.addOrder(transientOrder), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("err in add " + e);
			return new ResponseEntity<>(new ErrorResponse("Adding Order failed!!!!!", e.getMessage()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
    
    @DeleteMapping("/order/{orderId}")
    public ResponseEntity<ResponseDTO> deleteOrderDetails(@PathVariable int orderId) {
		System.out.println("in delete order details " + orderId);
		return ResponseEntity.ok(new ResponseDTO(orderService.deleteOrder(orderId)));

    }
    
    @GetMapping("/order/{Id}")
    public ResponseEntity<?> getOrderDetails(@PathVariable int Id)  {
    	System.out.println("in get order details " + Id);
		try {
			return ResponseEntity.ok(orderService.getDetails(Id));
		} catch (RuntimeException e) {
			System.out.println("err in get " + e);
			return new ResponseEntity<>(new ErrorResponse("Fetching Order details failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}
    
   }
    @PutMapping("/order/{Id}")
    public ResponseEntity<?> updateOrderDetails(@RequestBody Order detachedOrder,@PathVariable int Id ) {
    	System.out.println("in update order " + detachedOrder + " " + Id);
		try {
			Order existingOrder = orderService.getDetails(Id);
			System.out.println("in update existing order " + existingOrder + " " );
			detachedOrder.setOrderId(existingOrder.getOrderId());
			return ResponseEntity.ok(orderService.updateDetails(detachedOrder));
		} catch (RuntimeException e) {
			System.out.println("err in get " + e);
			return new ResponseEntity<>(new ErrorResponse("Updating Order details failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
     }
   }
    
}

