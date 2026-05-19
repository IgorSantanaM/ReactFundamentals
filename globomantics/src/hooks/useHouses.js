const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    useEffect(() => {
        const fetchHouses = async () => {
            try{
                setLoadingState(loadingStatus.isLoading);
                const response = await fetch("https://localhost:4000/house");
                const houses = await response.json;
                setHouses(houses)
                setLoadingState(loadingStatus.loaded);
            } catch (error) {
                setLoadingState(loadingStatus.hasErrored);
            }
        };
        fetchHouses();
    }, []);
    return {houses, setHouses, loadingState};
}
export default useHouses;