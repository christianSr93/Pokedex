import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./PokemonProfile.module.scss"
import Link from "next/link";
import { useSelector } from 'react-redux'
import { Pokemon } from '../../interface/interface';
import { pokemonSelected } from '../../appState/store/slices/pokemon';


export const PokemonProfile = () => {
    const pokemon:Pokemon = useSelector(pokemonSelected);

  return (
    <>
        <div className={styles.card} >
            <div className={styles.container} style={{backgroundColor: styles[`${pokemon.types[0].type.name}Opacity`] }}>
                <div className={ styles.header }>
                    <div>
                        <Link href="/"><button>return</button></Link>
                    </div>
                    <div className={ styles.order }>
                        <b>#00{pokemon.order}</b>
                    </div>
                </div>
                <div className={ styles.content }>
                    <div>
                        <Image
                            width={64}
                            height={64}
                            src={pokemon.sprite}
                            alt={pokemon.name}
                        />
                    </div>
                    <div>
                        <b>{pokemon.name}</b>
                    </div>
                </div>
                <div className={ styles.footer }>
                    <div className={ styles.typesContainer }>
                        {pokemon.types.map(e=>(
                            <div key={e.slot} className={ styles.types } style={{backgroundColor: styles[e.type.name] }}>
                                {e.type.name}
                            </div>
                        ))}
                    </div>
                    <h3>Base stats</h3>
                    <div className={ styles.statsContainer }>
                        
                        <div className={ styles.grid }>
                            {pokemon.stats.map((e,index)=>(
                                <div key={index} >
                                    {e.stat.name}:<b> {e.base_stat} pts</b>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
