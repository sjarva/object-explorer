export default {
    state: {
        selectedMethod: '',
        createObj: [
            {
                name: 'create',
                shortDesc: 'luoda uuden olion',
                desc: `Luo uuden olion jolla on määritelty prototyyppi ja kentät.<br>
            <br>
            <strong>Tärkeä huomio aloittelijoille!</strong>  On yleisempää luoda uusi olio käyttäen olioliteraalia, joka näytetään esimerkin alussa <code>let obj = { a: 1 };</code>`,
                example: `const obj2 = Object.create(obj);<br>
          console.log(obj2);`,
                output: `Object {<br>
          <span>&nbsp;&nbsp;</span>a: 1,<br>
          <span>&nbsp;&nbsp;</span>b: 2,<br>
          <span>&nbsp;&nbsp;</span>c: 3<br>
          }`,
            },
            {
                name: 'assign',
                shortDesc: 'kopioida toisen olion',
                desc: `Kopioi kaikki lueteltavat kentätt yhdestä tai useammasta alkuoliosta kohdeolioon.
          Palauttaa kohdeolion. Vaikka tätä ei ole teknisesti ottaen rakennettu olio-metodiin, on yleisempää käyttää ES6:n <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator' target='_blank'>Levittäjä-operaattoria</a>, eli kirjoittaa <code>...</code> levitettävän olion eteen.`,
                example: `const copy = Object.assign({}, obj);<br>
          console.log(copy);`,
                output: `Object {<br>
          <span>&nbsp;&nbsp;</span>a: 1,<br>
          <span>&nbsp;&nbsp;</span>b: 2,<br>
          <span>&nbsp;&nbsp;</span>c: 3<br>
          }`,
            },
        ],
        createProp: [
            {
                name: 'defineProperty',
                shortDesc: 'uuden kentän tai muokata olemassaolevaa kenttää',
                desc: `Lisää määritetyn kentänn olioon.<br>
            <br>
            <strong>Tärkeä huomio aloittelijoille!</strong> On yleisempää käyttää piste- tai hakasulkunotaatiota uuden kentän luomiseen tai olemassaolevan muokkaamiseen. Näin: <code>obj.a = 1</code> tai <code>obj[a] = 1</code>. Tämä ei ole teknisesti sisäänrakennettu metodi, siksi sitä ei löydy dokumentaatiosta.`,
                example: `Object.defineProperty(obj, 'd', {<br>
          <span>&nbsp;&nbsp;</span>enumerable: true,<br>
          <span>&nbsp;&nbsp;</span>configurable: true,<br>
          <span>&nbsp;&nbsp;</span>writable: true,<br>
          <span>&nbsp;&nbsp;</span>value: 4<br>
          });<br>
          <br>
          console.log(obj.d);`,
                output: `4`,
            },
            {
                name: 'defineProperties',
                shortDesc:
                    'yhden tai useamman uuden kentän, tai muokata olemassa olevia kenttiä',
                desc: `Lisää yhden tai useamman määritetyn kentän olioon.<br>
            <br>
            <strong>Tärkeä huomio aloittelijoille!</strong> On yleisempää käyttää piste- tai hakasulkunotaatiota uuden kentän luomiseen tai olemassaolevan muokkaamiseen. Näin: <code>obj.a = 1</code> tai <code>obj[a] = 1</code>. Tämä ei ole teknisesti sisäänrakennettu metodi, siksi sitä ei löydy dokumentaatiosta.`,
                example: `Object.defineProperties(obj, {<br>
          <span>&nbsp;&nbsp;</span>d: {<br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>
          <span>&nbsp;&nbsp;</span>},<br>
          <span>&nbsp;&nbsp;</span>e: {<br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>
          <span>&nbsp;&nbsp;</span>}<br>
          });<br>
          <br>
          console.log(obj);`,
                output: `{a: 1, b: 2, c: 3, d: 4, e: 5}`,
            },
        ],
        infoObj: [
            {
                name: 'isExtensible',
                shortDesc: 'voidaanko kenttiä lisätä',
                desc: 'Määrittää onko olion kenttiien laajentaminen sallittua.',
                example: `console.log(Object.isExtensible(obj));<br>
          Object.freeze(obj);<br>
          console.log(Object.isExtensible(obj));`,
                output: `true<br>
          false`,
            },
            {
                // En ole ollenkaan varma onko 'osoitin' oikea termi tässä vai ei,
                // mutta en keksinyt parempaas
                name: 'is',
                shortDesc: 'osoittavatko kaksi osoitinta samaan olioon',
                desc: `Vertaa osoittavatko kaksi muuttujaa samaan olioon.
          Pitää kaikkia NaN-arvoja samoina (mikä eroaa abstraktissa samuusvertailussa ja tiukassa samuusvertailussa).
          Tämä on vähän outo metodi, ja MDN-dokumentaatio on harhaanjohtava.
          On <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#When_to_use_Object.is_versus_triple_equals' target='_blank'>hyödyllisempää käyttää kolmoisyhtäläisyyttä <code>===</code></a> samanlaisuuden vertaamiseen.`,
                example: `let obj2 = {<br>
          <span>&nbsp;&nbsp;</span>a: 1,<br>
          <span>&nbsp;&nbsp;</span>b: 2,<br>
          <span>&nbsp;&nbsp;</span>c: 3<br>
          };<br>
          <br>
          console.log(Object.is(obj, obj2));<br>
          console.log(Object.is(obj, obj));`,
                output: `false<br>
          true`,
            },
            {
                name: 'isFrozen',
                shortDesc: `voiko oliota ja sen kenttiä muokata`,
                desc: 'Määrittää onko olio jäädytetty.',
                example: `console.log(Object.isFrozen(obj));<br>
          Object.freeze(obj);<br>
          console.log(Object.isFrozen(obj));`,
                output: `false<br>
          true`,
            },
            {
                name: 'isSealed',
                shortDesc: `onko olio sinetöity ja sitä ei voida muuttaa`,
                desc: `Määrittää onko olio sinetöity: sinetöidyn olion kenttien nimiä tai määrää ei voi muuttaa (mutta kenttien arvoja voi muuttaa).`,
                example: `Object.seal(obj);<br>
          <br>
          console.log(Object.isSealed(obj));`,
                output: `true`,
            },
            {
                name: 'isPrototypeOf',
                shortDesc: `onko olio toisen olion prototyyppiketjussa`,
                desc: `Palauttaa boolean-arvon, joka kertoo onko funktion parametrinä annettu olio toisen olion prototyyppiketjussa.`,
                example: `function Rect() {}<br>
          <br>
          var rect = new Rect();<br>
          <br>
          console.log(Rect.prototype.isPrototypeOf(rect));`,
                output: `true`,
                useExample: 'newExample',
            },
        ],
        noChange: [
            {
                name: 'seal',
                shortDesc: `varmistaa että kenttiä ei voi lisätä tai poistaa.`,
                desc:
                    'Estää muuta koodia poistamasta tai lisäämästä uusia kenttiä olioon. Olemassaolevien kenttien arvoja voidaan silti muuttaa.',
                example: `Object.seal(obj);<br>
          delete obj.c;<br>
          <br>
          console.log(obj);`,
                output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`,
            },
            {
                name: 'freeze',
                shortDesc: `varmistaa että kenttiä ei voi lisätä, poistaa eikä muokata.`,
                desc: `Jäädyttää olion: koodilla ei voida poistaa tai muokata kenttiä.`,
                example: `Object.freeze(obj);<br>
          obj.a = 10;<br>
          <br>
          console.log(obj.a);`,
                output: `1 <span class='comment'>// arvo ei muuttunyt 10</span>`,
            },
            {
                name: 'preventExtensions',
                shortDesc: `varmistaa että kenttiä ei voida lisätä.`,
                desc: `Estää uusien kenttien luomisen. Kenttiä voidaan poistaa, mutta niitä ei voi lisätä.`,
                example: `Object.preventExtensions(obj);<br>
          obj.d = 4;<br>
          <br>
          console.log(obj.d);`,
                output: `undefined`,
            },
        ],
        createString: [
            {
                name: 'toString',
                shortDesc: `olion tulostusasu tai merkkijono.`,
                desc: `Olion <code>toString()</code> metodi palauttaa merkkijonon, joka kertoo olion tulostusasun. Vaikka tämä metodi on sisäänrakennettu, yleensä on käytännöllisempää käyttää <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify' target='_blank'><code>JSON.stringify()</code></a>-funktiota.`,
                example: `console.log(obj.toString());<br>
          console.log(obj.a.toString());`,
                output: `'[object Object]'<br>
          '1'`,
            },
            {
                // Tämä oli jotenkin älyttömän vaikeaa kääntää
                name: 'toLocaleString',
                shortDesc: `lokalisoidun tulostusasun tai merkkijonon oliosta.`,
                desc: `<code>toLocaleString()</code>-metodi palauttaa lokalisoidun merkkijonon, ja perineet oliot voivat ylikirjoittaa tämän metodin.
        Eli, suomeksi: tämä tarkoittaa että jos sinulla on jotain dataa, joka vaihtelee paikallisesti,
        kuten esimerkiksi päivämäärät, ne tulostetaan eri formaatissa.`,
                example: `obj.d = new Date();<br>
          <br>
          console.log(obj.d);<br>
          console.log(obj.d.toLocaleString());`,
                output: `Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>
          12/29/2017, 8:57:35 PM`,
            },
        ],
        infoProp: {
            details: [
                {
                    name: 'getOwnPropertyDescriptor',
                    shortDesc: `tarkemmat tiedot olion kentästä`,
                    desc:
                        'Palauttaa tarkemmat tiedot olion omasta (ei-peritystä) kentästä.',
                    example: `const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>
            <br>
            console.log(o);`,
                    output: `Object {<br>
            <span>&nbsp;&nbsp;</span>configurable: true,<br>
            <span>&nbsp;&nbsp;</span>enumerable: true,<br>
            <span>&nbsp;&nbsp;</span>value: 1,<br>
            <span>&nbsp;&nbsp;</span>writable: true<br>
            }`,
                },
                {
                    name: 'getOwnPropertyDescriptors',
                    shortDesc: `tarkemmat tiedot kaikista olion kentistä`,
                    desc: `Palauttaa tarkemmat tiedot kaikista olion omista (ei-perityistä) kentistä.`,
                    example: `console.log(Object.getOwnPropertyDescriptors(obj))`,
                    output: `Object {<br>
            <span>&nbsp;&nbsp;</span>a: Object {<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>
            <span>&nbsp;&nbsp;</span>},<br>
            <span>&nbsp;&nbsp;</span>b: Object {<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>
            <span>&nbsp;&nbsp;</span>},<br>
            <span>&nbsp;&nbsp;</span>c: Object {<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>
            <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>
            <span>&nbsp;&nbsp;</span>},<br>
            }`,
                },
                {
                    name: 'propertyIsEnumerable',
                    shortDesc: `näkyykö kenttä for-toistolauseessa`,
                    desc: `Palauttaa boolean-arvon riippuen siitä, onko kenttä numeroituva vai ei. Tätä voidaan käyttää tarkistamaan, onko jokin kenttä peritty vai käyttäjän määrittelemä, koska perityt kentät eivät yleensä ole numeroituvia.`,
                    example: `console.log(obj.propertyIsEnumerable('a'));<br>
            console.log(Math.propertyIsEnumerable('random'));`,
                    output: `true<br>
            false`,
                },
                {
                    name: 'hasOwnProperty',
                    shortDesc: `onko kenttä olion oma kenttä`,
                    desc: `Palauttaa boolean-arvon riippuen siitä, onko olion kyseinen kenttä olion oma kenttä, eikä peritty prototyyppiketjun kautta.`,
                    example: `console.log(obj.hasOwnProperty('a'));<br>
            delete obj.a;<br>
            console.log(obj.hasOwnProperty('a'));`,
                    output: `true<br>
            false`,
                },
            ],
            list: [
                {
                    name: 'keys',
                    shortDesc: `avaimista`,
                    desc: `Palauttaa taulukon kaikista olion avaimista, jotka ovat numeroituvia, eli ne voidaan käydä läpi toistorakenteen avulla.
            Taulukko on siinä järjestyksessä, jossa avaimet käydään läpi toistorakenteessa.`,
                    example: `console.log(Object.keys(obj));`,
                    output: `['a', 'b', 'c']`,
                },
                {
                    name: 'values',
                    shortDesc: `arvoista`,
                    desc: `Palauttaa taulukon kaikista olion numeroituvien avainten arvoista, jotka voidaan käydä läpi toistorakenteen avulla.
            Taulukko on siinä järjestyksessä, jossa avaimet käydään läpi toistorakenteessa.`,
                    example: `console.log(Object.values(obj));`,
                    output: `[1, 2, 3]`,
                },
                {
                    name: 'entries',
                    shortDesc: `avaimista ja arvoista`,
                    desc: `Palauttaa kaksiulotteisen taulukon olion numeroituvista avain-arvo-pareista siinä järjestyksessä, jossa ne käytäisiin läpi toistorakenteen avulla.`,
                    example: `console.log(Object.entries(obj));`,
                    output: `[['a', 1], ['b', 2], ['c', 3]]`,
                },
                {
                    name: 'getOwnPropertyNames',
                    shortDesc: `avaimista, vaikka niitä ei voisi käydä läpi toistorakenteella`,
                    desc: `Palauttaa taulukon, joka sisältää olion numeroituvat ja numeroitumattomat kentät. Tekee saman asian kuin
          <code>Object.keys()</code>, joka palauttaa olion avaimet, mutta <code>getOwnPropertyNames()</code> sisältää myös ne numeroitumattomat kentät.`,
                    example: `Object.defineProperty(obj, 'a', {<br>
            <span>&nbsp;&nbsp;</span>enumerable: false<br>
            });<br>
            <br>
            console.log(Object.keys(obj));<br>
            console.log(Object.getOwnPropertyNames(obj));`,
                    output: `['b', 'c']<br>
            ['a', 'b', 'c']`,
                },
            ],
        },
        prototype: [
            {
                name: 'getPrototypeOf',
                shortDesc: `saada olion prototyypin.`,
                desc: `Palauttaa olion prototyypin (eli kyseisen olion [[prototype]]-kentän arvon).`,
                example: `const proto = Object.create(obj);<br>
          console.log(Object.getPrototypeOf(proto) === obj);`,
                output: `true`,
            },
            {
                name: 'setPrototypeOf',
                shortDesc: `asettaa olion prototyypin.`,
                desc: `Varoitus: tämä metodi on todella hidas. Käytä tätä varoen, tai korvaa se olion luomisella: <code>Object.create()</code>
        Tämä metodi asettaa annetun parametrin olion protyypiksi (eli [[prototype]] kentän arvoksi).`,
                example: `const dict = Object.setPrototypeOf({}, obj);<br>
          <br>
          console.log(dict);`,
                output: `Object {<br>
          <span>&nbsp;&nbsp;</span>a: 1,<br>
          <span>&nbsp;&nbsp;</span>b: 2,<br>
          <span>&nbsp;&nbsp;</span>c: 3<br>
          }`,
            },
            {
                name: 'isPrototypeOf',
                shortDesc: `tarkistaa onko olio toisen olion prototyyppiketjussa.`,
                desc: `Palauttaa boolean-arvon, joka kertoo onko funktion parametrinä annettu olio toisen olion prototyyppiketjussa.`,
                example: `function Rect() {}<br>
          <br>
          var rect = new Rect();<br>
          <br>
          console.log(Rect.prototype.isPrototypeOf(rect));`,
                output: `true`,
            },
        ],
    },
}
