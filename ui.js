class UI{
    constructor(){
        this.dataField = document.querySelector('#data')
        this.title = document.querySelector('#title')
        this.username = document.querySelector('#username')
        this.single = document.querySelector('#single')
    }

    showUser(users){
        let output = ''
        users.forEach(user => {
            output+=`
           <div class="card card-body">
            <small>${user.username}</small>
            </div>
            `
            this.title.innerHTML=output
        });
    }
    showTitle(posts){
        let output = ''
        posts.forEach(post => {
            output+=`
            <div class="card card-body">
            <span style="visibility: hidden">${post.id}</span>
            <h6><a class="clickPost"  href="singlePost.html" target="_blank">${post.title}</a></h6>
            </div>
            `
            this.username.innerHTML=output
        });  
    }

    showSinglePost(post){
        let output=''
       // post.forEach(postUnit => {
            output+=`
            <div class="card card-body">
          
            <h6><a class="clickPost"  >${post.title}</a></h6>
            <p>${post.body}</p>
            </div>
            `
            this.single.innerHTML=output
       // });
       
    }
}