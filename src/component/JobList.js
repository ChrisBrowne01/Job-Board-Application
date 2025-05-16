import React from 'react'
import { useState } from 'react';
import JobItem from './JobItem';
import './JobList.css';

const JobList = ({jobs, setJobValues}) => {
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

  // Event handler for deleting a JobItems 
  const handleDelete = (id) => {
    setJobValues(jobs.filter((job) => job.id !== id));
  };
  
  // Event handler editing a JobItem 
  const handleEdit = (job) => {
    setEditingJob(job);
  };

  // handle save Button event
  const saveEdit = () => {
    if (editingJob.id.trim() !== '' && editingJob.name.trim() !== '' && editingJob.status.trim() !== '' && editingJob.task.trim() !== '') {
      setJobValues(
        jobs.map((job) => (job.id === editingJob.id ? {...editingJob} : job))
      );
      setEditingJob(null);
    }
  };
  
  // Filters the list of jobs based on a input search query
  const searchFilter = jobs.filter((job) => {
    return Object.keys(job).some((key) => 
      job[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });

  // Handles truncate for long text
  const Truncate = (string, number) => {
    if (!string) return null;
    if (string.length <= number) return string;
    return string.slice(0, number) + "...";
  };

//  const triggerJob = (id) => {
  //  setJobValues(
      //jobs.map(job =>
        // checks if id
        // job.id === id ?
          // set status to change on click
  //         { ...job, status: job.status === "Stopped" ? "Running" : "Completed" } : job
  //     )
  //   );
  // }

  // Toggle button to switch between show/hide the job list 
  const [show, setShow] = useState(true);

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
                <div>Filter by: &nbsp;
        <form>
          {/* <select value={statusType} onChange={handleStatusChange}>
            <option value="all">All</option>
            <option value="Stopped">Stopped</option>
            <option value="Running">Running</option>
              <option value="Completed">Completed</option> */}
          {/* </select> */}
        </form>
        <button className="toggle" onClick={()=> setShow(!show)}>Toggle</button>
      </div>
          <div className="grid">
            {show && searchFilter.map((job) => (
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
