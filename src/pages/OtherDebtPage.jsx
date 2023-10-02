import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'



const OtherDebtPage = ({otherDebts}) => {


const { othersDebtsId } = useParams()
const { firstName, lastName, phoneNumber, amount, dedline, worked, state, description } = otherDebts.find((otherdebt)=>{
  if (otherdebt.id === othersDebtsId) {
    return otherdebt.id = othersDebtsId;
  }
});

  return (
    <Fragment>
      <section>
        <div className="container">
          <div className='text-center'>
            <h2>Fullname: {firstName} {lastName}</h2>
            <p>{worked ? "Worked" : "No worked"}</p>
            <p>Telephone: {phoneNumber} </p>
            <p>Amount: {amount} $</p>
            <p>Dedline: {dedline}</p>
            <p>Status: {state}</p>
            <p>Description: { description }</p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default OtherDebtPage;