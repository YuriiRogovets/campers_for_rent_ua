// import { lazy, Suspense } from "react"
import "./App.module.css"
import { Navigate, Route, Routes } from "react-router-dom"
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage";
import FavoritesPage from "../../pages/FavoritesPage";

// const HomePage = lazy(() => import("../../pages/HomePage"));
// const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
// const FavoritesPage = lazy(() => import("../../pages/FavoritesPage"));

function App() {

  return (
    <body>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} /> 
          <Route path="*" element = {<Navigate to="/" />}/>
        </Routes>
      </main>
    
    </body>
  )
}

export default App
