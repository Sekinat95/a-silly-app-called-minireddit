class Data{
    constructor(){}

    async getAllPosts(){
        const allPostsResponse = await fetch(`http://jsonplaceholder.typicode.com/posts?_start=1&_limit=10`)

        const allPostsData = await allPostsResponse.json()

        return {
            allPostsData
        }

    }
    async getAllUsers(){
        const allUsers = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const allUsersData = await allUsers.json()

        return {
            allUsersData
        }
    }
    async getSinglePost(id){
        const singlePost = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
        const singlePostData = await singlePost.json()
        return {
            singlePostData
        }
    }

    async paginate(start, limit){
        
        let  re = /_start=1&_limit=10/i;
       // const url = `https://jsonplaceholder.typicode.com/posts?userId=1`;
        const url = `http://jsonplaceholder.typicode.com/posts?_start=1&_limit=10`
        const newurl = url.replace( re, `_start=${start}&_limit=${limit}`)
        console.log(newurl)
        const page = await fetch(`${newurl}`);
        const pageData = await page.json()
        return{
          pageData
        }
}
}
