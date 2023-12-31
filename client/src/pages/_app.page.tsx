import { Auth } from '@supabase/auth-ui-react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { gaPageview } from 'src/utils/gtag';
import { supabase } from 'src/utils/supabase';
import '../styles/globals.css';
import { AuthLoader } from './@components/AuthLoader';

function MyApp({ Component, pageProps }: AppProps) {
  const SafeHydrate = dynamic(() => import('../components/SafeHydrate'), { ssr: false });
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) gaPageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <AuthLoader />
      </Auth.UserContextProvider>
    </>
  );
}

export default MyApp;
