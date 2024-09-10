
export default function Usuarios(){

    fetch("http://api.github.com/users")
    .then(response=>{
        if(response.ok){
            throw new Error("Dados solicitados incorretos! ;b");
        }
        return response.json()
    })
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err.message)
    })

    return(
      <div>
        <h1>Bem Vindos Usuários</h1>
      </div>
    );
  }