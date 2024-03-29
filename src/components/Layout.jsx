import { PageContextProvider } from "../../renderer/usePageContext";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ pageContext, children }) => {
  return (
    <PageContextProvider pageContext={pageContext}>
      <main className="relative w-full bg-base-300 text-base-content pt-3">
        <Nav />
        <div className="min-h-[calc(100vh-410px)] bg-transparent">
          {children}
        </div>
        <Footer />
      </main>
    </PageContextProvider>
  );
};

export { Layout };
