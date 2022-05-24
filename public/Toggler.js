

const Toggler = (props)=>{
    
    return(
        <div className={props.theme ? "dark" : "light"}>
           <h1>{props.theme ? "dark" : "light"}</h1>
        </div>
    );
}