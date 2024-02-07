import { useRouter } from 'next/router';
import '../index.css';

import bg from '../public/img/bg.png';
 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const content = <Component {...pageProps} />;
  const { pathname } = useRouter();
  const isPost = pathname.startsWith('/p/');

  return (
    <>
      <div
        className="fixed inset-0 z-[-1] bg-gray-900 bg-opacity-50 transition-opacity duration-300"
        aria-hidden
        style={{
          backgroundImage: isPost ? `url(${bg.src})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      {content}
    </>
  );
};
