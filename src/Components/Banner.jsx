import { Link} from 'react-router-dom';
import Typewriter from 'typewriter-effect';



const Banner = () => {
   


    return (
        <div>
            <div className="relative bg-cover bg-center md:h-screen h-72 banner-image" style={{ backgroundImage: 'url("https://i.ibb.co/WsB4Tx4/office-supplies-keyboard-coffee-cup-card-eyeglasses-candle-headphone-blue-background.jpg")' }}>
                <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="md:w-9/12 mx-auto text-2xl md:text-5xl text-white font-bold leading-tight mb-4 line-"> Streamline Your Productivity with our Intuitive <span className='text-lime-800 italic text-3xl md:text-6xl'>TaskHub Task Management</span> Platform </h1>
                        <p className="text-sm md:text-xl text-white mb-8 md:w-8/12 w-10/12 mx-auto">

                            <Typewriter
                                options={{
                                    strings: ['TaskHub: A stitch in time saves nine ✍️', ' Do not put off until tomorrow what you can do today. ✍️'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
                        <div className="flex justify-center md:mb-0 ">
                            <button className="border border-lime-600 hover:bg-white hover:text-lime-800 text-white font-semibold btn-secondary py-2 px-4 rounded shadow mr-4 duration-300">View Services</button>
                            <Link to="/dashboard">
                                <button className="border border-white hover:bg-white text-lime-800 font-semibold py-2 px-4 rounded shadow mr-4 duration-300">Let's Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;