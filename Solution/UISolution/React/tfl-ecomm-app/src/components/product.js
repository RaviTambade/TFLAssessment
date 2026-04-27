import React from 'react';
import { useState, useEffect } from 'react';
import getFlowers from '../api/flowerService';


function Product() {

    //state to hold flower data
    const [flowers, setFlowers] = useState([]);

    //fetch flower data on component mount
    useEffect(() => {
        getFlowers().then(setFlowers);
    }, []);

  return (
      <div style={styles.card}>
      <h3>🌸 Flower List</h3>
      <ul>
        {flowers.map(flower => (
          <li key={flower.id}>
            {flower.name} - {flower.color}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: {
    width: "350px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif"
  },
  title: {
    marginBottom: "12px"
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0
  }
};

export default Product;
