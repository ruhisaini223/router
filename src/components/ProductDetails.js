import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const paras = useParams();
  return (
    <>
      <p>PRODUCT DETAILS</p>
      <p>{paras.id}</p>
      <Link to=".." relative="path">
        back
      </Link>
    </>
  );
}
export default ProductDetails;
