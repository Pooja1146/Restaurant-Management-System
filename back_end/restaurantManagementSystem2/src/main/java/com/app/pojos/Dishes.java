package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Entity
@Table(name ="dishes_tbl")
@Getter
@Setter
@NoArgsConstructor
@ToString

@Embeddable
public class Dishes {
	@Column(length = 20)
    private String dishName;
    private double unitCost;
	

}

