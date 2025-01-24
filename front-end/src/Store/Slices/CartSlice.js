import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    clear: (state) => {
      (state.items = []), (state.totalPrice = 0);
    },
    add: (state, action) => {
      state.totalPrice += action.payload.price;
      let add = false;
      state.items = state.items?.map((e) => {
        if (e.id == action.payload.id) {
          e.cardQuantity += 1;
          add = true;
        } return e
      })
      if(!add){
        state.items.push({...action.payload,cardQuantity:1})
      }
    },
    remove: (state, action) => {
        state.items=state.items?.filter(e=>{
            if (e.id==state.items.id) {
                e.cardQuantity-=1
                state.totalPrice-=action.payload.price
                if(e.cardQuantity==0){
                    return false
                }
            } return e
        })
    },
  },
});
export const{clear , add , remove} = cartSlice.actions
export default cartSlice.reducer