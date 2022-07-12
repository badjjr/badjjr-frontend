import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categories(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://badjjr.herokuapp.com/api/quizzes")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json)
      })
      .catch(console.error);
  }, []);

  return (
    <section>
      {
        categories.map((cats) => (
          <div key={cats._id}>
            <h3> Title: { cats.title } </h3>
            <h4> No. of Questions: { cats.numberOfQuestions } </h4>
            <h4> Category: { cats.category } </h4>
          </div>
        ))
      }
    </section>
  )
}

export default Categories;