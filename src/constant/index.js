// import img1 from "../assets/img1.jpg"
// import img2 from "../assets/img2.jpg"

// export { img1, img2 }

import Salmon from "../assets/menu/Salmon.jpg"
import Chicken from "../assets/menu/Chicken.jpg"
import Salad from "../assets/menu/Salad.jpg"
import Lentil from "../assets/menu/lentil.jpg"
import Garlic from "../assets/menu/Garlic.jpg"
import PumpkinSoup from "../assets/menu/pumpkin-soup.jpg"
import MassmanTofu from "../assets/menu/massaman-tofu-curry.jpg"
import RoastedLamb from "../assets/menu/roasted-lamb.jpg"
import SeasameBeff from "../assets/menu/sesame-beef.jpg"
import VegetarianNoodles from "../assets/menu/vegetarian-cold-noodles.jpg"
import KoreanMushroom from "../assets/menu/korean-mushroom-japchae.jpg"

export const navigation = [
	{
		id: 0,
		title: "Home",
		to: "/",
	},
	{
		id: 1,
		title: "Menu",
		to: "/Menu",
	},
	{
		id: 2,
		title: "About",
		to: "/About",
	},
	{
		id: 3,
		title: "Contact",
		to: "/Contact",
	},
]

export const MenuData = [
	{
		id: 0,
		name: "Lemon Tahini Quinoa Salad",
		price: 15,
		img: Salad,
		categories: "vege",
	},
	{
		id: 1,
		name: "Sheet-Pan Salmon",
		price: 25,
		img: Salmon,
		categories: "fish",
	},
	{
		id: 2,
		name: "Lentil soup",
		price: 10,
		img: Lentil,
		description:
			"Lentil soup is a soup with lentils as its main ingredient; it may be vegetarian or include meat, and may use brown, red, yellow, green or black lentils, with or without the husk. Dehulled yellow and red lentils disintegrate in cooking, making a thick soup.",
		categories: "soup",
	},
	{
		id: 3,
		name: "Chicken & Quinoa Bowl",
		price: 23,
		img: Chicken,
		categories: "meat",
	},
	{
		id: 4,
		name: "Ginger Garlic Veggie",
		price: 15,
		img: Garlic,
		categories: "vege",
	},
	{
		id: 5,
		name: "Pumpkin soup",
		price: 13,
		img: PumpkinSoup,
		categories: "soup",
	},
	{
		id: 6,
		name: "Vegetarian cold noodles",
		price: 31,
		img: VegetarianNoodles,
		categories: "vege",
	},
	{
		id: 7,
		name: "Massaman tofu curry",
		price: 31,
		img: MassmanTofu,
		categories: "vege",
	},
	{
		id: 8,
		name: "Roasted lamb ",
		price: 31,
		img: RoastedLamb,
		categories: "meat",
	},
	{
		id: 9,
		name: "Korean mushroom japchae",
		price: 31,
		img: KoreanMushroom,
		categories: "vege",
	},
	{
		id: 10,
		name: " udon noodles",
		price: 11,
		img: SeasameBeff,
		categories: "meat",
	},
]
