import './Header.css'
import paypal from '../../assets/icons/paypal.svg'
import mail from '../../assets/icons/mail.svg'
import x from '../../assets/icons/x.svg'
import HeaderLinks from '../HeaderLinks'

export default function Header () {
  return (
    <header className='header'>
      <nav className='nav'>
        <HeaderLinks external url='https://x.com/alexisdayo?s=20' icon={x} social='Twitter' />
        <HeaderLinks external url='https://www.paypal.com/paypalme/AlexisDayoFanSub' icon={paypal} social='Paypal' />
        <HeaderLinks url='mailto:alexisdayofansub@gmail.com' icon={mail} />
      </nav>
    </header>
  )
}
