import { TodoList } from "./component/TodoList.js";
import { fecthJSON } from "./function/api.js";
import { createElement } from "./function/dom.js";
try {
    const todos = await fecthJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))
} catch (e) {
    const alertElement  = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'
    })
    alertElement.innerText = 'Impossible de charger les éléments'
    document.body.prepend(alertElement)
}
