import React from 'react'
import './styling.css';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
const ListStyling = ({todo,
  toggleComplete,
  handleDelete,
  handleEdit,}) => {
      const [newTitle, setNewTitle] = React.useState(todo.title);

    const handleChange = (e) => {
      e.preventDefault();
      if (todo.complete === true) {
        setNewTitle(todo.title);
      } else {
        todo.title = "";
        setNewTitle(e.target.value);
      }
    };
    const customHoverFocus= {
      "&:hover, &.Mui-focusVisible": { backgroundColor: "#d4a373", },
    }
     
  return (
    <div style={{border:'1px solid #184e77',marginTop:'1rem'}}>
      <div className='listDiv' style={{textAlign: 'left',width:'60%',backgroundColor:'#8e9aaf'}}>
      <TextField sx={{textDecoration: todo.completed && "line-through",}} className="div1" onChange={handleChange}
        value={todo.title === "" ? newTitle : todo.title} multiline        >
        </TextField>
      {/* <p style={{textDecoration: todo.completed && "line-through",}} className="div1" onChange={handleChange}>
        {todo.title === "" ? newTitle : todo.title}
        </p> */}
    <div style={{justifyContent:'right'}}>
    <Tooltip title="Delete" placement="top">
      <IconButton color="secondary" className='IcBtn' onClick={() => handleDelete(todo.id)} sx={customHoverFocus}>
        <DeleteOutlinedIcon  className='Icons'/>
      </IconButton>
      </Tooltip>
      <Tooltip title="Edit" placement="top">
      <IconButton  color="secondary" className='IcBtn'onClick={() => handleEdit(todo, newTitle)} sx={customHoverFocus}>
        <CreateOutlinedIcon  className='Icons'/>
      </IconButton>
      </Tooltip>

      <Tooltip title="Completed" placement="top">

      <IconButton  color="secondary" className='IcBtn'onClick={() => toggleComplete(todo)} sx={customHoverFocus}>
        <DoneOutlineOutlinedIcon  className='Icons'/>
      </IconButton>
      </Tooltip>


                
    </div>
    </div>
    </div>
  )
}

export default ListStyling