package com.natwest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin
@EnableEurekaServer
public class EurekadiscoveryserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekadiscoveryserviceApplication.class, args);
	}

}
