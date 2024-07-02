import { Link } from 'react-router-dom';

import machado from "../assets/machado.png"
import picareta from "../assets/picareta.png"
import espada from "../assets/espada.png"
import pa from "../assets/shovel.png"

function Crafting() {
    return (
        <div>
            <div class="w-100 h-20 bg-green-500 flex gap-24">
                <h1 class="text-3xl text-white mt-4 ml-10">Minecraft Tutorial</h1>
                <input class="w-96 h-7 mt-6 rounded-md outline-none" placeholder='Pesquisar' />
                <ol class="flex gap-16 mt-6">
                    <a href=''><li class="text-white">Blocos</li></a>
                    <a href=''><li class="text-amber-950 font-medium">Crafting</li></a>
                    <a href=''><li class="text-white">Mobs</li></a>
                    <a href=''><li class="text-white">Redstone</li></a>
                </ol>
            </div>

            <h1 class="text-5xl text-amber-950 font-normal mt-10 ml-10">Crafting</h1>

            <div className="flex gap-16 mt-8">

                <div class="relative w-60 bg-white px-6 pt-10 pb-8 mt-6 ml-10 shadow-xl 
        ring-1 ring-gray-900/5">
                    <p class="text-2xl text-center">Machado</p>
                    <img src={machado} alt="" className="w-32 h-32 ml-4 mt-3" />
                    <button className="bg-green-500 w-36 p-3 mt-4 ml-4 rounded-3xl hover:bg-green-600"><Link to="/machado">Como fazer</Link></button>
                </div>

                <div class="relative w-60 bg-white px-6 pt-10 pb-8 mt-6 ml-6 shadow-xl 
        ring-1 ring-gray-900/5">
                    <p class="text-2xl text-center">Picareta</p>
                    <img src={picareta} alt="" className="w-32 h-32 ml-4 mt-3" />
                    <button className="bg-green-500 w-36 p-3 mt-4 ml-4 rounded-3xl hover:bg-green-600"><Link to="/picareta">Como fazer</Link></button>
                </div>

                <div class="relative w-60 bg-white px-6 pt-10 pb-8 mt-6 ml-6 shadow-xl 
        ring-1 ring-gray-900/5">
                    <p class="text-2xl text-center">Espada</p>
                    <img src={espada} alt="" className="w-32 h-32 ml-6 mt-3" />
                    <button className="bg-green-500 w-36 p-3 mt-4 ml-4 rounded-3xl hover:bg-green-600">Como fazer</button>
                </div>

                <div class="relative w-60 bg-white px-6 pt-10 pb-8 mt-6 ml-6 shadow-xl 
        ring-1 ring-gray-900/5">
                    <p class="text-2xl text-center">Pá</p>
                    <img src={pa} alt="" className="w-32 h-32 ml-6 mt-3" />
                    <button className="bg-green-500 w-36 p-3 mt-4 ml-4 rounded-3xl hover:bg-green-600">Como fazer</button>
                </div>
            </div>

        </div>
    )
}

export default Crafting