package com.app.service;

import java.util.List;

import com.app.pojos.OrderDetails;


public interface IOrderDetailsService {

	List <OrderDetails> getAllOrderDetails();
	OrderDetails addOrderDetails(OrderDetails orderDetails);
	OrderDetails getDetails(int orderDetailId,int dishName);
	OrderDetails updateDetails(OrderDetails  detachedOrderDetails);
	String deleteOrderDetails(int orderDetailId,int dishName );
	
}
/*  
 *  String deleteOrder(int orderId);*/
 