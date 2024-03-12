const url = 'https://ebay-search-result.p.rapidapi.com/search/hello-kitty';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e6bd8a19b3mshb40a5d5f98cbd43p1ce1e5jsna1032cfdcb59',
		'X-RapidAPI-Host': 'ebay-search-result.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	// console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const getGoogleProducts = async function() {
    try {
        const response = await fetch(url, options);
        if(response.ok){
            // console.log(response.json);
            return await response.json();
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}

export default getGoogleProducts;
//idées : love calculator avec le personnage : on rentre son nom et on a le pourcentage
//utiliser google image
