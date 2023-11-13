import './HeaderLinks.css'

function Link (props) {
  const { url, icon, social, special } = props

  const nameClass = special === 'special' ? 'nav-link special' : 'nav-link'

  return (
    <a className={nameClass} href={url} target='_blank' rel='noreferrer'>
      <img className='nav-link-image' src={icon} alt={`${social} icon.`} />
    </a>
  )
}

function MailLink (props) {
  const { url, icon } = props

  return (
    <a className='nav-link' href={url}>
      <img className='nav-link-image' src={icon} alt='Mail icon' />
    </a>
  )
}

export default function HeaderLinks (props) {
  const { external, url, icon, social, special = '' } = props

  return (
    external
      ? (<Link url={url} icon={icon} social={social} special={special} />)
      : (<MailLink url={url} icon={icon} />)
  )
}
