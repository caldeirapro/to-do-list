// script.js

// Selecionando elementos
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Função para adicionar tarefa
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    // Criar um novo item de lista
    const li = document.createElement('li');
    li.textContent = taskText;

    // Botão de marcar como concluída
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Botão de excluir tarefa
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique no botão afete o evento de marcar como concluído
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Limpar o input após adicionar a tarefa
    taskInput.value = '';
});

// Opcional: Permitir adicionar tarefa pressionando a tecla Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskButton.click();
    }
});
