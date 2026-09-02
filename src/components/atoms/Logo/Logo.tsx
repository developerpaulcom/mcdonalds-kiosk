import './styles.scss';
import logo from '../../../assets/images/logo-mcdonalds.png'

function Logo() {
  return (
    <div className="logo section--margin-b">
      <img src={logo} alt='Logo' />
    </div>
  );
}

export default Logo;
