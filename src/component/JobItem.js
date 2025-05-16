import React from 'react'
import './JobItem.css';

const JobItem = ({job, handleDelete, handleEdit, Truncate, triggerJob}) => {
  
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
      </div>
      <div className="card-detail"></div>
        <div className="card-footer">
          <button onClick={() => handleEdit(job)}>Edit</button>
          <button onClick={() => handleDelete(job.id)}>Delete Job</button>
          <div className="button-group">
            <button onClick={() => triggerJob(job.id)}>
              {job.status === "Stopped" ? "Start" : job.status === "Running" ? "Finish" : "Complete"}
            </button>
          </div>
        </div>
    </div>
  )
}

export default JobItem
