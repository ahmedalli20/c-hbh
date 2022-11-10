import React, {useEffect, useState} from 'react'
import "./AddProduct.css"
import { useParams, useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const params = useParams()
    const [id, setId] = useState(params.id)
    const navigate = useNavigate()
   

// Handling change in form
    const [formData, setFormData] = useState({
        name:"",
        price: 0,
        description:"",
        category_name:"",
        quantity: 0,
        image_url:""
    })

  
    function handleInputChange (event){
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
      });
    }

  //   useEffect(()=>{
  //     if(id){
  //          fetch(`http://localhost:9297/products/`)
  //          .then(resp=>resp.json())
  //          .then((item)=>{
  //              setFormData(item);
  //          })
  //     }},
  //    [id]
  // );

    function handleFormSubmit(e){
      e.preventDefault()
      fetch(`http://localhost:9297/products`, {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    setTimeout(() => {
        // navigate(`/home`)
      }, 2000);
    
  }

    return (
      <div className='product'>
            <h1>Add Product</h1>
        <div className='AddProduct'>
          <form onSubmit={handleFormSubmit}> 
            <div className='input-control'>
            <label>Name</label>
              <input type="text" required name='name' onChange={handleInputChange} value={formData.name}/>
             </div>
             <div className='input-control'>
              <label>Price</label>
             <input type="number" name='price' required onChange={handleInputChange} value={formData.price}/>
            </div>
             <div className='input-control'>
           <label>Description</label>
            <textarea cols="" rows="5" name='description' required onChange={handleInputChange} value={formData.description}></textarea>
           </div>
           <div className='input-control'>
            <label>Category name</label>
              <input type="text" required name='category_name' onChange={handleInputChange} value={formData.category_name}/>
             </div>
             <div className='input-control'>
              <label>quantity</label>
             <input type="number" name='quantity' required onChange={handleInputChange} value={formData.quantity}/>
            </div>
          <div className='input-control'>
           <label>Image URL</label>
            <input type="text" name='image_url' required onChange={handleInputChange} value={formData.image_url}/>
          </div>

          <div className='input-control'>
                <button type='submit'>Add Product</button>
           </div>

            </form>
        </div> 
      </div>
    )
}

export default AddProduct;