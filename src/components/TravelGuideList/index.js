import './index.css'

const TravelGuideList = props => {
  const {travelGuideData} = props
  return (
    <div className="main-container">
      <h1 className="heading">Travel Guide</h1>

      <ul className="travel-guide-list-container">
        {travelGuideData.map(each => (
          <li className="list-view" key={each.id}>
            <div className="inner-container">
              <img
                src={each.imageUrl}
                alt={each.name}
                className="travel-image"
              />
              <h1 className="name">{each.name}</h1>
              <p className="description">{each.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TravelGuideList
