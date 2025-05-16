import React from 'react'
import './JobItem.js';
import './JobItem.css';

const JobItem = ({job, handleDelete, handleEdit, Truncate}) => {
  
  return (
    <div className={`card ${
                  job.status === "Running" 
                    ? "Running" 
                    : job.status === "Completed" 
                    ? "Completed" 
                    : "Stopped"
                }`} >
      <div className="card-body">
        <h5 className="card-title" title={job.name.length >= 50 ? job.name : null}>
          {Truncate(job.name, 55)}
        </h5>
        <p className="card-description">
          {Truncate(job.task, 55)}
        </p>
        <p className="card-price">{job.status}</p>
        <div className="card-detail">
          
        </div>
        <button onClick={() => handleEdit(job)}>Edit</button>
        <button onClick={() => handleDelete(job.id)}>Delete Job</button>
      </div>
    </div>
  )
}

export default JobItem
