package com.natwest;

import com.natwest.dao.JobT;
import com.natwest.to.jobsTO;
import com.natwest.to.UserProfileTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

@RequestMapping("c2")
@CrossOrigin
public class Jobcontroller {
    @Autowired
    JobT ob;

    @GetMapping("/")
    public List<jobsTO> f1 (){
        return ob.findAll();
    }
    @GetMapping("jobs/{id}")
    public List<jobsTO> f2(@PathVariable String id){
        return ob.findByUserid(id);
    }
    @GetMapping("jobsid/{id}")
    public Optional<jobsTO> f3(@PathVariable String id){
        return ob.findById(id);
    }
    @PostMapping("/add")
    public String f4(@RequestBody jobsTO jobsto){
        try {
            ob.save(jobsto);
            return "Details added successfully";
        }catch (Exception e){
            return "Error in adding";
        }
    }
    @DeleteMapping("/delete/{userid}")
    public String f5(@PathVariable String userid){
        try{
            ob.deleteById(userid);
            return "Record deleted successfully";

        }catch (Exception e){
            return "Error in deleting";
        }
    }
    @GetMapping("jobname/{jname}")
    public List<jobsTO> f6(@PathVariable String jname){
        return ob.findByJobname(jname);
    }
}
