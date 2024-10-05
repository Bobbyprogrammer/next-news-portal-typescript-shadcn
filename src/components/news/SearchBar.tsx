
"use client"
interface SearchBarPropos{
	onSearch:(searchTerm:string)=>void;

}

const SearchBar = ({onSearch}:SearchBarPropos) => {
	return (
		<div  className="mb-3 md:w-3/4">
			<h3 className="text-lg font-bold mb-2">Search News</h3>
			<input onChange={(e)=>onSearch(e.target.value)} type="text" placeholder="search news..." className="p-2 border border-black rounded-md w-full" />

		</div>
	)
}

export default SearchBar