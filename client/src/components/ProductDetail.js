import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import Product from "./Product";
import Reviews from "./Reviews";

function ProductDetail({ user }) {
  const match = useRouteMatch()
  const params = useParams()
  const [productDetail, setProductDetail] = useState({})

  useEffect(() => {
    fetch(`/api/products/${params.productId}`)
    .then((r) => {
      if (r.ok) {
        r.json().then((product) => setProductDetail(product))
      }
    })
  }, [params.productId])

  return (
    <div>
      <Product product={productDetail} user={user} />
      {productDetail.reviews ?
      <Reviews reviews={productDetail.reviews} userId={user.id} productId={productDetail.id} setProductDetail={setProductDetail} productDetail={productDetail} />
      : null}
    </div>
  );
}

export default ProductDetail;