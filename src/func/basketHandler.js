export const basketHandler = (array, item, setValue, isIncrement) => {
	const existingCartIndex = array.findIndex(it => it.name == item.name)
	const updatedItems = [...array]
	if (existingCartIndex > -1) {
		const existingItem = updatedItems[existingCartIndex]

		if (isIncrement) {
			const existingUpdateItem = {
				...existingItem,
				amount: existingItem.amount + 1,
			}

			updatedItems[existingCartIndex] = existingUpdateItem
		} else {
			const existingUpdateItem = {
				...existingItem,
				amount: existingItem.amount - 1,
			}

			updatedItems[existingCartIndex] = existingUpdateItem

			if (existingItem.amount === 0) {
				return
			}
		}
	} else {
		updatedItems.push({ ...item, amount: 1 })
	}

	setValue(updatedItems)
}
