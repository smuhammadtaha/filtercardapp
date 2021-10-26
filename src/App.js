// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Card from './card'

function App() {

  const [card, setCard] = useState ([
   {
     cardType:"Breakfast",
     cardCategory:"Bun",
     cardTitle:"My First Cart",
     cardSubtitle:"MILE FAIL AS LEFT",
     cardPara:"An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex.",
     cardimg:"https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
   },
   {
    cardType:"Lunch",
    cardCategory:"Biryani",
    cardTitle:"My First Cart",
    cardSubtitle:"MILE FAIL AS LEFT",
    cardPara:"An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex.",
    cardimg:"https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
  },
  {
    cardType:"Lunch",
    cardCategory:"Broast",
    cardTitle:"My First Cart",
    cardSubtitle:"MILE FAIL AS LEFT",
    cardPara:"An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex.",
    cardimg:"https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
  },
  ]);

// console.log(card.map((prop)=> prop.cardTitle))

const filterProduct = (e) => {
  let a = e.target.value
  let arr = card.filter(x => x.cardType == a)
  setCard(arr)
  console.log(arr)
}
const filterProduct1 = (e) => {
  let a = e.target.value
  let arr = card.filter(x => x.cardCategory == a)
  setCard(arr)
  console.log(arr)
}

  return (
    
    <>
    <div>
      <select onChange={(e) => filterProduct(e)}>
              <option value="Breakfast">BreakFast</option>
              <option value="Lunch">Lunch</option>
      </select>


      
      <select filterProduct1={(e) => {
        <option>{e.target.value}</option>
      }}></select>
              
    </div>
    {card.map((item , index) => {
      return(
        <div key={index}>
          <Card title={item.cardTitle} subtitle={item.cardSubtitle} img={item.cardimg} description={item.cardPara}  />
        </div>
      )

    })}

    {/* <Title {...card.map((prop)=>prop.cardTitle)} />
    <Pera />
    <Img/> */}
    </>
  );
}

export default App;
