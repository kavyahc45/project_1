const initialState={
    name:'',
    vehicletype: '',
    vehiclename: '',
    price: '',
    premium: ''
    }
    
    export default(state = initialState,action)=>{
    switch(action.type){
    
    case "VEHICLE":{
    return{...state,
    name:action.payload.name,
    vehicletype:action.payload.vehicletype,
    vehiclename:action.payload.vehiclename,
    price:action.payload.price,
    premium:action.payload.premium
    
    }
    }
    default:
    return state;
    }
    
    }