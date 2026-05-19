import React, { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter"
import navigationContext from "../navigation/navigationContext";
import navValues from "../navigation/navValues";

const HouseRow = ({address, country, price}) => {
    const {navigate} = useContext(navigationContext);
    return(
        <tr onClick={() => navigate(navValues.house, house)}key={house.id}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price && <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
                {currencyFormatter.format(house.price)}
            </td>}
        </tr>
    )
}

const HouseRowMem = React.memo(HouseRow);
export default HouseRow;
export {HouseRowMem};
