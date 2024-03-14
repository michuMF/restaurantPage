import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx"

import NavigationList from "./NavigationList"

const MobileNavigation = () => {
	const [openNavigation, setOpenNavigation] = useState({
		menu: "opacity-100 z-1",
		x: "opacity-0 z-0",
		isOpen: false,
	})
	return (
		<>
			{openNavigation.isOpen && (
				<div className=' z-20   '>
					<div className='  m-auto   '>
						<ul className='w-full bg-c-1  flex flex-col items-center gap-7 absolute top-0 h-screen left-0 pt-[50%] '>
							<NavigationList
								mobile={true}
								onClick={() => {
									setOpenNavigation({
										menu: "opacity-100 z-1",
										x: "opacity-0 z-0",
										isOpen: false,
									})
								}}
							/>
						</ul>
					</div>
				</div>
			)}
			<div className='md:hidden relative    p-2 rounded-xl  w-[55px] h-[55px]'>
				<button
					onClick={() => {
						setOpenNavigation({
							menu: "opacity-0 z-0",
							x: "opacity-100 z-1",
							isOpen: true,
						})
					}}
					className={`${openNavigation.menu} absolute top-0 left-0 translate-x-1/3 translate-y-1/3 text-black transition-opacity    `}>
					<RxHamburgerMenu className='text-3xl ' />
				</button>
				<button
					onClick={() => {
						setOpenNavigation({
							menu: "opacity-100 z-1",
							x: "opacity-0 z-0",
							isOpen: false,
						})
					}}
					className={`${openNavigation.x} absolute top-0 left-0 translate-x-1/3 translate-y-1/3 text-black`}>
					<IoMdClose className='text-3xl' />
				</button>
			</div>
		</>
	)
}

export default MobileNavigation
