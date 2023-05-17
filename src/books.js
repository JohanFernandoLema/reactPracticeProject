//when exporting files to our main js we have 2 different approaches, the first one is when we export the component, object, or whatever is in our file using the export keyword at the beginning of our already mentioned type of method.
// import { books } from './books'
//When we use this approach we must enclose our books in curly braces
export const books = [
  {
    id: 1,
    author: 'Luke Russert',
    title: 'Look For Me There',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71y4oz+kcrL._AC_UL600_SR600,400_.jpg',
  },
  {
    id: 2,
    author: 'Dr. Seuss',
    title: 'Oh, the places you will go',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL600_SR600,400_.jpg',
  },
]
//Second approach we must delete or remove the curly braces.
// export default books
