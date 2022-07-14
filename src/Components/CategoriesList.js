import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/CategoriesList.css"

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
          <Link to = {`/category/${category}`} className = "category-list" >
            <ul key = { category } >
              <li className = "category-item">
                { category.toUpperCase() }
              </li>
            </ul>
          </Link>
        ))
      }


    </section>
    
  //   <section>
  //     <ul className = "category-list">
  //       <Link to = "/category/animals" className = "category-item"><li>ANIMALS</li></Link>
  //       <Link to = "/category/geo" className = "category-item"><li>GEOGRAPHY</li></Link>
  //       <Link to = "/category/seir" className = "category-item"><li>SEIR-59</li></Link>
  //       <Link to = "/category/celebs" className = "category-item"><li>CELEBRITIES</li></Link>
  //       <Link to = "/category/household" className = "category-item"><li>HOUSEHOLD ITEMS</li></Link>
  //       <Link to = "/category/debugging" className = "category-item"><li>DEBUGGING</li></Link>
  //     </ul>
  //   </section> 
  );
}

export default CategoriesList;
