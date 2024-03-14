import { useOutletContext } from "react-router-dom"
import BasketButtons from "./BasketButtons"
import { Fragment } from "react"

const Basket = () => {
	const [basketContext] = useOutletContext()

	const { basket, setBasket } = basketContext
	return (
		<>
			{basket?.map(item => (
				<Fragment key={item.id}>
					<div className=' flex flex-col md:flex-row  items-center py-2 md:py-10 gap-4 justify-around  '>
						<div className='gap-10 mb-5 md:mb-0 md:gap-0 flex md:items-center justify-between md:w-[400px] '>
							<h4 className='h4 w-[225px]   shadow-sm shadow-c-1 bg-c-1 text-c-4 text-center rounded-xl'>
								{item.name}
							</h4>

							<div className='text-center  relative  '>
								<img
									className='h-[100px] object-cover rounded-xl border border-c-3'
									width={100}
									src={item.img}
									alt='food'
								/>
								<p className='left-1/2 -translate-x-1/2 absolute justify-self-start mt-2 font-semibold text-c-1'>
									${item.price}.00
								</p>
							</div>
						</div>

						<BasketButtons basket={basket} item={item} setBasket={setBasket} />
						<div className=''>
							<p className='font-semibold text-c-1 tracking-wider'>
								Price: ${item.price * item.amount}.00
							</p>
						</div>
					</div>
					<div className=' border-c-1 border-b w-[90%] mx-auto'></div>
				</Fragment>
			))}
		</>
	)
}

export default Basket
