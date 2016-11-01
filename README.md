# General Assembly - Project 2 
Aaron Conklin

## Guitar Tab Database Application 
utilizing the Songsterr, Itunes, and Lyrics N Music APIs.  

![guitar-smash](/public/guitar-smash.gif)

### User Story

This is an application for a guitar player who doesn't want/need to pay for sheet-music, who wants a place to get new tabs/chords and have the ability to have a favorites page where she can reference and rate tabs for future reference.

### Walkthrough

A new user will create a username with a corresponding password.
Once the username has been created, she can now log into the application.
She is directed to a page to either see her favorites or create a 
new search. The user searches by song title, and a tab reference, 
information, and YouTube link. She can also save results into favorites
and delete. 

The application uses MongoDB as a local database and Heroku.

### Wireframes
![Form Wireframe](/public/app-wireframe-1.png)
![App Wireframe](/public/app-wireframe-2.png)

### Challenges

The Songsterr API denied me access to the tab information, and the Lyrics N Music API went offline mid-project. I left the code there in hopes it could come back... but it doesn't look great.

### Future Goals

Add rating stars for each favorite/comment box, polish the CSS, consolodate pages, utilize html5 iFrame to render the tabs onto the page and a youtube video instead of links...

### Technologies Used: 
- [x] HTML
- [x] CSS 
- [x] JS
- [x] NODE.JS
- [x] Path
- [x] MongoDB
- [x] dotEnv

### References

- [Songsterr API]
(https://www.songsterr.com/a/wa/api)
- [Itunes API] 
(https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
- [LyricsNMusic API]
(http://www.lyricsnmusic.com/api)
