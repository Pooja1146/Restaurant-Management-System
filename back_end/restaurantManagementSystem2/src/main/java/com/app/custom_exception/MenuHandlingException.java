package com.app.custom_exception;

@SuppressWarnings("serial")
public class MenuHandlingException extends RuntimeException {
public MenuHandlingException(String mesg) {
	  super(mesg);
}
}
