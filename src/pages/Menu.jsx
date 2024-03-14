import { Link, useOutletContext } from "react-router-dom"
import AddToBasket from "../components/Menu/AddToBasket"
import Section from "../components/Section"

import MenuFilter from "../components/Menu/MenuFilter"

const Menu = () => {
	const [basketContext, menuContext] = useOutletContext()

	const { basket } = basketContext
	const sumPrice = basket.reduce(
		(totalPrice, item) => totalPrice + item.price,
		0
	)
	const sumAmount = basket.reduce(
		(totalNumberAmount, item) => totalNumberAmount + item.amount,
		0
	)
	const { menu } = menuContext
	return (
		<Section className=''>
			<MenuFilter />
			<div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4  '>
				{menu.map(dish => (
					<div className=' px-2 md:px-0 w-full  mx-auto' key={dish.id}>
						<Link to={`/Menu/${dish.name}`} className='bg-white rounded-t-2xl  '>
							<div className='  md:w-full pb-1 h-[15rem]    '>
								<img
									className='rounded-md   w-full object-cover md:rounded-2xl h-full'
									src={dish?.img}
									alt={dish.name}
								/>
							</div>
						</Link>
						<AddToBasket dish={dish} key={dish.id} />
					</div>
				))}
				{sumAmount > 0 && (
					<Link
						to='/Payment'
						className={`fixed md:hidden  bottom-20 left-1/2 -translate-x-1/2  text-white p-3 px-6 bg-black rounded-2xl`}>
						Order {sumAmount} for ${sumPrice}.00
					</Link>
				)}
			</div>
		</Section>
	)
}

export default Menu
