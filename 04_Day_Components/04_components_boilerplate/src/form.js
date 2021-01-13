const form = () =>(
    <form>
         <h1>Subscribe</h1>
         <h5>Sign up with your email address to receive updates and news</h5>
         <firstName/>
         <secondName/>
         <email/>
         <submit/>
    </form>
)

const firstName = () => <input type="text" placeholder="First Name"></input>
const secondName = () => <input type="text" placeholder="Second Name"></input>
const email = () => <input type="text" placeholder="Email"></input>
const submit = () => <input type="button" value="Submit"></input>

export default form;
