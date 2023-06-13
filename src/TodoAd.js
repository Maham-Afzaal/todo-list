import './Components/styling.css';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button,IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { createTheme,ThemeProvider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ListStyling from './Components/ListStyling';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { db } from './Components/Firebase';
import { v4 as uuid } from 'uuid';
import { collection, addDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function TodoAd() {
  const [item,setItem]=useState('');
//   const handleChange=(e)=>{
//     setItem(e.target.value);
//     // console.log('item in handle change'+item);
//   }
// const listFn=()=>{
//   console.log('items sho: '+item);
//   setTodo((todo)=>{
// return [...todo,item];
//   })
// console.log(todo);
// setItem('');
// }

const theme = createTheme({
  palette: {
    custom: {
      light: '#7BD518',
      main: '#673ab7',
      dark: '#D51898',
    },
  },
});

// const deleteByIndex = (index) => {
//   console.log(index);
//   setTodo(oldValues => {
//     return oldValues.filter((_, i) => i !== index)
//   })
// }
// const indexShow=(i)=>{
// console.log(i);
// }
const AddTodo=async()=>{
  try {
    const docRef = await addDoc(collection(db, "todoss"), {
      title: item,
      id: uuidv4(),
      completed:false,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}
const onFormSubmit=(event)=>{
event.prevent.default();

}
    return (
      <ThemeProvider theme={theme}>
      <div className="div-todo">
        <div className='divTo'>
          <h1>To-Do-List</h1>
        </div>
        <form className='divInput'>
        <TextField focused id="outlined-basic"color='custom' label="Enter your ToDoList Item" value={item} variant="outlined" sx={{width:'60%',pr:'5px'}} onChange={(e)=>setItem(e.target.value)}/>
          {/* <input className='input' type='text' value={todo} placeholder='Enter your ToDo' onChange={handleChange}></input> */}
          <IconButton sx={{backgroundColor:'#673ab7'}} className='IconBtn' onClick={AddTodo}>
            <AddIcon sx={{fontSize:'2rem'}} className='Icon'/>
          </IconButton>
        </form>
</div>
      
    </ThemeProvider>
  );
}

export default TodoAd;
