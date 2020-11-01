<template>
    <div>
        <input type="text" v-model="inputTodo"/>
        <button v-on:click="addTodo">Add Todo</button>
        <ol>
            <li v-for="(todo, index) in todoList" :key="index" v-on:click="complete(index)">
                <s v-if="todo.completed">{{ todo.text }}</s>
                <span v-if="!todo.completed">{{ todo.text }}</span>
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
                todoList: []
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
            }
        }
    }
</script>

