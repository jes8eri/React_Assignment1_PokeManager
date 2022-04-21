import UpArrow from "../assets/images/up-arrow.png";

const scrollUp = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

const ScrollUpButton = () => {
	return (
		<button onClick={scrollUp} className='scroll-up-button'> <img src={UpArrow} alt="Back to top" /></button>
	)
}

export default ScrollUpButton