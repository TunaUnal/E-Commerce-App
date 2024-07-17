import { createSlice } from "@reduxjs/toolkit"

export const cardSlice = createSlice({
    name: "card",
    initialState: {
        card: []
    },
    reducers: {
        setCard: (state, actions) => {
            state.card = actions.payload;
            console.log("cars :::: ",state.card)
        },
        addToCard: (state, actions) => {
            state.card = [...state.card, actions.payload]
        },
        deleteItemFromCard: (state, actions) => {
            state.card = state.card.filter(p => p.id !== actions.payload)
        }
    }
});


export const { setCard, addToCard, deleteItemFromCard } = cardSlice.actions;
export default cardSlice.reducer;