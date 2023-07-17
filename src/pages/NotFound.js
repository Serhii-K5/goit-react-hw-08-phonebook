import { Helmet } from 'react-helmet';
import NotFound from 'components/notFound/NotFound';
import { SheetFooter } from 'components/SheetFooter/SheetFooter.jsx';

import css from 'styles/Container.module.css';
import { SpringImg } from 'components/SpringImg/SpringImg.jsx';

export default function NotFoundPage() {
  return (
    <div>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div className={css.container}>
        <SpringImg />
        <div style={{ position: 'relative' }}>
          <NotFound />
          <SheetFooter />
        </div>
      </div>
    </div>
  );
}
