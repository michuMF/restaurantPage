const Section = ({ className, children }) => {
	return (
		<section className={`${className || ""} w-full max-w-[70rem] mx-auto mt-10 `}>
			{children}
		</section>
	)
}

export default Section
