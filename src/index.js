import { generateProjectForm } from "./scripts/forms";
import { divFactory, createText } from "./scripts/utils";

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

const getToDos = (data) => ({
    // getItems: () => {
    //     data.list.forEach(item => {
    //         console.log(item.title())
    //     })
    // }

    getItems: () => data.list
})

const pushNewItem = (data) => ({
    addItem: (item) => {
        data.list.push(item)
    }
})

const getNumberTodos = (data) => ({
    numberOf: () => data.list.length,
    test: () => data.description
    
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
    let data = {
        title,
        description,
        list: [],
        item: '',
    }

    return Object.assign({},
        getTitle(data),
        getDescription(data),
        getToDos(data),
        pushNewItem(data),
        getNumberTodos(data),
    )
}

const displayController = (() => {

    const _projectItemLayout = (name, count) => {
        const li = document.createElement('li');
        li.classList.add('project-li');
        const div = divFactory('project-item');
        const projectName = createText(name, 'span');
        const counter = createText(count, 'span');
        counter.classList.add('project-counter');

        div.appendChild(projectName);
        div.appendChild(counter);
        li.appendChild(div);

        return li;
    }

    const _todoLayout = (description, dueDate, priority) => {
        const li = document.createElement('li');
        li.classList.add('todo-li');
        const div = divFactory('todo-item');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        const desc = createText(description, 'div');
        const date = createText(dueDate, 'div');
        const pri = createText(priority, 'div');

        div.appendChild(checkbox);
        div.appendChild(desc)
        div.appendChild(date);
        div.appendChild(pri);
        li.appendChild(div);

        return li;

    }
    
    const drawProjectForm = () => {
        const parent = document.querySelector('body');
        const overlay = document.createElement('div');
        overlay.classList.add('dialog-overlay');
        overlay.dataset['overlay'] = true;

        parent.insertAdjacentElement('afterbegin', overlay);
        overlay.appendChild(generateProjectForm());
    }

    const drawProjects = () => {
        let array = projectController.listProjects();
        const projects = document.querySelector('.projects')
        const projectList = document.createElement('ul');
        let counter = 0;

        array.forEach(object => {
            const li = _projectItemLayout(object.title(), object.getItems().length)
            li.dataset['projectKey'] = counter;
            projectList.appendChild(li);
            counter++;
        })

        projects.appendChild(projectList);
    }

    const drawProjectToDos = (key) => {
        let array = projectController.listProjectItems(key);
        console.log(array)
        const parent = document.querySelector('.todos-list');
        const list = document.createElement('ul');
        let counter = 0;
        
        array.forEach(object => {
            const li = _todoLayout(object.description(), object.dueDate(), object.priority())
            li.dataset['itemKey'] = counter;
            list.appendChild(li);
            counter++
        })

        parent.appendChild(list);

    }

    const closeForm = () => {
        const overlay = document.querySelector('.dialog-overlay');
        overlay.remove();
    }

    return { drawProjectForm, drawProjects, drawProjectToDos, closeForm }
})();


const projectController = (() => {
    let projectList = [];

    const listProjects = () => projectList

    const addProject = (project) => {
        projectList.push(project)
    }

    const removeProject = (project) => {
        // placeholder, update 
        projectList.slice(0,1);
    }

    const listProjectItems = (key) => projectList[key].getItems();

    return {addProject, listProjects, listProjectItems}

})();

function handleClick(e) {
    displayController.drawProjectForm();
    const formButtons = document.querySelectorAll('.project-form button');
    const overlay = document.querySelector('.dialog-overlay')
    overlay.addEventListener('click', cancelForm);

    formButtons.forEach(button => button.addEventListener('click', handleProjectForm));
}

function handleProjectForm(e) {
    console.log(e)
    const target =  e.target.value;
    if (target === 'add') {
        console.log('add')
    } else {
        console.log('nope')
    }
}

function cancelForm(e) {
    console.log(e.target);
    if (!e.target.dataset.overlay) return;
    displayController.closeForm();
    // window.removeEventListener('click', cancelForm);
}


// displayController.drawProjectForm();
const addProjectButton = document.querySelector('.add-project');
addProjectButton.addEventListener('click', handleClick);















let project1 = projectItem('New Project', 'My Super Cool Project');
let x = todoItem('To Do 1', 'IDK', 'never', '!!!');
let y = todoItem('To Do 2', 'IDK', 'never', '!!!');
let z = todoItem('To Do 3', 'IDK', 'never', '!!!');

project1.addItem(x)
project1.addItem(y)
project1.addItem(z)

let project2 = projectItem('New Project 2', 'My Super Cool Project');
project2.addItem(x)
project2.addItem(y)
project2.addItem(z)

let project3 = projectItem('New Project 3', 'My Super Cool Project');

project3.addItem(x)
project3.addItem(y)
project3.addItem(z)


project1.getItems()
console.log(project1.test())


projectController.addProject(project1);
projectController.addProject(project2);
projectController.addProject(project3);

// projectController.addProject(project1);
displayController.drawProjects();

displayController.drawProjectToDos(0);