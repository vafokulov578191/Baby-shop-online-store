import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",

    async () => {
        const {
            data
        } = await axios.get("localhost")

        return data
    }
)