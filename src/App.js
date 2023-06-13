import React from 'react'
import TodoAd from './TodoAd';
import {
    collection,
    query,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
    addDoc,setDoc,orderBy,serverTimestamp
  } from "firebase/firestore";
  import { db } from "./Components/Firebase.js";
import ListStyling from './Components/ListStyling';
import './Components/styling.css';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button,IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { createTheme,ThemeProvider } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Alert from '@mui/material/Alert';
uuidv4();

const App = () => {
    const theme = createTheme({
        palette: {
          custom: {
            light: '#7BD518',
            main: '#673ab7',
            dark: '#D51898',
          },
        },
      });
    const [item,setItem]=useState('');

    const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todoss"));
    const f= query(q,orderBy('timeStamp','desc'));
    const unsub = onSnapshot(f, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todoss", todo.id), { title: title, timeStamp:serverTimestamp()});
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todoss", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todoss", id));
  };

  const message='This is an error alert — check it out! ';
  const AddTodo=async()=>{
    if(item!==''){
      const docRef = await addDoc(collection(db,"todoss"), {
        title: item,
        id: uuidv4(),
        timeStamp:serverTimestamp(),
        completed:false,
      });
      console.log("Document written with ID: ", docRef.id);
      setItem('');
    }  else{
      <Alert severity="info">{message}</Alert>

    }
    
  
  }
    
  const onFormSubmit=(event)=>{
  event.prevent.default();}
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <div className="div-todo">
        <div className='divTo'>
          <h1 style={{fontSize:'4rem',color:'#eae4e9'}}>To-Do-List</h1>
        </div>
        <form className='divInput' onSubmit={onFormSubmit}>
        <TextField focused id="outlined-basic"color='custom' label="Enter your ToDoList Item" value={item} variant="outlined"  onChange={(e)=>setItem(e.target.value)} className='TextFieldd'/>
          {/* <input className='input' type='text' value={todo} placeholder='Enter your ToDo' onChange={handleChange}></input> */}
          <IconButton sx={{backgroundColor:'#673ab7'}} className='IconBtn' onClick={AddTodo}>
            <AddIcon sx={{fontSize:'2rem'}} className='Icon'/>
          </IconButton>
        </form>
</div>
      
        <div className="todo_container">
        {todos.map((todo) => (
          <ListStyling
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
    </ThemeProvider>

  )
}

export default App;