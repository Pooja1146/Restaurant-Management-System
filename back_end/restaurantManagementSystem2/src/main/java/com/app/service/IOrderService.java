package com.app.service;

import java.util.List;

import com.app.pojos.Order;


public interface IOrderService {

	  List <Order> getAllOrders();
	  Order addOrder(Order order);
	  String deleteOrder(int orderId);
	  Order getDetails(int orderId);
	  Order updateDetails(Order detachedOrder);
	
}

