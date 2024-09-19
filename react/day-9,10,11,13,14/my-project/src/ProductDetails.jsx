import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from './Header'
import { Econtext } from './context/CartContext';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

  import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

export default function ProductDetails() {

  let {counter,setCounter,wishP,setWishp}=useContext(Econtext)

  

  const [singelData, setSingelData] = useState()
  const [wait, setWait] = useState(false)
  const [smallImg, setSamllImg] = useState([])

  const [bigImg,setBigImg]=useState("")
  let urlId = useParams().id;



  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${urlId}`)

      .then((ress) => {
        setSingelData(ress.data)
        setSamllImg(ress.data.images)
        setBigImg(ress.data.thumbnail)
        setWait(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // addWish
  let cheakid=wishP.map((v,i)=>{
    return v.id;
 })

 console.log(cheakid)

  let addWish=(items)=>{

    let newObj={
       id:items.id,
      thumbnail:items.thumbnail,
      brand:items.brand,
      category:items.category,
      price:items.price,
      title:items.title,
      quantity:1

    }

    if(newObj.id==cheakid){
      alert("hello")
    }
    else{
          setWishp([...wishP,newObj])
    toast.success('to add in your wishlist....',{
      style:{
        position:"fixed",
        left:"80%",
        top:"30%",
        backgroundColor:"red"
      }
    });
    }
     

    
  }


  // let path=useLocation().pathname
  // console.log(path.split("/")[2])
  return (
    <div>
    <ToastContainer />
  
    <Header/>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div x-data="{ image: 1 }" x-cloak>
              <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">

                <div x-show="image === 4" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <img src={wait == true ? bigImg : ""} />
                </div>

                <div className='w-full flex '>

                  {smallImg.length > 0 ?
                    smallImg.map((v) => {
                      return (
                        <div className='h-[120px] bg-white m-[5px] p-[5px] ' onMouseOver={()=>setBigImg(v)}  >
                          <img src={v} className='h-[150%]' />
                          
                        </div>
                      )
                    })
                    :
                    ""
                  }




                </div>
              </div>


            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {wait == true ? singelData.title : ""}
            </h2>
            <p class="text-gray-500 text-sm">By <a href="#" class="text-indigo-600 hover:underline">ABC Company</a></p>

            <div class="flex items-center space-x-4 my-4">
              <div>
                <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span class="text-indigo-400 mr-1 mt-1">$</span>
                  <span class="font-bold text-indigo-600 text-3xl"> {wait == true ? singelData.price : ""}   </span>
                </div>


              </div>
              <div class="flex-1">
                <p class="text-green-500 text-xl font-semibold">Save 12%</p>
                <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
              </div>
            </div>

            <p class="text-gray-500">Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.</p>

            <div class="flex py-4 space-x-4">
              

              <button  onClick={()=>addWish(singelData)}  type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                Add to Cart 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
