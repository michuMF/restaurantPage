import Section from "../components/Section"

import MainImg from "../components/Home/MainImg"
import OtherImages from "../components/Home/OtherImages"

const Home = () => {
	return (
		<div className='block relative  '>
			<Section className=' h-[calc(46% - 100px)] bg-red  rounded-3xl mt-4  '>
				<div className='md:rounded-xl   -mt-8   grid md:grid-cols-2 p-5 bg-black gap-5   '>
					<MainImg />
					<OtherImages />
				</div>
			</Section>
		</div>
	)
}

export default Home
