import type { DocsThemeConfig } from 'nextra-theme-docs';
import ShareScreenshot from './components/share-screenshot';


const config: DocsThemeConfig = {
  darkMode: false,
  primaryHue: 293,
  primarySaturation: 79,
  footer: {
    component: () => (
      <footer className="bg-gray-100 text-gray-600 py-8">
        {/* share tools */}
        <div className="flex justify-center space-x-4">
          {/* <a href="
          https://twitter.com/intent/tweet?text=ACG%20Daily%20%E2%80%94%20ACG%20%E6%AF%8F%E6%97%A5%E6%9B%B4%E6%96%B0&url=https%3A%2F%2Facg-daily.vercel.app%2F&via=acg_daily" target="_blank" rel="noreferrer" title="分享到 Twitter">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 2.3a9.89 9.89 0 01-2.83.775 4.9 4.9 0 002.155-2.71 9.8 9.8 0 01-3.13 1.192 4.9 4.9 0 00-8.365 4.47A13.98 13.98 0 011.666 2.8a4.9 4.9 0 001.517 6.57 4.89 4.89 0 01-2.22-.61v.06a4.9 4.9 0 003.936 4.81 4.89 4.89 0 01-2.215.084 4.9 4.9 0 004.58 3.4 9.82 9.82 0 01-6.08 2.09 13.9 13.9 0 007.53 2.21c9.03 0 13.97-7.49 13.97-13.98 0-.21-.005-.42-.015-.63a9.94 9.94 0 002.44-2.54z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Facg-daily.vercel.app%2F" target="_blank" rel="noreferrer" title="分享到 Facebook">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.95 3.63 9.03 8.36 9.78V15.25H6.75V12h3.61V9.61c0-3.55 2.12-5.49 5.33-5.49 1.54 0 3.2.27 3.2.27v3.53h-1.8c-1.77 0-2.33 1.1-2.33 2.24V12h3.97l-.63 3.25h-3.34v7.53C18.37 21.03 22 16.95 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Facg-daily.vercel.app%2F&title=ACG%20Daily%20%E2%80%94%20ACG%20%E6%AF%8F%E6%97%A5%E6%9B%B4%E6%96%B0" target="_blank" rel="noreferrer" title="分享到 LinkedIn">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 3h20v18H2V3zm4 4h3v10H6V7zm1.5-2A1.5 1.5 0 008 4.5 1.5 1.5 0 006.5 6 1.5 1.5 0 008 7.5 1.5 1.5 0 009.5 6 1.5 1.5 0 008 4.5zm11 11h-3V10h3v6z" />
            </svg>
          </a> */}
          <ShareScreenshot />
        </div>
        <div className="text-center py-8">
          <p>Powered by Nextra.</p>
        </div>
      </footer>
    ),
  },
  // @ts-ignore
  head: ({ title, meta }) => (
    <>
      {/* {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />} */}
    </>
  ),
  // readMore: 'Read More →',
  // postFooter: null,
  // darkMode: false,
  // navs: [
  //   {
  //     url: 'https://github.com/shuding/nextra',
  //     name: 'Nextra'
  //   },
  // ],
  logo: <span>ACG Daily</span>,
  project: {
    link: 'https://acg-daily.vercel.app/',
    // icon: ,
  },
  feedback: {
    content: () => null,
  },
  editLink: {
    component: () => null,
  },
};


export default config;
