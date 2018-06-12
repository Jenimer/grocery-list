import React from 'react'
import ToBuy from './ToBuy'

    const ToBuyList = ( { tobuys, updateToBuy, deleteToBuy } ) => (
        <div className="row">
          { tobuys.map( ToBuy =>
            < ToBuy 
              key={ToBuy.id}
              {...ToBuy}
              updateToBuy={updateToBuy}
              deleteToBuy={deleteToBuy}
            />)
            }
        </div>
    )

export default ToBuyList;