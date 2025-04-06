// useState() = Re-renders the component when the state value changes
// useRef() = use Reference Does not cause re-renders when its value
// changes. when u wantt a component to "remember" some inforamation,
// but you don't want that information to trigger new renders

// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals
import MyComponent from "./MyComponent"

function App() {
  return(
    <MyComponent/>
  )
}

export default App
