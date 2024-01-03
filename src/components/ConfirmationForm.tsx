import useConfirmation from "../hooks/useConfirmationWebSocket";

const ConfirmationForm = () => {
  const { email } = useConfirmation();
  return (
    <div>
      <h1>Confirmation page</h1>
      <p>A confirmation email has been sent to {email}</p>
      <p>
        When the link has been confirmed, you will be automatically redirected
        to the login page
      </p>
    </div>
  );
};

export default ConfirmationForm;
