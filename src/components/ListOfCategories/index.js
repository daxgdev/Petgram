import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Category } from "../Category";
import { List, Item } from "./styles";

const url =
  "https://petgram-server-daxter-ivf8j1no5-daxtergd.vercel.app/categories";

const ListOfCategoriesComponent = () => {
  const { data: categories, loading } = useFetch(url);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key={loading}>
          <Category emoji={"Cargando..."} />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={category.id} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
