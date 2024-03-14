import { basketHandler } from "../../func/basketHandler"
const BasketButtons = ({ basket, item, setBasket }) => {
	const basketRemoveHandler = removeItem => {
		const updatedItems = basket.filter(item => {
			return item !== removeItem
		})

		setBasket(updatedItems)
	}
	return (
		<div className='flex flex-col items-center gap-8  '>
			<div className=' flex items-center gap-4'>
				<button
					onClick={() => basketHandler(basket, item, setBasket, true)}
					className='bg-c-1 px-2 rounded-md text-c-4'>
					+
				</button>
				<p className='text-xs text-c-1'>{item.amount}</p>
				<button
					onClick={() => {
						basketHandler(basket, item, setBasket)
					}}
					className='bg-c-1 px-2 rounded-md text-c-4'>
					-
				</button>
			</div>
			<button
				onClick={() => basketRemoveHandler(item)}
				className='w-full bg-c-4 px-2 rounded-md '>
				remove
			</button>
		</div>
	)
}

export default BasketButtons
