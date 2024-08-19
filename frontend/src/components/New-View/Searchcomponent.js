import React, { useState ,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {  List, ListItem, ListItemText , CircularProgress,} from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL='http://localhost:5000';
const Searchcomponent = () => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState('');
    const [limit, setLimit] = useState(9);
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();
    const handleSearch = async () => {
        try {
            const response = await axios.get(URL+'/search', { 
              params: { 
                query ,
                limit
              },headers: {
                 'x-auth-token': user?.token, // Include the token in the request headers
              },
             });
            setUsers(response.data);
        } catch (error) {
            console.error('Error searching users:', error);
        }
    }
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          navigate('/'); // Redirect to login if no user is found
        }
    },[navigate]);
    useEffect(() => {
        if (query) {
          handleSearch();
        } else {
          setUsers([]);
        }
    },[query, limit]);
  return (
    <div>
         <Autocomplete
                freeSolo
                options={users.map((user) => `${user.email}`)}
                inputValue={query}
                onInputChange={(event, newInputValue) => {
                    setQuery(newInputValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        type="text"
                        placeholder="Search for users"
                        onChange={handleSearch}
                        className="myInput"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        }}
                    />
                )}
            />
            <List>
                {users.map((user) => (
                    <ListItem key={user._id}>
                        <ListItemText primary={`${user.name} - ${user.email}`} />
                    </ListItem>
                ))}
            </List>
    </div>
  )
}

export default Searchcomponent;







 
