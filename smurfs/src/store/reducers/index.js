import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE,   PUSH_SMURFS_START,  PUSH_SMURFS_SUCCESS,   PUSH_SMURFS_FAILURE} from '../actions'

const initialState = {
  isLoading: false,
  smurfData: [],
  error:''
}

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading:true,
        error:''
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading:false,
        smurfData:action.payload
      }
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isLoading:false,
        error:action.payload
      }
      case PUSH_SMURFS_START:
        return {
          ...state,
          isLoading:true,
          error:''
        }
      case PUSH_SMURFS_SUCCESS:
        return {
          ...state,
          isLoading:false,
          smurfData:action.payload
        }
      case PUSH_SMURFS_FAILURE:
        return {
          ...state,
          isLoading:false,
          error:action.payload
        }
    default:
      return state
  }
}