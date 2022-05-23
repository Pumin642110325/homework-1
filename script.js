var table = document.getElementById('inputTable')
var students = [
    student = {
        name: 'คุณลุง',
        email: 'a@B.com',
        gender: 'ชาย'
    },
    {
        name: 'คุณลุง',
        email: 'a@B.com',
        gender: 'ชาย'
    },
    {
        name: 'คุณลุง',
        email: 'a@B.com',
        gender: 'ชาย'
    }
]

function addRow(container, key, value) {
    let row = document.createElement('div')
    row.classList.add('row')
    let columName = document.createElement('div')
    columName.classList.add('col-1')
    columName.classList.add('offset-1')
    columName.innerText = key
    let columValue = document.createElement('div')
    columValue.classList.add('col')
    columValue.innerHTML = value;
    row.appendChild(columName)
    row.appendChild(columValue)
    container.appendChild(row)

}
function addStudentData(student) {
    let idElem = document.getElementById('id')
    idElem.innerHTML = student.id
    let studentIdElem = document.getElementById('studentId')
    studentIdElem.innerHTML = student.studentId
    let nameElem = document.getElementById('name')
    nameElem.innerHTML = `${student.name} ${student.surname}`
    let gpaElem = document.getElementById('gpa')
    gpaElem.innerHTML = student.gpa
    let profileElem = document.getElementById('image')
    profileElem.setAttribute('src', student.image)

}
var count = 1;
function addTable(index, student) {
    const tableBody = document.getElementById('inputTable')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope', 'row')
    cell.innerHTML = index
    row.appendChild(cell)

    cell = document.createElement('td')

    cell.innerHTML = `${student.name} ${student.surname} [detail Click]`
    row.addEventListener('click', () => {
        let id = student.id
        console.log(id)
        fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`)
            .then(response => {
                return response.json()
            }).then(student => {
                addStudentData(student)
            })
    })
    row.appendChild(cell)

    cell = document.createElement('td')
    cellbeforeImg = document.createElement('div')
    cellbeforeImg.classList.add('img-fluid')
    let img = document.createElement('img')
    img.setAttribute('src', student.image)
    img.setAttribute('width', '60em')
    img.classList.add('img-thumbnail')
    cellbeforeImg.appendChild(img)
    cell.appendChild(cellbeforeImg)
    row.appendChild(cell)

    cell = document.createElement('td')
    cell.innerHTML = student.gpa
    row.appendChild(cell)

    tableBody.appendChild(row)
}

function addStudentList(studentList) {
    let counter = 1
    for (student of studentList) {
        addTable(counter++, student);
    }
}

function onload() {
    fetch('https://dv-student-backend-2019.appspot.com/students').then(response => {
        return response.json().then(data => {
            addStudentList(data)
        })
    })
}


document.getElementById('searchButton').addEventListener('click', () => {
    let id = document.getElementById('inputText').value
    console.log(id)
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`)
        .then(response => {
            return response.json()
        }).then(student => {
            addStudentData(student)
        })
}) 