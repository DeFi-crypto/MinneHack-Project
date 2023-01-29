import React from 'react';
import ReactDOM from 'react-dom/client';
import Swal from 'sweetalert2'
import Pill from "./Pill";
import { faHtml5, faJs } from '@fortawesome/free-brands-svg-icons'
import axios from "axios";



function Card(props) {
    return (
        <div className = "card" onClick={handlePopup}>
            <div className = "p-10 bg-white hover:border-blue-200 border-black border-2 rounded-md">
            <p className = "new-listing text-red-400 text-sm">{props.status}</p>
            <h2 className = "text-xl font-bold">{props.title}</h2>
            <h1 className = "font-bold text-lg">{props.company}</h1>
            <h2 className = "text-sm mb-2">{props.representative}</h2>
            <div className = "flex">
            <Pill text="HTML" icon = {faHtml5} color="red" />
            <Pill text="JS" icon = {faJs} color="yellow" />
            </div>

            {/* <h2 className = "text-sm break-words">{props.description}</h2> */}
            </div>
        </div>

    );

    async function handlePopup(event) {


        let button = await Swal.fire({
            html: `
            <h1 style="font-size: 50px;">${props.title}</h1>
<p style="font-weight: bold;">${props.company}</p>
<p>${props.description}</p><code><textarea id ="code" style = "margin-top: 5px; padding-left: 7px; padding-top: 7px; padding-right: 7px;" rows="20" cols="42" placeholder = "Code" type="text">${props.code}</textarea></code>

<script>
</script>`,
            confirmButtonText: 'Submit Task',
            showCloseButton: true
          });
          if (button.isConfirmed) {
            let code = Swal.getPopup().querySelector('#code').value;

            axios.post('localhost:5000/acceptTask', {
                taskId: props.id,
                code: code
              });
          }
    }
}




export default Card;