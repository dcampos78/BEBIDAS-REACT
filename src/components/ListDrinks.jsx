import PropTypes from "prop-types";
import Drink from "./Drink";
import { Link } from "react-router-dom";

function ListDrinks({drinks}) {
    //Queremos replicar la ruta que hemos definido en App.jsx y para eso en el link armamos la ruta de manera varaible con las comillas francesas para que en el map, anada a cada Drink un route que lleve al detalle de esa bebida
    const elementLi = drinks.map((oneDrink)=>{
        return(
        <li key={oneDrink.idDrink}>
            <Link to={`/detail/${oneDrink.strDrink}/${oneDrink.idDrink}`}>
                <Drink oneDrink={oneDrink}/>
            </Link>
        </li>
        );
    });

    return(
        <ul>
            { elementLi }
        </ul>
    );
}
export default ListDrinks;

ListDrinks.propTypes = {
    drinks: PropTypes.array
}