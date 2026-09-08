

const Article = (props) => {
  return (
    <div>
        <br/>
        <h2>{props.titulo}</h2>    
        <p>{props.bandera === true ? 'la bandera esta en true' : 'la bandera esta en false'}</p>

        <br/>
    </div>
  )
}

export default Article