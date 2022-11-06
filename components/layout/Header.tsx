import styles from "./Header.module.scss"
import Image from 'next/image';

export const Header = () => {
  return (
    <div className={ styles.header }>
        <Image src="/pokelogo.svg" height={150} width={500} alt="Pokelogo" priority></Image>
    </div>
  )
}
