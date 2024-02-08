import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();

  const handleChangeLanguage = (language: string) => {
    router.push(router.pathname, router.asPath, { locale: language });
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('fr')}>Français</button>
      <button onClick={() => handleChangeLanguage('nl')}>Nederlands</button>
      <button onClick={() => handleChangeLanguage('de')}>Deutsch</button>
      {/* Add buttons for other languages as needed */}
    </div>
  );
};

export default LanguageSwitcher;
