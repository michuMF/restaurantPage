import { useOutletContext } from "react-router-dom"
import { MenuData } from "../../constant"
import { MdOutlineRestaurantMenu } from "react-icons/md"

const MenuFilter = () => {
	const menuTags = MenuData.map(dish => dish.categories)

	const [, menuContext] = useOutletContext()

	const { setMenu } = menuContext

	const uniqueTags = [...new Set(menuTags)]

	return (
		<div className='  w-[100%] mx-auto md:w-full p-2 my-1 border-4 border-black rounded-lg bg-black text-c-4 '>
			<ul className='flex relative  justify-around text-xl font-semibold  items-center '>
				<li className='absolute  bg-  sm:-left-90 md:-left-8  xl:text-black xl:-left-[140px]  text-c-1  w-[100px] z-0  text-center  '>
					<button
						onClick={() => {
							setMenu(MenuData)
						}}>
						<MdOutlineRestaurantMenu className='text-4xl  ' />
					</button>
				</li>
				{uniqueTags.map(tag => (
					<li key={tag}>
						<button
							className='uppercase z-40 hover:scale-110 hover:text-c-1 transition-all '
							onClick={() => {
								setMenu(MenuData.filter(dish => dish.categories === tag))
							}}>
							{tag}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MenuFilter
