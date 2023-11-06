package com.natwest.dao;

import com.natwest.to.JoinTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JoinI extends JpaRepository<JoinTO, String> {
}
