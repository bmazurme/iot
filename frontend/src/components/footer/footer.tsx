import React from 'react';

// import FooterMenu from '../footer-menu';
import { getCurrentYear } from '../../utils/get-current-year';

import style from './footer.module.css';

export default function Footer() {
  const getYear = getCurrentYear();

  return (
    <footer className={style.footer}>
      <p className={style.copyright}>
        &copy;
        {` ${getYear} iot by `}
        <a className={style.link} href="https://ntlstl.dev/">ntlstl</a>
      </p>
      {/* <FooterMenu links={links} /> */}
    </footer>
  );
}
