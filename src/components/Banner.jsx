
import './styles/banncer.css'



const Banner = () => {
  return (
    <>
    <div className='banner-container mt-4 p-3'>
        <div className='p-2 w-full flex flex-col items-center text-center mx-auto shadow-2xl rounded-lg'> 
        <div className="category">
            <ul>
                <li> <div className='category-link'><h1>Computing </h1>   <span className="material-symbols-outlined text-xl">mouse</span>  </div> <div className='arrow'> <span className="material-symbols-outlined">chevron_right</span></div></li>
                <li> <div className='category-link'><h1>home & office </h1>   <span className="material-symbols-outlined text-xl">apartment</span>  </div> <div className='arrow'> <span className="material-symbols-outlined">chevron_right</span></div></li>
                <li> <div className='category-link'><h1>Electronics </h1>   <span className="material-symbols-outlined text-xl">ev_station</span>  </div> <div className='arrow'> <span className="material-symbols-outlined">chevron_right</span></div></li>
                <li> <div className='category-link'><h1>Fashion </h1>   <span className="material-symbols-outlined text-xl">apparel</span>  </div> <div className='arrow'> <span className="material-symbols-outlined">chevron_right</span></div></li>
            </ul>
        
        </div> 
        </div>
        <div className='p-2 w-full flex flex-col items-center text-center mx-auto shadow-2xl rounded-lg'> 
      
            center</div>
            <div className='p-2 w-full flex flex-col items-center text-center mx-auto shadow-2xl rounded-lg'>  left
             right</div>

    </div>
    </>
  )
}

export default Banner