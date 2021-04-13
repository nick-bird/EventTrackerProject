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
		assertNotNull(practiceLog.getCreatedAt());
		assertEquals("Carcassi Op. 60 No. 4, F major scales and coils ", practiceLog.getMaterials());
		assertEquals("First page of Carcassi piece at 84 bpm. Scale work at 80 bpm, 100 bpm", practiceLog.getNotes());
		assertEquals(40, practiceLog.getTimePlayed());

		
	}
	


}
