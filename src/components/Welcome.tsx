import React from 'react'

type WelcomeOwnProps = {
  username: string | undefined
  userType: 'admin' | 'moderator' | 'user' | 'guest'
  nationality?: string
}

const Welcome = ({
  username,
  userType,
  nationality = 'Australia'
}: WelcomeOwnProps) => {
  return (
    <p>
      Hi, {username ? username : 'Anonymous User'} from {nationality}, your user
      type is {userType ? userType : 'unknown'}
    </p>
  )
}

export default Welcome
