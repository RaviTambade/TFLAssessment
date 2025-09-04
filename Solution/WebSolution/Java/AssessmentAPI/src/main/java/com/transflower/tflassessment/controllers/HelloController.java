package com.transflower.tflassessment.controllers;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/")
	public String index() {
		return "<h1>Greetings from Transflower!</h1>";
	}


	@GetMapping("/welcome")
	public String welcome() {
		return "<h1>Welcome in transflower pvt.ltd !!</h1>";
	}

	@PostMapping("/data")
	public String postdata() {
		return "<h1>data posting by post... !!</h1>";
	}

	@PutMapping("/data")
	public String putdata() {
		return "<h1>data  by put... !!</h1>";
	}

	@DeleteMapping("/data")
	public String deletedata() {
		return "<h1>data  deleting by delete... !!</h1>";
	}

}
