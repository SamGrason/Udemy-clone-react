function Navbar()
{
    return(
        <div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>
        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "rgb(0, 0, 0);"}}></i>
            <input type="text" placeholder="Search for Anything. Tech, Buissness, Art...."></input>
        </div>
        <div class="navbar__s3">
            <p>Courses</p>
            {/* <!-- <p>My learning</p> --> */}
            <div class="mylearning">
                My learning
                <div class="mylearning__popup">
                    You did not purchase Anything yet.
                </div>
            </div> 

            
            <i class="fa-solid fa-cart-shopping" style={{color: "rgb(0, 0, 0);"}}></i>
            <i class="fa-solid fa-bell" style={{color: "rgb(0, 0, 0);"}}></i>
            <i class="fa-solid fa-user" style={{color: "rgb(0, 0, 0);"}}></i>

        </div>

        <div class="navbar__s4">
            <i class="fa-solid fa-bars" style={{color: "rgb(0, 0, 0);"}}></i>
        </div>
    </div>
    )
}

export default Navbar