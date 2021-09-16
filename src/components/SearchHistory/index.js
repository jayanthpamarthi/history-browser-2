const SearchHistory = props => {
  const {eachSearch, onClickButton} = props
  const {id} = eachSearch

  const onClickSearch = () => {
    onClickButton(id)
  }
  return (
    <li className="list-items" key={eachSearch.id}>
      <div className="card-card">
        <p className="time">{eachSearch.timeAccessed}</p>
        <div className="list-icon-url">
          <img
            src={eachSearch.logoUrl}
            className="logo-image"
            alt="domain logo"
          />
          <p className="app-name">{eachSearch.title}</p>
          <p className="app-url-name">{eachSearch.domainUrl}</p>
        </div>
      </div>
      <button
        className="delete-button"
        onClick={onClickSearch}
        type="button"
        key={eachSearch.id}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SearchHistory
