# SINUS Webshop

# Planering Agile

 * Tack för oss!

* utvärdering,
  - Mest utmärkande under projektet har varit de goda samarbetet i gruppen. Alla har varit uppmärksamma, tålamodiga och ödmjuka till både fram- och motgångar( inte många;) ) under arbetes gång. Vi har hjälp varandra när det behövts, parkodat ihop och lärt oss av varann.
  Kommunikationen har varit outstanding!
  
  Mycket av den tid vi la i början på planering och struktur gav en bra grund. De i kombination att vi även kunna frångå den när det krävdes, då problem dykte upp eller tid blev knapp.
  Tycker vi som grupp var snabb på att ta beslut för att hålla deadline och styra varann i rätt kurs.

  Hade inte kunnat bli bättre!

* 5/3
  - Standup på morgonen som igår.
  - fortsatte sen att gå igenom sidan tillsammans som alla användare, i alla vyer och funktioner.
  kodade lite gemensamt, sen individuellt med små fix vi ville lägga till/ ändra.
  avsluta med förberedelse inför presentation.
  - Presentation
  - förberedelse inför inlämning
  - inlämning

* 4/3
  - standup på morgonen, gick igenom de vi alla jobbat med och om man stött på problem.
  - delade upp arbetet av Admin delen.
  - alla fortsatte jobba vidare individuellt
  - möte på eftermiddan, stämmer av hur det går för alla och kollar igenom de vi gjort. Fortsätter individuellt.

* 3/3 
  - standup,
  - planering sprint 2 och la till admin biten i backlogen
  - alla tilldelades nya Todos, delade upp user storyn för Inloggad kund view mellan oss alla.
  - Alla påbörjat sitt arbete individuellt.
  - Avslutade kvällen med kort gemmensamt möte, gick igenom sidan tillsammans, skapade en todo med småfix där vi la till små ändringar vi ville förbättra, ändra eller lägga till.

* 2/3
  - Sprint 1, tagit mer tid än vi beräknat.
  - Productmodal färdigställdes, bugtesting av produkt view, cart och utchecknings view. Xtra tid behövdes för att lösa så att rätt antal produkt idn skickades med till severn vi lagd order iom. vår snyggare lösning med att öka amount i vår cart istället för upprepa produkt i listan.
  - Alla jobba enskilt med css
  - slutet av dan gemensam kodning utav post request vid registering och inloggning av användare

* 1/3
  - Genomgång Sprint 1 och planering sprint 2 flyttas till 2/3,
  vardera fortsätter med sina delar. Hjälp varann under dagen med små problem som dykt upp.

* 25/2
  - Stand upp möte, gick igenom gårdagen och deligera individuella uppgifter och en gemensam att börja med för sprint 1.
  - sprint 1, fastställd
  - Gemensamma: backend Server, Produkt view - klart - Produkt view redo för testning
  - Christos: enstaka Produkt Modal
  - Jessica: Cart Modal
  - Carl: Utcheckning view
  - Nav comp. ej deligerad ännu

  - Produkt view Storyn kodade vi under förmiddagen tillsammans för att se och förstå hämtning av data.
  - på eftermiddagen fortsatte vid att koda tillsammans för att passa enskild produkt till "enstaka Protukt Modal". Arbetet fortsätter vidare av dan individuellt.

* 24/2
  - forts. med stories till backlog (G-del) väntar med VG-delen.

påbörjade planer Sprint 1, utifrån backlogen.


* 23/2 - Planering upplägg av Agiltarbetssätt


* Antal dagar till inlämning = 7dagar (+2 helgdagar) 

* Scrum master, hålla i sprintplanering och standup. se till att gruppen lyckas bra med det agila arbetet. Dela ut arbetsuppgifter och hjälpa till när någon fastnar.
  - Calle

* backlog, där vi förvara våra user Stories innan det flyttas vidare till todo inför en sprint

* Sprintar
  - Sprint 1, 24-26/2
  - Genomgång Sprint 1 och planering sprint 2. 1/3, vi går igenom om vi klarat sprint 1, om något återstår går igenom vad och varför. Vi planerar utifrån vår backlog vår nästa sprint.
  - Sprint 2, 2-4/2

* Stand up, ett möte där vi varje dag berättar om vad vi förväntas hålla på med under dagen samt hur föregående dag gått och om vi stött på något problem, hur vi ligger till i sprinten. Scum master håller i mötet.
  - 10.00 sharpisch varje dag

- påbörjad Stories till backlog


## Arbetssätt
Samla era erfarenheter från Kanban, Scrum och diskussionerna av Modern Agile och kom överens i 
gruppen om vilka delar och hur ni ska inkorporera detta i ert arbete. 
Dokumentera vad ni kommer överens om i README.md i ert repository.

## Instruktioner
Ni ska bygga en FrontEnd till en färdig BackEnd. Se `SINUS Webshop - REST API` nedan för mer information.

