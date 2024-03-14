import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
const Home = lazy(() => import("./pages/Home"))
const Menu = lazy(() => import("./pages/Menu"))
const Dish = lazy(() => import("./pages/Dish"))
const Payment = lazy(() => import("./pages/Payment"))
const About = lazy(() => import("./pages/About"))
const Root = lazy(() => import("./pages/Root"))
const Contact = lazy(() => import("./pages/Contact"))

const queryClient = new QueryClient()
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback='loading'>
				<Root />
			</Suspense>
		),

		errorElement: <p>Error</p>,
		children: [
			{
				path: "",
				element: (
					<Suspense fallback='loading'>
						<Home />
					</Suspense>
				),
			},
			{
				path: "/Menu",
				element: (
					<Suspense fallback='loading'>
						<Menu />
					</Suspense>
				),
			},
			{
				path: "/Menu/:dish",
				element: (
					<Suspense fallback='loading'>
						<Dish />
					</Suspense>
				),
			},
			{
				path: "/Payment",
				element: (
					<Suspense fallback='loading'>
						<Payment />
					</Suspense>
				),
			},
			{
				path: "/About",
				element: (
					<Suspense fallback='loading'>
						<About />
					</Suspense>
				),
			},
			{
				path: "/Contact",
				element: (
					<Suspense fallback='loading'>
						<Contact />
					</Suspense>
				),
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
)
