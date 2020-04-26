templete='            <li class="media mb-3 alert-warning ">\n            <a href="<%= url %>">\n                <img src="<%= image_url %>" width="158" height="250" class="mr-3"></a>\n                <div class="media-body">\n                    <h5><%= title %></h5>\n                    <p>価格：<%= price %>円</p>\n                    <p><%= contributor %></p>\n                    <p><%= publisher %></p>\n\n                </div>\n            </li>'
nav=[];
function templeterender(items){
for (let i = 0; i < items.length; i++) {
    nav[i] = ejs.render(templete, {
        title: items[i].Title,
        image_url: items[i].ImageURL,
        price:items[i].Price,
        url: items[i].URL,
        contributor:items[i].Contributor,
        publisher:items[i].Publisher
    })
    }}

function getJSON(json_data) {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(req.readyState == 4 && req.status == 200){
			var data = JSON.parse(req.responseText);
			items = data	;
		}
	};
	req.open("GET",json_data, false);
	req.send(null);
	templeterender(items)
}

//コミックをクリックすると、コミックだけが表示される。
function comicfn(){
var comic = document.getElementById('comic');
comic.addEventListener('click', function() {
nav=[]
comics = items.filter(word => word.Booktype =='コミック');
$('#frame').children().remove();
templeterender(comics)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//単行本をクリックすると、単行本だけが表示される。
function paperbackfn(){
var paperback = document.getElementById('paperback');
paperback .addEventListener('click', function() {
nav=[]
paperbacks = items.filter(word => word.Booktype =='単行本');
$('#frame').children().remove();
templeterender(paperbacks)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}


//日付を選択して切り替える
function selectdays(day){
//var days = document.getElementById('days');
//days.addEventListener('click', function() {
nav=[]
var items
json_data= "json/"+day+"j.json"
getJSON(json_data)
$('#frame').children().remove();
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
//}, false);
}


document.addEventListener("DOMContentLoaded", function(){
//    console.log(nav)
comicfn()
paperbackfn()

var items
json_data= "json/20200427j.json"
getJSON(json_data)

    for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}

  });