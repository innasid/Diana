package natwest.springmvc.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@RequestMapping(value = "start", method = RequestMethod.GET)
	public String f1() {
		return "add";
	}
	
	@RequestMapping(value = "add2",method = RequestMethod.POST)
	public String f2(@RequestParam("a1") String n1, @RequestParam("a2") String n2, ModelMap mp) {
		addTO obto = new addTO();
		obto.setNum1(n1);
		obto.setNum2(n2);
		String msg = "";
		try {
			addBO obbo = new addBO();
			obbo.computeAdd(obto);
			
		}catch (Exception e) {
			msg = e.getMessage();
		}
		mp.addAttribute("to", obto);
		mp.addAttribute("msg", msg);
		
		return "add";
	}
	 
}
