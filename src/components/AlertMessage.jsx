import Alert from "react-bootstrap/Alert";

function AlertMessage({ message, showAlert, setShowAlert }) {
  if (showAlert) {
    return (
      <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>You got an error!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
}

export default AlertMessage;
