import type { AppProps } from "next/app";
import "../common/styles/globals.css";
import BaseLayout from "../common/layouts/baseLayout";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </QueryClientProvider>
  );
}
