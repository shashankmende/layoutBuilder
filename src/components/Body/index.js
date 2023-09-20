// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
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

      console.log('show content', showContent)

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <>
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="left-Navbar">
                <li className="left-para">Item 1</li>
                <li className="left-para">Item 2</li>
                <li className="left-para">Item 3</li>
                <li className="left-para">Item 4</li>
              </ul>
            </>
          )}
          {showContent && (
            <nav className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consecutor adipiscing elit,sed od
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim venial.
              </p>
            </nav>
          )}
          {showRightNavbar && (
            <nav className="right-Navbar">
              <h1 className="left-navbar-heading">Right Navbar</h1>
              <div className="right-navbar-items">
                <p>Ad 1</p>
              </div>
              <div className="right-navbar-items">
                <p>Ad 2</p>
              </div>
            </nav>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
