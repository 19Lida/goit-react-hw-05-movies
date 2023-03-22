// import { Outlet } from 'react-router-dom';
// import { Navbar } from 'components/Navbar/Navbar';

// const Layout = () => {
//   return (
//     <>
//       <header>
//         <Navbar />
//       </header>
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// };
// export default Layout;
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';
export const Layout = () => {
  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <nav className={styles.nav}>
          <Link className={styles.Link} to="/">
            Home
          </Link>
          <Link className={styles.Link} to="movies">
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
