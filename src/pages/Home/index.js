import React from "react";
import "./Home.scss";
import Loading from "../../components/Loading";

import { useTheme } from "../../hooks/useTheme";
import ProductSection from "../../components/Products";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`home home--${theme}-theme`}>
      <div className="col1">
        <Description
          header="Candy"
          headerSecoundary="Your favourites candies"
          description="uild Process: If the issue is in a production build, ensure that the build process is completing successfully and that the public folder's contents are being copied to the build folder."
        />
      </div>
      <div className="home__col2">
        <ProductSection />
      </div>
    </div>
  );
}

const Description = ({ header, description, headerSecoundary }) => {
  return (
    <div className="description">
      <h1>{header}</h1>
      <h2>{headerSecoundary}</h2>
      <p>{description}</p>
    </div>
  );
};
