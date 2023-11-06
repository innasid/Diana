package com.natwest.Dao;

import com.natwest.To.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.natwest.To.User;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {

    public User findByUserName(String userName);
}
