package com.natwest.controller;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient( name = "http://client2/c2")
public interface CallClient2 {
    @GetMapping("/m3")
    public String f1();

}
