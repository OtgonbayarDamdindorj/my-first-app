require("@babel/polyfill");
import Search from "./model/Search";

/** Web app төлөв
* - Хайлтын query, үр дүн
* - Тухайн үзүүлж байгаа жор
* - Лайкласан жорууд
* - Захийлж байгаа жорын найрлагууд
**/ 

const state = {};

const controlSearch = () => {
    // 1) Вебээс хайлтын түлхүүр үгийг гаргаж авна.
    const query = 'pizza';  
    
    if(query) {
        // 2) Шинээр хайлтын обьектийг үүсгэж өгнө.
            state.search = new Search(query);
    // 3) Хайлт хийхэд зориулж дэлгэцийн ui бэлтгэнэ.

    // 4) Хайлтийг гүйцэтгэнэ.
        await state.search.doSearch();
        
    // 5) Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.
    console.log(state.search.result);
}
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});
