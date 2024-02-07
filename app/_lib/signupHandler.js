// a client side function to save user email data to the database
export async function signupHandler(event) {
    event.preventDefault();

    try {
        const formData = new FormData(event.target);
        const response = await fetch('http://localhost:4000/api/user', {
            method: 'POST',
            body: JSON.stringify(formData),
        });
        
        const data = await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }

}