import "@/styles/globals.css";
import LayOut from "@/layout/index";
import { GlobalContextProvider } from "context/GlobalContext";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  const router = useRouter();

  const pathname = router.pathname;
  return (
    <SessionProvider session={session}>
      {pathname === "/signin" ? (
        <Component {...pageProps} />
      ) : (
        <GlobalContextProvider>
          <LayOut>
            <Component {...pageProps} />
          </LayOut>
        </GlobalContextProvider>
      )}
    </SessionProvider>
  );
}
