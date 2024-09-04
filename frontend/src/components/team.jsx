import React from 'react'
import Aadish from '../assets/team-photos/Aadish.jpg'

function Team() {
  return (
    <div>
        <div>
            <h1 className='text-5xl text-center m-5'>Senior Council</h1>
            <div id="team" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center mx-16 my-10 px-20 py-10'>
                <img src="" class="w-56 h-96 object-cover" alt="President Neha" />
                <img src="" class="w-56 h-96 object-cover" alt="Vice President Parth" />
                <img src={Aadish} class="w-56 h-96 object-cover" alt="Vice President Aadish" />
                <img src="" class="w-56 h-96 object-cover" alt="Head of Operations Alka" />
                <img src="" class="w-56 h-96 object-cover" alt="Secretary Vaibhav" />
                <img src="" class="w-56 h-96 object-cover" alt="Social Media Head Shruti" />
                <img src="" class="w-56 h-96 object-cover" alt="Graphics Head Kaushal" />
                <img src="" class="w-56 h-96 object-cover" alt="Graphics Head Surender" />
                <img src="" class="w-56 h-96 object-cover" alt="PR Head Aryaman" />
                <img src="" class="w-56 h-96 object-cover" alt="DSA Head Bhavishya" />
                <img src="" class="w-56 h-96 object-cover" alt="Web Head Tanay" />
                <img src="" class="w-56 h-96 object-cover" alt="Android Head Aditya" />
            </div>
        </div>
        <div>
            <h1 className='text-5xl text-center m-5'>Junior Council</h1>
            <div id="team" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center mx-16 my-10 px-20 py-10'>
                <img src="" class="w-56 h-96 object-cover" alt="Shamit Gupta" />
                <img src="" class="w-56 h-96 object-cover" alt="Gauri Behl" />
                <img src="" class="w-56 h-96 object-cover" alt="Raushan" />
                <img src="" class="w-56 h-96 object-cover" alt="Vanshika Tanwar" />
                <img src="" class="w-56 h-96 object-cover" alt="Astha Negi" />
                <img src="" class="w-56 h-96 object-cover" alt="Shwet Kashyap" />
                <img src="" class="w-56 h-96 object-cover" alt="Preeti Kumari" />
                <img src="" class="w-56 h-96 object-cover" alt="Riya Verma" />
                <img src="" class="w-56 h-96 object-cover" alt="Keshav Mehra" />
            </div>
        </div>
    </div>
  )
}

export default Team