import asyncHandler from 'express-async-handler';
import ControlModule from '../models/controlModuleModel.js';

// @desc    Fetch all controlModules
// @route   GET /api/controlModules
// @access  Public
const getControlModules = asyncHandler(async (req, res) => {
    const controlModules = await ControlModule.find();
    console.log(req.params.id)
    if (controlModules) {
        console.log(controlModules);
        res.json({ controlModules });
    } else {
        res.status(500).send('Server Error');
    }
});

// @desc    Fetch all products by page
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;

    const keyword = req.query.keyword
        ? {
              name: {
                  $regex: req.query.keyword,
                  $options: 'i',
              },
          }
        : {};

    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1));

    res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single controlModule
// @route   GET /api/controlModules/:id
// @access  Public
const getControlModuleById = asyncHandler(async (req, res) => {
    const controlModule = await ControlModule.findById(req.params.id);
  
    if (controlModule) {
        res.json(controlModule);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// @desc    Delete a controlModule
// @route   DELETE /api/controlModules/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404);
        throw new Error('Control Module not found');
    }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createControlModule = asyncHandler(async (req, res) => {
    const controlModule = new ControlModule({
        name: 'Sample name',
        area: 'Not Defined',
        deviceType: 'Digital Input'
    });

    const createdControlModule = await controlModule.save();
    res.status(201).json(createdControlModule);
});

// @desc    Update a controlModule
// @route   PUT /api/controlModules/:id
// @access  Private/Admin
const updateControlModule = asyncHandler(async (req, res) => {
    const {
        name,
        area,
        deviceType
    } = req.body;

    const controlModule = await ControlModule.findById(req.params.id);

    if (controlModule) {
        controlModule.name = name || controlModule.name;
        controlModule.area = area || controlModule.area;
        controlModule.deviceType = deviceType || controlModule.deviceType;

        const updatedControlModule = await controlModule.save();

        res.json(updatedControlModule);
    } else {
        res.status(404);
        throw new Error('Control Module not found');
    }
});

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
        const alreadyReviewed = product.reviews.find(
            r => r.user.toString() === req.user._id.toString()
        );

        if (alreadyReviewed) {
            res.status(400);
            throw new Error('Product already reviewed');
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        };

        product.reviews.push(review);

        product.numReviews = product.reviews.length;

        product.rating =
            product.reviews.reduce((acc, item) => item.rating + acc, 0) /
            product.reviews.length;

        await product.save();
        res.status(201).json({ message: 'Review added' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ rating: -1 }).limit(3);

    res.json(products);
});

export {
    getControlModules,
    getControlModuleById,
    deleteProduct,
    createControlModule,
    updateControlModule,
    createProductReview,
    getTopProducts,
};
