import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { reducer } from './reducer';

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 
};

const pReducer = persistReducer(persistConfig, reducer);
const it={
    timkiem:'',
    user:{
        name: "",
        email: "",
        address: "",
        telephone: "",
        admin:-1
    },
    item:{
        _id:"",
        name:"",
        image:[""],
        describes:"",
        price:0,
        sale:0,
        size:[{
            name:"",
            quantity:0,
            _id:""
        }],
        category:{
            _id:"",
            name:"",
            image:""
        }
    }
}
export const store = createStore(pReducer,it);
export const persistor = persistStore(store);