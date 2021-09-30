package com.app.custom_exception;

@SuppressWarnings("serial")
public class OrderHandlingException extends RuntimeException {
	public  OrderHandlingException (String mesg) {
		  super(mesg);
	  }

}
