//when we use libraries we have to import them just by calling by their names.
import React from 'react'
import ReactDOM from 'react-dom/client'

//When we create our own file we have to import it using the path it has.
import './index.css'
import { books } from './books'
import { Book } from './Book'
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

// const names = ['john', 'peter']
const BookList = () => {
  // We can add as many components as we wish as long as they are inside the parent element render will render them.
  return (
    {
      /* //We can add our arguments in our objects, however at the moment that we navigate to our website we will see those properties reflected only in the object that we mentioned them
    //Even though the JSX contains all the fields it will render only those who have the props on it. */
    },
    {
      /* When we want to render a piece of code only in one of our objects we
        have to references those pieces of code within the object that we want
        to deliver the output. */
    },
    {
      /* We wont be able to see this output until we make use of the children element in the components destructuring */
    },
    (
      // <section className="bookList">
      //   {names.map((name) => {
      //     return <h2>{name}</h2>
      //   })}
      // </section>
      <section className="bookList">
        <EventExamples />
        {books.map((book) => {
          return <Book {...book} key={book.id} />
        })}
      </section>
    )
  )
}

const EventExamples = () => {
  // const handleFormInput = () => {
  //   console.log('handle form input')
  // }
  const handleFormInput = (e) => {
    console.log(e.target)
    console.log(e.targer.value)
    console.log(e.targer.name)
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    alert('form submitted')
  }

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical From</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem' }}
        />
        <button onClick={handleButtonClick}>Click Me</button>
      </form>
    </section>
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
