import Form from './Components/Form';
import axios from 'axios';

 const App=()=> {

  // const promise =axios.get('http://localhost:3000/comment').then(response=>{
  //   console.log(promise);
  //   //USING VARIABLES
  //   // const posts=response.data
  //   // console.log(posts)
  //   console.log(response.data)
  // })
  const submit=(t, a, id)=>{
    axios
    .post('http://localhost:3000/post',{
      author:a,
      title:t,
      id:id
    })
    .then(response=>{
      console.log(response) 
    })
    .catch(error=>{
      console.log(error)
    });

    axios
    .put('http://localhost:3005/post/1',{
      author:"Slyvia",
      title:"This is an updated Input",
      id:1
    })
    .then(response=>{
      console.log(response)  
    })
    .catch(error=>{
      console.log(error)
    });
  }

  axios
  .get('http://localhost:3005/post')
  .then(response=>{
    console.log(response)
  })

  return(
     <>

      <Form  SubmitForm={submit} />
     </>
  )

 }

export default App;













/*const[todos, setTodos]=React.useState([])
const[todo, setTodo]=React.useState('')
const[todoEditing,setTodoEditing]=React.useState(null)
 const [editingText, setEditingText]= React.useState('')
  
//retrieval from local stoarge
React.useEffect(()=>{
  let temp=localStorage.getItem("todos")
  const loadedTodos=JSON.parse(temp)
 if(loadedTodos){
  setTodos(loadedTodos)
 }
  
  
 
}, [] )


//save in local storage
React.useEffect(()=>{
  const temp=JSON.stringify(todos)
  localStorage.setItem('todos',temp)
},[todos])

 function handleSubmit(e){
  e.preventDefault()
  //Making the object for todos array
  const newTodo={
    id:new Date().getTime(),
    text:todo,
    completed:false,
  }
  setTodos([...todos].concat(newTodo))
  setTodo('')



 }
 function deleteTodo(id){
  const updatedTodos=[...todos].filter((todo)=>todo.id !==id)
  setTodos(updatedTodos)

 }
 function toggleComplete(id){
  const updatedTodos=[...todos].map((todo)=>{
    if(todo.id===id){
      todo.completed=!todo.completed
    }
    return todo
  })
  setTodos(updatedTodos)
 }

 function editTodo(id){
  const updatedTodos=[...todos].map((todo)=>{
    if (todo.id===id){
      todo.text=editingText
    }
    return todo
  })
  setTodos(updatedTodos)
  setTodoEditing(null)
  setEditingText('')
 }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e)=>setTodo(e.target.value)} value={todo}/>
        <button type='submit'>Add Todo</button>
      </form>
      {todos.map((todo)=><div key={todo.id}>

        {todoEditing===todo.id ?
        (<input
         type='text'
       onChange={(e)=>setEditingText(e.target.value)}
       value={editingText}
       />)
       :
       (<div> {todo.text}</div>)}

       
       



       <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
       <input 
       type='checkbox'
        onChange={()=>toggleComplete(todo.id)} checked={todo.completed}/>

        {todoEditing===todo.id 
        ?
        (<button onClick={()=>editTodo(todo.id)}>Submit Edits</button>)
        :
        (<button onClick={()=>setTodoEditing(todo.id)}
        >Edit Todo</button>)}
        
        

        </div>)}

      </div>
  
  );*/

