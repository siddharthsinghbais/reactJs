import React from 'react'
function Card({name,btnText="View Profile →"}){
return (
    <>
    <div class="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://i.pinimg.com/564x/39/aa/eb/39aaebc33872252aed06ee1af42fc79b.jpg"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">{name}</h1>
    <p class="mt-2 text-sm text-gray-300">
    Ram Lalla
    </p>
    
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText}
    </button>
  </div>
</div>
    </>
)
}
export default Card 