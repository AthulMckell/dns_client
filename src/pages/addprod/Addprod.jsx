import React from 'react';

function Addprod(props) {
    return (
        <div>
           <div className="login">
      <span className="loginTitle">Add Product</span>
      <form className="loginForm" >
        
        <input className="loginInput" type="text" placeholder="Name" /><br/>
        <input className="loginInput" type="text" placeholder="Price" /><br/>
        <input className="loginInput" type="text" placeholder="Quantity" /><br/>
        <input className="loginInput" type="text" placeholder="Category" /><br/>
        <button className="loginButton" type="submit">Add</button>
      </form>
        
    </div>
        </div>
    );
}

export default Addprod;