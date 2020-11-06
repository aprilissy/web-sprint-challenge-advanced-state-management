import React, { useRef } from "react";
import {connect} from 'react-redux'
import {pushSmurfs} from '../store/actions'

const SmurfsForm = props => {
  const nameRef = useRef()
  const ageRef = useRef()
  const heightRef = useRef()

  function handleSubmit(e){
    e.preventDefault()
    props.pushSmurfs({
      name: nameRef.current.value,
      age: ageRef.current.value,
      height: heightRef.current.value
    })
  }


  return (
    <div>
      <h2>Like what you see?</h2>
      <h3>Fill out our Immigration Form:</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          id='name'
          type='text'
          name='name'
          ref={nameRef}
        />
        <label>Age:</label>
        <input 
          id='age'
          type='text'
          name='age'
          ref={ageRef}
          
        />
        <label>Height:</label>
        <input 
          id='height'
          type='text'
          name='height'
          ref={heightRef}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default connect(null, {pushSmurfs})(SmurfsForm)