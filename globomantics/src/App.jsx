import { useCallback, useState } from "react"
import Banner from "./components/Banner"
import HouseList from "./components/HouseList"
import navValues from "./navigation/navValues"
import ComponentPicker from "./components/ComponentPicker";

function App() {
const navigate = useCallback(
  (navTo, param) => setNav({current: navTo, param, navigate}),
  []
);

  const [nav, setNav] = useState({current: navValues.home, navigate});

  return (
    <navigationContext.Provider value={nav}>
    <ErrorBoundary>
      <Banner headerText="Providing houses all over the world"/>
      <ComponentPicker currentNavLocation={nav.current} />
      {/* <Routes>
        <Route index element={<HouseList/>} />
        <Route path="house" element={<House/>} />
      </Routes> */}
    </ErrorBoundary>
    </navigationContext.Provider>
  )
}

export default App
