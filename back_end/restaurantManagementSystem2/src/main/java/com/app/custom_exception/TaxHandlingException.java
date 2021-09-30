package com.app.custom_exception;

@SuppressWarnings("serial")
public class TaxHandlingException extends RuntimeException {
  public TaxHandlingException (String mesg) {
	  super(mesg);
  }
}
