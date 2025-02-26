import React, { Component } from 'react'
import {savedPosts} from '../posts.json'
import css from './css/Content.module.css'
import PostItem from './PostItem'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>

        <div className={css.SearchResults}>
            {savedPosts.map(post=>{
                return (<PostItem key={post.title} className={css.SearchItem} post ={post}></PostItem>)
            })}
        </div>
        
      </div>
    )
  }
}

export default Content
