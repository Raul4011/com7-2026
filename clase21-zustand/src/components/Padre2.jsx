import React from 'react'
import Hijo3 from './Hijo3'
import Hijo4 from './Hijo4'

const Padre2 = ({getForm,getCount}) => {
  return (
    <div>
        <Hijo3 getForm={getForm}/>
        <Hijo4 getCount={getCount}/>
    </div>
  )
}

export default Padre2