
import './App.css';
import Header from './components/Header'; 
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
// import Feilds from './components/Fields';
import ClearIcon from '@mui/icons-material/Clear';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  // To add a new object
  // const addData = () => {
    // setData({  id you just add to show the data in component
    //   name, email
    // });
  //   setData([...data, {name,email}]);
  //   setName("");
  //   setEmail("");
  // }
  const addData = () => {
    if (name.trim() !== "" && email.trim() !== "") {
      setData([...data, { name, email }]);
      setName("");
      setEmail("");
    }
  };

  // To remove a new object
  const removeItem = (index) => {
   let arr = data;
   arr.splice(index, 1);
   setData([...arr]);

  }


  return (
    <div className="App">
     <Header />
     {/* Form */}
      <div className="form">
      <Stack direction="row" spacing={2}>
        <TextField value={name} onChange={(event) => setName(event.target.value)}  id="outlined-basic" label="Name" variant="outlined" />
        <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
        <Button onClick={addData} variant="contained" color="success"><AddIcon /></Button>
      </Stack> 
      </div>

      {/* Data Show */}
        <div className='data'>
          <div className='data-val'>
            <h3>NAME</h3>
            <h3>EMAIL</h3>
            <h3>REMOVE</h3>
          </div>
          {
            data.map((element, index) => {
              return (
                <div key={index} className='data-val'>
                    <p>{element.name}</p>
                    <p>{element.email}</p>
                    <Button onClick={() => removeItem(index)} className="clear-btn"  color="error"><ClearIcon /></Button>
                  </div>
                // <Feilds key={index} name={element.name} email={element.email} index={index}  />
              )
            })

          }

        </div>
    </div>
  );
}

export default App;
