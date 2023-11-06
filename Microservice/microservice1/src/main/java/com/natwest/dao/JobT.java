package com.natwest.dao;
import com.natwest.to.jobsTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface JobT extends JpaRepository<jobsTO,String> {
    public List<jobsTO> findByJobname(String jobname);
    public List<jobsTO> findByUserid(String userid);
}
