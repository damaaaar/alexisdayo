import './Header.css'

import paypal from '../../assets/icons/paypal.svg'
import mail from '../../assets/icons/mail.svg'

export default function Header () {
  return (
    <header className='header'>
      <nav className='nav'>
        <a className='nav-link' href='https://www.paypal.com/paypalme/AlexisDayoFanSub' target='_blank' rel='noreferrer'>
          <img src={paypal} alt='paypal icon' className='nav-link-image' />
        </a>
        <a className='nav-link' href='mailto:control_chivas2010@hotmail.com'>
          <img src={mail} alt='mail icon' className='nav-link-image' />
        </a>
      </nav>
    </header>
  )
}
