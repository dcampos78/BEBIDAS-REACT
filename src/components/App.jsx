import { useState } from "react";
import { useEffect } from "react";
import ListDrinks from "./ListDrinks";
import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import Detail from "./Detail";
import NotFound from "./NotFound";
import AuthRoute from "./AuthRoute";
import Login from "./Login";

function App() {
    const [user, setUser] = useState(undefined);
    console.log(user);
    //useState --> hook
    //"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

    //BUENAS PRACTICAS: primeor variables de estado, luego funciones y luego el html
    const [drinks, setDrinks] = useState([]);
    const [searchDrink, setSearchDrink] = useState("ron");

    useEffect(()=>{//useEffect lo que va a hacer aqui es que el fetch se ejecute una sola vez y no ejecute el fetch cada vez que hay un cambio
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`)
        .then((response)=> response.json())
        .then((data)=> {
            setDrinks(data.drinks);
            console.log(drinks);
        })
    },
    [searchDrink])//Si no relleno este array de dependencias , va a hacer un fetch solo y ya no se va a modificar con el nuevo input de la variable de estado. El parametro que metes es la variable de estado en sí, para que cambien cada vez que cambien la variable de estado.

    //Aqui tenemos mapeado todas las drinks del array, y lo pintamos como un parrafo dentro del html
    //const elementsDrinks = drinks.map((drink)=> <p key={drink.idDrink}>{drink.strDrink}</p>);

    const handleDrinks = (event) => {
        setSearchDrink(event.target.value);
    }
    //En los routes lo qu estamos haciendo es definir el path que va a hacer que los links lleven a los componentes que definimos en el mismo
    return (
        <div>
            <Menu />
            <form>
                <input type="text" placeholder="Choose your drink" onChange={handleDrinks}></input>
            </form>

            <Routes>
                <Route path="/" element={<h1>UseEfect</h1>}/>
                <Route path="/list" element={<AuthRoute user={user} component={<ListDrinks drinks={drinks} />} />} />
                <Route path="/login" element={ <Login setUser={setUser}/> }/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </div>
    )
    //El Route con asterisco lo que hace es coger cualquier ruta que meta que no coincida con una ruta establecida y me manda al componente que yo le diga, en este caso al not found
}
export default App;

App.propTypes = {
    elementsDrinks: PropTypes.array
}