import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css"
export default function Pokedex(){
    return (
        <div className="pokedex-wrapper">
            <Search/>
            <PokemonList/>

        </div>
    )
}