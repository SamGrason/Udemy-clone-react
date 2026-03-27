// Importing components
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Sales from "./components/Sales"
import Recommendation  from "./components/Recommendation"
import Topic from "./components/Topic"
import PopularCourse from "./components/Popularcourse"
import Footer from "./components/footer"


function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Sales></Sales>
            <Recommendation></Recommendation>
            <Topic></Topic>
            <PopularCourse></PopularCourse>
            <Footer></Footer>
        </div>
    )
}

export default App