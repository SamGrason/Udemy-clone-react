import c5 from "../Assets/Images/c5.jpg"
import c6 from "../Assets/Images/c6.jpg"
import c7 from "../Assets/Images/c7.jpg"
import c8 from "../Assets/Images/c8.jpg"
import c9 from "../Assets/Images/c9.jpg"
import c10 from "../Assets/Images/c10.jpg"
import c11 from "../Assets/Images/c11.jpg"
import c12 from "../Assets/Images/c12.jpg"

function Popularcourse(){
    return(
        <div class="popular">
        <h2>Most Popular Courses </h2>
        <p>The most popular courses of 2025</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={c5} alt=""></img>
                <h3>The complete AI guide</h3>
                <p>Julian Melanson</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>429 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={c6} alt=""></img>
                <h3>The Complete Python pro Bootcap</h3>
                <p>Angela Yu</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>409 <del>3109</del></p>
            </div>

            <div class="course-card">
                <img src={c7} alt=""></img>
                <h3>React-The Complete Guide</h3>
                <p>Maximilian Schwarzmuller</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>459 <del>3495</del></p>
            </div>

            <div class="course-card">
                <img src={c8} alt=""></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Colt Steele</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={c9} alt=""></img>
                <h3>Angular- The complete Guide</h3>
                <p>Maximilian Schwarzmuller</p>
                <p>4.3 ⭐⭐⭐⭐</p>
                <p>499 <del>3000</del></p>
            </div>

            <div class="course-card">
                <img src={c10} alt=""></img>
                <h3>Machine learning</h3>
                <p>Hadelin de Ponteves</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={c11} alt=""></img>
                <h3>Web development Bootcamp 2023</h3>
                <p>Colt Steele</p>
                <p>3.0 ⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={c12} alt=""></img>
                <h3>The Data Science Course : Complete Bootcamp</h3>
                <p>Jose Portilla</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>459 <del>3495</del></p>
            </div>
        </div>
    </div>
    )
}
export default Popularcourse