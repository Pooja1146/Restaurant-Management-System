package com.app.pojos;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name ="orderdetails")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class OrderDetails  {
 
	@EmbeddedId
	private OrderDetailId orderDetailId;
	private int quantity;
	private double price;

	
}
