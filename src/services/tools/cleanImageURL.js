function cleanImageURL(url){
    console.log(url);
    const lowercaseURL = url.toLowerCase();

    // Trouver l'index de la première occurrence de ".png", ".jpg" ou ".gif" (en minuscules)
    let extensionIndex = lowercaseURL.indexOf(".png");
    if (extensionIndex === -1) {
        extensionIndex = lowercaseURL.indexOf(".jpg");
        if (extensionIndex === -1) {
            extensionIndex = lowercaseURL.indexOf(".gif");
            if (extensionIndex === -1) {
                // Aucune occurrence de ".png", ".jpg" ou ".gif"
                return "";
            } else {
                // Occurrence de ".gif"
                extensionIndex += 4; // Déplacer l'index à la fin de l'extension
            }
        } else {
        // Occurrence de ".jpg"
        extensionIndex += 4; // Déplacer l'index à la fin de l'extension
        }
    } else {
        // Occurrence de ".png"
        extensionIndex += 4; // Déplacer l'index à la fin de l'extension
    }
// Retourner la partie de l'URL jusqu'à l'extension
return url.substring(0, extensionIndex);
};

export default cleanImageURL;
