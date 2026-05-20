import { useEffect, useOptimistic } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useBids = (houseId) => {
    const [bids, setBids] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    const [optimisticsBids, addOptmisticBid] = useOptimistic(bids, (bids, newBid) => [...bids, newBid]);

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
    }, [houseId]);

    const postBid = async (bid) => {
        const rsp = await fetch("https://localhost:4000/bid", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bid),
        });
        return await rsp.json();
    };

    const addBid = async (bid) => {
        addOptmisticBid(bid);
        const postedBid = await postBid(bid);
        setBids([...bids, postBid]);
    };

    return {bids: optimisticsBids, loadingState, addBid};
}
export default useBids;