import axios from "axios";

export const SHOWPRODUCT = 'SHOWPRODUCT';
export const DELETEPRODUCT = 'DELETEPRODUCT';
export const ADDPRODUCT = 'ADDPRODUCT';


export const getDataProduct = (data) => (dispatch,getState) => {
    axios('https://5ffdd943d9ddad0017f689eb.mockapi.io/redux/api/products?page=1&limit=10')
        .then((response)=>{dispatch({
            type: SHOWPRODUCT,
            payload: response.data,
        });
    })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => console.log('Done'));
        
};
