import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {" "}
      <h1>HOME PAGE</h1>
      <p>
        go to <Link to="Products">products</Link>
      </p>
    </>
  );
}
export default HomePage;
