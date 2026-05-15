import currencyFormatter from "../helpers/currencyFormatter"

const HouseRow = ({address, country, price}) => {
    return(
        <tr key={house.id}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{currencyFormatter.format(house.price)}</td>
        </tr>
    )
}