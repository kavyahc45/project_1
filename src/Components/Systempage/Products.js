import React, { Component } from 'react';
// import img from '../Img/images(01)';
import BrowerHistory from '../../Utils/BrowerHestory';

class Products extends Component {
    onClickhandel(){
        
          BrowerHistory.push('/account');
           }
    render() {
        return (
            <div>
                <h1>ACCOUNT INFORMATION</h1>
               <br></br>
               <div>
                   
                <button onClick={this.onClickhandel()}>Geeral Information</button>
                {/* <p>Please fill in the Following required information</p> */}
                <script>

</script>
                   </div>
                   <br></br>
                   <br></br>
                   <button>Location Information</button>
                   <br></br><br></br>
                   <button>Team Information</button>
                   <br></br><br></br>
                   <button>Additional Information</button>
                   <br></br><br></br>
                   <button>Main Address</button>
                  
            </div>
        );
    }
}

export default Products;