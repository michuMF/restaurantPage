import { useOutletContext } from "react-router-dom"
import Section from "../components/Section"
import Basket from "../components/Payment/Basket"

const Payment = () => {
	const [basketContext] = useOutletContext()

	const { basket } = basketContext

	const totalBill = basket.reduce(
		(totalNumberAmount, item) => totalNumberAmount + item.amount * item.price,
		0
	)

	return (
		<>
			{totalBill > 0 ? (
				<Section className=' py-5   md:rounded-xl  bg-black  '>
					<div>
						<Basket />
						<h4 className='text-center py-5 h4 text-c-4 font-semibold'>
							Total: ${totalBill}.00
						</h4>
					</div>
				</Section>
			) : (
				<div className='flex justify-center p-5 mt-10'>
					<div className='bg-red-600 bg-opacity-50 p-2 px-4 rounded-lg '>
						<h3 className='h3'>Basket is Empty</h3>
					</div>
				</div>
			)}
		</>
	)
}

export default Payment
