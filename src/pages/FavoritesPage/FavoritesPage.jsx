// import React from 'react';
import css from './FavoritesPage.module.css'
import sprite from '../../assets/icons/sprite.svg'




const FavoritesPage = () => {
  return (
    <div>
      <h2>FavoritePage</h2>
     
      <p> context text </p>
      
      <svg className={css.icon} width="32" height="32">
        <use href={`${sprite}#water`} alt="water"></use>
       </svg>
     <svg className={css.icon} width="32" height="32">
        <use href={`${sprite}#van`} alt="van"></use>
      </svg>
      <svg className={css.icon} width="32" height="32">
        <use href={`${sprite}#tv`} alt="tv"></use>
      </svg>
      <svg className={css.icon} width="32" height="32">
        <use href={`${sprite}#water`} alt="water"></use>
       </svg>
        <svg className={css.icon} width="32" height="32">
                <use href={`${sprite}#water`} alt="water"></use>
              </svg>
        <svg className={css.icon} width="32" height="32">
                <use href={`${sprite}#water`} alt="water"></use>
              </svg>
        <svg className={css.icon} width="32" height="32">
                <use href={`${sprite}#water`} alt="water"></use>
              </svg>
        <svg className={css.icon} width="32" height="32">
                <use href={`${sprite}#water`} alt="water"></use>
              </svg>
        <svg className={css.icon} width="32" height="32">
                <use href={`${sprite}#water`} alt="water"></use>
              </svg>
        <svg className={css.icon} width="32" height="32">
                <use href={`${sprite}#water`} alt="water"></use>
              </svg>


    </div>
  )
}

export default FavoritesPage