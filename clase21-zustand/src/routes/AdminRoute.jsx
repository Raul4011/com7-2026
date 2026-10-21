import {Outlet,Navigate} from "react-router-dom"

const AdminRoute = () => {
  

    const user = true

    if(!user) {
        return <Navigate to="/" replace/>
    }

    if (user.rol !== "admin") {
        return <Navigate to="/unauthorized" replace/>
    }

    return <Outlet/>

}

export default AdminRoute