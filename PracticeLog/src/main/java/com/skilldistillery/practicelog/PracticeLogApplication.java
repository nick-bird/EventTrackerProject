package com.skilldistillery.practicelog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import com.skilldistillery.practicelog.entities.PracticeLog;

@SpringBootApplication
public class PracticeLogApplication extends SpringBootServletInitializer {
	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(PracticeLogApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(PracticeLogApplication.class, args);
	}

}
