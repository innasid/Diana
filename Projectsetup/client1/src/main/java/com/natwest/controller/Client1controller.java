package com.natwest.controller;


import com.natwest.TO.JobTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("c1")

public class Client1controller {

    @Autowired
    RestTemplate rt;
    @Autowired
    CallClient2 obj;
    @GetMapping("/")
    public String method1(){
        return "I am in Client1 Microservice";
    }

    @GetMapping("/client1")
    public String method2(){
        String url = "http://client2/c2/m2";
        String output = rt.getForObject(url, String.class);
        return output;
    }

    @GetMapping("/user")
    public String method3(){
        return obj.f1();
    }

    @GetMapping("/job")
    public List<JobTO> method4(){
        String url = "http://client2/c2/m4";
        List<JobTO> output = rt.getForObject(url, List.class);
        return output;
    }
}
