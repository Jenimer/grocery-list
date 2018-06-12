import React from 'react';

const styles = {
  done: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const ToBuy = ({ id, done, name, updateToBuy, deleteToBuy }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={ done ? styles.done : {} } className="center">
        {name}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`product-${id}`}
        type="checkbox"
        defaultChecked={done}
        onClick={() => updateToBuy(id)}
      />
      <label htmlFor={`product-${id}`}>Done?</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteToBuy(id)}>
      XXX
    </div>
  </div>
)

export default ToBuy;