// set const
const tabBtns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// add click event listener to .about
about.addEventListener('click', function(e){
    // console.log(e.target);
    const id = e.target.dataset.id;
    // console.log(id);
    
    // when user clicked on a button element 
    // (we use dataset id to find out!!)
    if(id){
        // remove .active from all tab btns
        tabBtns.forEach(function(btn){
            btn.classList.remove('active');
        });
        // add .active to the clicked tab btn
        e.target.classList.add('active');

        // remove .active from all articles
        articles.forEach(function(article){
            article.classList.remove('active');
        });
        // add .active to the corresponded article
        const item = document.getElementById(id);
        item.classList.add('active');
    }
});