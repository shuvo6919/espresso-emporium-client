import { useContext, useEffect, useState } from "react";
import "./allCoffee.css";

import { GiCoffeeCup } from "react-icons/gi";
import { Link, useLoaderData } from "react-router-dom";
import Coffee from "./Coffee/Coffee";
import { MainContext } from "../../../Providers/MainProvider/MainProvider";
import Swal from "sweetalert2";

const AllCoffee = () => {
  const [x, setX] = useState(true);
  const { handleSound } = useContext(MainContext);
  const [allCoffee, setAllCoffee] = useState(useLoaderData());

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => setAllCoffee(data));
  }, [x]);

  const handleAddCoffee = () => {
    handleSound();
  };
  const handleDelete = (delteID) => {
    handleSound();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${delteID}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setX(!x);
            Swal.fire({
              title: "Deleted!",
              text: "Your coffee has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  return (
    <div className="all-coffee-container">
      <p>--- Sip & Savor</p>
      <h1>Our Popular Products</h1>
      <Link to={"/add_product"} onClick={handleAddCoffee} className="button">
        Add Coffe <GiCoffeeCup />
      </Link>
      <div className="all-coffee">
        {allCoffee.map((coffee) => (
          <Coffee
            key={coffee._id}
            coffee={coffee}
            handleDelete={handleDelete}
          ></Coffee>
        ))}
      </div>
    </div>
  );
};

export default AllCoffee;
