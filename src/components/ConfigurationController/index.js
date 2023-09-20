import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        console.log('change content method is triggered')
        onToggleShowContent()
      }
      const onChangeLeftNav = () => {
        console.log('change left nav method is triggered')
        onToggleShowLeftNavbar()
      }
      const onChangeRightNav = () => {
        console.log('change right nav method is triggered')
        onToggleShowRightNavbar()
      }
      return (
        <div className="outer-input-container">
          <div className="input-container">
            <h1 className="content-label">Layout</h1>
            <div className="checkbox-label-container">
              <input type="checkbox" id="content" onChange={onChangeContent} />
              <label htmlFor="content" className="content-label">
                Content
              </label>
            </div>
            <div className="checkbox-label-container">
              <input
                type="checkbox"
                id="left-label"
                onChange={onChangeLeftNav}
              />
              <label className="content-label" htmlFor="left-label">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-label-container">
              <input
                type="checkbox"
                id="right-label"
                onChange={onChangeRightNav}
              />
              <label className="content-label" htmlFor="right-label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
