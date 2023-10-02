import React, { Fragment } from 'react'
import OthersDebtsCard from '../components/cards/othersDebtsCard/OthersDebtsCard'
import { Button, Form, Modal } from 'react-bootstrap'

const OthersDebtsPage = ({
  otherDebts,
  otherDebt,
  searchOtherDebts,
  show,
  selected,
  validated,
  handleSubmit,
  handleClose,
  handleShow,
  editOtherDebt,
  deleteOtherDebt,
  handleOtherDebtor,
  handleSearchOtherDebts
}) => {




  let othersDebtsFound = otherDebts.filter((otherdebt)=>otherdebt.firstName.toLowerCase().includes(searchOtherDebts))

  return (
    <Fragment>
      <section id='search'>
        <div className="container">
          <h1 className='text-center opacity-75 my-4'>Other Debts</h1>
          <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={handleSearchOtherDebts} value={searchOtherDebts} placeholder="Debts searching..." />
            <button className="btn btn-outline-primary" onClick={handleShow} type="button" id="button-addon2">Add debtor</button>
          </div>
        </div>
      </section>
      <section id='otherDebts'>
        <div className="container">
        {othersDebtsFound.map((otherdebt)=>(<OthersDebtsCard 
          key={otherdebt.id}  
          editOtherDebt ={ editOtherDebt }
          deleteOtherDebt = { deleteOtherDebt }
          {...otherdebt} />))}
        </div>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
          <Modal.Header closeButton>
            <Modal.Title>{selected === null ? "Add" : "Save"} other debtor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className='mb-4'  controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={handleOtherDebtor}
                value={otherDebt.firstName}
              />
              <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-4'  controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                onChange={handleOtherDebtor}
                value={otherDebt.lastName}
              />
              <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-4'  controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Amount"
                onChange={handleOtherDebtor}
                value={otherDebt.amount}
              />
              <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-4'  controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="+998 00 000 00 00"
                onChange={handleOtherDebtor}
                value={otherDebt.phoneNumber}
              />
              <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-4'  controlId="dedline">
              <Form.Label>Dedline</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="2023-00-00"
                onChange={handleOtherDebtor}
                value={otherDebt.dedline}
              />
              <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-4'  controlId="state">
              <Form.Label> State(Status) </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Student"
                onChange={handleOtherDebtor}
                value={otherDebt.state}
              />
              <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-4'  controlId="description">
              <Form.Label> Description </Form.Label>
              <Form.Control
                required
                as="textarea"
                type="text"
                placeholder="Description"
                onChange={handleOtherDebtor}
                value={otherDebt.description}
              />
              <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary" >
              {selected === null ? "Add" : "Save"} other debtor
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

    </Fragment>
  )
}

export default OthersDebtsPage