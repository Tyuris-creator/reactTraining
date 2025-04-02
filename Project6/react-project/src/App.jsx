import List from './List.jsx'

function App() {

  const fruits = [{id:1, name: "apple", calories: 95}, 
    {id:2,name: "orange", calories: 45}, 
    {id:3,name: "banana", calories: 105}, 
    {id:4,name:"coconut", calories: 159}, 
    {id:5,name: "pineapple", calories: 37}]
  
  const vegetables = [{id:6, name: "tomato", calories: 95}, 
    {id:7,name: "celery", calories: 45}, 
    {id:8,name: "carrot", calories: 105}, 
    {id:9,name:"potato", calories: 159}, 
    {id:10,name: "corn", calories: 37}]


  return (<>

  {fruits.length > 0 ? <List category="fruits" items={fruits}/> : null}
  {vegetables.length > 0 ? <List category="vegetables" items={vegetables}/> : null }
  </>
    
  )
}

export default App
