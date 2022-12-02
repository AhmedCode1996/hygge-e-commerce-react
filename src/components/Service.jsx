import './service.css'
const Service = ({src, title,information }) => {
  return (
    <article className="service">
        <div className="service-icon">
            <img src={src} alt={title} />
        </div>
        <h2 className="service-title">{title}</h2>
        <p className="service-information">{information}</p>
    </article>
  )
}

export default Service