import { useState } from 'react';
import './App.css';
import JobList from "./component/JobList";
import { Header } from "./component/Header"
import { Footer } from './component/Footer';

function App() {
    const [jobs, setJobValues] = useState([
        { id: '1', name: "Bike - White", status: "Stopped", task: "Mountain bike with 21-speed gear system and lightweight aluminum frame." },
        { id: '2', name: "Vtech Cordless Phone CS6519-15", status: "Running", task: "Cordless phone with caller ID, speakerphone, and digital answering system." },
        { id: '3', name: "Rucksuck - Brown", status: "Stopped", task: "Stylish brown rucksack with multiple compartments and padded straps." },
        { id: '4', name: "Vtech SN6197", status: "Stopped", task: "Cordless phone with answering machine and caller ID." },
        { id: '5', name: "Vtech SN6187-2", status: "Running", task: "Cordless phone with two handsets, answering machine, and caller ID." },
        { id: '6', name: "Jet Hose (Re-Nu) Bosh", status: "Completed", task: "Jet HoseHigh-pressure jet hose for efficient cleaning, compatible with Bosh systems." },
      ]);

    return (
      <div className="App">
        <Header />
        {/* Set properties for useState jobs and setJobValues in component. */}
        <JobList
          jobs={jobs}
          setJobValues={setJobValues}
        />
        <Footer />
      </div>
    )
  
}

export default App;