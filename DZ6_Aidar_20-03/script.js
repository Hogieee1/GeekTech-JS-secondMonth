const input = document.getElementById('input')
const btn = document.getElementById('btn')
const valBlock = document.querySelector('.block-2')

    val = () => {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const txt = document.createElement('h3')

        div.setAttribute('class', 'block_text')

        valBlock.append(div)
        div.append(txt)

        txt.textContent = input.value.split('').reverse().join('')


    }
    input.value = ''
}
btn.addEventListener('click', val)

