

function List(props){

    const fruits= [{id: 1, name:"apple", calories: 95},
                   {id: 2, name:"banana", calories: 45},
                   {id: 3, name:"mango", calories: 105},
                   {id: 4, name:"guava", calories: 146},
                   {id: 5, name:"orange", calories: 67}];

   const vegetables= [{id: 6, name:"potatoes", calories: 115},
                   {id: 7, name:"carrot", calories: 56},
                   {id: 8, name:"broccoli", calories: 95},
                   {id: 9, name:"corn", calories: 46},
                   {id: 10, name:"spinach", calories: 67}];
    
    // fruits.sort((a, b) => a.name.localeCompare(b.name));  ALPHABETICALLY
    // fruits.sort((a, b) => b.name.localeCompare(a.name));    //REVERSE ALPHABETICALLY
    // fruits.sort((a, b) => a.calories - b.calories); //NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories);  //REVERSE NUMERIC


    // const lowCalFruits=fruits.filter(fruit => fruit.calories < 100)

    // const listItem-low= lowCalFruits.map(lowCalFruit=> <li key={lowCalFruit.id}>
    //                                         {lowCalFruit.name}: &nbsp;   
    //                                         <b>{lowCalFruit.calories}</b></li> )
    
    // const highCalFruits=fruits.filter(fruit => fruit.calories > 100)

    // const listItem-high= highCalFruits.map(highCalFruit=> <li key={highCalFruit.id}>
    //                                         {highCalFruit.name}: &nbsp;   
    //                                         <b>{highCalFruit.calories}</b></li> ) 


    const category= props.category;
    const itemList= props.items;

    const listItems= fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;   
                                            <b>{fruit.calories}</b></li> )

    const listItem= vegetables.map(vegetable => <li key={vegetable.id}>
                                            {vegetable.name}: &nbsp;   
                                            <b>{vegetable.calories}</b></li> )


    return(
        <>
            <div>
                <h3 className="list-category" >{category}</h3>
                <ol className="list-items">
                    {listItems}
                </ol>
            </div>
            {/* <section>
                <ol>
                    {listItem}
                </ol>
            </section> */}
        </>
    );
}

export default List