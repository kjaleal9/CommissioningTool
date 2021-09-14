import asyncHandler from 'express-async-handler'
import Task from '../models/taskModel.js'
import mongoose from 'mongoose'

// @desc    Fetch all tasks
// @route   GET /api/tasks
// @access  Public
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find()
  if (tasks) {
    res.json({ tasks })
  } else {
    res.status(500).send('Server Error')
  }
})

// @desc    Fetch tasks by page
// @route   GET /api/tasks
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single task
// @route   GET /api/tasks/:id
// @access  Public
const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)
  if (task) {
    res.json(task)
  } else {
    res.status(404)
    throw new Error('Item not found')
  }
})

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private/Admin
const deleteTask = asyncHandler(async (req, res) => {
  if (req.body.idArray) {
    const result = await Task.deleteMany({
      _id: {
        $in: req.body.idArray,
      },
    })
    res.json({ message: 'Tasks removed', result })
  } else {
    const task = await Task.findById(req.params.id)

    if (task) {
      await task.remove()
      console.log('removed',task)
      res.json({ message: 'Task removed', deletedTask: task })
    } else {
      res.status(404)
      throw new Error(`{task.id} not found`)
    }
  }
})

// @desc    Create a task
// @route   POST /api/tasks
// @access  Private/Admin
const createTask = asyncHandler(async (req, res) => {
  const { name, area, taskType, deviceType } = req.body

  if (!name || !area || !taskType || !deviceType) {
    res.status(400)
    throw new Error('Request not valid')
  } else {
    const task = new Task({
      name,
      area,
      taskType,
      deviceType,
    })

    const createdTask = await task.save()
    res.status(201).json({ createdTask })
  }
})

// @desc    Update a Task
// @route   PUT /api/tasks/:id
// @access  Private/Admin
const updateTask = asyncHandler(async (req, res) => {
  const { name, area, taskType, deviceType } = req.body

  const task = await Task.findById(req.params.id)

  if (task) {
    task.name = name || task.name
    task.area = area || task.area
    task.taskType = taskType || task.taskType
    task.deviceType = deviceType || task.deviceType

    const updatedTask = await task.save()

    res.json(updatedTask)
  } else {
    res.status(404)
    throw new Error('Task not found')
  }
})

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)

  res.json(products)
})

export {
  getTasks,
  getTaskById,
  deleteTask,
  createTask,
  updateTask,
  createProductReview,
  getTopProducts,
}
