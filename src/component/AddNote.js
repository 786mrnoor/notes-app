import './AddNote.css'
export default function AddNote() {
    function handleClick() {
        alert('this is only a test');
    }
    return (
        <li className='add-box'>
            <div className='icon'><i>+</i></div>
            <p onClick={handleClick}>Add New Note</p>
        </li>
    )
}