import React, { useContext } from 'react'
import { Userside } from '../../App';
import { useParams } from 'react-router-dom';
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
  } from "mdb-react-ui-kit";

const EditProduct = () => {
    
    const {id}=useParams();
    const{products}=useContext(Userside)
    const EditProduct=products.filter((product)=>product.id=== parseInt(id))
    console.log(EditProduct);
  return (
    <div>
        <div>{EditProduct[0].name}</div>

    <form style={{ margin: "30px" }} >
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example3"
        label="Product name"
      
            value={EditProduct[0].title}

    
      />
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example4"
        label="Product title"
        
      />
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example4"
        label="Product Description"
        
      />
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example4"
        label="Product Price"
        
      />
 
      <MDBBtn
        className="mb-4"
        type="submit"
        block
        
      >
        Edit Product
        
      </MDBBtn>
     
    </form>
    </div>
  
  )
}

export default EditProduct