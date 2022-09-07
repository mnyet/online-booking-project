import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img 
            src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="searchItemImg"
            />
        <div className="searchItemDesc">
            <span className="searchItemTitle">title</span>
            <span className="searchItemDistance">distance from center</span>
            <span className="searchItemSubtitle">description</span>
            <span className="searchItemFeatures">features</span>
            <span className="searchItemCancelOp">free cancellation</span>
            <span className="searchItemCancelOpSubtitle">you can cancel later, so lock in this price today!</span>
        </div>
        <div className="searchItemDetails">
            <div className="searchItemRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="searchItemDetailTexts">
                <span className="searchItemPrice">price</span>
                <span className="searchItemTaxOp">Includes taxes and fees</span>
                <button className="searchItemCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem