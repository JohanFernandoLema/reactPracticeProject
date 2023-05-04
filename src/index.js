//when we use libraries we have to import them just by calling by their names.
import React from 'react'
import ReactDOM from 'react-dom/client'

//When we create our own file we have to import it using the path it has.
import './index.css'

//componetnt = function. When we create a componetn we must start the name variable with capitalizef
// function Greeting() {
//   //after we declare a component we always have to return something that is in html
//   return <h2>My First Component</h2>
// }
// function Greeting() {
//It will accept three parameters.
//1st is for any html element. In this case i will use a b tag
//2nd props (properties) so far we do not have any props so this one can stay blank
//3rd we display the mesage we wan to render
//We can also nest react properties but is straightforward if we do like the first function
//   return React.createElement('h2', {}, 'Good Bye World')
// }
//in order to be able to access to our component we have to export it.

// const root = ReactDOM.createRoot(document.getElementById('root'))
//When we render a component we have to both open and clse the function we created
// root.render(<Greeting></Greeting>)

const BookList = () => {
  // We can add as many components as we wish as long as they are inside the parent element render will render them.
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
//Whne we use EJS in react we can create variables either out of the function or inside of it. We can also create a new file, add the variables and import them
const author = 'Luke Russert'
const img =
  'https://images-na.ssl-images-amazon.com/images/I/71y4oz+kcrL._AC_UL600_SR600,400_.jpg'
const Book = () => {
  const title = 'Look For Me There'
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

// const Image = () => (

// )
//We have three different ways to write ccs code in React
//External - the one we used when we imported index.css
//Second we style our tag adding style keyword and adding {{}}. between them we add our stylish.
// const Author = () => {
//   return <h4 style={{ fontSize: '1rem', color: '#617d98' }}>Luke Russert</h4>
// }
//Last one we create a binding that will store our style then we just call the binding inside our tag
// const Title = () => <h2>Look For Me There</h2>
// const Author = () => {
//   const styleForH2 = { fontSize: '1rem', color: '#617d98' }
//   return <h4 style={styleForH2}>Luke Russert</h4>
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
//When we render a component we have to both open and clse the function we created
root.render(<BookList />)
