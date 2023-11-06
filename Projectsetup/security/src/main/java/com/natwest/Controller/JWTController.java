package com.natwest.Controller;

import com.natwest.Dao.UserRepository;
import com.natwest.To.AuthRequest;
import com.natwest.To.User;
import com.natwest.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.natwest.Dao.UserRepository;
import com.natwest.To.AuthRequest;
import com.natwest.To.User;
import com.natwest.Util.JwtUtil;

@CrossOrigin(allowedHeaders="*" , origins="*")
@RestController
public class JWTController {

    @Autowired
    UserRepository userint;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/")
    public String welcome() {
        return "Welcome to JWT TOKENS !!";
    }

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
            );
        } catch (Exception ex) {
            throw new Exception("invalid username/password");
        }
        return jwtUtil.generateToken(authRequest.getUserName());
    }

    @PostMapping("/add")
    public String add(@RequestBody User userto){
        userint.save(userto);
        return "User added Successfully.";

    }
}

