import { Link } from "react-router-dom";
import "./addProduct.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import commontBg from "../../assets/images/more/common-bg.png";
import { useContext } from "react";
import { MainContext } from "../../Providers/MainProvider/MainProvider";
import Swal from "sweetalert2";
const AddProduct = () => {
  const { handleSound } = useContext(MainContext);
  const handleAddCoffe = (e) => {
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
    form.reset();

    fetch("http://localhost:5000/coffee", {
      method: "POST",
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
            title: "Successfully added!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="add-product-container">
      <img className="common-bg" src={commontBg} alt="" />
      <div className="add-product-inner-container">
        <Link onClick={handleSound} className="back-to-home" to={"/"}>
          <FaArrowLeftLong />
          <p>Back to home</p>
        </Link>
        <div className="form-container">
          <h1>Add New Coffee </h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleAddCoffe} className="form">
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
                  required
                />
              </div>
            </div>

            <input
              onClick={handleSound}
              className="button"
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
