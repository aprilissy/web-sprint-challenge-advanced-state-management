import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSmurfs} from '../store/actions'

const SmurfVillage = props => {

  useEffect(() => {
    props.fetchSmurfs()
  },[])
  console.log('smurfData',props.smurfData);
  


  return (
    <div className='villagers'>
      <h2>Meet The Village</h2>
      {props.isLoading ? <p>Loading Villagers...</p> : null}
      {props.error ? <p>{props.error}</p> : null}
      {props.smurfData.map((smurf) => {
        return(
        <div>
          <p>{smurf.name}: {smurf.age} years old, {smurf.height} tall.</p>
        </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfData: state.smurfData,
    error:state.error
  }
}
export default connect(mapStateToProps, {fetchSmurfs})(SmurfVillage)