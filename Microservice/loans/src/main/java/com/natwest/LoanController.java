package com.natwest;

import com.natwest.to.UserProfileTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("loan")
public class LoanController {

    @Autowired
    RestTemplate rt;
    @GetMapping("/")
        public String f1() {
    return "Welcome to Eureka Client";
        }

        @GetMapping("/mysql")
        public String f2() {
        RestTemplate rt = new RestTemplate();
        String url = "http://localhost:4005/c1/";
        String temp = rt.getForObject(url,String.class);
        return temp;
        }

    @GetMapping("/mysql1")
    public List<UserProfileTO> f3() {
        RestTemplate rt = new RestTemplate();
        String url = "http://localhost:4005/c1/UserProfile";
        List<UserProfileTO> temp = rt.getForObject(url, List.class);
        return temp;
    }
}
