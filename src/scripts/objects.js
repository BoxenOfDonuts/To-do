const getTitle = (data) => ({
    title: () => data.title,
});

const getDescription = (data) => ({
    description: () => data.description,
});

const getDueDate = (data) => ({
    dueDate: () => data.dueDate,
});

const getPriority = (data) => ({
    priority: () => data.priority,
});

const unpackTask = (data) => ({
    unpackItems: () => ({
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
        priority: data.priority,
    }),
});

const getToDos = (data) => ({
    getItems: () => data.list,
    unpackProjects: () => {
        const unpacked = data.list.map((task) => {
            const taskObject = {
                title: task.title(),
                description: task.description(),
                dueDate: task.dueDate(),
                priority: task.priority(),
            };
            return taskObject;
        });

        const projectTask = {
            title: data.title,
            description: data.description,
            unpacked,
            item: data.item,
        };

        return projectTask;
    },
});

const manageItems = (data) => ({
    addItem: (item) => {
        data.list.push(item);
    },
    modifyItem: (item, key) => {
        data.list.splice(key, 1, item);
    },
});

const getNumberTodos = (data) => ({
    numberOf: () => data.list.length,
    test: () => data.description,
});

const todoItem = (title, description, dueDate, priority) => {
    const data = {
        title,
        description,
        dueDate,
        priority,
    };

    return {
        ...getTitle(data),
        ...getDescription(data),
        ...getDueDate(data),
        ...getPriority(data),
        ...unpackTask(data),
    };
};

const projectItem = (title, description) => {
    const data = {
        title,
        description,
        list: [],
        item: '',
    };

    return {
        ...getTitle(data),
        ...getDescription(data),
        ...getToDos(data),
        ...manageItems(data),
        ...getNumberTodos(data),
    };
};

export { projectItem, todoItem };
