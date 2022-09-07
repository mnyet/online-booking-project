import "./featured.css"

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Title</h1>
          <h3>123 properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Title1</h1>
          <h3>123 properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Title2</h1>
          <h3>123 properties</h3>
        </div>
      </div>
    </div>
  )
}

export default Featured