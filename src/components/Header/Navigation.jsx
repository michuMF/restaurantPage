import MobileNavigation from "./MobileNavigation"
import NavigationList from "./NavigationList"

const Navigation = () => {
	return (
		<nav className='  md:flex-1 max-w-[320px] z-10'>
			<ul className=' hidden   md:flex  gap-4 items-center shadow-sm  p-2  bg-black  rounded-xl text-white'>
				<NavigationList />
			</ul>

			<MobileNavigation />
		</nav>
	)
}

export default Navigation
