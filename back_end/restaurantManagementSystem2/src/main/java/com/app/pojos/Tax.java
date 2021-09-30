package com.app.pojos;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name ="tax_tbl")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Tax {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer taxId;

@Column(length = 20)
private String taxName;
private double  percentage_tax;

}
