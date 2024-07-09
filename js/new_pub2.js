templete = '<li class="media mb-3 alert-warning ">\n<div class="card mb-3" style="max-width: 800px;">\n	<div class="row g-0">\n		<div class="col-md-4">\n			<img src="<%= image_url %>" class="mr-3 lazyload" alt="<%= title %>" loading="lazy" />\n\n		</div>\n		<div class="col-md-8 alert-warning">\n			<div class="card-body alert-warning">\n				<h5 class="card-title">\n					<%= title %>\n				</h5>\n				<p class="card-text">\n					価格：<%= price %>円、ポイント：<%= point %>\n				</p>\n				<p class="card-text">\n					<%= contributor %>\n				</p>	\n				<p class="card-text">\n					出版社：<%= publisher %>、ASIN：<%= asin %>\n				</p>\n					<p class="card-text">\n						カテゴリー：<%= category %>\n					</p>\n				<a class="btn btn-warning" href="<%= url %>" role="button"  rel="noreferrer" target="_blank">Amazonで詳細を見る\n				</a>\n			</div>\n		</div>\n	</div>\n</div>\n</li>'

nav=[];
function templeterender(items){
for (let i = 0; i < items.length; i++) {
    nav[i] = ejs.render(templete, {
        title: items[i].Title,
        image_url: items[i].ImageURL,
        price:items[i].Price,
        point:items[i].Points,
        url: items[i].URL,
        contributor:items[i].Contributor,
        publisher:items[i].Publisher,
        category:items[i].Category,
        asin:items[i].Asin
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
//新書
function newbookfn(){
var newbook = document.getElementById('newbook');
newbook.addEventListener('click', function() {
nav=[]
newbooks = items.filter(word => word.Booktype =='新書');
$('#frame').children().remove();
templeterender(newbooks)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}


//日付を選択して切り替える
function selectdays(day){

nav=[]
var items
json_data= "https://kyukyunyorituryo.github.io/new_pub/json/"+day+"j.json"
getJSON(json_data)
$('#frame').children().remove();
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
document.getElementById('release').textContent=day+'の新刊'
}

function getNextYMD(now){
    now.setDate(now.getDate() + 1);
    var y = now.getFullYear();
    var m = ("00" + (now.getMonth()+1)).slice(-2);
    var d = ("00" + now.getDate()).slice(-2);
    var result = y + m + d;
    return result;
  }
function searchword(){
var searchbook = document.getElementById('search');
searchbook.addEventListener('click', dosearch, false);
}
function dosearch(){
nav=[]
var searchtext = document.getElementById('searchtext').value;
searchbooks = items.filter(word => (word.Title.includes(searchtext)||word.Publisher.includes(searchtext)||word.Contributor.includes(searchtext)||word.Category.includes(searchtext)));
$('#frame').children().remove();
templeterender(searchbooks)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}


var getQuery = function() {
	var query_array = [];
	
	// クエリ文字列を取得して「&」で分割
	var query_list = window.location.search.substring(1).split('&');

	// 値取得用のテンポラリ変数
	var tmp_arr;
	
	// 分割したクエリ文字列の配列から、値を取り出す
	query_list.forEach( function(e, i, a) {
		tmp_arr = e.split('=');
		query_array[ tmp_arr[0] ] = tmp_arr[1];
	})
   query=query_array.search
	return query; 
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
newbookfn()
searchword()

bookid=["comic","abook","softcover","largebook","pocketedition","paperback","mook","newbook"]
booktype=["コミック","単行本","単行本（ソフトカバー）","大型本","文庫","ペーパーバック","ムック","新書"]
const bts = document.getElementsByClassName('btn');
[...bts].forEach(bt=>{
  bt.addEventListener('click',(e)=>{
    console.log('you clicked' + bt.id + '.')
    
  });
});
$('#datetimepicker1').on("dp.change", function(e){

selectdays($(this).val())
});
var items
var now   = new Date();
nextday =getNextYMD(now);

query=getQuery()
if (query!==undefined){
queryword=decodeURI(query)
document.getElementById('searchtext').value=queryword
}

var url = location.href ;
//frameに子要素がなかったら実行する
child=document.getElementById('frame').children
if (child.length==0){

json_data= "https://kyukyunyorituryo.github.io/new_pub/json/"+nextday+"j.json"
getJSON(json_data)
    for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}
else{
date=url.match(/\d{8}/gi)[0]
json_data= "https://kyukyunyorituryo.github.io/new_pub/json/"+date+"j.json"
getJSON(json_data)
    for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}
dosearch()
  });