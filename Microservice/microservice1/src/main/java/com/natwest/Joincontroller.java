package com.natwest;

import com.natwest.dao.JoinI;
import com.natwest.to.JoinTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("c3")
public class Joincontroller {

    @Autowired
    JoinI ob;

    @GetMapping("/")
    public List<JoinTO> f1() {
        return ob.findAll();
    }

    @GetMapping("/{id}")
    public Optional<JoinTO> f2(@PathVariable String id) {
        return ob.findById(id);
    }
}
