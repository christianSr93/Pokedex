import { useState, useEffect } from "react";
import Image from "next/image";
import { Pokemon } from "../../interface/interface"
import styles from "./PokemonCard.module.scss"
import Link from "next/link";
import { setPokemonSelected } from '../../appState/store/slices/pokemon';
import { useDispatch } from 'react-redux'
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const PokemonCards = (props: {pokemon: Pokemon}) => {
    const { name, sprite, id, types } = props.pokemon;
    const [hover, setHover] = useState(false)
    const [background, setBackground] = useState({backgroundColor: '#F2F2F2'})
    const dispatch = useDispatch();

    const toggleHover = () => {
        setHover(!hover)
    }

    const handlePokemon = () => {
        dispatch(setPokemonSelected(props.pokemon));
    }
    
    useEffect(() => {
        if(hover){
            setBackground({backgroundColor: styles[types[0].type.name]})
        }else{
            setBackground({backgroundColor: '#F2F2F2'})
        }
    }, [hover])
    
  return (
    <>
        <div style={background} className={styles.card} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={handlePokemon}>
            <div className={styles.container}>
                <div className={ styles.header }>
                    <div className={ styles.favorite }>
                        <IconButton title="Add to favorite" aria-label="delete">
                            <FavoriteBorderIcon />
                        </IconButton>
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
                            <IconButton title="Details" aria-label="delete">
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
