import React from 'react'
import {connect} from 'react-redux'
import {fetchSmurfs} from '../store/actions'

const SmurfVillage = props => {



  return (
    <div>
      <h2>Meet the Village!</h2>

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