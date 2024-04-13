import './index.css'

const TabItem = props => {
  const {key, tabDetails, clickTabItem} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    clickTabItem(tabId)
  }
  return (
    <li>
      <button className="tab-btn" type="button" onClick={onClickTab}>
        <p className="tab-name">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
