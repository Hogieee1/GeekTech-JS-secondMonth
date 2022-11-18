const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')

function createTodo () {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const activeBtn = document.createElement('div')
        const textDelete = document.createElement('button')
        const textEdit = document.createElement('button')

        div.setAttribute('class', 'block_text')
        textDelete.setAttribute('id', 'delete_button')
        textEdit.setAttribute('id', 'edit_button')
        activeBtn.setAttribute('class', 'active_buttons')

        textDelete.innerText = 'Delete'
        textEdit.innerText = 'Edit'
        text.innerText = input.value

        todoList.append(div)
        div.append(activeBtn)
        activeBtn.append(textDelete)
        activeBtn.append(textEdit)
        div.append(text)

        textEdit.onclick = function edit() {let val = prompt('Напиши что то')

            text.innerText = val
        }
        textDelete.onclick = () => div.remove()
}
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', e => e.keyCode === 13 ? createTodo() : false)