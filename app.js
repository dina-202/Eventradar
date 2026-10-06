const demoEvents=[
{id:1,title:"Northern Lights Live",venue:"The Foundry",city:"Manchester",category:"Live Music",date:"2026-10-10"},
{id:2,title:"After Dark Sessions",venue:"Warehouse Hall",city:"London",category:"Clubbing",date:"2026-10-11"},
{id:3,title:"Autumn Laughs",venue:"The Lantern Room",city:"Birmingham",category:"Comedy",date:"2026-10-13"},
{id:4,title:"Riverfront Sounds",venue:"Dockside Yard",city:"Liverpool",category:"Live Music",date:"2026-10-17"},
{id:5,title:"City Culture Weekender",venue:"Assembly Square",city:"Leeds",category:"Festival",date:"2026-10-18"},
{id:6,title:"Midnight Frequency",venue:"Basement 44",city:"Bristol",category:"Clubbing",date:"2026-10-23"},
{id:7,title:"New Voices Showcase",venue:"The Glasshouse",city:"Glasgow",category:"Live Music",date:"2026-10-25"},
{id:8,title:"October Comedy Club",venue:"Civic Studio",city:"Sheffield",category:"Comedy",date:"2026-10-27"},
{id:9,title:"Indie North",venue:"Canvas Rooms",city:"Newcastle",category:"Live Music",date:"2026-11-01"},
{id:10,title:"Bonfire Arts Night",venue:"Old Market Hall",city:"Nottingham",category:"Culture",date:"2026-11-05"},
{id:11,title:"Sound & Light Festival",venue:"Harbour Quarter",city:"Cardiff",category:"Festival",date:"2026-11-07"},
{id:12,title:"Late City Social",venue:"Platform One",city:"Edinburgh",category:"Clubbing",date:"2026-11-12"}
];

const city=document.querySelector("#cityFilter");
const category=document.querySelector("#categoryFilter");
const date=document.querySelector("#dateFilter");
const search=document.querySelector("#searchFilter");
const grid=document.querySelector("#eventGrid");
const count=document.querySelector("#resultCount");
const empty=document.querySelector("#emptyState");
const reset=document.querySelector("#resetFilters");

const unique=(key)=>[...new Set(demoEvents.map(e=>e[key]))].sort();
function addOptions(el,values){values.forEach(v=>{const o=document.createElement("option");o.value=v;o.textContent=v;el.appendChild(o)})}
addOptions(city,unique("city"));
addOptions(category,unique("category"));

const baseDate=new Date("2026-10-06T00:00:00");
const fmt=new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"short"});
const weekday=new Intl.DateTimeFormat("en-GB",{weekday:"short"});

function card(e){
  const d=new Date(e.date+"T12:00:00");
  return `<article class="event-card">
    <div class="event-art">
      <span class="category-pill">${e.category}</span>
      <span class="date-chip">${fmt.format(d)}<small>${weekday.format(d).toUpperCase()}</small></span>
    </div>
    <div class="event-body">
      <h3>${e.title}</h3>
      <p class="event-meta">${e.venue} · ${e.city}</p>
      <div class="event-bottom">
        <span class="demo-label">Sample listing</span>
        <span class="source-link" aria-disabled="true">Skiddle link after API approval</span>
      </div>
    </div>
  </article>`;
}

function render(){
  const q=search.value.trim().toLowerCase();
  const days=Number(date.value);
  const items=demoEvents.filter(e=>{
    if(city.value!=="all"&&e.city!==city.value)return false;
    if(category.value!=="all"&&e.category!==category.value)return false;
    if(q&&!([e.title,e.venue,e.city,e.category].join(" ").toLowerCase().includes(q)))return false;
    if(days){
      const diff=(new Date(e.date+"T00:00:00")-baseDate)/86400000;
      if(diff<0||diff>days)return false;
    }
    return true;
  });
  grid.innerHTML=items.map(card).join("");
  count.textContent=`${items.length} demo event${items.length===1?"":"s"}`;
  empty.hidden=items.length!==0;
}

[city,category,date,search].forEach(el=>el.addEventListener("input",render));
reset.addEventListener("click",()=>{city.value="all";category.value="all";date.value="all";search.value="";render()});
document.querySelector("#year").textContent=new Date().getFullYear();
render();