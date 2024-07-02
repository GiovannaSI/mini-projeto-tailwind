import machado from "../assets/machado.png"
import machadoCrafting from "../assets/machado-crafting.png"

function Machado() {
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

            <div className="flex">
                <h1 class="text-5xl text-amber-950 font-normal mt-10 ml-10">Machado</h1>
                <img src={machado} alt="" className="w-16 h-16 ml-2 mt-10" />
            </div>

            <img src={machadoCrafting} alt="" className="w-90 h-90 ml-10 mt-10" />

        </div>
    )
}

export default Machado;