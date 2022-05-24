const App = () =>{
    const [isdark,setDark]=React.useState(false);

   const toggleTheme= ()=> {
        if(isdark){
            setDark(false);
        }
        else{
            setDark(true);
        }
    }
return(
    <div>
       
        <button onClick={toggleTheme}>change theme</button>
        <Toggler theme={isdark} />
    </div>
    );
}