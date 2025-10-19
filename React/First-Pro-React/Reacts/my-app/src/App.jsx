import React from "react";
import UserCard from "./components/UserCard";




const App = () => {
  return (
    <div>
      <UserCard 
        name="Love Rana" 
        image="/img1.jpg" 
        desc="desc1" 
      />
      <UserCard 
        name="Maharana Pratap" 
        image="/img1.jpg" 
        desc="desc2" 
      />
      <UserCard 
        name="PrithviRaj Chauhan" 
        image="/img1.jpg" 
        desc="desc3" 
      />
    </div>
  );
};

export default App;
