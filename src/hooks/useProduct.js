import React, { createContext, useCallback, useState, useContext } from "react";
export const DicContext = createContext();

const products = [
  {
    id: 1,
    name: "Choco Bites",
    image: "1.png",
    description: "Candy with the taste of chocklad",
  },
  {
    id: 2,
    name: "Gummy Bears",
    image: "1.png",
    description: "Candy with the taste of hallon and mynt",
  },
  {
    id: 3,
    name: "Candy Canes",
    image: "1.png",
    description: "Candy with the taste of sstrawberg and mynt",
  },
  // Add more products as needed
];
export function ProductProvider({ children }) {
  const [isProductSaved, setIsProductSaved] = useState(false);
  const [savedProducts, setSaveProducts] = useState([]);
  const [isProducteleted, setIsProductDeleted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function addProductToBasket(product, basket) {
    // Creating a new array from the existing basket
    let newBasket = [...basket];

    // Find the index of the existing product in the new basket
    const existingProductIndex = newBasket.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      // If the product exists, increase the quantity
      newBasket[existingProductIndex].quantity += 1;
    } else {
      // If it doesn't exist, add it to the new basket with a quantity of 1
      newBasket.push({ ...product, quantity: 1 });
    }

    return newBasket;
  }
  //Save the word and meaning to local storage
  function saveProduct(product) {
    try {
      setLoading(true);
      const products = getProductFromStorage();
      if (products?.length > 0) {
        const newProductArray = addProductToBasket(product, products);
        localStorage.setItem("product", JSON.stringify(newProductArray));
        setIsProductSaved(true);
        setTimeout(() => {
          setIsProductSaved(false);
        }, 1500);
      } else {
        localStorage.setItem(
          "product",
          JSON.stringify([{ ...product, quantity: 1 }])
        );
        setIsProductSaved(true);
        setTimeout(() => {
          setIsProductSaved(false);
        }, 1500);
      }
      setLoading(false);
    } catch (error) {
      setIsProductSaved(true);
      setLoading(false);
      setError("Error on fetching product");
    }
  }
  async function getProductById(id) {
    if (!id) {
      return null;
    }
    try {
      const product = await products.find(
        (i) => i.id.toString() === id?.toString()
      );

      if (product) {
        return product;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
  const getAndParseFromLocalStorage = (product) => {
    const result = JSON.parse(localStorage.getItem(product));
    return result;
  };

  //Get the word and meaning from localstorage
  function getProductFromStorage() {
    const productsOnStorage = getAndParseFromLocalStorage("product");
    if (productsOnStorage?.length > 0) {
      setSaveProducts([...productsOnStorage]);
      return productsOnStorage;
    }
  }

  function deleteTheProductFromUserList(product) {
    if (!product) return;
    const products = getAndParseFromLocalStorage("product");
    const list = products.filter((res) => res.id !== product);
    localStorage.setItem("product", JSON.stringify(list));
    setIsProductDeleted(true);
    getProductFromStorage();
  }

  const value = {
    saveProduct,
    getProductFromStorage,
    savedProducts,
    isProductSaved,
    deleteTheProductFromUserList,
    isProducteleted,
    error,
    loading,
    products,
    getProductById,
  };
  return <DicContext.Provider value={value}>{children}</DicContext.Provider>;
}

export default function useProduct() {
  const context = useContext(DicContext);

  return context;
}
