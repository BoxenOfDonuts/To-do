import { generateProjectForm, generateTaskForm } from './scripts/forms'
import { divFactory, createText } from './scripts/utils'
import { projectItem, todoItem } from './scripts/objects'

const displayController = (() => {
    const _projectItemLayout = (name, count) => {
        const li = document.createElement('li')
        li.classList.add('project-li')
        const div = divFactory('project-item')
        const projectName = createText(name, 'span')
        const counter = createText(count, 'span')
        counter.classList.add('project-counter')

        div.appendChild(projectName)
        div.appendChild(counter)
        li.appendChild(div)

        return li
    }

    const _todoLayout = (description, dueDate, priority) => {
        const li = document.createElement('li')
        li.classList.add('todo-li')
        const div = divFactory('todo-item')
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        const desc = createText(description, 'div')
        const date = createText(dueDate, 'div')
        const pri = createText(priority, 'div')

        div.appendChild(checkbox)
        div.appendChild(desc)
        div.appendChild(date)
        div.appendChild(pri)
        li.appendChild(div)

        return li
    }

    const _projectFormEventListeners = () => {
    }

    const _addTaskListener = () => {
        const addButton = document.querySelector('.add-todo');
        addButton.addEventListener('click', handleAddTask)
    }

    const drawProjectForm = () => {
        const parent = document.querySelector('body')
        const overlay = document.createElement('div')
        overlay.classList.add('dialog-overlay')
        overlay.dataset['overlay'] = true

        parent.insertAdjacentElement('afterbegin', overlay)
        overlay.appendChild(generateProjectForm())

        // was in the _projectFormEventListeners
        eventListenerController.addForEach('.project-form button', 'click', handleProjectForm);
        eventListenerController.add('.dialog-overlay', 'click', handleProjectForm)

    }

    const drawTaskForm = () => {
        const parent = document.querySelector('.action-li');
        _clearChildNodesOf(parent);
        parent.append(generateTaskForm());

        eventListenerController.addForEach('.todo-footer button', 'click', handleTaskForm);

    }

    const _clearChildNodesOf = (node) => {
        while (node.firstElementChild) {
            node.firstElementChild.remove()
        }
    }

    const drawProjects = () => {
        const parent = document.querySelector('.projects');
        _clearChildNodesOf(parent);
        let array = projectController.listProjects()
        const projects = document.querySelector('.projects')
        const projectList = document.createElement('ul')
        let counter = 0

        array.forEach((object) => {
            console.log(object.getItems().length)
            const li = _projectItemLayout(
                object.title(),
                object.getItems().length
            )
            li.dataset['projectKey'] = counter
            projectList.appendChild(li)
            counter++
        })

        projects.appendChild(projectList)
    }

    const _drawAddActions = (title) => {
        const parent = document.createElement('li')
        parent.classList.add('action-li');
        parent.innerHTML =  `<div class="action add-todo">
                    <i class="las la-plus"></i>
                    <p>${title}</p>
                </div>`

        return parent;
    }

    const drawProjectToDos = (key) => {
        const parent = document.querySelector('.todo-list');
        parent.dataset['currentProject'] = key;
        _clearChildNodesOf(parent);
        let array = projectController.listProjectItems(key);
        const list = document.createElement('ul');
        list.appendChild(_drawAddActions("Add Task"));
        let counter = 0;
        
        array.forEach((object) => {
            const li = _todoLayout(
                object.description(),
                object.dueDate(),
                object.priority()
            )
            li.dataset['itemKey'] = counter
            list.appendChild(li)
            counter++
        })
        
        parent.appendChild(list)
        _addTaskListener()
    }

    const closeForm = () => {
        const overlay = document.querySelector('.dialog-overlay');
        // overlay.removeEventListener('click', handleProjectForm);
        overlay.remove();
    }

    return { drawProjectForm, drawProjects, drawProjectToDos, closeForm, drawTaskForm }
})();

const projectController = (() => {
    let projectList = []

    const listProjects = () => projectList

    const addProject = (project) => {
        projectList.push(project)
    }

    const removeProject = (project) => {
        // placeholder, update
        projectList.slice(0, 1)
    }

    const listProjectItems = (key) => projectList[key].getItems()

    return { addProject, listProjects, listProjectItems }
})();

const eventListenerController = (() => {
    const add = (selector, type, func) => {
        const parent = document.querySelector(selector);
        parent.addEventListener(type, func);
    }

    const addForEach = (selector, type, func) => {
        const parent = document.querySelectorAll(selector);
        parent.forEach(child => child.addEventListener(type, func));
    }

    return { add, addForEach }

})();

function handleClick(e) {
    displayController.drawProjectForm()
}

function handleProjectForm(e) {
    e.stopPropagation()
    const target = e.target.value
    if (target === 'add') {
        console.log('add')
        grabForm()
    } else {
        if (e.target.dataset.overlay || target === 'cancel') {
            cancelForm();
        }
    }
}

function cancelForm() {
    displayController.closeForm()
}

function grabForm() {
    const name = document.querySelector('.form-body > .name').value;
    const desc = document.querySelector('.form-body > .desc').value;

    if (!name) {
        alert("Please fill out the name!")
        return
    }

    projectController.addProject(projectItem(name, desc));
    cancelForm();
    displayController.drawProjects()
}

function handleTaskForm(e) {
    const target = e.target;
    const project = document.querySelector('.todo-list').dataset.currentProject

    if (target === 'add') {
        console.log('adding')
    } else {
        displayController.drawProjectToDos(project)
    }
}

const projects = document.querySelector('.projects');
projects.addEventListener('click', e => {
    const projectItem = e.target.closest('li');
    if (!projectItem) return;
    const key = projectItem.dataset.projectKey;
    console.log(key);

    displayController.drawProjectToDos(key);

})

function handleAddTask(e) {
    displayController.drawTaskForm()
}


// displayController.drawProjectForm();
const addProjectButton = document.querySelector('.add-project')
addProjectButton.addEventListener('click', handleClick)

let project1 = projectItem('New Project', 'My Super Cool Project')
let x = todoItem('To Do 1', 'IDK', 'never', '!!!')
let y = todoItem('To Do 2', 'IDK', 'never', '!!!')
let z = todoItem('To Do 3', 'IDK', 'never', '!!!')

project1.addItem(x)
project1.addItem(y)
project1.addItem(z)

let project2 = projectItem('New Project 2', 'My Super Cool Project')
project2.addItem(x)
project2.addItem(y)
project2.addItem(z)

let project3 = projectItem('New Project 3', 'My Super Cool Project')

project3.addItem(x)

project1.getItems()
console.log(project1.test())

projectController.addProject(project1)
projectController.addProject(project2)
projectController.addProject(project3)

// projectController.addProject(project1);
displayController.drawProjects()

// displayController.drawProjectToDos(0)