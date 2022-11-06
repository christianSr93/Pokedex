export interface GenerationInterface{
    id: number,
    name: string,
    abilities: [],
    main_region: {
      name: string,
      url: string
    },
    moves:{
        name: string,
        url: string
    }[],
    names:{
        name: string,
        language: {
          name:string,
          url: string
        }
    }[],
    pokemon_species:{
        name: string,
        url: string
    }[],
    types:{
        name: string,
        url: string
    }[],
    version_groups: {
        name: string,
        url: string
    }[]
}

export interface PokemonList{
    name: string,
    url: string
}

export interface Pokemon{
    name: string,
    sprite: string,
    types: {
        slot: number,
        type: {
            name:string,
            url: string | null
        }
    }[],
    id: number,
    order: number,
    stats: {
        base_stat: number,
        effort: number,
        stat: {
            name:string,
            url:string
        }
    }[]
}