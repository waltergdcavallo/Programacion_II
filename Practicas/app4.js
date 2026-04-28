    let postsGlobal=[];

    $(`#cargar`).click(function(){

        $.get(`https://jsonplaceholder.typicode.com/posts`, function(data){
            postsGlobal=data;
            mostrarPosts(data);
        });
    });
            
        $(`#limpiar`).click(function(){
            $(`#lista`).html("");//limpiar
        });
        
    $(`#buscador`).on(`input`, function(){
        let texto=$(this).val().toLowerCase();

        let filtrados=postsGlobal.filter(p=>p.title.toLowerCase().includes(texto));
        mostrarPosts(filtrados);
    });

    function mostrarPosts(posts){
        $(`#lista`).html("");
        posts.forEach(post=>{
            $(`#lista`).append(`<li>${post.title}</li>`);
        });

    }