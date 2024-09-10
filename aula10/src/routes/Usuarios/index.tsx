export default function Usuarios(){

  fetch("https://api.github.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro!")
    }
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err.message)
  })

  return(
    <div>
      <h1>Usuários</h1>
    </div>
  );
}