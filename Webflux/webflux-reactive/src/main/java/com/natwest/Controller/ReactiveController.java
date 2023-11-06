package com.natwest.Controller;

import com.natwest.Service.EmployeeService;
import com.natwest.To.EmployeeTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.util.List;

@RestController
@RequestMapping("/reactive")
public class ReactiveController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/")
    public ResponseEntity<List<EmployeeTo>> getEmployee(){
        return new ResponseEntity<List<EmployeeTo>>(employeeService.getEmployeeNonReactive(), HttpStatus.OK);
    }

    @GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<EmployeeTo> getEmployeeReactive(){
        return employeeService.getEmployeeReactive();
    }
}
