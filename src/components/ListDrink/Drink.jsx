import PropTypes from 'prop-types';


function Drink ({oneDrink}){
    return(
        <>
        <article>
            <img src={oneDrink.strDrinkThumb} alt="" className="imgDrink"/>
            <h5>{oneDrink.strDrink}</h5>
            <p>{oneDrink.strCategory}</p>
        </article>
        </>
    );
}

export default Drink;
Drink.propTypes = {
    oneDrink: PropTypes.object,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strCategory: PropTypes.string,
  };