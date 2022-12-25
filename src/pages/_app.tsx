import "../styles/globals.css";
import "../styles/themes/light.css";
import "../styles/themes/dark.css";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import { useState } from "react";
import { Database } from "../types/supabase";

import ThemeSwitcher from "../components/ThemeSwitcher";
import NavBar from "../components/NavBar";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  // const [supabase] = useState(() => createBrowserSupabaseClient<Database>());

  return (
    <div className="container mx-auto p-4">
      <ThemeSwitcher/>
      <NavBar 
      theme='light'
      links={[
        { href: '/', label: 'Home' },
        { href: '/AboutUs', label: 'About Us' },
        { href: '/items', label: 'Items' },
      ]}
      />
      <Component {...pageProps} />
    </div>
    // <SessionContextProvider
    //   supabaseClient={supabase}
    //   initialSession={pageProps.initialSession}
    // >
    // </SessionContextProvider>
  );
}
export default MyApp;
