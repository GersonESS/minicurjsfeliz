
const root = document.querySelector('#root')
function newElement(tag, Content){
    const title = `<${tag}>${Content}</${tag}>`
    root.insertAdjacentHTML('beforeend', title)
}
newElement('h1', 'Dificil')
newElement('h2', 'Dificil')
newElement('h3', 'Dificil')
newElement('h4', 'Dificil')
newElement('h2', 'foi')