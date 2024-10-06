import profileFront from '../../assets/profile_front.jpeg'
import profileBack from '../../assets/profile_back.jpeg'

export const FlippingGaby = () => {
  return (
    <div className="flip-card h-32 w-32 xl:h-52 xl:w-52">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={profileFront}
            alt="Profile Front"
            className="-full h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="flip-card-back">
          <img
            src={profileBack}
            alt="Profile Back"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
