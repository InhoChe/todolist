package kr.or.connect.todo.persistence;

public class TodoSqls {
	static final String DELETE_BY_ID =
			"DELETE FROM todo WHERE id= :id";
	static final String SELECT_ALL_LIST =
			"SELECT * FROM todo";
	static final String COMPLETE_BY_ID =
			"UPDATE SET completed = :completed FROM todo WHERE id= :id";
	static final String INSERT_TODO =
			"INSERT INTO todo(todo,completed) VALUES(:todo,0)";
	
}
