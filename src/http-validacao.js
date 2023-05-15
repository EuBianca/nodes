function extraiLinks(arrLinks) {
    return arrLinks.map((objtoLink) => Object.values(objtoLink).join())
}

export default function listaValidada (listaDeLinks) {
    return extraiLinks(listaDeLinks);

}