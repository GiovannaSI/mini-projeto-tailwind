import picareta from "../assets/picareta.png"
import picaretaCrafting from "../assets/picareta-crafting.png"

function Picareta() {
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
                <h1 class="text-5xl text-amber-950 font-normal mt-10 ml-10">Picareta</h1>
                <img src={picareta} alt="" className="w-16 h-16 ml-2 mt-10" />
            </div>

            <img src={picaretaCrafting} alt="" className="w-84 h-80 ml-10 mt-10" />

        </div>
    )
}

export default Picareta;