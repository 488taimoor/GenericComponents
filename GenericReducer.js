import {Name_Action} from '../constant/carlisting'
import {Name_Status} from '../constant/carlisting'
 const carListing_initialState = {
    Name_Status: Name_Status.carListing.NEW,
  };

  export const ReducerName = (state = carListing_initialState, action)=> {
   console.log(action.type);
    switch(action.type) {

      case Name_Action.carListing.NEW:
        console.log("I am from Reducer new..");
        return { ...state, Name_Status: Name_Status.carListing.NEW};
        case Name_Action.carListing.POST:
        console.log("I am from Reducer Loading..");
        return { ...state, Name_Status: Name_Status.carListing.LOADING};
        case Name_Action.carListing.SUCCESS:
        console.log("I am from Reducer Success..");
        return { ...state, Name_Status: Name_Status.carListing.SUCCESS};
        case Name_Action.carListing.FAILURE:
        console.log("I am from Reducer FAILURE..");
        return { ...state, Name_Status: Name_Status.carListing.FAILURE};
        case Name_Action.carListing.NETWORK_FAILURE:
        console.log("I am from Reducer NETWORK_FAILURE..");
        return { ...state, Name_Status: Name_Status.carListing.NETWORK_FAILURE};
      
        default:
      console.log("default is firing")

        return {...state};

    }
  };
