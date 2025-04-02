import PropTypes from 'prop-types';

function List(props){


    const category = props.category;
    const itemList = props.items

    const listItems = itemList.map(item =>
                                            <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b>
                                            </li>);
    
    return <>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
    </>
    // // fruits.sort((a,b)=> a.name.localeCompare(b.name)) //alphabetical

    // // fruits.sort((a,b)=> b.name.localeCompare(a.name)) // alphabetica desc

    // // fruits.sort((a,b)=> a.calories - b.calories) // by calories key

    // // fruits.sort((a,b)=>b.calories - a.calories)

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    
    // const lowList = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.name}>{lowCalFruit.name} {lowCalFruit.calories}</li>)
    
    // const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name},{fruit.calories}</li>)

    // return(
    //     <>
    //      <ul>{listItems}</ul>
    //      <ol>{lowList}</ol>
    //     </>
    // )
}


List.propTypes = {
    category: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number
    }))
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List