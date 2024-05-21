import { useTranslation } from 'react-i18next';


const lngs = {
    en: { nativeName: 'English' },
    es: { nativeName: 'Spanish' }
  };


export default function LangSwitcher() {
    const { i18n } = useTranslation();
    return (
        <div>
        {Object.keys(lngs).map((lng) => (
            <button
            key={lng}
            style={{
                fontWeight: i18n.language === lng ? 'bold' : 'normal',
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
            >
            {lngs[lng].nativeName}
            </button>
        ))}
        </div>
    );
}