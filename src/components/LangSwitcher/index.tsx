import Link from "next/link";
import styles from "./LangSwitcher.module.scss";
// import { FaLanguage } from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";

import { useLocale } from "next-intl";

export default function LanguageSwitcher() {

  const locale = useLocale();

  // const handleLanguageToggle =()=> {
  //   if(locale === 'en') {
  //     window.location.href = '/cn';
  //   }
  // }

  return (
    <div className={styles.ElLangSwitcher}>
        
      <Link href={locale === 'en' ? '/cn' : '/en'}>
        <LiaLanguageSolid />
        <p>{locale === 'en' ? '中文' : 'En'}</p>
        
      </Link> 
      
      
       {/* <Link href="/cn">中文</Link> */}
      
      {/* <button onClick={handleLanguageToggle} className={styles.toggle} aria-label="Toggle Language">
        <FaLanguage />

        <div className={styles.wrapper}>
          { locale === 'en' ?
            <Link href="/en">En</Link> : <Link href="/cn">中文</Link>
          }
          
        </div>
      </button> */}
        
    </div>
  );
}
