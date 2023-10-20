let theInput = document.querySelector('.add-task input')
let theButton = document.querySelector('.plus')
let tasksContainer = document.querySelector('.tasks-content')
let taskCount = document.querySelector('.tasks-count span')
let tasksCompleted = document.querySelector('.tasks-completed span')

window.onload = function () {
    theInput.focus()
} 

theButton.addEventListener('click',function () {
    if (theInput.value === "") {
        alert('Enter Your Power task')
    } else {
let noTasksMsg = document.querySelector('.no-tasks-message')
        if (noTasksMsg) {
            noTasksMsg.remove()
        }
        let iconDel  = document.createElement('span')
        iconDel.className = "fa-solid fa-trash-can"
        let mainSpan  = document.createElement('span')
        let deleteSpan = document.createElement('span')
        let textSpan  = document.createTextNode(theInput.value)
        deleteSpan.className = "delete"
        deleteSpan.appendChild(iconDel)
        mainSpan.className = 'task-box'
        mainSpan.appendChild(deleteSpan)
        mainSpan.appendChild(textSpan)
        tasksContainer.appendChild(mainSpan)
        theInput.value = ""
        theInput.focus();
        calculateTasks ()
    }
})

addEventListener('click', function (e) {
    if (e.target.className === 'delete') {
        e.target.parentNode.remove()
    }
    if (tasksContainer.childElementCount == 0) {
        creatNoTasks()
    }
    if (e.target.classList.contains('task-box')) {
        e.target.classList.toggle('finished')
        
    }
    if (e.target.classList.contains('finished')) {
        document.querySelector('#win').play()
    }
    calculateTasks ()
})

function creatNoTasks() {
    let msgSpan  = document.createElement('span')
    let tx = document.createTextNode('No Tasks To Show')
    msgSpan.appendChild(tx)
    msgSpan.className = "no-tasks-message"
    tasksContainer.appendChild(msgSpan)
}

function calculateTasks () {
    taskCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length
}


