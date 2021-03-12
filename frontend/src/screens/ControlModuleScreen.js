import React, { Fragment, useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardDeck,
  Collapse,
  Pagination,
  Row,
  Table
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ControlModuleCard from '../components/ControlModuleCard'

import { getControlModules } from '../actions/controlModuleActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import SearchBox from '../components/SearchBox'

const ControlModuleScreen = () => {
  const controlModuleList = useSelector((state) => state.controlModuleList)
  const { loading, controlModules, error } = controlModuleList

  const [open, setOpen] = useState(false)
  const [listStyle, setListStyle] = useState('list')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getControlModules())
  }, [dispatch])
  const deleteHandler = () => {}

  

  return (
    <Fragment>
      <h1>Control Modules</h1>
      <p>View all of your control modules</p>
      {listStyle === 'card' && (
        <Button
          className='mt-auto mb-auto btn-sm'
          onClick={() => setListStyle('list')}
        >
          List
        </Button>
      )}
      {listStyle === 'list' && (
        <Button
          className='mt-auto mb-auto btn-sm'
          onClick={() => setListStyle('card')}
        >
          Cards
        </Button>
      )}
      <hr />

      <SearchBox />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        listStyle === 'card' && (
          <Row className='m-auto'>
            {controlModules.map((controlModule) => (
              <ControlModuleCard
                name={controlModule.name}
                area={controlModule.area}
                comment={
                  'This is a sample comment with a lot of random words to form a larger sentence. This sentence is added so that the card comment can become larger, forming a paragraph. This last sentence is more nonesense. You are welcome.'
                }
                deviceType={controlModule.deviceType}
                createdAt={controlModule.createdAt}
                status={controlModule.status}
                tickets={controlModule.tickets}
              />
            ))}
          </Row>
        )
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        listStyle === 'list' && (
          <Fragment>
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>AREA</th>
                  <th>TYPE</th>
                  <th>COMMENT</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {controlModules.map((controlModule) => (
                  <tr key={controlModule._id}>
                    <td>{controlModule._id}</td>
                    <td>{controlModule.name}</td>
                    <td>{controlModule.area}</td>
                    <td>{controlModule.deviceType}</td>
                    <td>
                      {controlModule.comment && (
                        <Fragment>
                          <Button
                            onClick={() => setOpen(!open)}
                            aria-controls='example-collapse-text'
                            aria-expanded={open}
                          >
                            click
                          </Button>
                          <Collapse in={open}>
                            <Card.Text>{controlModule.comment}</Card.Text>
                          </Collapse>
                        </Fragment>
                      )}
                    </td>
                    {
                      <td>
                        <LinkContainer
                          to={`/admin/controlModules/${controlModules._id}/edit`}
                        >
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>
                        <Button
                          variant='danger'
                          className='btn-sm'
                          onClick={() => deleteHandler(controlModules._id)}
                        >
                          <i className='fas fa-trash'></i>
                        </Button>
                      </td>
                    }
                  </tr>
                ))}
              </tbody>
            </Table>
          </Fragment>
        )
      )}
      <Pagination className='mt-3'>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </Fragment>
  )
}

export default ControlModuleScreen
