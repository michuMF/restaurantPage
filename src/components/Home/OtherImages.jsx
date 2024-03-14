import deser from "../../assets/deser.jpg"
import soup from "../../assets/soup.jpg"
const OtherImages = () => {
	return (
		<div className='hidden  relative md:flex flex-col gap-4  '>
			<div className=' flex-1'>
				<img
					src={soup}
					alt='img'
					className='rounded-xl aspect-[12/6] h-full   object-cover  
					'
					width={700}
				/>
			</div>
			<div className=' flex-1'>
				<img
					src={deser}
					alt='img'
					className='rounded-xl  aspect-[11/6] h-full    object-cover  
					'
					width={700}
				/>
			</div>
		</div>
	)
}

export default OtherImages
