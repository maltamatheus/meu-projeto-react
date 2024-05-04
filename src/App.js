import './App.css';

function App() {

  let interpolacao = 'Exemplo de interpolação'
  let interpolacaoUppercase = interpolacao.toUpperCase() + ' em maiúsculo'.toUpperCase();
  let imagem = 'https://i.pinimg.com/564x/b3/57/a8/b357a82495676c6c808a7b8c818f5460.jpg'

  function sum(a,b){
    return a + b;
  }

  return (
    <div className="App">
      <h1>Meu projeto React</h1>
      <p>{interpolacao}</p>
      <p>{interpolacaoUppercase}</p>
      <p>Soma literal = {interpolacaoUppercase}</p>
      <p>2 + 2 = {2+2}</p>
      <p>A soma de 2 + 2 é dada pela função sum(2,2) que tem resultado {sum(2,2)}</p>
      <img src={imagem} alt="Imagem obtida por interpolação" title="Imagem obtida por interpolação" width="150" height="150"/>
    </div>
  );
}

export default App;
