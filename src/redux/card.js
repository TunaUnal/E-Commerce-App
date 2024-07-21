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
            const flag = state.card.find(p => p.id == actions.payload.id)
            let count = actions.payload.count ? actions.payload.count : 1
            if (flag) {
                state.card = state.card.map(c => {
                    return c.id == actions.payload.id ? { ...actions.payload, count: c.count + count } : c
                })
            } else {
                state.card = [...state.card, { ...actions.payload, count: count }]
            }
        },
        increaseItem: (state, actions) => {
                state.card = state.card.map(c => {
                    return c.id == actions.payload.id ? {...c, count:c.count+1} : c
                }) 
        },
        decreaseItem: (state, actions) => {
            console.log(actions.payload)
            if (actions.payload.count > 1) {
                state.card = state.card.map(c => {
                    return c.id == actions.payload.id ? {...c, count:c.count-1} : c
                }) 
                
            }else{
                state.card = state.card.filter(p => p.id !== actions.payload.id)

            }
        },
        deleteItemFromCard: (state, actions) => {
            console.log("delete itm triggered")
            state.card = state.card.filter(p => p.id !== actions.payload)
        },
        getCardData: (state, actions) => {
            //
        }
    }
});


export const { setCard, addToCard, increaseItem,decreaseItem, deleteItemFromCard } = cardSlice.actions;
export default cardSlice.reducer;