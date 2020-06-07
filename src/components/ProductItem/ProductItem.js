import React, { Component } from 'react'
import callApi from '../../utils/apiCaller'

export default class ProductItem extends Component {
  showStatus=()=>{
    if(this.props.product.status===true){
      return "Còn hàng"
    }
    return "Hết Hàng"
  }
// thật ra có thẻ dùng axios luôn
  onDelete=(id)=>{
    this.props.deleteProduct(id)
  }
    render() {
        
        return (
            <tr>
            <td>{this.props.index+1}</td>
            <td>{this.props.product.id}</td>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.price}</td>
            <td>
              <span className="label label-warning">
                {this.showStatus()}
              </span>
            </td>
            <td>
              <button type="button" className="btn btn-success mr-2" >
                Sửa
              </button>
              <button type="button" className="btn btn-danger mr-2" onClick={()=>{this.onDelete(this.props.product.id)}}>
                Xóa
              </button>
            </td>
          </tr>
        )
    }
}
