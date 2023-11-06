package com.natwest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import com.natwest.Dao.UserRepository;
import com.natwest.To.User;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class SecurityApplication {


	@Bean
	public WebMvcConfigurer corsConfigurer()
	{
		return new WebMvcConfigurer()
		{

			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedHeaders("*").allowedOrigins("*");
			}
		};
	}


	@Autowired
	private UserRepository repository;


	@PostConstruct
	public void initUsers() {
		List<User> users = Stream.of(
				new User(101, "test", "password", "test@abc.com"),
				new User(102, "user1", "pwd1", "test@abc.com"),
				new User(103, "user2", "pwd2", "test@abc.com"),
				new User(104, "user3", "pwd3", "test@abc.com")
		).collect(Collectors.toList());
		repository.saveAll(users);
	}

	public static void main(String[] args) {
		SpringApplication.run(SecurityApplication.class, args);
	}

}

