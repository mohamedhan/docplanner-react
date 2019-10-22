import React from 'react';
import './App.css';
import Intro from './component/Intro.js'
import Navmenu from'./component/Navmenu.js'
import Badge from './component/Badge.js'
import Global from './component/Global.js'
import Stat from './component/Stat.js'
import Country from'./component/Country.js'
import Footer from './component/Footer.js'

const menu=[{item:"About Us"},{item:"Career"},
{item:"Departments",dropdown:["Marketing & PR","Customer Success & Sales","IT, Product, Design & UX",
"Finance & Administration","HR & more"
]}
]
const img="https://www.docplanner.com/img/sygnet.png"
const badges=[{
  title:"For patients",
  description:"Find a doctor, book a visit and solve any health-related doubt",
  image:"https://www.docplanner.com/img/screen-marketplace@2x.png",
  list:["Choose country","Argentina","AUSTRALIA","BRAZIL","COLOMBIA","CHILE","FRANCE","ITALY"],
  class:"serviceCardPatient"},
{title:"For doctors",
description:"Save time managing visits and<br> cut no-shows by half",
image:"https://www.docplanner.com/img/screen-saas@2x.png",
class:"serviceCardDoctor"}
]
const stat=[{img:"https://www.docplanner.com/img/flag.png",title:"Leader in  10 countries",parag:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",class:"box13"},
{img:"https://www.docplanner.com/img/patients.png",title:"30 million unique patients",parag:"visit us every month",class:"box24"},
{img:"https://www.docplanner.com/img/visits.png",title:"1.5 million appointments",parag:"booked last month",class:"box13"},
{img:"https://www.docplanner.com/img/doctors.png",title:"2 million active doctors",parag:"trust in our solutions",class:"box24"}
]
const country=[
  {
    image:"https://www.docplanner.com/images/warsaw.png",
    pays:"Warsaw",
    btn:"SEE OPENINGS",
    class:"country"
  },
  {
    image:"https://www.docplanner.com/images/barcelona.png",
    pays:"Barcelone",
    btn:"SEE OPENINGS",
    class:"country"
  },
  {
    image:"https://www.docplanner.com/images/istanbul.png",
    pays:"Istanbul",
    btn:"SEE OPENINGS",
    class:"country"
  },
  {
    image:"https://www.docplanner.com/images/rome.png",
    pays:"Rome",
    btn:"SEE OPENINGS",
    class:"country"
  },
  {
    image:"https://www.docplanner.com/images/mexico-city.png",
    pays:"Mexico City",
    btn:"SEE OPENINGS",
    class:"country"
  },
  {
    image:"https://www.docplanner.com/images/curitiba.png",
    pays:"Curitiba",
    btn:"SEE OPENINGS",
    class:"country"
  }


]

function App() {
  return (
    <div className="App">
      <Navmenu  elem={menu}/>
      <Intro image={img} />
      <Badge badge={badges}/>
      <Global />
      <Stat stat={stat} />
      <Country country={country}/>
      <Footer/>
    </div>
  );
}

export default App;
