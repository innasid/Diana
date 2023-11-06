package com.natwest.dao;

import com.natwest.TO.JobTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobT extends JpaRepository<JobTO, String> {
}
