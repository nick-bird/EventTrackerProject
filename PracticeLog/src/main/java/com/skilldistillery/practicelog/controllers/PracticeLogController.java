package com.skilldistillery.practicelog.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.practicelog.entities.PracticeLog;
import com.skilldistillery.practicelog.services.PracticeLogService;

@RequestMapping("api")
@RestController
public class PracticeLogController {
	
	@Autowired
	private PracticeLogService svc;
	
	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
	
	@GetMapping("logs")
	public List<PracticeLog> getLogs(){
		
	return svc.allLogs();
	}
	
}
