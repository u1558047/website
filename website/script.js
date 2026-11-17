const foods = [
 {id:1,name:"江技舊記",area:"苗栗市",category:"在地小吃",dish:"餛飩・肉圓",desc:"苗栗市在地老店，以餛飩等傳統小吃聞名，適合安排一趟經典街頭美食散步。",address:"苗栗縣苗栗市新苗街88號",image:"https://images.unsplash.com/photo-1563240927-7c7b3f5e3c4d?auto=format&fit=crop&w=900&q=80",map:"江技舊記 苗栗市"},
 {id:2,name:"一口香餡餅",area:"苗栗市",category:"在地小吃",dish:"韭菜餡餅・蘿蔔絲餅",desc:"外皮香酥、內餡飽滿的街頭點心，下午時段可以留意現場供應情況。",address:"苗栗縣苗栗市中山路49之4號",image:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",map:"一口香餡餅 苗栗市"},
 {id:3,name:"福樂麵店",area:"公館",category:"客家料理",dish:"客家粄條・傳統家常菜",desc:"以客家麵食與家常料理受到關注，是認識苗栗客家風味的經典選擇。",address:"苗栗縣公館鄉福基村121號",image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",map:"福樂麵店 公館 苗栗"},
 {id:4,name:"棗莊古藝庭園膳坊",area:"公館",category:"客家料理",dish:"紅棗入菜・客家合菜",desc:"將紅棗融入料理的特色餐廳，適合與親友一起品嚐多道菜色。",address:"苗栗縣公館鄉福星村",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",map:"棗莊古藝庭園膳坊 苗栗"},
 {id:5,name:"穎川美食館",area:"三義",category:"客家料理",dish:"白斬土雞・客家炒粄條",desc:"山城三義的客家料理選擇，適合搭配木雕街或周邊景點規劃小旅行。",address:"苗栗縣三義鄉（出發前請查詢店家最新地址）",image:"https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=900&q=80",map:"穎川美食館 三義"},
 {id:6,name:"阿水飯店",area:"後龍",category:"聚餐餐廳",dish:"在地熱炒・海鮮料理",desc:"後龍在地餐飲選擇，可作為探索苗栗海線風味時的參考。",address:"苗栗縣後龍鎮中龍街183-2號",image:"https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=80",map:"阿水飯店 後龍"},
 {id:7,name:"Bonbons 乳酪蛋糕",area:"苗栗市",category:"甜點咖啡",dish:"乳酪蛋糕・甜點",desc:"適合甜點控安排的午後小站，實際品項與供應請依店家公告為準。",address:"苗栗縣苗栗市日新街5號",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",map:"Bonbons 乳酪蛋糕 苗栗"},
 {id:8,name:"Light cafe & 輕e美",area:"苗栗市",category:"甜點咖啡",dish:"咖啡・千層蛋糕",desc:"明亮舒適的咖啡空間，適合安排一段放慢步調的午後時光。",address:"苗栗縣苗栗市民族路巷弄內",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",map:"Light cafe 輕e美 苗栗"},
 {id:9,name:"龍來小館",area:"頭份",category:"客家料理",dish:"客家家常菜・熱炒",desc:"頭份一帶的客家料理選擇，適合多人共享、品嚐不同家常菜色。",address:"苗栗縣頭份市（出發前請查詢店家最新地址）",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",map:"龍來小館 頭份"},
 {id:10,name:"大湖草莓文化館周邊",area:"大湖",category:"甜點咖啡",dish:"草莓大福・草莓冰品",desc:"草莓季來訪大湖，可以尋找當季草莓甜點與在地農特產品。",address:"苗栗縣大湖鄉富興村八寮灣一帶",image:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80",map:"大湖草莓文化館 苗栗"}
];
const grid=document.getElementById("foodGrid"),search=document.getElementById("searchInput"),empty=document.getElementById("emptyState"),count=document.getElementById("resultCount");
let category="全部",region="",saved=JSON.parse(localStorage.getItem("miaoliSaved")||"[]"),savedOnly=false;
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function render(){
 const q=search.value.trim().toLowerCase();
 const list=foods.filter(f=>(category==="全部"||f.category===category)&&(!region||f.area===region)&&(!savedOnly||saved.includes(f.id))&&(!q||[f.name,f.area,f.category,f.dish,f.desc].join(" ").toLowerCase().includes(q)));
 grid.innerHTML=list.map(f=>`<article class="food-card"><div class="food-image"><img src="${f.image}" alt="${escapeHTML(f.name)}料理照片" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'"><span class="food-tag">${escapeHTML(f.category)}</span><button class="favorite ${saved.includes(f.id)?"saved":""}" data-save="${f.id}" aria-label="收藏${escapeHTML(f.name)}">${saved.includes(f.id)?"♥":"♡"}</button></div><div class="food-info"><h3>${escapeHTML(f.name)}</h3><div class="food-meta">${escapeHTML(f.area)}　／　${escapeHTML(f.dish)}</div><p>${escapeHTML(f.desc)}</p><div class="card-bottom"><span>在地風味推薦</span><button class="detail-link" data-detail="${f.id}">查看介紹 ↗</button></div></div></article>`).join("");
 empty.hidden=list.length!==0;count.textContent=`找到 ${list.length} 間店家`;document.getElementById("savedCount").textContent=saved.length;
}
function setCategory(value){category=value;region="";savedOnly=false;document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.category===value));render();}
document.getElementById("categoryFilters").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(b)setCategory(b.dataset.category)});
search.addEventListener("input",render);
grid.addEventListener("click",e=>{
 const save=e.target.closest("[data-save]");if(save){const id=Number(save.dataset.save);saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];localStorage.setItem("miaoliSaved",JSON.stringify(saved));render();return;}
 const detail=e.target.closest("[data-detail]");if(detail)openDetail(Number(detail.dataset.detail));
});
document.getElementById("showSaved").addEventListener("click",()=>{savedOnly=!savedOnly;region="";category="全部";document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.category==="全部"));render();document.getElementById("discover").scrollIntoView({behavior:"smooth"});});
document.querySelectorAll(".region-card").forEach(b=>b.addEventListener("click",()=>{region=b.dataset.region;savedOnly=false;category="全部";document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x.dataset.category==="全部"));render();document.getElementById("discover").scrollIntoView({behavior:"smooth"});}));
function openDetail(id){const f=foods.find(x=>x.id===id);if(!f)return;document.getElementById("dialogContent").innerHTML=`<img class="dialog-image" src="${f.image}" alt="${escapeHTML(f.name)}"><div class="dialog-body"><span class="detail-label">${escapeHTML(f.category)}　/　${escapeHTML(f.area)}</span><h2>${escapeHTML(f.name)}</h2><p>${escapeHTML(f.desc)}</p><p class="address">📍 ${escapeHTML(f.address)}</p><p>推薦品項：${escapeHTML(f.dish)}<br><small>店家地址、營業時間及供應品項可能異動，出發前請先向店家確認。</small></p><a class="map-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.map)}">在 Google 地圖查看 ↗</a></div>`;document.getElementById("detailDialog").showModal();}
document.getElementById("dialogClose").addEventListener("click",()=>document.getElementById("detailDialog").close());
document.getElementById("detailDialog").addEventListener("click",e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
const menu=document.getElementById("menuToggle"),nav=document.getElementById("nav");menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
render();
