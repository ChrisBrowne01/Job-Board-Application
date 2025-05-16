import React from 'react'

const JobForm = ({newJob, handleInputChange, addJobToList}) => {
  return (
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
        </div>
  )
}

export default JobForm
