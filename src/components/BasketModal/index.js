import React from "react";
import "./WordsModal.styles.scss";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

export default function BasketModal({
  isModalOpen,
  productsOnStorage,
  deleteTheProductFromUserList,
}) {
  const navigate = useNavigate();

  function onNavigate(e, res) {
    e.stopPropagation();
    navigate(`/products/${res.id}`);
  }

  return (
    <div
      className="modal-container"
      style={{
        height: isModalOpen ? "fit-content" : 0,
        boxShadow: !isModalOpen && "none",
        border: !isModalOpen && "none",
        display: !isModalOpen && "none",
      }}>
      <h2>Basket</h2>
      {productsOnStorage?.length ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productsOnStorage.map((res, i) => (
              <BasketItem
                onNavigate={onNavigate}
                deleteTheProductFromUserList={deleteTheProductFromUserList}
                res={res}
                key={i}
                i={i}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div>OBS! You have not any Product</div>
      )}
      <Button label="Checkout now" />
    </div>
  );
}

const BasketItem = ({ deleteTheProductFromUserList, res, i, onNavigate }) => {
  return (
    <tr onClick={(e) => onNavigate(e, res)}>
      <td>{i + 1}</td>
      <td>{res.name}</td>
      <td>{res?.quantity || 1}</td>

      <td>
        <MdOutlineDeleteOutline
          className="modal-list__delete"
          onClick={(e) => {
            e.stopPropagation();
            deleteTheProductFromUserList(res?.id);
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }}
        />
      </td>
    </tr>
  );
};
