import React from 'react'
import { HackedGames } from '../hackedgames'
import {
    List,
    ListItem
  } from 'framework7-react';

export const Games = () => {
return (
<>
    {HackedGames.map((data, key) => {
    return (
    <div key={key}>
        <List className="search-list searchbar-found" mediaList inset>
            <ListItem  external={true} noChevron={true} link={data.url} title={data.name} text={data.version} subtitle={data.subtitle}  badge="GET" badgeColor="blue">
                <img className="radius" slot="media" src={data.image} width="60px" height="60px" />
            </ListItem>
        </List>
    </div>
    )
    })}
</>
)
}