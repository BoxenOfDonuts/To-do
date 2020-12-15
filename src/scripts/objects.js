const getTitle = (data) => ({
    title: () => data.title,
})

const getDescription = (data) => ({
    description: () => data.description,
})

const getDueDate = (data) => ({
    dueDate: () => data.dueDate,
})

const getPriority = (data) => ({
    priority: () => data.priority,
})

const getToDos = (data) => ({
    // getItems: () => {
    //     data.list.forEach(item => {
    //         console.log(item.title())
    //     })
    // }

    getItems: () => data.list,
})

const pushNewItem = (data) => ({
    addItem: (item) => {
        data.list.push(item)
    },
})

const getNumberTodos = (data) => ({
    numberOf: () => data.list.length,
    test: () => data.description,
})

const todoItem = (title, description, dueDate, priority) => {
    const data = {
        title,
        description,
        dueDate,
        priority,
    }

    return Object.assign(
        {},
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

    return Object.assign(
        {},
        getTitle(data),
        getDescription(data),
        getToDos(data),
        pushNewItem(data),
        getNumberTodos(data)
    )
}

export { projectItem, todoItem }