import './App.css';
import JobList from "./component/JobList";
// import JobItem from "./component/JobItem";
import { Header } from "./component/Header"
import { Footer } from './component/Footer';

function App() {
    

    return (
      <div className="App">
        <Header />
        <JobList />
        <Footer />
      </div>
    )
  
}

export default App;