import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up and enjoy discounts offered exclusively from us!</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="youremail@example.com"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList