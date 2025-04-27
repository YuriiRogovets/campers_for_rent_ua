
import CampersList from "../../components/CampersList/CampersList.jsx"
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import css from "./CatalogPage.module.css";
import { fetchCampers } from "../../components/services/apiCampers.js";
import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const CatalogPage = () => {
  const [campers, setCampers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
   
    async function fetchData() {
      try {
        setIsLoading(true)
        setIsError(false)

     const data = await fetchCampers();
    
   setCampers(data);
    
      } catch (err) {
        setIsError(true)
    
      } finally {
        setIsLoading(false);
        
   }
    }
    

   fetchData ();
    
  },[])


  return (
    <div className= {css.pageLayout}>
      <SearchForm />
      <div>
        {isError && <ErrorMessage />}
        {isLoading && <Loader/> }
        <CampersList campers={campers}/>
      </div>
      
    </div>
  )
};

export default CatalogPage
