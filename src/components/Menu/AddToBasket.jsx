import { SlBasket } from "react-icons/sl"
import { useOutletContext } from "react-router-dom"
import { basketHandler } from "../../func/basketHandler"

const AddToBasket = ({ dish }) => {
	const [basketContext] = useOutletContext()

	const { basket, setBasket } = basketContext

	return (
		<div className='bg-c-4 rounded-b-2xl p-3 text-xs text-white flex items-center justify-between'>
			<div className='flex flex-col gap-2'>
				<h2 className=''>{dish.name}</h2>
				<p>${dish.price}.00</p>
			</div>
			<button
				onClick={() => basketHandler(basket, dish, setBasket, true)}
				className='bg-white text-c-4 p-2 rounded-full text-xl transition-all hover:scale-105'>
				<SlBasket />
			</button>
		</div>
	)
}

export default AddToBasket