Inom gruppen har ni en uppsättning mockups från UI-kursen i höstas, välj en av dessa mockups att utgå ifrån.
Om ni inte kommer överens om vilken ni ska använda så får ni be läraren om en annan.

Skapa en trello board och bjud alla i gruppen, inkl läraren.

## SINUS Webshop

SINUS Webshop är en onlinebutik som säljer skateboards och tillbehör.

Webshoppen ska ha 3 olika lägen
* Anonym besökare
* Inloggad Kund
* Inloggad Admin (VG-krav)

### Anonym besökare
Det ska finnas en `registrerings`-view med ett registreringsformulär.
En order kan genomföras som anonym användare.

### Inloggad Kund
Det ska finnas en `My Account`-view med information om ditt konto och din orderhistorik.

### Inloggad Admin (VG-krav)
Det ska finnas en `Admin Area`-view med ett CRUD-gränssnitt för alla produkter.

### Övriga Views och Features
* En view för produktlista
* En view utcheckning med formulär för kontaktinfo och betalinfo, fylls i automagiskt om man är inloggad
* modal för enstaka produkt
* Modal för kundkorg
* Modal för inloggningsformulär

# SINUS Webshop - REST API

## Getting Started

1. `cd backend`
2. Install dependencies `npm install`
3. Start the server `npm run start`

## EndPoint Specifikation

| Resurs | Metod | Detaljer | Request Body |
| ------ | ------ | ------ | ------ |
| /api/auth/ | POST | Authentiserar user med email & password. Returnerar en JWT-token som används vid varje anrop API:et i en Authorization-header. | {"email": "...", "password" : "..."} |
| /api/register/ | POST | Registrerar en användare. | Se User-modellen |
| /api/products/ | GET | Returnerar en lista på samtliga produkter. | ❌ | 
| /api/products/:id | GET | Returnerar en enstaka produkt. | ❌ |
| /api/products/ | POST | Skapar en ny produkt. Enbart tillgänglig för admins | Se Product-modellen |
| /api/products/:id | PATCH | Uppdaterar produkt. Enbart tillgänglig för admins | Se Product-modellen |
| /api/products/:id | DELETE | Tar bort en produkt med :id. Enbart tillgänglig för admins | ❌ |
| /api/orders | GET | Returnerar en lista på den användarens ordrar eller samtliga ordrar för admins. | ❌ |
| /api/orders | POST | Skapar en ny order | Se Order-modellen |
| /api/me | GET | Hämtar den inloggade användren | ❌ |
| /api/me | PATCH | Uppdaterar profilen för den inloggade användren | Se User-modellen |

### Datamodeller

#### Product

##### Request Body
```javascript
 {
  "title": 'Gretas Fury',
  "price": 999,
  "shortDesc": 'Unisex',
  "longDesc": 'Skate ipsum dolor sit amet...',
  "imgFile": 'skateboard-greta.png'
} 
```

##### Document Model
```javascript
 {
  _id: '39y7gbbZk1u4ABnv', // generated serverside
  title: 'Gretas Fury',
  price: 999,
  shortDesc: 'Unisex',
  longDesc: 'Skate ipsum dolor sit amet...',
  imgFile: 'skateboard-greta.png' // Asset logic on clientside
} 
```

#### Order
##### Request Body
```js
{
  "items": ["productId1", "productId1", "productId2"]
}
```

##### Document Model
```javascript
 {
  _id: 123,
  timeStamp: Date.now(), 
  status: 'inProcess',
  items: [ 
    {
      title: "Tricky",
      price: 799,
      imgFile: "skateboard-generic.png",
      _id: "9E6KXMIdRglW0wbL",
      amount: 2
    }, 
    {
      <etc>
    }, 
    ... 
  ],
  orderValue: 999
} 
```

#### User

##### Request Body
```js
{
  "email": 'greta.thunberg@example.se',
  "password": 'grillkorv123',
  "name": 'Johan Kivi',

  "address": {
    "street": 'Tokitokvägen 3',
    "zip": '123 45',
    "city": 'Tokberga'
  }
} 
```

##### Document Model

```javascript
{
  _id: '6b521d3f-3d15...' // generated server side
  email: 'johan.kivi@zocom.se',
  password: '$$$hashed password$$$', // hashed serverside
  name: 'Johan Kivi',
  role: 'admin', // or customer
  address: {
    street: 'Tokitokvägen 3',
      zip: '123 45',
      city: 'Tokberga'
  },
  orderHistory: [ <orderId1>, <orderId2>, ... ]
} 
```

## Bedömningskritierer

### Godkänt

* State management i Vuex
* Vue Router för navigation
* Demonstrera komponenter, props, emits, data, computed, events
* API-abstraktion till egen modul
* Tydlig feature breakdown i Trello
* Dokumenterat agilt arbetssätt i README
* Inlämnad utvärdering i slutet


### Väl godkänt
* {...godkänt}
* Admin-view för CRUD av produkter
