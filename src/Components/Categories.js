import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useContext } from "react";
// import { DataContext } from "../dataContext";
import QuizDeleteAndEdit from "./QuizDeleteAndEdit"
import { useParams } from "react-router-dom";


function Categories() {
  // const { categories, setCategories } = useContext(DataContext);
  const [categories, setCategories] = useState([])
  const {category} = useParams()

  useEffect(() => {
    fetch(`https://badjjr.herokuapp.com/api/quizzes/categories/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setCategories(json)
      })
      .catch(console.error);
  }, []);

  return (
    <section>
      {
        categories.map((cats) => {
          return (
            <QuizDeleteAndEdit 
            id={cats._id}
            title={cats.title}
            category={cats.category} />
          )
        })
      }
    </section>
  )
}

export default Categories;