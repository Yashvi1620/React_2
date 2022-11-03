import logo from './assests/airbnb_logo.png';
import "./Airbnb.css";

const Airbnb = _ => {
    return(
        <>
<div className="main">
    <h1>The Evolution of </h1>
    <h1>Airbnb's Frontend </h1>
</div>
<div className='sub-main'>
    <h3>@spikebrehm</h3></div>
<div className="img">
 <img src={logo} alt="logo"></img>
</div>
        </>
    );
}

export default Airbnb;