import { generateProjectForm } from "./scripts/forms";

const getTitle = (data) => ({
    title: () =>  data.title
})

const getDescription = (data) => ({
    description: () =>  data.description
})

const getDueDate = (data) => ({
    dueDate: () =>  data.dueDate
})

const getPriority = (data) => ({
    priority: () =>  data.priority
})

const todoItem = (title, description, dueDate, priority) => {
    const data = {
        title,
        description,
        dueDate,
        priority,
    }

    return Object.assign({},
        getTitle(data),
        getDescription(data),
        getDueDate(data),
        getPriority(data)
    )
}

const projectItem = (title, description) => {
    const data = {
        title,
        description,
    }

    return Object.assign({},
        getTitle(data),
        getDescription(data),
    )
}

const displayController = (() => {
    
    const drawProjectForm = () => {
        const parent = document.querySelector('body');
        const overlay = document.createElement('div');
        overlay.classList.add('dialog-overlay');

        parent.insertAdjacentElement('afterbegin', overlay);
        
        overlay.appendChild(generateProjectForm());


    }

    return { drawProjectForm }
})();


let tab = document.querySelector('.task-tab');

displayController.drawProjectForm();