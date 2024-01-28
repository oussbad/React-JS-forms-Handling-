
import {useState} from "react";
function Form(){

    const [nom,setNom]=useState("")
    const [password,setPassword]=useState("")
    const [dateNaissance,setDateNaissance]=useState("")
    const [ville,setVille]=useState("")
    const [genre,setGenre]=useState("")
    const [losires,setLoisirs]=useState([])
   function handle(e){
    if(!losires.includes(e)){
        setLoisirs([...losires,e])
    }else{
        setLoisirs([...losires.filter(item=>item!==e)])
    }

    }
    function handleSub(e){
        e.preventDefault();
        alert(`${nom} ${password} ${dateNaissance} ${ville} ${genre} ${losires.join(',')}`)
    }


 return(
 <div style={{padding:"20px"}}>
<form onSubmit={(e)=>{handleSub(e)}}>
    <h1>Formulaire d'inscription</h1>
    <p>
        <label>Nom</label>
        <input type="text" name="nom" placeholder="nom" onChange={(e)=>setNom(e.target.value)}></input>
    </p>
    <p>
        <label>Mot de passe</label>
        <input type="password" name="password" placeholder="mote de passe" onChange={(e)=>setPassword(e.target.value)}></input>
    </p>
    <p>
        <label>Date de naissance</label>
        <input type="date" name="dateNaissance" onChange={(e)=>setDateNaissance(e.target.value)}></input>
    </p>
    <p>
        <label>ville</label>
        <select name="ville" onChange={(e)=>setVille(e.target.value)}>
            <option>Choisir une ville</option>
            <option value="Agadir">Agadir</option>
            <option value="tiznit">tiznit</option>

        </select>
    </p>
    <p>
        <label>Genre</label>
        <input type="radio" name="genre" value="Homme" onChange={(e)=>setGenre(e.target.value)}></input>Homme
        <input type="radio" name="genre" value="Femme" onChange={(e)=>setGenre(e.target.value)}></input>Femme

    </p>
    <p>
        <label>Loisirs</label>
        <input type="checkbox" name="loisirs" value="Sport" onChange={(e)=>handle(e.target.value)}></input>Sport
        <input type="checkbox" name="loisirs" value="Lecture" onChange={(e)=>handle(e.target.value)}></input>Lecture
        <input type="checkbox" name="loisirs" value="Musique" onChange={(e)=>handle(e.target.value)}></input>Musique


    </p>
    <p>
        <input type="submit" value="S'inscrire"></input>
    </p>
    </form>
</div>
 )
}
export default Form;