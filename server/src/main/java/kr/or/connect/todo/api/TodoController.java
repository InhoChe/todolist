package kr.or.connect.todo.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
	
	
	@PostMapping("/insertTodo")
	public String insertTodo() {
		
		return "test111";
	}
}
