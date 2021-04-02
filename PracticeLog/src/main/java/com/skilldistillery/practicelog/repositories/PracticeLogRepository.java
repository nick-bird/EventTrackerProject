package com.skilldistillery.practicelog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.practicelog.entities.PracticeLog;

public interface PracticeLogRepository extends JpaRepository<PracticeLog, Integer> {

}
