package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.OrderHandlingException;
import com.app.dao.OrderRepository;
import com.app.pojos.Order;

@Service
@Transactional
public class OrderServiceImpl implements IOrderService {
	@Autowired
	private OrderRepository orderRepo;

	@Override
	public List <Order> getAllOrders(){
		return orderRepo.findAll();
	}
	
	@Override
	public Order addOrder(Order order)
	{
		return orderRepo.save(order);
	}
	
	@Override
	public String deleteOrder(int orderId) {
		orderRepo.deleteById(orderId);
		return "Order details deleted for OrderId="+orderId;
	}
	
	@Override
	public Order getDetails(int orderId) {
		return orderRepo.findById(orderId).orElseThrow(()-> new OrderHandlingException("invalid Order Id!!"));
	}
	
	@Override
	public Order updateDetails(Order detachedOrder) {
		return orderRepo.save(detachedOrder);
	}
	
	
}

