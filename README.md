# Filipino jokes api 😂
** Lahat ng joke na nandito ay scraped from web, some of them are my personal favorites. 

## Endpoints 🍿

### Grab a random joke! 
[https://filipino-jokes-api.herokuapp.com/random]

### Grab a random joke! 
[https://filipino-jokes-api.herokuapp.com/random/ten]

### Grab a random joke by n!  `/random/:number`
[https://filipino-jokes-api.herokuapp.com/random/5]

### Grab a random joke by dialect `random_jokes/:dialect`
[https://filipino-jokes-api.herokuapp.com/random_jokes/tagalog]

### Grab a random joke by dialect and by n `random_jokes/:dialect/:number`
[https://filipino-jokes-api.herokuapp.com/random_jokes/tagalog/5]

### Pano mag ambagbag ng joke ❓ 
** Mag submit lamang ng pull request kasama ang joke na naidagdag mo sa `/jokes/jokes.json` na file . Siguraduhin na ganito ang format katulad ng na sa ibaba. 👏

```javascript
{
  "id": nth id  + 1,
  "dialect": "tagalog",
  "setup": "What's the best thing about a Boolean?",
  "punchline": "Even if you're wrong, you're only off by a bit."
}
```

### Halimbawa gamit ang python programming language 🔥

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








