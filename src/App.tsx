import { HelmetProvider, Helmet } from "react-helmet-async";
import "./App.css";
import RoutesLink from "./routes/Routes";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Ini adalah profil saya. Saya memiliki pengalaman dalam pengembangan web dan telah menyelesaikan berbagai proyek."
        />
        <meta
          name="keywords"
          content="profil, pengalaman, proyek, web development"
        />
        <link rel="canonical" href="https://www.contoh.com/profil-saya" />
      </Helmet>
      <RoutesLink />
    </HelmetProvider>
  );
}

export default App;
