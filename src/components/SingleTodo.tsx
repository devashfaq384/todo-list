import React,{useState ,useRef , useEffect } from 'react'
import { Todo } from '../types'

type SingleProps = {
    item : Todo,
    todos : Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
}
const SingleTodo:React.FC<SingleProps> = ({item , todos , setTodos }:SingleProps) => {
    const [edit, setedit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(item.todo)
    const done = (id: number) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
      };
    
      const del = (id:number)=>{
        setTodos(todos.filter((item)=>item.id !== id ))
      }
      const editSave = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
          todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setedit(false);
      };
      const editRef= useRef<HTMLInputElement>(null)

      useEffect(() => {
        editRef.current?.focus()
      }, [edit])
      

    return (
    <form className='todos__single' onSubmit={(e)=>editSave(e,item.id)}>
        {
            edit?(
                <input type="text" value={editTodo} ref={editRef} onChange={(e)=>{setEditTodo(e.target.value)}} className="todos__single--text" />
            ):(
                item.isDone ?(
                    <s className='todos__single--text'>{item.todo}</s>
                ):(
                    <span className='todos__single--text'>{item.todo}</span>
                )
            )
        }
        
        <div>
        <i className="bi bi-pen icon" onClick={()=>{
            if(!edit && !item.isDone){
                setedit(!edit)
            }
        }}></i>
        <i className="bi bi-trash3-fill icon" onClick={()=>{del(item.id)}}></i>
        <i className="bi bi-check2 icon" onClick={()=>{done(item.id)}}></i>
        </div>
    </form>
  )
}

export default SingleTodo