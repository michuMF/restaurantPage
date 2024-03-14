import { SlBasket } from "react-icons/sl"
import { Link } from "react-router-dom"
const BasketIcon = ({ basket }) => {
	const sumAmount = basket.reduce(
		(totalNumberAmount, item) => totalNumberAmount + item.amount,
		0
	)

	return (
		<>
			<div className='hidden md:flex-1 b md:flex justify-end  max-w-[320px]'>
				<div className='bg-black  flex items-center gap-4 p-1 rounded-md border-c-4 text-white'>
					<button className='px-2  hover:scale-105 hover:text-c-4 transition-all'>
						Sign up
					</button>

					<Link
						to='/payment'
						className='bg-black border-white border p-2 text-white hover:scale-105 hover:bg-white hover:border-black hover:text-black     transition-all rounded-full relative'>
						<SlBasket className='text-2xl  ' />
						<p className='text-xs  w-4 font-bold rounded-full text-white absolute -top-2 bg-c-4 right-0 text-center'>
							{sumAmount > 0 && sumAmount}
						</p>
					</Link>
				</div>
			</div>
		</>
	)
}

export default BasketIcon
