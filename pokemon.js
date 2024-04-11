export class Pokemon{
    constructor(pokemon){
        this.name = pokemon.name;
        this.id = pokemon.id;
        this.sprite = pokemon.sprites.front_default;
        this.height = pokemon.height/10;
        this.weight = pokemon.weight/10;
        this.types = [];
        pokemon.types.forEach(y => {
            this.types.push(y.type.name);
        });
        this.abilities = [];
        pokemon.abilities.forEach(x => {
        this.abilities.push(x.ability.name);
        });
    }

    getInfo(){
    return `
    <li>heigth: ${this.height} m.</li>
    <li>weight: ${this.weight} kg.</li>
    <li>Types: ${this.types}</li>
    <li>Abilities: ${this.abilities}</li>`;
    }
    getName(){return this.name;}
    getId(){return this.id;}
    getHeight(){return this.height;}
    getWeight(){return this.weight; }
    getTypes(){return this.types;}
    getAbilities(){return this.abilities;}
    getSprite(){return this.sprite;}

}
