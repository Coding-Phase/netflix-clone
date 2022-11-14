
import './App.css'     


// just create a function here !


const App = () => {
  const name = 'vishal thakur';

  return (
    <div>

      {/* 1st way to style */}
      <h1 className='title'>Hello {name} </h1>  

      {/* 2nd way to style */}
      <p style={{color: 'red', fontSize: '50px'}}>lorem lorem dolor sit vushsk jfdusemf </p>   
         
     </div> 
  );
};




export default App;     // Export the function to see output in web-page