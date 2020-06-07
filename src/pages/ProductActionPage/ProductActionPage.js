import React, { Component } from 'react'
import '../ProductActionPage/ProductActionPage.css'
import callApi from '../../utils/apiCaller';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
 class ProductActionPage extends Component {

    constructor(props){
        super(props);
        this.state={
            txtName:'',
            txtPrice:'',
            txtStatus: ''
        }
    }



    onChange=(e)=>{
        let value= e.target.type ==='checkbox' ? e.target.checked: e.target.value;
            this.setState({
            [e.target.name]:value
        });
    }

    addProduct=(e)=>{
        e.preventDefault();
        callApi('Sanpham', 'POST',{
            name: this.state.txtName,
            price: this.state.txtPrice,
            status: this.state.txtStatus
        }).then(res=>{
            this.props.history.goBack();
        })
        
        // bị cái đoạn này bị dính router nên k chuyển props xuống được
    }

    

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 col-xs-6 col-lg-6 col-md-6">
                    <form>
                        <div className="form-group">
                            <label className="fix"> Tên Sản Phẩm
          <input type="text" className="form-control" name="txtName" value={this.state.txtName} onChange={this.onChange}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="fix" > Giá
          <input type="number" className="form-control" name="txtPrice"  value={this.state.txtPrice} onChange={this.onChange}/>
                            </label></div>
                        <div className="form-group">
                            
                            <label > Trạng thái
        </label></div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="txtStatus" value={this.state.txtStatus} onChange={this.onChange}/>
          Còn hàng
        </label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.addProduct}>Thêm</button>
                        <Link to="/product-list" className="btn btn-danger">
                         Trở lại
                        </Link>
                    </form>
                </div>
            </div>


        )
    }
}

export default withRouter(ProductActionPage)
