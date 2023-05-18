//When we use EJS in react we can create variables either out of the function or inside of it. We can also create a new file, add the variables and import them
//Props (properties) come by default in react. we dont have to declare anything they are already there.
//we can name them as we wish, nevertheless its convencional name is props.
import './index.css'
// const Book = ({ author, title, img, children }) => {
export const Book = (props) => {
  //Desctructuring
  const { author, img, title, idx } = props
  console.log(idx)

  // console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* {children} */}
      <span className="indexSetUp">{idx + 1}</span>
    </article>
  )
}
