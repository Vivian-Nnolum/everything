

function Buttons(){

    let count= 0;

    // const handleClick = () => console.log('OUCH!')
    // const handleClick2= (name) => console.log(`${name} stop clicking me!`)

    const handleClick = (e) =>e.target.textContent = "OUCH!";

    // const handleClick =(name) =>{
    //     if (count<3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`)
    //     }
    // }

    return(
        <>
              {/* <button onClick={handleClick}>Click me</button> */}
             {/* <button onClick={()=>handleClick2("Vee")}>Click me</button> */}
             {/* <button onClick={()=> handleClick("Vee")}>Click me</button> */}
            <button className="btn-1" onClick={(e)=> handleClick(e)}>Click me</button>
            <button className="btn-2" onDoubleClick={(e)=> handleClick(e)}>Click me twice</button>
        </>
    );
}

export default Buttons