const initialState={
    name:'',
    cropname: '',
    area: '',
    price: '',
    premium: ''
    }
    
    export default(state = initialState,action)=>{
    switch(action.type){
    
    case "CROP":{
    return{...state,
    name:action.payload.name,
    cropname:action.payload.cropname,
    area:action.payload.area,
    price:action.payload.price,
    premium:action.payload.premium
    
    }
    }
    default:
    return state;
    }
    
    }