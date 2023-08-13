import mongoose from 'mongoose';

import { Product } from '../types/products.types';

const productSchema = new mongoose.Schema<Product>({
    name: {type: String, required: true},
    category: {type: String, required: true},
    price: { type: Number, required: true},
    size: {type: String, required: true},
    gender: {type: String, required: true},
    brand: {type: String, required: true},
    ratingCount: { type: Number, required: true},
    rating: { type: Number, required: true}
});

const ProductSchema = mongoose.model("Products", productSchema);

export { ProductSchema }