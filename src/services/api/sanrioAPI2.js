//une autre API Sanrio mais qui nécessite de demander la permission sur un site externe : j'ai donc changé d'API
const getSanrioDataLittleApi = async function() {
    try {
        // const response = await fetch('https://cors-anywhere.herokuapp.com/https://github.com/carolstran/sanrio-api/blob/main/characters.json');
        const response =await fetch('https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/carolstran/sanrio-api/main/characters.json');
        if (response.ok) {
            return await response.json();
            
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
};


export default getSanrioDataLittleApi;

// https://cors-anywhere.herokuapp.com/corsdemo