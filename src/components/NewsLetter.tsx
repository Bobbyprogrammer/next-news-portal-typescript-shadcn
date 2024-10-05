import { Button } from "./ui/button"


const NewsLetter = () => {
	return (
		<div className="bg-gray-900 text-white text-center  lg:h-44 flex flex-col mx-auto justify-center items-center">

			<h2 className="text-gray-200 text-2xl font-bold  text-center">Stay Updated</h2>
			<p className="text-gray-200 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis odit tempore, repudiandae aliquam itaque qui?</p>
			<div className="flex lg:flex-row flex-col my-6 gap-4">
				<input type="text" placeholder="Enter your email" className="px-6 rounded-sm border border-white bg-gray-900 py-1" />
				<Button variant="default" className="border  border-white">Subscribe</Button>
			</div>
		</div>
	)
}

export default NewsLetter