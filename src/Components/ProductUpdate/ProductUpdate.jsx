import "./productUpdate.css";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import commontBg from "../../assets/images/more/common-bg.png";
import { useContext } from "react";
import { MainContext } from "../../Providers/MainProvider/MainProvider";
import Swal from "sweetalert2";
const ProductUpdate = () => {
  const coffee = useLoaderData();
  const { handleSound } = useContext(MainContext);
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    const price = form.price.value;
    const coffeeInfo = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoUrl,
      price,
    };

    fetch(`http://localhost:5000/coffee/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          Swal.fire({
            title: "Successfully Updated!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="update-product-container">
      <img className="common-bg" src={commontBg} alt="" />
      <div className="update-product-inner-container">
        <Link onClick={handleSound} className="back-to-home" to={"/"}>
          <FaArrowLeftLong />
          <p>Back to home</p>
        </Link>
        <div className="form-container">
          <h1>Update Existing Coffee Details</h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleUpdateCoffee} className="form">
            <div className="input-container">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee name"
                  className="input"
                  name="name"
                  defaultValue={coffee.name}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee chef"
                  className="input"
                  name="chef"
                  defaultValue={coffee.chef}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="input"
                  name="supplier"
                  defaultValue={coffee.supplier}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee taste"
                  className="input"
                  name="taste"
                  defaultValue={coffee.taste}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee category"
                  className="input"
                  name="category"
                  defaultValue={coffee.category}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee details"
                  className="input"
                  name="details"
                  defaultValue={coffee.details}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter photo URL"
                  className="input"
                  name="photoUrl"
                  defaultValue={coffee.photoUrl}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee price"
                  className="input"
                  name="price"
                  defaultValue={coffee.price}
                  required
                />
              </div>
            </div>

            <input
              onClick={handleSound}
              className="button"
              type="submit"
              value="Update Coffee Details"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
