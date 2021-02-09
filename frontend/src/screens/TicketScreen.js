import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import { Fragment } from 'react'
import { tickets } from '../files/tickets'

const ProductEditScreen = ({ match, history }) => {
  const area = match.params.area

  const areaTickets = tickets.filter((ticket) => ticket.area === area)

  // const productId = match.params.id

  // const [name, setName] = useState('')
  // const [price, setPrice] = useState(0)
  // const [image, setImage] = useState('')
  // const [brand, setBrand] = useState('')
  // const [category, setCategory] = useState('')
  // const [countInStock, setCountInStock] = useState(0)
  // const [description, setDescription] = useState('')
  // const [uploading, setUploading] = useState(false)

  // const dispatch = useDispatch()

  // const productDetails = useSelector((state) => state.productDetails)
  // const { loading, error, product } = productDetails

  // const productUpdate = useSelector((state) => state.productUpdate)
  // const {
  //   loading: loadingUpdate,
  //   error: errorUpdate,
  //   success: successUpdate,
  // } = productUpdate

  // useEffect(() => {
  //   if (successUpdate) {
  //     dispatch({ type: PRODUCT_UPDATE_RESET })
  //     history.push('/admin/productlist')
  //   } else {
  //     if (!product.name || product._id !== productId) {
  //       dispatch(listProductDetails(productId))
  //     } else {
  //       setName(product.name)
  //       setPrice(product.price)
  //       setImage(product.image)
  //       setBrand(product.brand)
  //       setCategory(product.category)
  //       setCountInStock(product.countInStock)
  //       setDescription(product.description)
  //     }
  //   }
  // }, [dispatch, history, productId, product, successUpdate])

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0]
  //   const formData = new FormData()
  //   formData.append('image', file)
  //   setUploading(true)
  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     }
  //     const { data } = await axios.post('/api/upload', formData, config)
  //     setImage(data)
  //     setUploading(false)
  //   } catch (error) {
  //     console.error(error)
  //     setUploading(false)
  //   }
  // }

  const submitHandler = () => {}
  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   dispatch(
  //     updateProduct({
  //       _id: productId,
  //       name,
  //       price,
  //       image,
  //       brand,
  //       category,
  //       description,
  //       countInStock,
  //     })
  //   )
  // }
  console.log(match.params.area)

  return (
    <Fragment>
      <h1>{area}</h1>
      <p>View active tickets in the {area} area</p>
      <hr />
      {areaTickets.map((ticket) => (
        <Card>
          <Card.Header>Ticket - {ticket._id}</Card.Header>
          <Card.Body>
            <Card.Title>{ticket.controlModule}</Card.Title>
            <Card.Text>{ticket.comment}</Card.Text>
            <Button variant='primary'>Go To Device</Button>
          </Card.Body>
        </Card>
      ))}

      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
    </Fragment>
  )
}

export default ProductEditScreen
