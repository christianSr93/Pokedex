import Image from "next/image";
import { Pokemon } from "../../interface/interface"
import Link from "next/link";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import usePokemonCard from "./hooks/usePokemonCard";
import styles from "./PokemonCard.module.scss"

export const PokemonCards = (props: {pokemon: Pokemon}) => {
    const { name, sprite, id, types } = props.pokemon;
    const  { handlePokemon, addFavorite, isFavorite, removeFavorite } = usePokemonCard(props.pokemon);
    const favorite = isFavorite();
  return (
    <>
        <div style={{backgroundColor: styles[`${props.pokemon.types[0].type.name}Opacity`]}} className={styles.card}>
            <div className={styles.container}>
                <div className={ styles.header }>
                    <div className={ !favorite ? styles.favorite:'' }>
                        {
                            favorite ? 
                            (
                                <IconButton title="Add to favorite" aria-label="delete" onClick={removeFavorite}>
                                    <FavoriteIcon />
                                </IconButton>
                            ):(
                                <IconButton title="Add to favorite" aria-label="delete" onClick={addFavorite}>
                                    <FavoriteBorderIcon />
                                </IconButton>
                            )
                        }
                    </div>
                    <div className={ styles.order }>
                        #00{id}
                    </div>
                </div>
                <div className={ styles.content }>
                    <div>
                        <Image
                            width={64}
                            height={64}
                            src={sprite}
                            alt={name}
                        />
                    </div>
                    <div>
                        {name}
                    </div>
                </div>
                <div className={ styles.footer }>
                    {types.map(e=>(
                        <div key={e.slot} className={ styles.types } style={{backgroundColor: styles[e.type.name] }}>
                        {e.type.name}
                        </div>
                    ))}
                    <div className={ styles.details }>
                        <Link href="/pokemon">
                            <IconButton title="Details" aria-label="delete" onClick={handlePokemon}>
                                <ArrowForwardIcon />
                            </IconButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
