export  default function KorisnikFunckija ({ime, godine, onNameChange}){
    return (
        <div>
            <p>Zadatak 11:  Moje ime je {ime} i imam {godine} godina</p>
            <input 
            type="text" 
            value={ime}
            onChange={onNameChange}
            
            />

        </div>


    );
}