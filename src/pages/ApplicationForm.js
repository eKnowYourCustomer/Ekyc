import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from "../components/UserForm";


function ApplicationForm() {
    return (
      <div>
        <h3>New Bank Account Opening - Application Form</h3>
        <UserForm />
        <label id="statusMsg"/>
      </div>
    );   
}

export default ApplicationForm;