import { useDbStore } from "../store/store";

export default function Character (){
    const { characters, fetchCharacters, isLoading } = useDbStore();

    return(
        <>
        <h1>
            questa e la pagina di personaggio 
        </h1>
        </>
    )

}