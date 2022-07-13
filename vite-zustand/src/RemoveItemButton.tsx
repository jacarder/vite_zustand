import { MinusIcon } from '@chakra-ui/icons'
import { Button, IconButton } from '@chakra-ui/react'
import { useCartStore } from './CartState'

type Props = {
	itemId: number,
	label: string
}

const RemoveItemButton = ({
	itemId,
	label
}: Props) => {
	const { removeItem } = useCartStore();
	return (
		<Button colorScheme={'red'} onClick={() => removeItem(itemId)}>Remove {label}</Button>
	)
}

export default RemoveItemButton