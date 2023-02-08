import React,{useRef} from 'react'

interface Props{
  todo : string,
  setTodo : React.Dispatch<React.SetStateAction<string>>,
  addTodo : (e:React.FormEvent)=>void
}

const From:React.FC<Props> = ({todo , setTodo , addTodo}) => {
  let inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='input'  onSubmit={(e)=>{
      addTodo(e);
      inputRef.current?.blur()
    }}>
        <input type="input" value={todo} ref={inputRef} onChange={(e)=>{setTodo(e.target.value)}} placeholder='Enter the task you want to do' className='input__box'/>
        <input type="submit" value="Go" className='input_submit' />
    </form>
  )
}

export default From