import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller'
export const actFetchProducts=(products)=>{
    return{
        type:Types.FETCH_PRODUCTS,
        products
    }  
}

// đoạn này là mình dispatch actFEtchproduct lên store và đồng thời dispatch resquest từ server 
// tức là ôm cái dữ liệu trên server đồng thời chạy tới store từ component đi
// giống kiểu là m vừa chạy tới store ban đầu m chưa có thông tin nhưng trong tgian m gọi điện cho tk server m nhận đc thông tin của nó r  m tiếp tục chayn tới store lúc này m đã có thông tin rồi (khúc này nó sẽ bị async action là do nh lúc tới store rồi m gọi điện cho tk server ko đc nên m cần thêm tgian để gọi điện => redux-thunk)
// còn bình thg là m gọi axios lấy dữ lieueh trên server về xong sau đó m lại dispatch nó vô store rồi lại lấy dữ liệu từ store xuống
// chỗ này giống như this.props.actFetchProduct vậy
export const actFetchProductsRequest=()=>{
    return (dispatch)=>{
        return callApi('Sanpham','GET', null).then(res=>{
            dispatch(actFetchProducts(res.data))
        })
        // bị aschysn cái chỗ dispatch với lấy dữ liệu trên server, dispatch >>>>>> rất nhiều so với lấy dữ lieeệ trên server
    }
}




