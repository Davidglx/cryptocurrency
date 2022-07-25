import { legacy_createStore} from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";


export const store = legacy_createStore({
    reducer: {
        [cryptoApi.reducePath]: cryptoApi.reducer
    }
})

export default store;
