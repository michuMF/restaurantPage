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
				<div className='absolute  sm:-left-20 md:-left-10  xl:text-black xl:-left-[140px]  text-c-1  w-[200px] z-0  text-center  '>
					<button
						onClick={() => {
							setMenu(MenuData)
						}}>
						<MdOutlineRestaurantMenu className='text-4xl  ' />
					</button>
				</div>
				{uniqueTags.map(tag => (
					<button
						className='uppercase z-10 '
						onClick={() => {
							setMenu(MenuData.filter(dish => dish.categories === tag))
						}}
						key={tag}>
						{tag}
					</button>
				))}
			</ul>
		</div>
	)
}

export default MenuFilter
