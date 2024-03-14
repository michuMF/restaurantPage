import Logo from "../../assets/logo2.png"

const MainLogo = () => {
	return (
		<div className=' justify-start  md:flex-1 flex md:justify-center  '>
			<div className='md:border-c-2 border md:p-7 rounded-full hover:bg-c-1 transition-all cursor-pointer'>
				<img src={Logo} className='w-20 0 scale-[250%]' alt='logo' />
			</div>
		</div>
	)
}

export default MainLogo
