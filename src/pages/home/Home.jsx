import MainHeader from "../../components/header/MainHeader"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import "./home.css"


const Home = () => {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <div className="homeContainer">
          <Featured />
          <Featured />
      </div>
    </div>
  )
}

export default Home