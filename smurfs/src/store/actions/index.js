import axios from 'axios'

//Action types
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

// Action creators (async)
export const fetchSmurfs = () => {
  return (dispatch) => {
    // async actions:
    dispatch({type:FETCH_SMURFS_START})
    // fetch data
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log('res',res);
        dispatch({type:FETCH_SMURFS_SUCCESS, payload:res.data})
      })
      .catch(err => {
        console.log('err',err);
        dispatch({type:FETCH_SMURFS_FAILURE, payload:err.message})
      })
  }
}