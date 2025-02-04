// funcion para obtener los datos de la api

function getDataApi() {
    return fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
    .then((resp) => resp.json())
    .then((data) => {
        const characters = data.map((character)=>{

            return{
                image:character.image,
                name:character.name,
                species:character.species,
                gender:character.gender,
                house:character.house,
                alive:character.alive,
                id:character.id


            };
        });
        return characters;
    });
}
export default getDataApi;