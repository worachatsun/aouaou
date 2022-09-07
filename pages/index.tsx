import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { ShowCard } from 'commons/organisms/card'
import { TransparentButton } from 'commons/atoms/button'
import { BUTTON_TYPE } from 'commons/atoms/button/transparent/constants'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ShowCard />
      <TransparentButton size={BUTTON_TYPE.S} />
    </div>
  )
}

export default Home
