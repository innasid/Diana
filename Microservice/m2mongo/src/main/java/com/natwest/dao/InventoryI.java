package com.natwest.dao;

import com.natwest.to.InventoryTO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
@Service
public interface InventoryI extends MongoRepository<InventoryTO, String> {

    public List<InventoryTO> findByItem(String item);
}
