import Swal from "sweetalert2";

export default class Alert{
    static success(message){
        Swal.fire({
            title: 'Success!',
            text: message,
            icon: 'success',
            toast: true,
            showConfirmButton: false,
            position : 'top-right',
            timer: 5000
        })
    }

    static error(message){
        Swal.fire({
            title: 'Error!',
            text: message,
            icon: 'error',
            toast: true,
            showConfirmButton: false,
            position : 'top-right',
            timer: 5000
        })
    }
}
