import { MdEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
const Contact = () => {
	const socials = [
		{ id: 0, link: "https://github.com/michuMF", icon: <FaGithub /> },
		{
			id: 1,
			link: "michu.ferenc@gmail.com",
			icon: <MdEmail />,
			email: true,
		},
		{
			id: 2,
			link: "https://www.linkedin.com/in/micha%C5%82-ferenc-7444b327a/",
			icon: <FaLinkedin />,
		},
	]

	return (
		<ul className='flex flex-col gap-4 items-center'>
			{socials.map(social => (
				<li key={social.id} className='flex items-center gap-2'>
					<a
						rel='preload'
						className='cursor-pointer'
						href={social.email ? `mailto:${social.link}` : social.link}>
						{social.icon}
					</a>
					<a
						className='text-xl'
						href={social.email ? `mailto:${social.link}` : social.link}>
						{social.link}
					</a>
				</li>
			))}
		</ul>
	)
}

export default Contact
