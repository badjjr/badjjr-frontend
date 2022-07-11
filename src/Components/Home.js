import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>
        Hey Bradjjr! What do you want to do?
      </p>
      <ul>
        <Link to='/categories'><li>Take a Quiz</li></Link>
        {/* <Link to='/create'><li>Make a Quiz</li></Link>
        <Link to='/myAccount'><li>Go to My Account</li></Link> */}
      </ul>
    </div>
  );
}

export default Home;