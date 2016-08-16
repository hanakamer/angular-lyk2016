angular.module('todoApp', [])
// controller, view kismi arkasindaki kod parcasi.
// burada uygulamanizin davranisini acikca gorebilirsiniz
  .controller('TodoListController', function(){
    var todoList = this;
    // burada bir baslangicta iki todo elemanina sahip
    // bir model olusturyoruz
    //modelimizi direkt olarak scope a bagliyoruz
    todoList.todos = [
      { text:'angular ogren', done:true},
      { text:'angular appi yap', done:false}];
    // ayni sekilde burada da bir davranis olusturup onu da scopea bagliyoruz
    // boylece view tarafinda (html sayfanizda) ng-submit ile bunu kullanabiliriz
    todoList.addTodo = function(){
      // push ile arrayimizin icini dolduruyoruz. daha sonra bunu ng-repeat ile
      // arrayin elemanlarini donup doma elemani olarak ekliyoruz
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = ''
    }
    todoList.remaining = function(){
      var count = 0;
      angular.forEach(todoList.todos, function(todo){
        count += todo.done ? 0 : 1;
      });
      return count;
    };
    todoList.archive = function(){
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo){
        if(!todo.done) todoList.todos.push(todo);
      });
    };
  })
