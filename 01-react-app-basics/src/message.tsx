//We use PascalCasin in react projects
function Message(){
    const name = 'JB'
    if(name){
        return <h1>Hello {name}</h1>; 
    }
    return <h1>Hello World</h1>;
}


export default Message;