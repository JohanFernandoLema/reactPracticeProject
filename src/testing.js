//one we start typing either rfce rafce it will pop up rightaway
import React from 'react'
import ReactDOM from 'react-dom/client'

//In react to make our lives easier we can access to some properties from react. Using React.createElement we can create same function in an straightfoward way.
function SayGoodbye() {
  //It will accept three parameters.
  //1st is for any html element. In this case i will use a b tag
  //2nd props (properties) so far we do not have any props so this one can stay blank
  //3rd we display the mesage we wan to render
  return React.createElement('h2', {}, 'Good Bye World')
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<SayGoodbye></SayGoodbye>)

//We must be careful since we have to start the name of our components with appercase.
