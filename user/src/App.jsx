import './App.css'

function App() {

  return (
   <div>
    <header className='p-2 flex justify-between'>
      <a href='' className='logo'>
      {/* the person do = <a href='' className='flex items-center gap-1'> */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
</svg>
<span className='font-bold'>MAFND</span>
</a>
<div className='flex gap-3 border border-violet-700 rounded-lg py-4 px-6 shadow-md shadow-violote-900'>
  <div>Place</div>
  <div className="border-l border-violet-800"></div>
  <div>Date</div>
  <div className="border-l border-violet-800"></div>
  <div>Person</div>
  <button className='bg-primary text-white p-1.5 rounded-full'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

  </button>
</div>
    </header>
   </div>
   
  )
}

export default App
