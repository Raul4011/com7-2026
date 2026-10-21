import useAuthStore from "../store/useAuthStore"

const Header = () => {

    const {user,logout} = useAuthStore()

  return (
    <div>
        <br />

        <h1>Welcome to CINEVERSE </h1>
        <br />

        
        {user && <button onClick={()=>logout()}>logout</button>}
         
        
        <br />
    </div>
  )
}

export default Header