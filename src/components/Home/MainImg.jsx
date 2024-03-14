import { Link } from "react-router-dom"
import img1 from "../../assets/img1.jpg"
const MainImg = () => {
	return (
		<div className='  md:h-full relative   '>
			<div>
				<img
					src={img1}
					alt='img'
					className='rounded-xl  sm:h-[700px]  md:h-full   object-cover  
					'
					width={700}
					srcSet=''
				/>
			</div>
			<div className='absolute bottom-10 left-5   text-black bg-black bg-opacity-50 p-2 rounded-lg py-4 '>
				<h1 className='h1 font-bold mb-5 '>
					<span className='text-c-1'>Healthy</span> Food <br /> Made Easy
				</h1>
				<Link
					name='menu'
					to={"/Menu"}
					className='bg-c-1 p-3  text-black font-semibold   rounded-xl text-lg'>
					Place Your Order Now
				</Link>
			</div>
		</div>
	)
}

export default MainImg
