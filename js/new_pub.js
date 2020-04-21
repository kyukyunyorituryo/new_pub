templete='            <li class="media mb-3 alert-warning ">\n            <a href="<%= url %>">\n                <img src="<%= image_url %>" width="158" height="250" class="mr-3"></a>\n                <div class="media-body">\n                    <h5><%= title %></h5>\n                    <p>価格：<%= price %>円</p>\n                    <p><%= contributor %></p>\n                    <p><%= publisher %></p>\n\n                </div>\n            </li>'
nav=[];
function templeterender(){
for (let i = 0; i < items.length; i++) {
    nav[i] = ejs.render(templete, {
        title: items[i].Title,
        image_url: items[i].ImageURL,
        price:items[i].Price,
        url: items[i].URL,
        contributor:items[0].Contributor,
        publisher:items[0].Publisher
    })
    }}

document.addEventListener("DOMContentLoaded", function(){
    console.log(nav)

    templeterender()
    for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}

  });