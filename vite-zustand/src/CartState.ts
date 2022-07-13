import create from 'zustand';
import { ICartItem } from './models/cart.model';

type CartStore = {
	cart: ICartItem[];
	addItem: (item: any) => void;
	removeItem: (itemId: number) => void;
}
export const useCartStore = create<CartStore>(set => ({
	cart: [],
	addItem: (item: ICartItem) => set(state => addItem(state.cart, item)),
	removeItem: (itemId: number) => set(state => removeItem(state))
}))

const addItem = (cart: ICartItem[], item: ICartItem) => {
	const itemIndex = cart.findIndex(x => x.id === item.id);
	if (itemIndex >= 0) {
		const currentCount = cart[itemIndex].count;
		cart[itemIndex].count = currentCount + 1;
	} else {
		cart.push(item);
	}
	return {
		cart: cart
	}
}
const removeItem = (cart: ICartItem[], item: ICartItem) => {
	const itemIndex = cart.findIndex(x => x.id === item.id);
	if (itemIndex >= 0) {
		const currentCount = cart[itemIndex].count;
		cart[itemIndex].count = currentCount - 1;
		//	Remove item from cart if zero or less
		if (cart[itemIndex].count <= 0) {
			cart.splice(itemIndex, 1);
		}
	} else {
		cart.push(item);
	}
	return {
		cart: cart
	}
}