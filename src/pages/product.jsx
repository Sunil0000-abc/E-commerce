import React, { useContext } from 'react'
import {ShopContext} from '../context/shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/breadcrum/breadcrum';
import ProductDisplay from '../components/productdisplay/productdisplay';

const Product = () => {

  const {all_product}=useContext(ShopContext);
  const {productId} =useParams();
  const product =all_product.find((e)=>e.id=== Number(productId));
  
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product