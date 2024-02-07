// a client side function to fetch user email data from the database
export async function loginHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const response = await fetch('http://localhost:4000/api/user/' + email);
        
        const data = await response.json();

        if (data.password != password){
            return { error: 'wrong password' }
        } else { 
            return data;
        }
    } catch (error) {
        console.log(error);
        return null;
    }

}