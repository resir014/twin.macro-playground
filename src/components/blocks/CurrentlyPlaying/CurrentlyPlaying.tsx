import * as React from 'react'
import tw from 'twin.macro'
import { Button } from '../../ui/Button'

export interface CurrentlyPlayingProps {
  className?: string
  style?: React.CSSProperties
  title: string
  artist: string
  album: string
  albumArt?: string
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ className, style, title, artist, album, albumArt }) => {
  return (
    <div css={tw`bg-white rounded-md shadow-lg p-4`} className={className} style={style}>
      <div css={tw`flex flex-row items-center mb-4`}>
        <img css={tw`w-20 h-20`} src={albumArt} alt="" />
        <div css={tw`ml-4`}>
          <h4 css={tw`text-lg font-semibold`}>{title}</h4>
          <p>{artist}</p>
          <p>{album}</p>
        </div>
      </div>
      <div>
        <Button css={tw`mr-4`}>Add to Playlist</Button>
        <Button variant="primary" css={tw`mr-4`}>
          Play
        </Button>
      </div>
    </div>
  )
}

export default CurrentlyPlaying
