import './Note.css'
export default function List(){
    return (
        <li className='note'>
        <div className='details'>
          <p>This is a Title</p>
          <span>Lorem ipsis, praesentium eum unde accusamus eveniet quam voluptate 
          </span>
        </div>
        <div className='bottom'>
          <span>April 3, 2022</span>
        </div>
      </li>
    )
}