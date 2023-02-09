import { Box, Card, CardHeader,CardMedia,Avatar } from '@mui/material'
import React from 'react'
import Feeds from "./feeds.json"
const Test = () => {
  return (
    Feeds.map(feed=>{
        return (
            <Card key={feed.id}>
                <CardHeader sx={{margin:5}}
                avatar={ <Avatar sx={{bgcolor:"green"}}
                >A</Avatar>}
                title={feed.title}
                />
                <CardMedia
                component="img"
                height="20%"
                image={feed.path}/>

            </Card>
        )
    })
//     <Card>
//         <CardHeader>
//       <CardMedia>
//       {
//     Feeds.map(feed=>{
//         return (
//             <div key={feed.id}>{feed.title}<br/><img src={feed.path}/></div>
//         )
//     })
// }
//       </CardMedia>

//         </CardHeader>


//     </Card>
  )
}

export default Test