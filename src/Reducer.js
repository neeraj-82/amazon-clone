export const initialState={
    basket:[],
    // qnty:[],
    search:'',
    searchlist:'',
    user:null,
}


export const getValue=(basket)=>
basket?.reduce((amount,item)=>(item.price) + amount,0)


// export const disablebutton=(basket,id)=>console.log(basket,id);

const Reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
      
        case 'ADD_TO_BASKET':
            //LOgic for adding item to basket
           return{
                ...state,
                basket:[...state.basket,action.item],
                
              
           };
        
        case 'REMOVE_FROM_BASKET':
          
            //Loginc from removing itme to basket
            return {
               ...state,
                basket:[...action.item]
                
            };
            case 'SEARCH_ITEM':

            return{
                ...state,
                search:action.item,
                searchlist:action.searchlist,
                
            }
            case 'SET_USER':

            return{
                ...state,
                user:action.user
            }

        default:
            return state;
    }
}

export default Reducer;