package com.natwest;

import com.natwest.Controller.Client2controller;
import com.natwest.TO.JobTO;
import com.natwest.dao.JobT;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.security.RunAs;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@RunWith(SpringRunner.class)
@ExtendWith(SpringExtension.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Client2ApplicationTests {

	@Autowired
	JobT JobT;
	@Autowired
	Client2controller controller;
@Test
@Order(1)
	public void JobToGetterSetterTest() {
	try {
		JobTO obj = new JobTO();
		obj.setId("s001");
		obj.setUserid("test");
		obj.setJobname("test1");
		assertEquals("s001" ,obj.getId());
		assertEquals("test",obj.getUserid());
		assertEquals("test1",obj.getJobname());

	} catch (Exception e) {
		fail();
	}
}

@Test
@Order(2)
public void JobToConstructorTest() {
	try{
		JobTO obj = new JobTO("s001","test","test1");
		assertEquals( "s001",obj.getId());
		assertEquals("test",obj.getUserid());
		assertEquals("test1",obj.getJobname());

	}catch (Exception e){
		fail();
	}
}

	@Test
	@Order(3)
	public void ProductIFindTest(){
		try{
			List<JobTO> list = JobT.findAll();
			assertNotEquals(0,list.size());
			assertEquals(list.get(0).getId(),"s001");
			assertEquals(list.get(0).getUserid(),"chris@gmail.com" );
			assertEquals(list.get(0).getJobname(), "admin");
		}catch (Exception e){
			fail();
		}
	}

	@Test
	@Order(4)
	public void ProductIFindByIdTest(){
		try{
			Optional<JobTO> list = JobT.findById("s002");
			if(list.isEmpty()){
				throw new Exception();
			}else {
				assertEquals(list.get().getId(), "s002");
				assertEquals(list.get().getUserid(), "Jim@gmail.com");
				assertEquals(list.get().getJobname(), "developer");
			}
		}catch (Exception e){
			fail();
		}
	}

	@Test
	@Order(5)
	public void ProductIFindByIdTestNegation(){
		try{
			Optional<JobTO> list = JobT.findById("s009");
			if(list.isPresent()){
				throw new Exception();
			}
		}catch (Exception e){
			fail();
		}
	}

	@Test
	@Order(6)
	public void ProductISave(){
		try{
			JobTO obj = new JobTO("s010","test","test1");
			JobTO list = JobT.save(obj);
			assertEquals(list.getId(),"s010");
			assertEquals(list.getUserid(),"test");
			assertEquals(list.getJobname(),"test1");
		}catch (Exception e){
			fail();
		}
	}

	@Test
	@Order(7)
	public void ProductIDelete(){
		try{
			JobT.deleteById("s010");
		}catch (Exception e){
			fail();
		}
	}

	@Test
	@Order(8)
	public void ProductControllerMethod1(){
		try{
			assertEquals("I am in Client2 Microservice",controller.method1());
		}catch (Exception e){
			fail();
		}
	}
	@Test
	@Order(9)
	public void ProductControllerMethod2(){
		try{
			assertEquals("I am in Client2 Microservice, Method 2",controller.method2());
		}catch (Exception e){
			fail();
		}
	}

	@Test
	@Order(10)
	public void ProductControllerMethod4(){
		try{
			List<JobTO> list = controller.method4();
			assertNotEquals(0,list.size());
			assertEquals(list.get(0).getId(),"s001");
			assertEquals(list.get(0).getUserid(),"chris@gmail.com" );
			assertEquals(list.get(0).getJobname(), "admin");

		}catch (Exception e){
			fail();
		}
	}
}
