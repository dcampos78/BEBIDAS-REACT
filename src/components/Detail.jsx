import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import PropTypes from "prop-types";

function Detail({ drinks }) {
    //useParams es un hook de react router dom que lo que hace es devolverme el valor de los parametros que pasamos por url, en este caso pasariamos el name y el id que son los paremtros variables que pasamos por el path

    //En el ejemplo hacemos un destructuring para obtener solo el id
    const {id} = useParams();
    const findDrink = drinks.find((eachDrink) => (eachDrink.idDrink === id))
    return(findDrink ? (
        <div>
            <h2>Detalle</h2>
            <img src={findDrink.strDrinkThumb} alt="" />
            <h3>{findDrink.strDrink}</h3>
            <p>{findDrink.strCategory}</p>
            <p>{findDrink.strTags}</p>
            <a href="https://github.com/JavierManchon/TODO-LIST" target="_blank" >Link</a>
        </div>)
        : <NotFound />
    )
}
export default Detail;

//Cuanod usemos enlaces ectornos al flujo de la pagina como el ultimo link, entonces si usamos la <a></a>

Detail.propTypes = {
    drinks: PropTypes.array
}