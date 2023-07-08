import React from 'react'
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';


const Fields = ({name, email, index}) => {
  return (
    <div className='data-val'>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <Button className="clear-btn" variant="contained" color="error"><ClearIcon /></Button>
    </div>
    
  )
}

export default Fields
