package com.natwest;

import com.natwest.Filter.Errorfilter;
import com.natwest.Filter.Postfilter;
import com.natwest.Filter.Prefilter;
import com.natwest.Filter.Routefilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@EnableEurekaClient
@Configuration
@EnableZuulProxy

public class ApigatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApigatewayApplication.class, args);
	}

	@Bean
	public Prefilter preFilter() {
		return new Prefilter();
	}
	@Bean
	public Postfilter postFilter() {
		return new Postfilter();
	}
	@Bean
	public Errorfilter errorFilter() {
		return new Errorfilter();
	}
	@Bean
	public Routefilter routeFilter() {
		return new Routefilter();
	}
}
