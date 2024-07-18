import { createSlice } from "@reduxjs/toolkit"

export const cardSlice = createSlice({
    name: "card",
    initialState: {
        card: []
    },
    reducers: {
        setCard: (state, actions) => {
            state.card = [...state.card, actions.payload];
        },
        addToCard: (state, actions) => {
            const flag  = state.card.find(p=>p.id==actions.payload.id)
            let count = actions.payload.count ? actions.payload.count : 1 
            if (flag) {
                state.card = state.card.map(c=> {
                    return c.id == actions.payload.id ? {id:c.id, count:c.count+count} : c 
                })
            }else{
                state.card = [...state.card, {id:actions.payload.id, count:count}]
            }
        },
        deleteItemFromCard: (state, actions) => {
            state.card = state.card.filter(p => p.id !== actions.payload)
        },
        decreaseItemFromCard: (state,actions) => {
            const flag  = state.card.find(p=>p.id==actions.payload.id)
            if (flag.count == 1) {
                state.card = state.card.filter(p => p.id !== actions.payload.id)
            }else{
                state.card = state.card.map(p => {
                    return p.id == actions.payload.id ? {id:p.id, count : p.count-1} : p
                })
            }
        },
        getCardData : (state, actions) => {
            //
        }
    }
});


export const { setCard, addToCard,decreaseItemFromCard, deleteItemFromCard } = cardSlice.actions;
export default cardSlice.reducer;