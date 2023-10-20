let theInput = document.querySelector('.add-task input');
let theAddButton = document.querySelector('.plus');
let tasksContainer = document.querySelector('.tasks-content');

let tasksCount = document.querySelector('.tasks-count span')
let tasksCompleted = document.querySelector('.tasks-completed span')
window.onload = function () {
    theInput.focus()
}
theAddButton.onclick =  function () {

if (theInput.value === '') {
    alert('enter')
} else {
    let noTasksMsg = document.querySelector('.no-tasks-message');
    if (noTasksMsg) {
        noTasksMsg.remove()
    }
    let mainSpan = document.createElement("span") // create  main span = mainSpan
    let deleteElement = document.createElement("span") // create delete span = deleteElement
    let editElement = document.createElement('span') 
    let text = document.createTextNode(theInput.value) //create text node (input value) = text
    let deleteText = document.createTextNode("Delete") // create text node (delete) = deleteText
    let editText = document.createTextNode('Edit')

    mainSpan.appendChild(text) // text in mainSpan
    mainSpan.classList = 'task-box' // class => mainSpan = task-box --
    editElement.appendChild(editText)
    editElement.className = 'edit'
    deleteElement.appendChild(deleteText)  // deleteText > deleteElement **
    deleteElement.className = 'delete' // class => deleteElement delete --
    mainSpan.appendChild(editElement)
    mainSpan.appendChild(deleteElement) // deleteElement > mainSpan **
    tasksContainer.appendChild(mainSpan) // all mainSpan > tasksContainer
    theInput.value = ''; // empty input
    theInput.focus();
    calculateTasks()
}




}
addEventListener('click',function (e) {
    if (e.target.className == 'delete') { //if e.target.className = "delete"
        e.target.parentNode.remove() // e.target.parent.remove()
        if (tasksContainer.childElementCount == 0) {
            creatNoTasks()
        }
    }
    if (e.target.classList.contains('task-box')) { //if  e.target find .classList.contains task-box
        e.target.classList.toggle('finished') // toggle swap put fished class
    }
    calculateTasks()
}
) 

function creatNoTasks() {
    let msgSpan = document.createElement('span')
    let msgText = document.createTextNode('No Tasks to show')
    msgSpan.appendChild(msgText)
    msgSpan.className = 'no-tasks-message'
    tasksContainer.appendChild(msgSpan)
}
function calculateTasks() {
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length

}