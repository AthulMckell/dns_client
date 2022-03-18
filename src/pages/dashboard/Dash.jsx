import React from 'react';
import { Link } from 'react-router-dom';
import Post from "../../components/posts/Post";

function Dash({posts}) {
    return (
        <div>
            <h1>DashBoard</h1>
            <form>
                <input type="search" placeholder="Search"></input>
                    <select>
                    <option value= "Category" defaultValue >Category</option>
                    <option value = "BMW"> BMW   
                    </option>  
                    <option value = "Mercedes"> Mercedes   
                    </option>  
                    <option value = "Audi"> Audi  
                    </option>  
                    <option value = "Skoda"> Skoda  
                    </option>  
                    </select>
                    <button>Search</button>
            <div>
                        
            </div>
                </form>
        </div>
    );
}

export default Dash;