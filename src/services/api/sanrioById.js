const getSanrioDataById = async function(characterId) {
    try {
        const response = await fetch(`https://sanrioapi.onrender.com/App/Characters/`);
        
        if (response.ok) {
            const data = await response.json();
            const characterData = data.find(character => character._id === characterId);
            console.log(characterData);
            return characterData;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(`Erreur lors de la récupération des données : ${error.message}`);
    }
};

export default getSanrioDataById;
