function Hero(){

const scrollToEvents=()=>{
document.getElementById("events").scrollIntoView({
behavior:"smooth"
})
}

return(

<div className="hero">

<div className="hero-content">

<h1>Experience Live Music</h1>

<p>Discover concerts, festivals and live shows near you</p>

<div className="hero-actions">

<input
type="text"
placeholder="Search concerts..."
className="hero-search"
/>

<button
className="explore-btn"
onClick={scrollToEvents}
>
Explore Events
</button>

</div>

</div>

</div>

)

}

export default Hero