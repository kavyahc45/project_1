const initialState={
    Name:'',
    email:'',
    Address:'',
    MobileNum:''
    }
    
    export default(state = initialState,action)=>{
    debugger
    switch(action.type){
    
    case "REGISTER":{
    return{...state,
    
        Name:action.payload.Name,
        email :action.payload.email ,
        Address :action.payload.Address ,
       MobileNum:action.payload.MobileNum
    }
    }
    default:
    return state;
    }
    }
    
    