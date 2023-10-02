import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const OthersDebtsCard = ({id, firstName, lastName, amount, dedline, phoneNumber, editOtherDebt, deleteOtherDebt}) => {

  

  return (
    <Fragment>
          <div className="alert alert-warning row align-items-center">
      <div className='col-6'>
        <h3>{firstName} {lastName}</h3>
        <div>
          <time>{dedline}</time> | <span>{phoneNumber}</span>
        </div>
      </div>
      <div className='col'>
        <span className="badge bg-success">Amount: {amount} $</span>
      </div>
      <div className='col-md-auto'>
        <button onClick={()=>{editOtherDebt(id)}} className="btn btn-primary me-3">Edit</button>
        <button onClick={()=>{deleteOtherDebt(id)}}  className="btn btn-danger me-3">Delete</button>
        <Link to={`/othersdebts/${id}`} className="btn btn-warning">More</Link>
      </div>
    </div>
    </Fragment>
  )
}

export default OthersDebtsCard