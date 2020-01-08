import React, { Component } from 'react';
// import img from '../Img/images(01)';
// import BrowerHistory from '../../Utils/BrowerHestory';

class Products extends Component {
    // onClickhandel(){
        
    //       BrowerHistory.push('/');
    //        }
    render() {
        return (
<div>
                <h2>PRODUCT INFORMATION </h2>
                {/* <script> 
              (document).ready(function(){
       (".collapse").on('show.bs.collapse', function(){
        	(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        })
    }); 
      
        </script> */}
                <div class="bs-example">
                    
    <div class="accordion" id="accordionExample">
        <div class="card">
            <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                    <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"><i class="fa fa-plus"></i>Product Specific Information</button>									
                </h2>
            </div>
            </div>
            </div>

            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
<label>Product Type</label>
<select class="mdb-select md-form">
  <option value="" disabled selected>Select</option>
  <option value="1">Life Insurance</option>
  <option value="2">Health Insurance</option>
  <option value="3">Motor Insurance</option>
  <option value="3">Propety Insurance</option>
  <option value="3">Travel Insurance</option>
</select>
<h2 class="mb-0">
                    <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"><i class="fa fa-plus"></i>Primary Information</button>									
                </h2>
</div>
</div>








            </div>
            </div>





        );
    }
}

export default Products;