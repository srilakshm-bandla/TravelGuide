import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelGuideList from '../TravelGuideList'

import './index.css'

class TravelGuide extends Component {
  state = {travelGuideData: [], isLoading: true}

  componentDidMount() {
    this.getTravelGuideData()
  }

  getTravelGuideData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'

    const response = await fetch(url)
    const fetchData = await response.json()

    console.log(fetchData)

    this.setState({
      travelGuideData: fetchData.packages.map(each => ({
        id: each.id,
        imageUrl: each.image_url,
        name: each.name,
        description: each.description,
      })),
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTravelGuideView = () => {
    const {travelGuideData} = this.state
    return <TravelGuideList travelGuideData={travelGuideData} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderTravelGuideView()}
      </div>
    )
  }
}

export default TravelGuide
