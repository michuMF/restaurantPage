import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import { useState } from "react"
import { MenuData } from "../constant"

export default function Root() {
	const [basket, setBasket] = useState([])

	const [menu, setMenu] = useState(MenuData)

	return (
		<>
			<div className='font-grotesk bg-c-1 min-h-screen '>
				<Header basket={basket} setBasket={setBasket} />

				<Outlet
					context={[
						{ basket, setBasket },
						{ menu, setMenu },
					]}
				/>
			</div>
		</>
	)
}
