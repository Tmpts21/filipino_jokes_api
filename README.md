# Filipino jokes api 
### Lahat ng joke na nandito ay na scraped naten sa web, samantalang ang iba ay personal kong paborito.


# 🍿 Endpoints 🍿

### Kumuha ng random joke 
[https://filipino-jokes-api.herokuapp.com/random](https://filipino-jokes-api.herokuapp.com/random)


### Kumuha ng sampung random jokes  
[https://filipino-jokes-api.herokuapp.com/random/ten](https://filipino-jokes-api.herokuapp.com/random/ten)


### kumuha ng random jokes base sa kung ilan ang gusto  
Ang endpoint ay `/random/:number` <br>
[https://filipino-jokes-api.herokuapp.com/random/5](https://filipino-jokes-api.herokuapp.com/random/5)


### Kumuha ng random jokes base sa dayalekto
Ang endpoint ay  `random_jokes/:dialect` <br>
[https://filipino-jokes-api.herokuapp.com/random_jokes/tagalog](https://filipino-jokes-api.herokuapp.com/random_jokes/tagalog)


### kumuha ng random jokes base sa dayalekto at kung ilan ang iyong gusto 
Ang endpoint ay `random_jokes/:dialect/:number`<br>
[https://filipino-jokes-api.herokuapp.com/random_jokes/tagalog/5](https://filipino-jokes-api.herokuapp.com/random_jokes/tagalog/5)


<br>

**Mahalagang paalala** :
> Ang pinakamataas na makukuha mong joke ay sampu lamang 😉
> ( Sa ngayon bisaya at tagalog pa lamang ang dayalektong suportado ng ating api. 

<br>

<hr>




# Pano mag ambag ng iyong nakakatawang joke ❓ 
Mag submit lamang ng pull request kasama ang joke na naidagdag mo sa `/jokes/jokes.json` na file . Siguraduhin na ganito ang format katulad ng na sa ibaba. 👏

```javascript
{
  "id": nth id  + 1,
  "dialect": "bisaya",
  "joke": [
          "Inahan: Daghana og lung-ag, apila ang iring ug iro..",
          "Anak: OK, Ma.",
          "(pagkataud-taud)",
          "Inahan: Hoi Inatay! Nganong duna’y iring sa nilung-ag?",
          "Anak: Apil gani unta ang iro, wala lang jud masud.."
          ]
}
```


# Halimbawa 🤯 : 
### Gamit ang cUrl
```

$ curl https://filipino-jokes-api.herokuapp.com/random

{
"id":299,
"dialect":"tagalog",
"joke":["May joke ako about pizza, Kaso baka di ko ma-deliver"]
}
```

###  Gamit ang python programming language 🔥

```python
import requests 
req = requests.get('https://filipino-jokes-api.herokuapp.com/random').json()
print(req) 

'''
{'id': 319, 'dialect': 'tagalog', 'joke': ['Knock knock', 'Whos there', 'Meatloaf', 'Meatloaf who', 'Sa yong ngiti akoy nahuhu MALING']}
'''

#lets parse the joke 
for joke in req['joke'] : 
  print(joke)
  
'''
Knock knock
Whos there
Meatloaf
Meatloaf who
Sa yong ngiti akoy nahuhu MALING

'''

```

## Paganahin sa iyong sariling kompyuter 💻🤙

```
git clone https://github.com/Tmpts21/filipino_jokes_api.git
cd filipino_jokes_api
npm install 
node server.js
at mag punta sa http://localhost:8000/random/
```








