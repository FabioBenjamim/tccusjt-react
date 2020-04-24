import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const PopUp = {
    exibeMensagem: (status, msg) => {
        console.log("chamou")
      if (status === true)
        M.toast({ html: msg, classes: "green", displayLength: 2000 })
  
  
      if (status === false)
        M.toast({ html: msg, classes: "red", displayLength: 2000 })
  
  
    }
  }
  export default PopUp;