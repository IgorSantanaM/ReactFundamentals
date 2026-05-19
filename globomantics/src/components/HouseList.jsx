    import { HouseRowMem } from "./HouseRow";
    import useHouses from "../hooks/useHouses";


const HouseList = () => {
    const {houses, setHouses, loadingState} = useHouses();

    if(loadingState === loadingStatus.loaded) 
        return <LoadingIndicator loadingState={loadingState} />
    const addHouse = () => {
        setHouses([
            ...houses, {
                id: 3,
                address: "15 Vale of Kings, Sao joao",
                country: "Brazil",
                price: 900000
            }
        ])
    }

    return(
        <>
        <div className="row mb-2">
            <h5 className="themeFontColor text-center">
                Houses currently on the market
            </h5>
        </div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Asking Price</th>
                </tr>
            </thead>
            <ErrorBoundary fallback="Error loading houses">
                <tbody>
                    {houses.map(h => <HouseRowMem key={h.id} house={h}/>)}
                </tbody>
            </ErrorBoundary>
        </table>
        <button onClick={addHouse} className="btn btn-primary">
            Add
        </button>
        </>
    )
};

export default HouseList;