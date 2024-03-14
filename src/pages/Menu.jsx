import { Link, useOutletContext } from "react-router-dom"
import AddToBasket from "../components/Menu/AddToBasket"
import Section from "../components/Section"

import MenuFilter from "../components/Menu/MenuFilter"

const Menu = () => {
	const [, menuContext] = useOutletContext()

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
			</div>
		</Section>
	)
}

export default Menu
