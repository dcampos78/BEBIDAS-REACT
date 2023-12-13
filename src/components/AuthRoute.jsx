import { Navigate, useLocation } from "react-router-dom";

function AuthRoute({user, component}) {
    const location = useLocation();
    console.log(location);

    const userList = [
        {
          email: "anacleta@upgrade.com",
          password: "123456",
          name: "Ana",
          role: "admin",
        },
        {
          email: "perensejo@upgrade.com",
          password: "987456",
          name: "Pablo",
          role: "client",
        },
    ];

    if (
        !user ||
        typeof user !== 'object' ||
        !('email' in user) ||
        !('password' in user) ||
        !('name' in user) ||
        !('role' in user)
    ) {
        return <Navigate to="/" state={{ prevRoute: location.pathname }} />;
    }

    const userValidation = userList.some((check) => (check.email === user.email && check.password === user.password && check.name === user.name && check.role === user.role))

    if (userValidation) { 
        return component;
        } else {
            return <Navigate to="/" state={{ prevRoute: location.pathname }}/>
        }

    //Meto el state para asignarle el estado, ruta previa a location para que cuando no haya user no me deje en la url list, sino que me devuelva a la home (inicio)

}
export default AuthRoute