templete='            <li class="media mb-3 alert-warning ">\n            <a href="<%= url %>" target="_blank">\n                <img src="<%= image_url %>" width="158" height="250" class="mr-3"></a>\n                <div class="media-body">\n                    <h5><%= title %></h5>\n                    <p>価格：<%= price %>円</p>\n                    <p><%= contributor %></p>\n                    <p><%= publisher %></p>\n                    <a href="<%= url %>" target="_blank"><button type="button" class="btn btn-warning">Amazonで購入</button> </a>\n                </div>\n            </li>'
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
function abookfn(){
var abook = document.getElementById('abook');
abook .addEventListener('click', function() {
nav=[]
abooks = items.filter(word => word.Booktype =='単行本');
$('#frame').children().remove();
templeterender(abooks)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//ソフトカバー
function softcoverfn(){
var softcover = document.getElementById('softcover');
softcover.addEventListener('click', function() {
nav=[]
softcovers = items.filter(word => word.Booktype =='単行本（ソフトカバー）');
$('#frame').children().remove();
templeterender(softcovers)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}


//大型本
function largebookfn(){
var largebook = document.getElementById('largebook');
largebook.addEventListener('click', function() {
nav=[]
largebooks = items.filter(word => word.Booktype =='大型本');
$('#frame').children().remove();
templeterender(largebooks)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}

//文庫
function pocketeditionfn(){
var pocketedition = document.getElementById('pocketedition');
pocketedition.addEventListener('click', function() {
nav=[]
pocketeditions = items.filter(word => word.Booktype =='文庫');
$('#frame').children().remove();
templeterender(pocketeditions)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//ペーパーバック
function paperbackfn(){
var paperback = document.getElementById('paperback');
paperback.addEventListener('click', function() {
nav=[]
paperbacks = items.filter(word => word.Booktype =='ペーパーバック');
$('#frame').children().remove();
templeterender(paperbacks)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//ムック
function mookfn(){
var mook = document.getElementById('mook');
mook.addEventListener('click', function() {
nav=[]
mooks = items.filter(word => word.Booktype =='ムック');
$('#frame').children().remove();
templeterender(mooks)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}

//日付を選択して切り替える
function selectdays(day){

nav=[]
var items
json_data= "json/"+day+"j.json"
getJSON(json_data)
$('#frame').children().remove();
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}

}

function getNextYMD(now){
    now.setDate(now.getDate() + 1);
    var y = now.getFullYear();
    var m = ("00" + (now.getMonth()+1)).slice(-2);
    var d = ("00" + now.getDate()).slice(-2);
    var result = y + m + d;
    return result;
  }

document.addEventListener("DOMContentLoaded", function(){
//    console.log(nav)
comicfn()
abookfn()
softcoverfn()
largebookfn()
pocketeditionfn()
paperbackfn()
mookfn()
var days = document.getElementById('datetimepicker1');
days.addEventListener('change', function() {

selectdays(days.value)
}, false);

var items
var now   = new Date();
nextday =getNextYMD(now);

json_data= "json/"+nextday+"j.json"
getJSON(json_data)

    for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}

  });