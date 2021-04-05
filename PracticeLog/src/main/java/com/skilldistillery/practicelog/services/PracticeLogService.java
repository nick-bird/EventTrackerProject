package com.skilldistillery.practicelog.services;

import java.util.List;

import com.skilldistillery.practicelog.entities.PracticeLog;

public interface PracticeLogService {

	List<PracticeLog> allLogs();
	
	PracticeLog getLog(int logId);
	
	PracticeLog updateLog(int logId, PracticeLog practiceLog);
	
	boolean deleteLog(int logId);
	
	PracticeLog createLog(PracticeLog practiceLog);
	
}
