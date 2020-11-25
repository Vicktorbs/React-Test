import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        // console.log(data);
        this.setState({posts: data})
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h5>{post.title}</h5>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
