package org.pidragon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"org.pidragon","org.toasthub"})
public class PidragonApplication {

	public static void main(String[] args) {
		SpringApplication.run(PidragonApplication.class, args);
	}
}
