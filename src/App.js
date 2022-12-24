import './App.css';

function App() {
  const clearField=()=>{
    const $generated_pswd = document.getElementById('generated_pswd');

  }
  const formula=(event)=>{
    const $generated_pswd = document.getElementById('generated_pswd');
    let f1 = event.target.value;
    $generated_pswd.innerHTML = f1;
  }
  return (
    <div>
      <h1 className='font-bold text-3xl px-6 py-6'>Password Generator</h1>
      <div className='form_container grid space-y-6 px-6'>
        <section className='grid grid-flow-col'>
          <label htmlFor="length">Enter password length: </label>
          <input type="text" onChange={formula}/>
        </section>
        <section className='grid grid-flow-col'>
          <label htmlFor="length">Enter a passphrase: </label>
          <input type="text" />
        </section>
        <section className='grid grid-flow-col'>
          <label htmlFor="" className="s-chars">Include special characters</label>
          <input type="checkbox" className='justify-self-start' />
        </section>
        <section>
          <button className="btn" onClick={formula}>Generate</button>
        </section>
      </div>
      <div className='my-12 flex flex-col space-y-4'>
        <span className='font-bold text-3xl px-6'>Your password is </span>
        <code className='px-6' id='generated_pswd'></code>
        <section className='flex space-x-3'>
        <button className="btn w-1/5 mx-6">Copy password</button>
        <button className="btn w-1/5 mx-6" onClick={clearField}>Clear Field</button>
        </section>
      </div>
    </div>
  );
}

export default App;
