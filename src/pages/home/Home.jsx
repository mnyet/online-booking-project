import MainHeader from "../../components/header/MainHeader"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import "./home.css"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"


const Home = () => {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browser by hotel type</h1>
          <PropertyList />
          <h1 className="homeTitle">Home guests love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
      </div>
    </div>
  )
}

export default Home