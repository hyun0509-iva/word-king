import type { Metadata } from "next";
import { cache } from "react";
import { QueryClient, dehydrate } from "@tanstack/query-core";
import Hydrate from "./hydrate";
import QueryProvider from "./queryProvider";
import Header from "./_common/Header";
import BottomNav from "./_common/BottomNav";
import "./global.css";

export const metadata: Metadata = {
  title: "word king",
  description: "영단어를 암기하고 같이 게임하며 재미있게 익혀보세요.",
  icons: {
    icon: "/favicon.svg",
  },
};

const getQueryClient = cache(() => new QueryClient());

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);
  queryClient.clear();
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <Hydrate state={dehydratedState}>
            <div className="wrap">
              <Header />
              {children}
              <BottomNav />
            </div>
          </Hydrate>
        </QueryProvider>
      </body>
    </html>
  );
}
