import {
    createSlice
} from "@reduxjs/toolkit";

export const likedSlice = createSlice({
    name: "liked",
    initialState: {
        liked: [],
        amount: 0
    },
    reducers: {
        likedProduct: (state, action) => {
            let itemFinded = state.liked.find(item => item.id === action.payload.id)

            if (itemFinded) {
                state.liked = state.liked.filter(item => item.id !== action.payload.id)
            } else {
                console.log('worked');
                state.liked.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            state.amount = state.liked.length
        },
        removeProduct: () => {},
        increaseProduct: () => {},
        decreaseProduct: () => {}
    }
})


export const {
    likedProduct
} = likedSlice.actions
export default likedSlice.reducer