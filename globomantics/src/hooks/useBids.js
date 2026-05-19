import { useEffect } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useBids = (houseId) => {
    const [bids, setBids] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    useEffect(() => {
        const fetchBids = async () => {
            setLoadingState(loadingStatus.isLoading);
            try{
                const response = await fetch(`https://localhost:4000/bids/${houseId}`);
                const bids = await response.json;

                setBids(bids);
                setLoadingState(loadingState.loaded);
            }
            catch
            {
                setLoadingState(loadingStatus.hasErrored);
            }
        }
    })
}