package com.tap.Students;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
  "spring.datasource.url=jdbc:h2:mem:testdb",
  "spring.datasource.driver-class-name=org.h2.Driver",
  "spring.datasource.username=root",
  "spring.datasource.password=password"
})
class StudentsApplicationTests {

	@Test
	void contextLoads() {
	}

}
