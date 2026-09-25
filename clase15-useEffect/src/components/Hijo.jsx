import {useEffect} from 'react'

const Hijo = () => {
    

    useEffect(() => {
      console.log('componente HIJO montado');
    
      return () => {
        console.log('componente HIJO desmontado');
      }
    }, [])
    
  return (
    <div>Hijo</div>
  )
}

export default Hijo