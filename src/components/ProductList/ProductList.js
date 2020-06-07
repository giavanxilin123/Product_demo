import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem'

export default class ProductList extends Component {
    render() {
      const elm = this.props.products.map((product,index)=>{
        return <ProductItem deleteProduct={this.props.deleteProduct} key={index} product={product} index={index}></ProductItem>
      })
        return (
            <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title btn-primary mt-5"> Danh sách sản phẩm</h3>
            </div>
            <div className="panel-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Mã</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Trạng thái</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {elm}
                </tbody>
              </table>
            </div>
          </div>
        )
    }
}
