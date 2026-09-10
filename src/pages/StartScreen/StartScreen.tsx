import { useTranslation } from 'react-i18next';
import Button from '../../components/atoms/Button/Button';
import eatIn from "../../assets/images/eat-in-color.svg";
import takeAway from "../../assets/images/take-away-color.svg";

import './styles.scss';
import LanguageSwitcher from '../../components/molecules/LanguageSwitcher/LanguageSwitcher';
import type { OrderType } from '../../App';

type StartScreenProps = {
  onStart: (type: OrderType) => void;
}

function StartScreen({ onStart }: StartScreenProps) {
  const { t } = useTranslation();

  return (
    <div className="startscreen">
      <div className="startscreen_content">
        <div className="section--margin-b--s">
          <h1>
            {t('start.title')}
          </h1>
        </div>

        <div className="buttons" data-align="center">
          <Button onClick={() => onStart('eat in')} variant='panel'>
            <h2>{t('start.eatIn')}</h2>
            <img src={eatIn} alt={t('start.eatIn')} width={200} height={200} />
          </Button>
          <Button onClick={() => onStart('take away')} variant='panel'>
            <h2>{t('start.takeAway')}</h2>
            <img src={takeAway} alt={t('start.takeAway')} width={200} height={200} />
          </Button>
        </div>

        <div className='section--margin-t--l'>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
