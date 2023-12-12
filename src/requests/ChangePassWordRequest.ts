
export default interface ChangePassWordRequest {
    currentPassword: string;
    newPassword: string;
    confirmationPassword: string;
}