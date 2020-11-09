<template>
    <div>
        <input class="input-todo mr-3" type="text" placeholder="Masukan Task Anda" v-model="inputTodo"/>
        <button class="btn add btn-primary" type="submit" v-on:click="addTodo">Add Todo</button>
        <ol>
            <li v-for="(todo, index) in todoList" :key="index">
                <!-- {{ todo.text }} -->
                <s v-if="todo.completed">{{ todo.text }}</s>
                <span v-if="!todo.completed">{{ todo.text }}</span>

                    <span class="button-group">
                        <!-- complete button -->
                        <div class="btn btn-success rounded-circle ml-5 mr-1 mt-1" v-on:click="complete(index)">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                        </div>
                        <!-- delete button -->
                        <div class="btn btn-danger rounded-circle mr-1 mt-1" v-on:click="remove(index)">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                            </svg>
                        </div>
                        <!-- edit button -->
                <span v-if='!todo.edit' @click='enableEdit(index)'></span>
                <input v-else type="text" v-model="todo.text" :ref="'task'" @keyup.enter="disableEdit(index)" @blur="disableEdit(index)">
                        <div class="btn btn-secondary rounded-circle mt-1" v-on:click="enableEdit(index)">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </div>
                    </span>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'Todo',
        data: function(){
            return{
                inputTodo: '',
                todoList: [],
            }
        },
        methods:{
            addTodo: function(){
                const newTodo = {
                    text: this.inputTodo,
                    completed: false,
                }
                this.todoList.push(newTodo)
            },
            complete: function(index){
                this.todoList[index].completed = true;
            },
            remove: function(index){
                this.todoList.splice(index, 1);
            },
        }
    }
</script>

<style scoped>
li {
    margin-top: 30px;
}
</style>
