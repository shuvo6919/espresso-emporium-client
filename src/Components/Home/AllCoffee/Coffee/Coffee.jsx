import { Link } from "react-router-dom";
import "./coffee.css";
import { IoMdEye } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { MainContext } from "../../../../Providers/MainProvider/MainProvider";

const Coffee = ({ coffee, handleDelete }) => {
  const { handleSound } = useContext(MainContext);
  const { name, chef, price, photoUrl, _id } = coffee;
  return (
    <div className="coffee-container">
      <img src={photoUrl} alt="" />
      <div className="details">
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Chef:</b> {chef}
        </p>
        <p>
          <b>Price:</b> {price} taka
        </p>
      </div>
      <div className="control-coffee">
        <Link onClick={handleSound} to={`/coffee/${_id}`}>
          <IoMdEye className="details" />
        </Link>
        <Link onClick={handleSound} to={`/update_coffee/${_id}`}>
          <MdEdit className="edit" />
        </Link>
        <Link onClick={() => handleDelete(_id)}>
          <MdDelete className="delete" />
        </Link>
      </div>
    </div>
  );
};

export default Coffee;
