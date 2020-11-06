import React, { useState } from "react";

const SmurfsForm = props => {


  return (
    <div>
      <h2>Immigration Form</h2>
      <form>
        <label>Name:</label>
        <input 
          id='name'
          type='text'
          name='name'

        />
        <label>Age:</label>
        <input 
          id='age'
          type='text'
          name='age'
          
        />
        <label>Height:</label>
        <input 
          id='height'
          type='text'
          name='height'
          
        />
      </form>
    </div>
  )
}

export default SmurfsForm