// $(document).ready()
$(() => {

  const fetchBlogs = () => {

    $.ajax({
      url: '/api/blogs',
      method: 'GET',
      dataType: 'json',
      success: (blogs) => {
        console.log("blogs", blogs)
  
        createBlogs(blogs);
  
      },
      error: (err) => {
        console.log(`errro: ${err}`)
      }
    })
  }

  fetchBlogs();

  // create single blog post node
  const createBlog = (blog) => {
    const $title = $('<h2>').text(blog.title);
    const $body = $('<p>').text(blog.body);
    const $authorId = $('<p>').text(blog.userId);

    const $blog = $('<div>').addClass('blog-post');

    $blog.append($title, $body, $authorId)

    return $blog
  }

  const createBlogs = (blogs) => {
    const $blogContainer = $('.blog-container');
    $blogContainer.empty();

    for(const blog of blogs) {
      const $blog = createBlog(blog);

      $blogContainer.prepend($blog)
    }
  }  
  
  const $form = $('#new-blog-form');
  $form.on('submit', function(event) {
    event.preventDefault();
    console.log('the form has been submitted')

    const serializedData = $(this).serialize() 
    console.log(serializedData)

    $.post('/api/blogs', serializedData, (response) => {
      console.log(response)
      fetchBlogs();
    })

  })



})