import React, { Component } from 'react'
import ProductList from '../../components/ProductList/ProductList'
import {connect} from 'react-redux'
import callApi from '../../utils/apiCaller'
import {Link} from 'react-router-dom'
import {actFetchProducts, actFetchProductsRequest} from '../../actions/index'
 class ProductListPage extends Component {
   
    //cho nên dùng state
    constructor(props){
        super(props);
        this.state={
            products:[
               
            ]
        }
    }
   
    
   componentDidMount(){
        this.props.fecthAllProducts();
    }


    deleteProduct=(id)=>{
        callApi(`Sanpham/${id}`, 'DELETE' ,null).then(res=>{
            const productSauXoa = this.state.products.filter((product) => {
                return product.id !== id;
              })
              this.setState({ products: productSauXoa });
         })
    }
    
    //xử lý bất đồng bộ api , componentDidMount được gọi sau khi component render lần đầu tiên
    // ban đầu render không có dữ liệu, mình dùng hàm cdmount để khi render xong nó đi tiếp tới cdm sau đó mới lên server 
    //lấy dữ liệu về rồi sau đó setState trong lúc đó nó sẽ render lại 1 lần nữa và khi đó dữ liệu được đưa vào
    
    // trình tự ở đây là chạy render sau đó chạy componentDidMount, nhưng muốn render thêm 1 lần nữa thì mình phải setState
    // do đó phải tạo constructor để tạo state, đây là chưa redux đâu
    render() {
        let products=this.state.products
        //đợi m goi lên server lâu quá t giải quyết render cái đã,
        return (
            
                <div className="col-xs-12">
                    <Link to='product/add' className="btn btn-info">
                         Thêm Sản Phẩm
                    </Link>
                    <ProductList deleteProduct={this.deleteProduct} products={this.props.products}></ProductList>
                </div>
            
        )
    }
}


// cái product action là 1 điều hướng router how to chuyển props xuống?????

const mapStateToProps = state =>{
    return {
        products: state.products
    }
    //đưa dữ liệu trên state chuyển vô props
}
// cái thằng dispatch này giống store ảo để tạo phương thức cho cái component của  minh có props là hàm 


const mapDispatchToProps=(dispatch)=>{
    return{
        fecthAllProducts: ()=>{
            dispatch(actFetchProductsRequest())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage)
