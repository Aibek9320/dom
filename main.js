// const task1 = (list) => {
//     return document.querySelector('li').textContent
// }
// console.log(task1())

// const task2 = () => {
//     return Array.from(document.getElementsByTagName('li')).map(el => el.textContent)
// }
// console.log(task2())

// const task3 = () => {
//     return Array.from(document.getElementsByClassName('list-item')).map(el => el.textContent)
// }
// console.log(task3())

// const task4 = () => {
//     return Array.from(document.getElementsByClassName('list-item')).map(elem =>elem.getAttribute('class'))
// }
// console.log(task4())'

// const task5 = () => {
//     return Array.from(document.getElementsByClassName('list-item')).map(elem =>elem.getAttribute('data-test-id'))
// }
// console.log(task5())

const task6 = () => {
    return Array.from(document.getElementById('data-test-id'))
}
console.log(task6())