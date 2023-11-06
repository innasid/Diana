package com.natwest;

import com.natwest.dao.InventoryI;
import com.natwest.to.InventoryTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("mo1")
public class MongoController {

    @Autowired
    InventoryI ob;

    @GetMapping("/")
    public List<InventoryTO> f1() {
        return ob.findAll();
    }

    @GetMapping("byid/{id}")
    public Optional<InventoryTO> f2(@PathVariable String id) {
        return ob.findById(id);
    }


    @PostMapping("/add")
    public String f3(@RequestBody InventoryTO add) {
        ob.save(add);
        return "Data Added";
    }

    @GetMapping("/byitem/{item}")
    public List<InventoryTO> f4(@PathVariable String item) {
        return ob.findByItem(item);
    }

        @DeleteMapping("/delete/{id}")
        public String f5 (@PathVariable String id){
            ob.deleteById(id);
            return "ID deleted";
        }
    }


