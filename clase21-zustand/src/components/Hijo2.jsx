import { useStore } from "../store/useStore"

const Hijo2 = ({count}) => {

    const {contador} = useStore()

  return (
    <div>
        <h3>contador: {contador}</h3>
    </div>
  )
}

export default Hijo2