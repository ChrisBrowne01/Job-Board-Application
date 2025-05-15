import React from 'react'
import { useState } from 'react';
import JobItem from './JobItem';

const JobList = () => {
  const [jobs, setJobValues] = useState([
    { id: '1', name: "Bike - White", status: "Stopped", task: "Mountain bike with 21-speed gear system and lightweight aluminum frame." },
    { id: '2', name: "Vtech Cordless Phone CS6519-15", status: "Running", task: "Cordless phone with caller ID, speakerphone, and digital answering system." },
    { id: '3', name: "Rucksuck - Brown", status: "Stopped", task: "Stylish brown rucksack with multiple compartments and padded straps." },
    { id: '4', name: "Vtech SN6197", status: "Stopped", task: "Cordless phone with answering machine and caller ID." },
    { id: '5', name: "Vtech SN6187-2", status: "Running", task: "Cordless phone with two handsets, answering machine, and caller ID." },
    { id: '6', name: "Jet Hose (Re-Nu) Bosh", status: "Completed", task: "Jet HoseHigh-pressure jet hose for efficient cleaning, compatible with Bosh systems." },
  ]);

  const [search, setSearch] = useState("");
  const [newJob, setNewJob] = useState({ id: '', name: '', status: '', task: '' });
  const [editingJob, setEditingJob] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingJob({ ...editingJob, [name]: value });
  };

  // Handles add functionallity
  const addJobToList = () => {
    if (newJob.id.trim() !== '' && newJob.name.trim() !== '' && newJob.status.trim() !== '' && newJob.task.trim() !== '') {
      setJobValues([...jobs, newJob]);
      setNewJob({ id: '', name: '', status: '', task: '' });
    }
  };

  // Handles delete functionality 
  const handleDelete = (id) => {
    setJobValues(jobs.filter((job) => job.id !== id));
  };
  
  const handleEdit = (job) => {
    setEditingJob(job);
  };

  const saveEdit = () => {
    if (editingJob.id.trim() !== '' && editingJob.name.trim() !== '' && editingJob.status.trim() !== '' && editingJob.task.trim() !== '') {
      setJobValues(
        jobs.map((job) => (job.id === editingJob.id ? {...editingJob} : job))
      );
      setEditingJob(null);
    }
  };

  console.log(jobs);
  
  // Filters the list of jobs based on a search query
  const searchFilter = jobs.filter((job) => {
    // Iterates through list of jobs, checks if any job's properties include the search query
    return Object.keys(job).some((key) => 
      job[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });

  // Handles truncate for long text
  const Truncate = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };

  return (
    <>
      <section className="job-list">
        <div className="container">
          <input 
            className="job-list-input"
            placeholder="Job Filter"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="grid">
            {searchFilter.map((job) => (
                <JobItem 
                  key={job.id}
                  job={job}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  Truncate={Truncate}
                />
                  
            ))}
          </div>
        </div>
        
      {editingJob ? (
        <div>
          <h3>Edit Job</h3>
          <input
            type="text"
            name="id"
            value={editingJob.id}
            onChange={handleEditInputChange}
            placeholder="Edit Job ID"
            disabled
          />
          <input
            type="text"
            name="name"
            value={editingJob.name}
            onChange={handleEditInputChange}
            placeholder="Edit Job Name"
          />
          <input
            type="text"
            name="status"
            value={editingJob.status}
            onChange={handleEditInputChange}
            placeholder="Edit Job Status"
          />
          <input
            type="text"
            name="task"
            value={editingJob.task}
            onChange={handleEditInputChange}
            placeholder="Edit Job Task"
          />
          <button onClick={saveEdit} disabled={!editingJob.name || !editingJob.status || !editingJob.task}>Save Changes</button>
        </div>
      ) : (
        <div>
          <h3>Add New Job</h3>
          <input
            type="text"
            name="id"
            value={newJob.id}
            onChange={handleInputChange}
            placeholder="Type Job ID"
          />
          <input
            type="text"
            name="name"
            value={newJob.name}
            onChange={handleInputChange}
            placeholder="Type Job Name"
          />
          <input
            type="text"
            name="status"
            value={newJob.status}
            onChange={handleInputChange}
            placeholder="Type Job Status"
          />
          <input
            type="text"
            name="task"
            value={newJob.task}
            onChange={handleInputChange}
            placeholder="Edit Job Task"
          />
          <button className='add' onClick={addJobToList}>Add new Job</button>
        </div>)}
      </section>
    </>
  )
}

export default JobList
