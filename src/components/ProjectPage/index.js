import './index.css'

const ProjectPage = props => {
  const {eachItem, number} = props
  const {image, name, link, description} = eachItem
  const firstImage = () => (
    <div className="displayFlex">
      <img src={image} alt={name} className="imageDetails" />
      <div className="margin-leftD">
        <p className="addingBgc">Project {number + 1}</p>
        <h1>{name}</h1>
        <p className="description-width-details">{description}</p>
        <a href={link} target="__blank">
          <button type="button" className="anchorButton">
            View Project
          </button>
        </a>
      </div>
    </div>
  )

  const lastImage = () => (
    <div className="displayFlex">
      <div className="margin-rightD">
        <p className="addingBgc">Project {number + 1}</p>
        <h1>{name}</h1>
        <p className="description-width-details">{description}</p>
        <a href={link} target="__blank">
          <button type="button" className="anchorButton">
            View Project
          </button>
        </a>
      </div>
      <img src={image} alt={name} className="imageDetails" />
    </div>
  )

  return (
    <li className="displayFlex">
      <div className="itemsOfLarge">
        {number % 2 === 0 ? lastImage() : firstImage()}
      </div>
      <div className="smallScale">
        <img src={image} alt={name} className="imageDetails" />
        <div>
          <p className="addingBgc">Project {number + 1}</p>
          <h1>{name}</h1>
          <p className="description-width-details">{description}</p>
          <a href={link} target="__blank">
            <button type="button" className="anchorButton">
              View Project
            </button>
          </a>
        </div>
      </div>
    </li>
  )
}

export default ProjectPage
