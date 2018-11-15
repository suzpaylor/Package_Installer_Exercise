# Package_Installer_Exercise
Creating a package installer that can handle dependencies


## Tests in console

Liri is not as cool as Siri but it is a node.js command line application that takes in parameters and gives back data. The user must enter 'node liri.js' into the command line followed by a command and then a search parameter.  

There are four possible Commands: 'concert-this', 'spotify-this-song', 'movie-this', or 'do-what-it-says'

## 'concert-this'

🎤👨‍🎤👩‍🎤🎸 The 'concert-this' command uses the Bandsintown API to retrive all upcoming concerts for an artist that is searched.  Each venue, location and date is provided for all results.  Moment.js is used to format the date from the Bandsintown API.  

In the following example the user is looking for the next Taylor Swift Concert:
node liri.js concert-this "Taylor Swift"

<img src="./concert-this.GIF">

## 'spotify-this-song'