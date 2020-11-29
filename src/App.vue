<template>

  <div class = "container">

    <md-toolbar class = "main-nav">


      <div class="md-toolbar-section-start">
        <h3 class="md-display-1">Doin Stuff!</h3>
      </div>

      <h3 class = "md-caption"> The one stop shop for all your To-Do needs </h3>

    </md-toolbar>

    <header class = "todos-header">
      <h1 class = "md-display-1"> To-Do Lists! </h1>
    </header>

    <div class = "todo-main md-layout">

      <md-card class = "todoList-card md-layout-item md-size-45" v-for = "todoList in todoLists" :key = "todoList.id" >

        <md-card-header>

          <md-field>
            <md-input class = "add-todo" v-model = "currentTodo" @keydown.enter = "addTodo( todoList )" placeholder = "Add a todo" />
          </md-field>
      
        </md-card-header>

        <md-card-content>

          <md-list>

            <md-list-item v-for = "todo in todoList.todos" :key = "todo.id" >

              <input type = "checkbox" v-model = "todo.completed"/>

              <div :class = "{ editing : editedTodo === todo }" class = "todo-label md-list-item-text" v-on:click = "editTodo( todo )" v-show = "editedTodo !== todo">
                <p> {{ todo.label }} </p>
              </div>

              <input class = "editing" v-model = "todo.label" v-show = "editedTodo == todo" @keyup.esc = "noEdit( todo )" @keyup.enter = "completeEdit( todo )"/>

              <md-button @click = "removeTodo( todoList , todo )"> Delete </md-button>

            </md-list-item>

          </md-list>

        </md-card-content>

        <md-card-actions>
          <md-button @click = "removeTodoList( todoList )"> Delete List </md-button>
        </md-card-actions>

      </md-card>

      <md-button class="md-icon-button md-layout-item" v-on:click = "addTodoList()" >
        <md-icon>add</md-icon>
      </md-button>

    </div>
  
  </div>

</template>

<script>

  export default {
    data() {
      return {
        todoLists : [ { todos : [] , currentTodo : '' } ],
        currentTodoList : '',
        editedTodo : null,
        originalTodoLabel : ''
      };
    },
    methods : {
      addTodoList() {
        this.todoLists.push({ id : this.todoLists.length , todos : [] });
        this.currentTodoList = this.todoList;
      },
      removeTodoList( todoList ) {
        var index = this.todoLists.indexOf( todoList );
        this.todoLists.splice( index , 1 );
      },
      addTodo( todoList ) {
        var todo = todoList.todos;
        var todoIndex = todoList.todos.length;
        todo.push( { id : todoIndex , label : this.currentTodo , completed : false });
        this.currentTodo = '';
      },
      removeTodo( todoList , todo ) {
        var todos = todoList.todos;
        var index = todos.indexOf( todo );
        todos.splice( index , 1 );
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

.container {
  text-align : center;
  align-items : center;
}

.main-nav {
  color : white;
  background-color : #2F4F4F;
}

.todos-header {
  margin-top : 40px;
}

.todo-main {
  margin-top : 30px;
  text-align : center;
}

.todoList-card {
  margin : 10px;
  background : #DCDCDC;
}

.md-list-item-text p {
  margin-left : 1rem;
}

.add-todo {
  text-align : center;
}

.editing {
  width : 80%;
}

</style>