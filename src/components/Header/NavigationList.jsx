import { NavLink } from "react-router-dom"
import { navigation } from "../../constant"
import { Fragment } from "react"

const NavigationList = ({ onClick, mobile }) => {
	return (
		<>
			{navigation.map(item => (
				<Fragment key={item.id}>
					<NavLink
						className={({ isActive }) => {
							if (mobile) {
								return "text-2xl text-black font-bold  "
							}

							return isActive
								? "  text-xl  bg-c-1 rounded-md p-1 text-black hover:scale-110 transition-all hover:text-c-4"
								: " text-xl hover:scale-110 hover:text-c-4 transition-all"
						}}
						onClick={onClick}
						to={item.to}>
						{item.title}
					</NavLink>
					<div className='border border-black w-3/5 md:hidden'></div>
				</Fragment>
			))}
		</>
	)
}

export default NavigationList
