package com.natwest.dao;


import com.natwest.to.UserProfileTO;
import org.aspectj.weaver.ast.And;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserP extends JpaRepository<UserProfileTO, String> {
    public List<UserProfileTO> findByFname(String fname);
    // since other than userid(primary key) all are columns we need to add that in jpa
    public List<UserProfileTO> findByUserstatus(String userstatus);

    public List<UserProfileTO> findByFnameAndUserstatus(String fname, String userstatus);

    public List<UserProfileTO> findByFnameOrUserstatus(String fname, String userstatus);

    @Query(value = "select * from userprofile where fname like :fname", nativeQuery = true)
    public List<UserProfileTO> listFnameStartWith(@Param("fname") String fname);
}
