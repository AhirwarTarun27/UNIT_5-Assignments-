import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import { SearchProvider } from "./components/searchContext/SearchContext";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div>
      <SearchProvider>
        <Router>
              
              <Routes>
          
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/searchresults" element={<SearchResults></SearchResults>}></Route>
              </Routes>
                
        </Router>
      </SearchProvider>
      
    </div>
  );
}

export default App;
