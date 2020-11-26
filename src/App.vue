<template>

  <div>

    <input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo">
    
    <ul class = "todos">

      <li v-for = "todo in todos" :key = "todo.id" >

        <div class = "todoView">

          <input type = "checkbox" v-model = "todo.completed" />

          <span :class = "{ editing : editedTodo === todo }" @dblclick = "editTodo( todo )" v-show = "editedTodo !== todo">
            {{ todo.label }}
          </span>

          <input class = "editing" v-model = "todo.label" v-show = "editedTodo == todo"@keyup.esc = "noEdit( todo )" @keyup.enter = "completeEdit( todo )" />

          <button @click = "removeTodo( todo )"> Delete </button>

        </div>

      </li>
    </ul>

  </div>

</template>

<script>

  export default {
    data() {
      return {
        todos : [],
        currentTodo : '',
        editedTodo : null,
        originalTodoLabel : ''
      };
    },
    methods : {
      addTodo() {
        this.todos.push({ id : this.todos.length, label : this.currentTodo, completed : false });
        this.currentTodo = '';
      },
      removeTodo( todo ) {
        var index = this.todos.indexOf( todo );
        this.todos.splice( index , 1 );
      },
      editTodo( todo ) {
        this.editedTodo = todo;
        this.originalTodoLabel = todo.label;
      },
      completeEdit( todo ) {
        this.editedTodo = null;
        if( !todo.label ) {
          this.removeTodo( todo );
        }
      },
      noEdit( todo ) {
        if( !this.editedTodo ) {
          return;
        }
        this.editedTodo = null;
        todo.label = this.originalTodoLabel
      }

    }  
  };

</script>

<style>

ul {
  list-style-type : none;
}

.todoView {

}

.editing {

}

</style>