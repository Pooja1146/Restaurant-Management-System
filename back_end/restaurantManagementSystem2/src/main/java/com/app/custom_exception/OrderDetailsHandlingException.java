package com.app.custom_exception;

@SuppressWarnings("serial")
public class OrderDetailsHandlingException extends RuntimeException {
	public OrderDetailsHandlingException (String mesg) {
		  super(mesg);
	  }


}
