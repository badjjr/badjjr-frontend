import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/CategoriesList.css"

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  
  const myArr = categories.map((a) => (
    a.category
  ))
  // console.log("myArr =====>",myArr)

  const newArr = [...new Set(myArr)].map((b) => (
    b
  ))
  // console.log("newArr Console ==>", newArr)

  useEffect(() => {
    fetch("https://badjjr.herokuapp.com/api/quizzes")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json)
      })
      .catch(console.error);
  }, []);

  return(

    <section className = "category-container">
      {
        newArr.map((category) => (
          <Link to = {`/categories/${category}`} className = "category-list" >
            <ul key = { category } >
              <li className = "category-item">
                { category.toUpperCase() }
              </li>
            </ul>
          </Link>
        ))
      }


    </section> 
  );
}

export default CategoriesList;
