package com.skilldistillery.practicelog.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "practice_log")
public class PracticeLog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "materials_played")
	private String materials;
	
	@Column(name = "time_played")
	private Integer timePlayed;

	private String notes;
	
	@Column(name="created_at")
	private LocalDateTime createdAt;
	
	public String getMaterials() {
		return materials;
	}
	
	
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	
	
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public void setMaterials(String materials) {
		this.materials = materials;
	}


	public Integer getTimePlayed() {
		return timePlayed;
	}


	public void setTimePlayed(Integer timePlayed) {
		this.timePlayed = timePlayed;
	}


	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}



	public PracticeLog() {
		super();
		this.createdAt = LocalDateTime.now();
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("PracticeLog [id=");
		builder.append(id);
		builder.append(", materials=");
		builder.append(materials);
		builder.append(", timePlayed=");
		builder.append(timePlayed);
		builder.append(", notes=");
		builder.append(notes);
		builder.append("]");
		return builder.toString();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PracticeLog other = (PracticeLog) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
	
}
