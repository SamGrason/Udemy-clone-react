import c1 from "../Assets/Images/c1.jpg"
import c2 from "../Assets/Images/c2.jpg"
import c3 from "../Assets/Images/c3.jpg"
import c4 from "../Assets/Images/c4.jpg"


function Recommendation(){
    return(
        <div class="recommended">
            <h2 class="recommended__title">Recommend Courses for you</h2>
            <p>Pick your best fit</p>
            <div class="recommended__container">
                <div class="course-card">
                    <img src={c1} alt=""></img>
                        <h3>2023 Python Data Visulisation Masterclass</h3>
                        <p>Colt Steele</p>
                        <p>4.3 ⭐⭐⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={c2} alt=""></img>
                        <h3>Basic to Advanced Programming with EMC</h3>
                        <p>Colt Steele</p>
                        <p>3.9 ⭐⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={c3} alt=""></img>
                        <h3>Web development Bootcamp 2023</h3>
                        <p>Colt Steele</p>
                        <p>3.0 ⭐⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={c4} alt=""></img>
                        <h3>Master UI/UX Designing with Figma</h3>
                        <p>Colt Steele</p>
                        <p>4.0 ⭐⭐⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>


            </div>
        </div>
    )
}

export default Recommendation