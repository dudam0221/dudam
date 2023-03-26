const API_KEY_ENCODE = 'GvL4gdCHWhA3ZQ7f1gyhEtekXKfeTZC0nt09XyVz5HGtfvkMDoUm0hjiOF0CagiVvE%2F8dWFLm6E%2BV49EefMx8Q%3D%3D';

const API_KEY_DECODE='GvL4gdCHWhA3ZQ7f1gyhEtekXKfeTZC0nt09XyVz5HGtfvkMDoUm0hjiOF0CagiVvE/8dWFLm6E+V49EefMx8Q==';

const ul = document.getElementById('authors');
const list = document.createDocumentFragment();
const url=`http://apis.data.go.kr/1250000/lonbook/getLonbook?ServiceKey=${API_KEY_ENCODE}&pageNo=1&numOfRows=10&keyword=민족&base_yr=2016`;

fetch(url)
    .then(res => {return res.json()})
	  .then(myJson => {
        let authors = myJson.items;

      authors.map((author) => {
        const year = document.createElement("div");
        const ttl = document.createElement("div");
        const authr = document.createElement("div");
        year.textContent = author.base_yr;
        ttl.textContent = author.ttl;
        authr.textContent = author.authr;

        const userInfo = document.getElementById("userInfo");
              userInfo.appendChild(year);
              userInfo.appendChild(ttl);
              userInfo.appendChild(authr);
      });
});
