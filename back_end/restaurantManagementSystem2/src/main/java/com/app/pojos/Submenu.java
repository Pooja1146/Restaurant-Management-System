package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
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

//@Entity
@Table(name ="submenu_tbl")
@Getter
@Setter
@NoArgsConstructor
@ToString

@Embeddable
public class Submenu {

//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int subCategoryId;
	@Column(length = 20)
	private String subCategory;
	//@ManyToOne
	//@JoinColumn(name="categoryId")
	//private int categoryId;
	@Embedded
	private Dishes dishes;
}
