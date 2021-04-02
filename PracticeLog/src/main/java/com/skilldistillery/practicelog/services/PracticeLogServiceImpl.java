package com.skilldistillery.practicelog.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.practicelog.entities.PracticeLog;
import com.skilldistillery.practicelog.repositories.PracticeLogRepository;

@Service
@Transactional
public class PracticeLogServiceImpl implements PracticeLogService {

	@Autowired
	private PracticeLogRepository repo;
	
	
	@Override
	public List<PracticeLog> allLogs() {
		
		return repo.findAll();
	}

	@Override
	public PracticeLog getLog(int logId) {
		
		
		return null;
	}

}
