const todoList = []

function addTodo(){
    const newTodo = {
        text: document.getElementById('inputTodo').value,
        completed: false,
    }
    todoList.push(newTodo)
    render()
}

function render(){
    document.getElementById('listTodo').innerHTML = ""
    for (let i = 0; i < todoList.length; i++) {
        if(todoList[i].complete){
            document.getElementById('listTodo').innerHTML += `<li onclick="complete(${i})"><s>${todoList[i].text}</s></li>`   
        }else   {
            document.getElementById('listTodo').innerHTML += `<li onclick="complete(${i})">${todoList[i].text}</li>`
        }
    }
}

function complete(index){
    todoList[index].complete = true;
    render()
}
