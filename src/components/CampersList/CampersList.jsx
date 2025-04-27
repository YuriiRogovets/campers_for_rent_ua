


const CampersList = ({campers}) => {
  return (
    <div>
     <h2>Каталог камперів</h2> Каталог камперів
      <ul>
        {campers !== null &&
          campers.map((camper) => {
            return (
              <li key={camper._id}>
                <img src={camper.gallery[0]} alt="" />
              </li>
        
            )
          })
        }
        
      </ul>
    
    </div>
  )
}

export default CampersList