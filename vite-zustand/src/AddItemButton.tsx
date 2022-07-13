import React from 'react'
import { useCartStore } from './CartState'
import { ICartItem } from './models/cart.model'

type Props = {
	id: number,
	label: string,
	description: string
}

const AddItemButton = ({
	id,
	label,
	description
}: Props) => {
	const { addItem } = useCartStore();
	return (
		<button onClick={() => addItem({ id: id, description: description, count: 1 } as ICartItem)}>
			Add {label}
		</button>
	)
}

export default AddItemButton