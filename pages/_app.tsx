import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StoreCartProvider } from "@/Context/StoreCartContext";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import RootLayout from "@/components/RootLayout";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreCartProvider>
      <RootLayout title="Home Page">
        <Component {...pageProps} />
      </RootLayout>
    </StoreCartProvider>
  );
}
