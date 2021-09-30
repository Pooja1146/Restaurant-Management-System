package com.app.pojos;





import java.sql.Date;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
@Table(name ="user_tbl")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {
/*email,name,contactNo,userType,createdOn,password*/
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer  userId;
	@Column(length = 20,unique=true)
    private String email;
	@Column(length = 20)
	private String name;
	private long contactNo;
	@Column(length = 20)
	@Enumerated(EnumType.STRING)
	private UserType usertype;
	private Date createdOn;
	@Column(length = 20)
	private String password;
}
