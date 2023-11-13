import './Home.css'
import alexis from '../../assets/images/alexisdayo.webp'

export default function Homme () {
  return (
    <section className='home'>
      <figure className='home-profile'>
        <img src={alexis} alt='profile picture of AlexisDayo' />
      </figure>
      <article className='home-content'>
        <header className='home-content-header'>
          <h1 className='home-content-title'>alexisdayo</h1>
          <h2 className='home-content-subtitle'>Traduzco mangas por diversión</h2>
        </header>
        <footer className='arrow-container'>
          <div className='arrow' />
        </footer>
        <aside className='iframes'>
          <iframe
            className='iframe'
            src='https://www.facebook.com/v3.0/plugins/page.php?adapt_container_width=false&app_id=214430138908782&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df21ed328476d714%26domain%3Dvisortmo.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fvisortmo.com%252Ff52200fee81d7%26relation%3Dparent.parent&container_width=0&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FAlexisDayoFanSub%2F&locale=es_LA&sdk=joey&show_facepile=true&small_header=true&tabs=timeline%2Cevents%2Cmessages&width=300px'
            title='AlexisDayo facebook'
            frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          />
        </aside>
      </article>
    </section>
  )
}
