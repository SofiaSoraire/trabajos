import actionTypes from '../constants/actionTypes';

const initialState = {
    list: [{
        name: 'Cerveza Patagonia Porter',
        description: 'Llegó la cerveza más oscura de Patagonia. Una cerveza de estilo inglés con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 92
    },{
        name: 'Cerveza Patagonia Porter',
        description: 'Llegó la cerveza más oscura de Patagonia. Una cerveza de estilo inglés con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 92
    },{
        name: 'Cerveza Patagonia Porter',
        description: 'Llegó la cerveza más oscura de Patagonia. Una cerveza de estilo inglés con una espuma cremosa y persistente, gracias al agregado de avena, da una sensación suave en boca. ',
        price: 92
    }]
};
 export const commentList = (state, action) => { switch (action.type) { 
    case 'ADD_COMMENT': let newComment = { comment: action.data, id: +new Date }; 
 return state.concat([newComment]); 
 case 'DELETE_COMMENT': let commentId = action.data; 
 default: return state || []; 
} 
} 
const productsReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.PRODUCTS_GET_LIST: {
            return state;
        }

        default:
            return state;
    }

};

export default productsReducer;


