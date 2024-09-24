import './App.css'

function Todoapplication(){

return(

  <div className='box'>

<div className='h1'>
  <img id='img' src="https://w7.pngwing.com/pngs/670/265/png-transparent-checkmark-done-exam-list-pencil-todo-xomo-basics-icon-thumbnail.png" alt="" />
<h1>Todo List</h1>
</div>

<div className='input'>
  <input type="text" placeholder='Add Task' />
  <button>Add</button>
</div>

<ul id='Tasklist'></ul>

  </div>



)




}

export default Todoapplication


