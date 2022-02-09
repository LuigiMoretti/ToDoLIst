import { Todo } from '../js/Todo.js';

let todolist = [];

$(()=>{
    stampaTodo();
    let button = $('.inserisci');
    button.on('click', function(){
        let titolo = $('#titolo').val();
        let testo = $('#testo').val();
        let todo = new Todo(titolo, testo);
        todolist.push(todo);
        localStorage.setItem('listaTodo', JSON.stringify(todolist)); 
        stampaTodo();
    });
});

let stampaTodo = () => {
    let lista = $('.lista ul');
    lista.html('');
    let localLista = localStorage.getItem('listaTodo');
    if (localLista !== null) {
        todolist = JSON.parse(localLista);
    }
    $.each(todolist, function(i, todo){
        let li = $('<li></li>');
        li.addClass('list-group-item');
        li.html(todo.titolo + ' - ' + todo.testo);
        li.append('<span class="btn btn-sm btn-danger float-end">X</span>');
        lista.append(li);
        li.children().on('click', function(){
            todolist.splice(i, 1);
            localStorage.setItem('listaTodo', JSON.stringify(todolist));
            stampaTodo();
        });
    });
}




//FORMATO VANILLA

/* let todolist = [];

document.addEventListener('DOMContentLoaded', function () {
    stampaTodo();
    let button = document.querySelector('.todo button');
    button.addEventListener('click', function () {
        let titolo = document.querySelector('#titolo');
        let testo = document.querySelector('#testo');
        let todo = new Todo(titolo.value, testo.value);
        todolist.push(todo);
        localStorage.setItem('listaTodo', JSON.stringify(todolist));
        stampaTodo();
    });
});

let stampaTodo = () => {
    let lista = document.querySelector('.lista ul');
    lista.innerHTML = '';

    let localLista = localStorage.getItem('listaTodo');
    if (localLista !== null) {
        todolist = JSON.parse(localLista);
    }

    todolist.forEach((todo) => {
        let li = document.createElement('li');
        let i = 0;
        li.className = 'list-group-item';
        li.innerHTML = todo.titolo + ' - ' + todo.testo;
        li.innerHTML += '<span id="rimuovi" class="btn btn-sm btn-danger float-end">X</span>';
        lista.appendChild(li);
        
        li.querySelector('#rimuovi').addEventListener('click', function(){
            todolist.splice(todolist.indexOf(li), 1);
            localStorage.setItem('listaTodo', JSON.stringify(todolist));
            stampaTodo();
        });
        
    });
} */