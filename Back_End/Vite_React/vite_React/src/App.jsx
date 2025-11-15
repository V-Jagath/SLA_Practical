
import Card from './Components/Card'
import Blood from '../src/assets/Blood-Donation.jpeg'
import Calc from '../src/assets/Calculator.png'
import Cloud from '../src/assets/Full Pic with tie.png'
import Projects from "./Components/Card"

function App() {

  let logIn = { userName: "Jagath", password: "1234", userAge: 29 }
  let projects = [{ image: { Blood }, cardTitle: "Blood Donation", show: true, cardDiscription: "Blood Donation Platform" },
  { cardTitle: "Calculator", cardDiscription: "Calculator App" },
  { image: Calc, cardTitle: "Calculator", cardDiscription: "Calculator App" },
  { image: { Cloud }, cardTitle: "Jagath", cardDiscription: "hii" }];

  return (
    <div>
      <Projects Project={projects} />
    </div>
  )
};

export default App;
