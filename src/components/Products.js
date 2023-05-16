import { Link } from "react-router-dom";

const Products = () => {
  const Dummy = [
    { id: "p1", title: "product1" },
    { id: "p2", title: "product2" },
    { id: "p3", title: "product3" },
  ];
  return (
    <>
      <h1>PRODUCTS PAGE</h1>
      {Dummy.map((prod) => (
        <li key={prod.id}>
          <Link to={prod.id}>{prod.title}</Link>
        </li>
      ))}
    </>
  );
};
export default Products;
