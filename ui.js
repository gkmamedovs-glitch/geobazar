const SUPABASE_URL="https://hexatytkkerqhtsukozp.supabase.co";
const SUPABASE_KEY="sb_publishable_Rs28uZ0iGl0YLrJm8yfxoA_Ba2sRgHC";
const supabaseClient=supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
const CITIES=["Тбилиси","Батуми","Кутаиси","Рустави","Марнеули","Гори","Зугдиди","Телави","Поти","Кобулети"];
const CATEGORIES=[
{ru:"Авто",ka:"ავტომობილები",az:"Avtomobillər",am:"Ավտոմեքենաներ",en:"Cars",icon:"🚗",slug:"cars"},
{ru:"Недвижимость",ka:"უძრავი ქონება",az:"Daşınmaz əmlak",am:"Անշարժ գույք",en:"Real Estate",icon:"🏠",slug:"real-estate"},
{ru:"Работа",ka:"სამუშაო",az:"İş",am:"Աշխատանք",en:"Jobs",icon:"💼",slug:"jobs"},
{ru:"Услуги",ka:"სერვისები",az:"Xidmətlər",am:"Ծառայություններ",en:"Services",icon:"🛠",slug:"services"},
{ru:"Электроника",ka:"ელექტრონიკა",az:"Elektronika",am:"Էլեկտրոնիկա",en:"Electronics",icon:"📱",slug:"electronics"},
{ru:"Строительство",ka:"მშენებლობა",az:"Tikinti",am:"Շինարարություն",en:"Construction",icon:"🏗",slug:"construction"},
{ru:"Сельское хозяйство",ka:"სოფლის მეურნეობა",az:"Kənd təsərrüfatı",am:"Գյուղատնտեսություն",en:"Agriculture",icon:"🚜",slug:"agriculture"},
{ru:"Животные",ka:"ცხოველები",az:"Heyvanlar",am:"Կենդանիներ",en:"Animals",icon:"🐾",slug:"animals"},
{ru:"Туризм",ka:"ტურიზმი",az:"Turizm",am:"Զբոսաշրջություն",en:"Tourism",icon:"✈️",slug:"tourism"},
{ru:"Грузоперевозки",ka:"ტვირთის გადაზიდვა",az:"Yük daşımaları",am:"Բեռնափոխադրումներ",en:"Cargo",icon:"🚚",slug:"cargo"},
{ru:"Бизнес",ka:"ბიზნესი",az:"Biznes",am:"Բիզնես",en:"Business",icon:"🏢",slug:"business"}
];
const SUBCATEGORIES={"Авто":["Легковые","Внедорожники","Грузовые","Мото","Автобусы","Запчасти","Шины и диски","Автосервис"],"Недвижимость":["Продажа квартир","Аренда квартир","Дома","Коммерческая","Земля","Посуточная аренда"],"Работа":["Вакансии","Резюме","Подработка","Удалённая работа"],"Услуги":["Строительство","Ремонт","Электрик","Сантехник","Сварщик","Красота","Обучение","IT"],"Грузоперевозки":["По Грузии","Межгород","Международные","Грузовое такси","Курьер"],"Туризм":["Туры","Трансферы","Гиды","Отели","eSIM","Страховка"]};
function getLang(){return localStorage.getItem("gb_lang")||"ru";}
function catName(cat){return cat[getLang()]||cat.ru;}
function setLang(lang){localStorage.setItem("gb_lang",lang);location.reload();}
function qs(name){return new URLSearchParams(location.search).get(name);}
function money(value,currency){return `${value||0} ${currency||"GEL"}`;}
