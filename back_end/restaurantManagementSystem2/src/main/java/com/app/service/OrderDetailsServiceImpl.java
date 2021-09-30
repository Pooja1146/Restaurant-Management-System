package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.OrderDetailsHandlingException;
import com.app.dao.OrderDetailsRepository;
import com.app.pojos.OrderDetails;

@Service
@Transactional
public class OrderDetailsServiceImpl implements IOrderDetailsService {
	@Autowired
	private OrderDetailsRepository orderDetailsRepo;
	
	@Override
	public List<OrderDetails> getAllOrderDetails() {
		
		return orderDetailsRepo.findAll();
	}
    
	@Override
	public OrderDetails addOrderDetails(OrderDetails orderDetails) 
	{
		//OrderRepository.save()
	return orderDetailsRepo.save(orderDetails);
	
   }
	
	@Override
	public OrderDetails getDetails(int orderDetailId,int dishName) {
		return orderDetailsRepo.findById(orderDetailId,dishName).orElseThrow(()-> new OrderDetailsHandlingException("invalid OrderDetail Id!!"));
	}
    
	@Override
	public OrderDetails updateDetails(OrderDetails  detachedOrderDetails) {
		return orderDetailsRepo.save(detachedOrderDetails);
	}
	


    @Override
    public String deleteOrderDetails(int orderDetailId,int dishName ) {
    	orderDetailsRepo.deleteById(orderDetailId,dishName);
    	return "Order details deleted for OrderDetailId="+orderDetailId + "," +dishName;
    }
    }

/*
	
	
	*/
