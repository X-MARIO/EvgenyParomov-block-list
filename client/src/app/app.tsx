import "@/app/globals.css";
import type {AppProps} from "next/app";
import {AppProvider} from "@/app/app-provider";

export const App = ({Component, pageProps}: AppProps) => {
    return <AppProvider>
        <Component {...pageProps} />
    </AppProvider>;
}
