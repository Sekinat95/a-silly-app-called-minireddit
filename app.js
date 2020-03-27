const data = new Data;
const ui = new UI;

const paginate = document.querySelector('#pages')
const clickPost = document.querySelector('#clickPost')
const dataUI = document.querySelector('#data')

window.addEventListener('DOMContentLoaded',(e)=>{
    
    data.getAllPosts().then((dataUnit)=>{
        console.log(dataUnit.allPostsData)
        ui.showTitle(dataUnit.allPostsData)
    })
   
    // data.getAllUsers().then((dataUnit)=>{
    //     ui.showUser(dataUnit.allUsersData)
    // })
   
   
    e.preventDefault()
})

paginate.addEventListener('click', (e)=>{
    const start = document.getElementById('start').value
    const limit = document.getElementById('limit').value
    console.log(start,limit)
    if(e.target.className=='page-link'){
        const page = e.target.textContent;
        console.log(page)
        data.paginate(page,limit).then((dataUnit)=>{
            console.log(dataUnit.pageData)
            ui.showTitle(dataUnit.pageData)
        })
    }

    e.preventDefault()
})

dataUI.addEventListener('click', (e)=>{
    if(e.target.className=="clickPost"){
        const id = e.target.parentElement.previousElementSibling.textContent
        console.log(id)

        data.getSinglePost(id).then((dataUnit)=>{
                console.log(dataUnit)
            ui.showSinglePost(dataUnit)
        })
    }


    e.preventDefault()
})