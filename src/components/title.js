import './title.css'
export default function Title(props){
       return(
              <div className='title-block'>
                     <h1 className="title">{props.title}</h1>
                     <br/>
                     <h3 className = 'subtitle'>{props.subtitle}</h3>
              </div>
       )
}