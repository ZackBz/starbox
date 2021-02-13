import React from 'react'
import { Apps } from '../apps'
import {
    List,
    ListItem
  } from 'framework7-react';

export const AppsComponent = () => {
return (
<>
    {Apps.map((data, key) => {
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