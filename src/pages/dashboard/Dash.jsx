import React from 'react';
import { Link } from 'react-router-dom';
import Posts from "../../components/posts/Posts";
import Addprod from '../addprod/Addprod';
import "./dash.css";

function Dash({posts}) {
    return (
        <div>
            <h1 className='dashtitle'>DashBoard</h1>
            <button className="addlink"><Link to={'/add'}>Add Product</Link></button>
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
                   <Posts/>     
            </div>
                </form>
        </div>
    );
}

export default Dash;