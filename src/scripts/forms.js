import { divFactory, createText } from "./utils"

const formElements = (labelContent, placeholder, name, type, classN) => {
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', name);
    label.textContent = labelContent

    input.type = type;
    input.placeholder = placeholder;
    input.name = name;
    input.classList.add(classN)
    input.autocomplete = "off";
    if (name === 'title') {
        input.required = true;
    }

    return { input, label }

}

const getFormHeader = (title) => {
    const formHeader = divFactory('form-header');
    formHeader.appendChild(createText(title, 'h1'));

    return formHeader;
}

const getFormFooter = () => {
    const parent = divFactory('form-footer');
    const cancelButton = document.createElement('button');
    const addButton = document.createElement('button');

    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('button', 'cancel');
    cancelButton.type = 'button';
    cancelButton.value = 'cancel';

    addButton.textContent = 'Add';
    addButton.classList.add('button', 'add');
    addButton.type = 'button';
    addButton.value = 'add';


    parent.appendChild(cancelButton);
    parent.appendChild(addButton)

    return parent;
}

const getFormInputs = () => {
    const parent = divFactory('form-container');
    const wrapper = divFactory('form-body')
    const projectName = formElements('Project Name', '', 'title', 'text', 'name');
    const description = formElements('Project Description', '', 'My first project', 'text', 'desc');

    wrapper.appendChild(projectName.label);
    wrapper.appendChild(projectName.input);
    wrapper.appendChild(description.label);
    wrapper.appendChild(description.input);

    parent.appendChild(wrapper);

    return parent;

}

const generateProjectForm = () => {
    const parent = divFactory('form', 'project-form');
    const formHeader = getFormHeader('Add a project');
    const body = getFormInputs();
    const footer =  getFormFooter();

    parent.appendChild(formHeader);
    parent.appendChild(body);
    parent.appendChild(footer)


    return parent
}

export { generateProjectForm }