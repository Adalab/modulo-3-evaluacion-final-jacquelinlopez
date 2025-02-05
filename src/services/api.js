// funcion para obtener los datos de la api

function getDataApi() {
    const url = `https://hp-api.onrender.com/api/characters`;


    return fetch(url)
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
    })
    .catch((error) => {
        console.error("Lo siento! no hay conexion con el mundo magico en este momento", error);
        return [];
    });
}
export default getDataApi;