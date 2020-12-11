import { divFactory, createText } from "./utils"

// <div class="form project-form">
//                 <div class="form-header">
//                     <h1>Add a project</h1>
//                     <hr>
//                 </div>
                
//                 <form class=form-container>

//                     <label for='title'>Project Name</label>
//                     <input type='text' placeholder="My Project" name="title">

//                     <label for='description'>Project description</label>
//                     <input type='text' placeholder="My first project" name="description">

//                     <footer class="form-footer">
//                         <hr>
//                         <button type="button" class="button cancel">Cancel</button>
//                         <button type="button" class="button add">Add</button>
//                     </footer>
//                 </form>
//             </div>
const formElements = (labelContent, placeholder, name, type) => {
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', name);
    label.textContent = labelContent

    input.type = type;
    input.placeholder = placeholder;
    input.name = name;

    return { input, label }

}


const getFormHeader = (title) => {
    const formHeader = divFactory('form-header');
    formHeader.appendChild(createText(title, 'h1'));
    formHeader.appendChild(document.createElement('hr'));

    return formHeader;
}

const getFormFooter = () => {
    const parent = divFactory('form-footer');
    const cancelButton = document.createElement('button');
    const addButton = document.createElement('button');

    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('button', 'cancel');
    cancelButton.type = 'button';

    addButton.textContent = 'Add';
    addButton.classList.add('button', 'add');
    addButton.type = 'button';


    parent.append(document.createElement('hr'));
    parent.appendChild(cancelButton);
    parent.appendChild(addButton)

    return parent;
}

const getFormInputs = () => {
    const parent = divFactory('form-container');
    const projectName = formElements('title', 'My Project', 'title', 'text');
    const description = formElements('description', 'Project Description', 'My first project', 'text');

    parent.appendChild(projectName.label);
    parent.appendChild(projectName.input);
    parent.appendChild(description.label);
    parent.appendChild(description.input);
    parent.appendChild(getFormFooter())

    return parent;

}

const generateFormContent = () => {}

const generateForm = () => {
    const parent = divFactory('form', 'project-form');
    const formHeader = getFormHeader('Add a project');
    const body = getFormInputs();

    // const form = document.createElement('form');
    // form.classList.add('form-container')
    

    parent.appendChild(formHeader);
    parent.appendChild(body);


    return parent

}

export { generateForm }