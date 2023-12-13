import PropTypes from "prop-types";
import '../styles/Drink.css'

function Drink({ oneDrink }) {


    return(
        <article>
            <img src={oneDrink.strDrinkThumb} alt="" className="img_drink"/>
            <h5>{oneDrink.strDrink}</h5>
            <p>{oneDrink.strCategory}</p>
        </article>
    );
}
export default Drink

Drink.propTypes = {
    oneDrink: PropTypes.object
}