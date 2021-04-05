package com.skilldistillery.practicelog.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public List<PracticeLog> getLogs() {

		return svc.allLogs();
	}

	@GetMapping("logs/{logId}")
	public PracticeLog showLog(@PathVariable int logId, HttpServletResponse resp) {

		PracticeLog log = svc.getLog(logId);
		if (log == null) {
			resp.setStatus(404);
		}
		return log;
	}

	@PutMapping("logs/{logId}")
	public PracticeLog updateLog(@PathVariable int logId, @RequestBody PracticeLog practiceLog,
			HttpServletResponse resp) {

		PracticeLog log = svc.updateLog(logId, practiceLog);
		if (log == null) {
			resp.setStatus(404);
		}
		return log;
	}

	@PostMapping("logs")
	public PracticeLog createLog(@RequestBody PracticeLog practiceLog, HttpServletRequest req,
			HttpServletResponse resp) {

		practiceLog = svc.createLog(practiceLog);

		if (practiceLog != null) {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(practiceLog.getId());
			resp.setHeader("Location", url.toString());

		} else {
			resp.setStatus(404);
		}

		return practiceLog;
	}

	@DeleteMapping("logs/{logId}")
	public void deleteLog(@PathVariable int logId, HttpServletResponse resp) {

		if (svc.deleteLog(logId)) {
			resp.setStatus(204);

		} else {
			resp.setStatus(404);
		}
	}

}
