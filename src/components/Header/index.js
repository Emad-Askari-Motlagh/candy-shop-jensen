import React, { useEffect, useState } from "react";
import "./Header.scss";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import useProduct from "../../hooks/useProduct";
import ProductsModal from "../BasketModal";
import { useTheme } from "../../hooks/useTheme";
import { FaExchangeAlt } from "react-icons/fa";
import Button_Secoundary from "../ButtonSecoundary";
import { MdShoppingCartCheckout } from "react-icons/md";
import { LuCandy } from "react-icons/lu";

const Header = () => {
  const navigate = useNavigate();
  const {
    getProductFromStorage,
    isProductSaved,
    deleteTheProductFromUserList,
    isProducteleted,
  } = useProduct();
  const { toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productsOnStorage, setProductsOnStorage] = useState([]);
  function onClickOnCheckout() {
    getProductFromStorage();
    setIsModalOpen(!isModalOpen);
  }

  function reFetch() {
    const productsOnStorage = getProductFromStorage();
    console.log(productsOnStorage);
    if (productsOnStorage && productsOnStorage?.length) {
      setProductsOnStorage([...productsOnStorage]);
    } else {
      setProductsOnStorage([]);
    }
  }
  useEffect(() => {
    reFetch();
  }, [isProductSaved, isProducteleted]);

  useEffect(() => {
    if (
      isProducteleted ||
      (isProductSaved && isModalOpen && productsOnStorage?.length)
    ) {
      setIsModalOpen(false);
      setTimeout(() => {
        reFetch();
        setIsModalOpen(true);
      }, 1000);
    }
  }, [isProducteleted, isProductSaved]);

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <LuCandy color="orange" size={44} />
      </div>
      <div className="nav--row">
        <nav>
          <ul>
            <li>
              <div className="checkout">
                <MdShoppingCartCheckout
                  color="white"
                  size={33}
                  className="nav--row__icons"
                  onClick={onClickOnCheckout}
                />
                {productsOnStorage?.length ? (
                  <div className="items-count">{productsOnStorage?.length}</div>
                ) : null}
                <ProductsModal
                  isModalOpen={isModalOpen}
                  productsOnStorage={productsOnStorage}
                  deleteTheProductFromUserList={deleteTheProductFromUserList}
                />
              </div>
            </li>
            <li>
              <Link to="/">
                <AiOutlineHome
                  className="nav--row__icons"
                  size={33}
                  color="white"
                />
              </Link>
            </li>
          </ul>
        </nav>
        <Button_Secoundary onClick={toggleTheme}>
          <div>Theme</div>
          <FaExchangeAlt />
        </Button_Secoundary>
      </div>
    </header>
  );
};

export default Header;
