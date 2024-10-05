import Image from "next/image"
import banner from "@/assets/banner.jpg"
import { Button } from "./ui/button"
const Banner = () => {
	return (
		<section className="bg-gray-100 py-8">
<div className="px-4 py-5 sm:px-6 lg:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
	<div className="w-full">
<Image src={banner} alt="banner image" className="w-full h-auto object-cover rounded-md"/>
	</div>
	<div className="flex flex-col space-y-4">
		<h2 className="text-md text-gray-700">Technology</h2>
		<h2 className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cum.</h2>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem soluta, alias ipsa laboriosam, fugiat odio quasi perferendis aliquid aperiam sed iure. Dignissimos necessitatibus voluptatum impedit rem accusantium! Unde, tenetur, ipsam voluptas modi, quos alias explicabo reprehenderit quasi animi dolorum reiciendis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptates aspernatur non ipsam recusandae nesciunt, ab corporis aliquid vero iure!</p>


		<Button variant="default" className="px-6">Read More</Button>
	</div>
</div>
		</section>
	)
}

export default Banner