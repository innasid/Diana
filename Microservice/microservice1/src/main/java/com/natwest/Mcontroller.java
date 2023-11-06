package com.natwest;

import com.natwest.dao.UserP;
import com.natwest.to.UserProfileTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.natwest.to.userTO;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("c1")
public class Mcontroller {
    @Autowired
    UserP ob;

    @GetMapping("/")
    public String f1() {
        return "Welcome to Spring Boot Application";
    }

    @GetMapping("/user")
    public userTO f2() {
        userTO to = new userTO();
        to.setUserid("chris@gmail.com");
        to.setName("Chris");
        to.setPassword("welcome@123");
        return to;
    }

    @GetMapping("/UserProfile")
    public List<UserProfileTO> f3() {
        try {
            return ob.findAll();

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    //To select the data which matches the id
    @GetMapping("/UserProfile/{id}") // with {} for id it is a data, or else it will be URL
    public UserProfileTO f4(@PathVariable String id) {
        try {
            Optional<UserProfileTO> to = ob.findById(id);
            if (to.isPresent()) {
                return to.get();
            } else {
                throw new Exception();
            }

        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/UserProfilefname/{fname}")
    public List<UserProfileTO> f5(@PathVariable String fname) {
        try {
            return ob.findByFname(fname);

        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/UserProfilestatus/{userstatus}")
    public List<UserProfileTO> f6(@PathVariable String userstatus) {
        try {
            return ob.findByUserstatus(userstatus);

        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/UserProfilefnameandstatus/{userstatus}/{fname}")
    public List<UserProfileTO> f7(@PathVariable String fname, @PathVariable String userstatus) {
        try {
            return ob.findByFnameAndUserstatus(fname, userstatus);

        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/UserProfilefnameorstatus/{userstatus}/{fname}")
    public List<UserProfileTO> f8(@PathVariable String fname, @PathVariable String userstatus) {
        try {
            return ob.findByFnameOrUserstatus(fname, userstatus);

        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/UserProfilefnamestartwith/{fname}")
    public List<UserProfileTO> f9(@PathVariable String fname) {
        try {
            return ob.listFnameStartWith(fname.trim() + "%");

        } catch (Exception e) {
            return null;
        }
    }

    @PostMapping("/add")
    public String f10(@RequestBody UserProfileTO userprofileto) {
        try {
            ob.save(userprofileto);
            return "Record Added Successfully";

        } catch (Exception e) {
            return "Error in adding";
        }
    }

    @PutMapping ("/change")
    public String f11(@RequestBody UserProfileTO userprofileto) {
        try {
            ob.save(userprofileto);
            return "Record Added Successfully";

        } catch (Exception e) {
            return "Error in adding";
        }
    }

    @DeleteMapping("/delete/{userid}")
    public String f12(@PathVariable String userid) {
        try {
            ob.deleteById(userid);
            return "Record deleted Successfully";

        } catch (Exception e) {
            return "Error in deleting";
        }
    }
}
