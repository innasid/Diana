package com.natwest.Service;


import com.natwest.To.EmployeeTo;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class EmployeeService {

    public static void wait1(int i){
        try{
            Thread.sleep(1000);

        }catch (Exception e){

        }
    }
    public List<EmployeeTo> getEmployeeNonReactive(){
        return IntStream.range(1,25)
                .peek((i)-> System.out.println("Employee Number "+ i))
                .peek(EmployeeService::wait1)
                .mapToObj((i)->new EmployeeTo(i,"employee"+i))
                .collect(Collectors.toList());
    }

    public Flux<EmployeeTo> getEmployeeReactive(){
        return Flux.range(1,25)
                .delayElements(Duration.ofSeconds(1))
                .doOnNext((i)-> System.out.println("Employee Number "+i))
                .map(i->new EmployeeTo(i,"employee "+i));
    }


}
