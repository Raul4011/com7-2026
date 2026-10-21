import React from 'react'
import Hijo1 from './Hijo1'
import Hijo2 from './Hijo2'

const Padre1 = ({form,count}) => {
  return (
    <div>
        <Hijo1 form={form}/>
        <Hijo2 count={count}/>
    </div>
  )
}

export default Padre1