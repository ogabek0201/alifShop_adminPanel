import React from 'react'

const Product = ({img,price,name}) => {
  return (
    <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={`http://188.212.125.226:7001/Uploads/${img}`} alt="" />
              <div>
                <span
                  class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-0.5 mb-0.5">
                <span class="font-family-bold text-base">{price}</span>
                <span class="font-family-bold text-base"> c.</span>
                <span class="text-gray-400 line-through text-sm">{price}</span>
                <span class="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span class="text-sm">{price}</span>
                <span class="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                {name.ru}
              </p>
            </div>
          </a>
  )
}

export default Product