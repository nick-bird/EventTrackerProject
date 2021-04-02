package com.skilldistillery.practicelog.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PracticeLogTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private PracticeLog practiceLog;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("PracticeLog");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		practiceLog = em.find(PracticeLog.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		practiceLog = null;
	}

	@Test
	void test_PracticeLog_entitiy_mapping() {
		assertNotNull(practiceLog);
		assertEquals("this is a practice log. asdfasdfjalsdkfjas", practiceLog.getContent());
	
		
	}
	


}
