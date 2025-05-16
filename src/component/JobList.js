import React, { useState } from 'react'
import JobItem from './JobItem';
import JobForm from './JobForm';
import './JobList.css';

const JobList = ({ jobs, setJobValues, show, setShow }) => {
  const [statusType, setStatusValue] = useState("all");
  const [search, setSearch] = useState("");
  const [newJob, setNewJob] = useState({ id: '', name: '', status: '', task: '' });
  const [editingJob, setEditingJob] = useState(null);

  // Handle add input data entered by user
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
    console.log('newJob: ', newJob)
  };

  // Handles edit input data enter by user
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingJob({ ...editingJob, [name]: value });
  };

  // Handles add functionallity
  const addJobToList = () => {
    if (newJob.id.trim() !== '' && newJob.name.trim() !== '' && newJob.status.trim() !== '' && newJob.task.trim() !== '') {
      setJobValues([...jobs, newJob]);
      setNewJob({ id: '', name: '', status: '', task: '' });
      console.log('jobs: ', jobs)
      console.log('newJob: ', newJob)
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

  // Event handler status a JobItem 
  const handleStatusChange = (event) => {
    setStatusValue(event.target.value);
  }

  // handle save Button event
  const saveEdit = () => {
    if (editingJob.id.trim() !== '' && editingJob.name.trim() !== '' && editingJob.status.trim() !== '' && editingJob.task.trim() !== '') {
      setJobValues(
        jobs.map((job) => (job.id === editingJob.id ? { ...editingJob } : job))
      );
      setEditingJob(null);
    }
  };

  // Combined filter: first filter by status, then by search query
  const filteredByStatus = statusType === "all" ? jobs : jobs.filter(job => job.status === statusType);

  const searchFilter = filteredByStatus.filter((job) => {
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

  // Change job based on status condition
  const triggerJob = (id) => {
    setJobValues(
      jobs.map(job =>
        job.id === id ? { ...job, status: job.status === "Stopped" ? "Running" : "Completed" } : job
      )
    );
  };

  
  
  return (
    <>
      <section className="job-list">
        <div className="container">
          <div className="job-filter">
            {/* Filter controls */}
            <label htmlFor="status-filter">Filter by: </label>

            <select
              id="status-filter"
              value={statusType}
              onChange={handleStatusChange}
            >
              <option value="all">All</option>
              <option value="Stopped">Stopped</option>
              <option value="Running">Running</option>
              <option value="Completed">Completed</option>
            </select>
            <input
              className="job-list-input"
              placeholder="Job Filter"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className="toggle" onClick={() => setShow(!show)}>{!show ? "Show" : "Hide"}</button>
          </div>
          <div className="grid">
            {show && searchFilter.map((job) => (
              <JobItem
                key={job.id}
                job={job}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                Truncate={Truncate}
                triggerJob={triggerJob}
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
          <JobForm
            newJob={newJob}
            handleInputChange={handleInputChange}
            addJobToList={addJobToList}
          />)}
      </section>
    </>
  )
}

export default JobList
