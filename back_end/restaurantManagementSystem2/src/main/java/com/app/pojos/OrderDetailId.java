package com.app.pojos;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode

@SuppressWarnings("serial")
@Embeddable
public class OrderDetailId implements Serializable {
	@ManyToOne
	@JoinColumn(name="order_id")
	private Order order_id;
	@OneToOne
	@JoinColumn(name="dishName")
    private Menu dishName;

}