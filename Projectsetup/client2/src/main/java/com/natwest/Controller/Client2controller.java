package com.natwest.Controller;

import com.natwest.TO.JobTO;
import com.natwest.dao.JobT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

/**
 * This is a rest controller with mapping c2 to access all the job end parts
 */
@RestController
@CrossOrigin
@RequestMapping("c2")
@Service
public class Client2controller {

    private static final Logger lg = Logger.getLogger("Client2controller");

    /**
     * @param JobT is implementing the job repository
     */

    @Autowired
    JobT JobT;

    @GetMapping("/")

    public String method1(){
    lg.info("entered method 1");
        return "I am in Client2 Microservice";
    }

    @GetMapping("/m2")
    public String method2() {
        lg.info("entered method 2");
        return "I am in Client2 Microservice, Method 2";
    }

    @GetMapping("/m3")
    public String method3() {
        lg.info("entered method 3");
        return "I am in Client2 Microservice, Method 2. This application is called using feign client";
    }

    @GetMapping("/m4")
    public List<JobTO> method4() {
        lg.info("entered method 4");
        return JobT.findAll();
    }

    @PostMapping("/m5")
    public ResponseEntity<String> method5(@RequestBody JobTO Job) {

        try {
            lg.info("entered method 5");
            JobT.save(Job);
            return new ResponseEntity<String>("Job Added", HttpStatus.OK);
        } catch (Exception e) {
            lg.warning(e.getMessage());
            return new ResponseEntity<String>("Unable to add job", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}