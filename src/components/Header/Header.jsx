import Navigation from "./Navigation"

import MainLogo from "./MainLogo"
import BasketIcon from "./BasketIcon"
const Header = ({ basket }) => {
	return (
		<header className='px-16 md:px-0  mb-16 gap-10 md:flex-row pt-8 pb-1 flex items-center justify-between  max-w-[70rem]  md:mx-auto   '>
			<Navigation />
			<MainLogo />
			<BasketIcon basket={basket} />
		</header>
	)
}

export default Header
