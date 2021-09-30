package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer> {
  @Query("Select u from OrderDetails u Where order_id = ?1 and dish_name = ?2")
	Optional<OrderDetails> findById(int orderId, int dishName);

  
  @Modifying
  @Query("Delete from OrderDetails u Where order_id = ?1 and dish_name = ?2")
  void deleteById(int orderId, int dishName);


	

}
