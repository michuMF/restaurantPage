import { Link, useParams } from "react-router-dom"
import { MenuData } from "../constant"
import Section from "../components/Section"
import { CiForkAndKnife } from "react-icons/ci"

useParams

const Dish = () => {
	const { dish } = useParams()

	const currentDishPlace = MenuData.filter(item => item.name === dish)
	const [currentDish] = currentDishPlace

	return (
		<Section className='flex justify-center relative '>
			<Link
				className='absolute left-0 text-lg top-0 bg-c-1 text-c-4 p-1 rounded-md  md:p-2 md:text-xl lg:p-4 lg:text-2xl'
				to='/Menu'>
				<CiForkAndKnife />
			</Link>

			<div className=' bg-c-2 bg-opacity-50 flex flex-col items-center p-4 rounded-lg text-center shadow-md shadow-c-1   '>
				<h2 className='h2 py-2  uppercase text-c-1'>{dish}</h2>

				<img
					className='w-[400px] h-[400px]  object-cover rounded-lg     '
					src={currentDish.img}
					alt='item'
				/>

				<div className='py-2 flex w-[400px]'>
					<p>{currentDish.description}</p>
				</div>
			</div>
		</Section>
	)
}

export default Dish
