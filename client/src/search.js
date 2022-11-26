import React , {Component, useState, useEffect} from 'react';
import axios from 'axios';
import './search.css';



export default function Search(){

   const [username , setUsername] = useState('');
   const [users, setUsers] = useState([]);
   const[isEmpty , setIsEmpty] = useState(true)


  
 
    const handleUsername = (e)=>{
        setUsername(e.target.value)
        
   
    }

   const formSubmit=(e)=>{
        e.preventDefault();
        axios.get(`http://localhost:4000/app/search/${username}`)
        .then(res=>{
        
            setUsers(res.data)
            setIsEmpty(false)
            })
        }
    


        return(

                <div className="container">

                <div className='serach_div'>
                <form onSubmit={formSubmit} id="search-form">

               
                  <input type="text" placeholder="Search anything..."
                  required
                  value={username}
                  onChange={handleUsername} />

                  <button type='submit'>Search</button>
                  </form>


                    {users.length > 0 ? users.map(e => {
                    return(
                    <div  key={e._id} >
                        <table>
                    <tr>
                    <th>Full name</th>
                    <th>Email</th>
                    <th></th>
                        
                    </tr>
                    <tr>
                    
                    <td>{e.fullName}</td>
                   
                    <td>{e.email}</td>
                    <td><button>Contact</button>
                    </td>
                    
                    </tr>
                  
                    </table>
                    </div>
                  

                    )
                   
                    }

                    ): 
                    <div className={isEmpty ? 'not' : 'notapear'}>
                    <h2>not found</h2> 

                   </div>}
                                    </div>
                                
                            
                                    </div>
                                    
                                
                                
                            
 

          
        
        )
      

    }
    
    

