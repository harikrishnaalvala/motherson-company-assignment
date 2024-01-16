import './index.css'

const HomePage = () => (
  <div className="homePageContainer" id="about">
    <p className="homePageParDetails">UI/UX DESIGNER</p>
    <h1 className="HomePageHead">Hello, my name is Harikrishna Alwala</h1>
    <p className="HomePageDescription">
      Short text with details about you, what you do or your professional
      career. You can add more information on the about page.
    </p>
    <div>
      <a href="#projectPage">
        <button type="button" className="projectButton">
          Projects
        </button>
      </a>
      <a href="https://www.linkedin.com" target="__blank">
        <button type="button" className="linkedInButton">
          LinkedIn
        </button>
      </a>
    </div>
  </div>
)

export default HomePage
