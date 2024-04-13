import './index.css'

const AppItem = props => {
  const {key, appDetails} = props
  const {appName, imageUrl, category} = appDetails

  return (
    <li className="app-list-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
