import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import profileFront from '../../assets/profile_front.jpeg'
import profileBack from '../../assets/profile_back.jpeg'

export const FlippingGaby = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [autoFlipComplete, setAutoFlipComplete] = useState(false)

  useEffect(() => {
    // Auto flip on component mount
    setIsFlipped(true)

    // Set auto flip to complete after 3 seconds
    const timer = setTimeout(() => {
      setIsFlipped(false)
      setAutoFlipComplete(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="flip-card h-32 w-32 xl:h-52 xl:w-52"
      onMouseEnter={() => autoFlipComplete && setIsFlipped(true)}
      onMouseLeave={() => autoFlipComplete && setIsFlipped(false)}
    >
      <motion.div
        className="flip-card-inner"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flip-card-front">
          <img
            src={profileFront}
            alt="Profile Front"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <motion.div className="flip-card-back" style={{ rotateY: 180 }}>
          <img
            src={profileBack}
            alt="Profile Back"
            className="h-full w-full rounded-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
