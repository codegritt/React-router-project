export default function Contact(){
    return(
        <div className="Contact">
            <h2>Contact us please</h2>
            <form>
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required/>
                  
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea type="text" required/>
                  
                </label>
                <button>Submit</button>
            </form>


        </div>
    )
}