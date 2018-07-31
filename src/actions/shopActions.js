import actionTypes from '../constants/actionTypes';

const addProduct = (name, description, price) => ({
	type: actionTypes.SHOP_ADD_PRODUCT,
	payload: {
		name,
		description,
		price
	}
});

const clearShop = () => ({
	type: actionTypes.SHOP_CLEAR
});
const removeProduct = () => ({
	type: actionTypes.SHOP_REMOVE_PRODUCT

});
 export default {addProduct, clearShop, removeProduct}; 