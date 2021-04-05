package com.skilldistillery.practicelog.services;

import java.util.List;
import java.util.Optional;

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

		Optional<PracticeLog> op = repo.findById(logId);

		if (op.isPresent()) {
			return op.get();

		} else
			return null;

	}

	@Override
	public PracticeLog updateLog(int logId, PracticeLog practiceLog) {

		PracticeLog log = getLog(logId);

		if (practiceLog != null && log != null) {
			if (practiceLog.getMaterials().length() > 0) {
				log.setMaterials(practiceLog.getMaterials());
			}

			if (practiceLog.getNotes().length() > 0) {
				log.setNotes(practiceLog.getNotes());
			}

		}

		return log;
	}

	@Override
	public boolean deleteLog(int logId) {

		boolean deleted = false;
		
		if(repo.existsById(logId)) {
			repo.deleteById(logId);
			if(! repo.existsById(logId)) {
				deleted = true;
			}
			}
		
		
		return deleted;
		
	}

	@Override
	public PracticeLog createLog(PracticeLog practiceLog) {

		if(practiceLog != null) {
	return repo.saveAndFlush(practiceLog);
		}
		else return null;
	}

}
