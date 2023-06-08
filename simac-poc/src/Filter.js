import {useState} from "react";

const Filter = ({ data }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = [...new Set(data.map((item) => item.category))];
    return (
  <div>
    {categories.map((category) => (
      <button key={category} onClick={() =>
      setSelectedCategory(category)}>{category}</button>
      
    ))}
    <ul>
      {data.filter((item) => !selectedCategory || item.category === selectedCategory)
      .map ((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  </div>
    );
  };
  
  export default Filter;