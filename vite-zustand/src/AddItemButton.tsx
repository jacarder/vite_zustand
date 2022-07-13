import { Button } from '@chakra-ui/react'
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
		<Button colorScheme={'blue'} onClick={() => addItem({ id: id, label: label, description: description, count: 1 } as ICartItem)}>
			Add {label}
		</Button>
	)
}

export default AddItemButton