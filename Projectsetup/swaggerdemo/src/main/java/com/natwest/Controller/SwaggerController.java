package com.natwest.Controller;

import com.natwest.TO.SwaggerTo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
/*
 * Rest controller with mapping c3.
 * */
@RestController
@RequestMapping("/c3")
@EnableSwagger2
public class SwaggerController {

    @GetMapping("/")
    public String welcome(){
        return "Welcome to Swagger";
    }

    /**
     * @Param Swagger
     * return ResponseEntity<SwaggerTo>
     * This the end point is created for demo
     * */
    @PostMapping("/add")
    public ResponseEntity<SwaggerTo> PostData(@RequestBody SwaggerTo swagger){
        return new ResponseEntity<SwaggerTo>(swagger, HttpStatus.OK);
    }
}
