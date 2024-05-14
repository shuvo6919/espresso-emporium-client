import { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { MainContext } from "../../Providers/MainProvider/MainProvider";

const ProductDetails = () => {
  const { handleSound } = useContext(MainContext);
  const coffee = useLoaderData();
  const { name, photoUrl, price, details, chef } = coffee;

  return (
    <div>
      <Link onClick={handleSound} className="back-to-home" to={"/"}>
        <FaArrowLeftLong />
        <p>Back to home</p>
      </Link>
      <h1>Details Page</h1>
      <img src={photoUrl} alt="" />
      <p>Name: {name}</p>
      <p>Chef: {chef}</p>
      <p>Price: {price}</p>
      <p>Details: {details}</p>
    </div>
  );
};

export default ProductDetails;
