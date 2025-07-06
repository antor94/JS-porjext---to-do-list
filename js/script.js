
// dom

let main = document.querySelector('.main')
let to_do = document.querySelector('.to_do')
let id_input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let add_todo = document.querySelector('.add_todo')
let doneTodo =document.querySelector('.doneTodo')
let totalTodo =document.querySelector('.totalTodo')

let i = 0
totalTodo.innerHTML = i

let a = 0

doneTodo.innerHTML = a


// button

btn.addEventListener('click',()=>{

    if(!id_input.value){}
    else{
    
        i++
        totalTodo.innerHTML = i
 
        // create tag
        
        let add = document.createElement('div')
        let add_input = document.createElement('input')
        let editbtn = document.createElement('button')
        let deletebtn = document.createElement('button')
        let done = document.createElement('button')
        
        // append child
        add_todo.appendChild(add)
        add.appendChild(add_input)
        add.appendChild(editbtn)
        add.appendChild(deletebtn)
        add.appendChild(done)
        
        // classlist
        add.classList.add('add')
        add_input.classList.add('add_input')
        editbtn.classList.add('edit')
        deletebtn.classList.add('deletebtn')
        done.classList.add('done')
        
        // value assign
        editbtn.innerHTML = `<i class="fa-regular fa-comment"></i>`;
        deletebtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        done.innerHTML = `<i class="fa-regular fa-circle-check">`;
        add_input.value = id_input.value;
        id_input.value = '';
        
        // set attribute
        add_input.setAttribute('readonly' , ('readonly'));
        
        // delete btn
        
        deletebtn.addEventListener('click' , ()=>{         
            i--
            totalTodo.innerHTML = i        
            add.remove()
if(add.classList[1] == 'abc'){
    a--
doneTodo.innerHTML = a

}
        })
        
        // edit btn
        
        editbtn.addEventListener('click' , ()=>{    
            editbtn.classList.toggle('save')
            
            add_input.removeAttribute('readonly' , ('readonly'))
            editbtn.innerHTML = `<i class="fa-regular fa-floppy-disk"></i>`;
            
            if(editbtn.classList[1] == 'save'){
                editbtn.innerHTML = `<i class="fa-regular fa-comment"></i>`;
                add_input.setAttribute('readonly' , ('readonly'));
                
            }
            
        })
        
        done.addEventListener('click' , ()=>{  
a++
doneTodo.innerHTML = a
add.classList.add('abc')
 add_input.style = ' text-decoration: line-through;'

        })
        
        
    }
        
    })
