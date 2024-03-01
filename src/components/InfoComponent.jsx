import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStoreIos, faWindows } from "@fortawesome/free-brands-svg-icons"
import People from "../assets/images/People.png"

function InfoComponent(){
    return(
    <>

    <div className='flex justify-between flex-row h-screen'>

        <div className='flex justify-start flex-col items-start basis-1/2'>
        <h1 className="text-5xl mx-20 mt-40 text-blue-600 font-bold">Why Wait to Connect with your favorite People?</h1>
        <p className='my-10 mx-20 mt-20 text-3xl w-1/2'>Now its easy to join your friends & family with ka-net. Donwload and connect seemlessy with anyone around.</p>
        <div className='flex justify-around mx-20 flex-row w-full'>
        <button className='bg-black text-white p-8 rounded-md'>Download Now</button>
        <FontAwesomeIcon className='w-20 h-20 text-gray-500' icon={faWindows}/>
        <FontAwesomeIcon className='w-20 h-20 text-gray-500 ' icon={faAppStoreIos}/>    
        </div>   
        
        </div>

        <div className='flex justify-center items-center basis-1/2'>
        <img src={People}/>
        </div>

    </div>


    </>
    );
}

export default InfoComponent