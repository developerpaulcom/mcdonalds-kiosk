import Button from '../../atoms/Button/Button';
import './styles.scss';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <div className="languageswitcher">
      <h3>{t('language.title')}</h3>
      <div className='buttons'>
        <Button variant='outline' onClick={() => i18n.changeLanguage("en")} isActive={i18n.language === "en" ? true : false}>
          {t('language.english')}
        </Button>
        <Button variant='outline' onClick={() => i18n.changeLanguage("nl")} isActive={i18n.language === "nl" ? true : false}>
          {t('language.dutch')}
        </Button>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
