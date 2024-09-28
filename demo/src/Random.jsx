let Random = ()=> {

    let number = Math.ceil(Math.random() * 15);

    return <h3 style={ {backgroundColor:"blue",color:'white',width:'300px'} }>generate a random number: {number}</h3>;
}

export default Random;