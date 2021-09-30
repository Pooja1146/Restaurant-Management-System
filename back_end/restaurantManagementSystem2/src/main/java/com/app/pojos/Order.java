package com.app.pojos;



import java.time.LocalDate;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name ="order_tbl")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Order  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	private int tableNo;
	@ManyToOne
	@JoinColumn(name="waiter")
	private User waiter;
	@Column(length=20)
	private String status;
	private LocalDate orderDate;
	private double cost;

	
	
	
}
