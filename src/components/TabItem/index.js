import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    clickTabItem(tabId)
  }
  const tabBtnClassName = isActive ? 'tab-btn active' : 'tab-btn'
  return (
    <li className="tab-item">
      <button className={tabBtnClassName} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
