GraphQL Mock API Assessment for frontend Engineering role.

<!-- Introduction animation -->
Using the useEffect hook, a motion.div(following the framer motion style) was used to display animations onPageLoad. The animations rendered initial and whileInView with a typewriterEffect stating the assignment to be achieved.
The setTimeOut function was used to set the onLoad animations timing in out useEffect Hook.

<!-- Setting up darkTheme and LightTheme -->
This was achieved using the useContext Hook which wrapped our Application thereby rendering it's current state or updated state to our application.
The themeReducer housed two parameters which were used to alter our state using the switch function.

An added challenge was the use of localStorage to our default theme state which stores itself as an object in our browser and loads the last used state when reopened at a future date.

=> The Project aimed at fetching API using GraphQL environment.
Datas were fetched using this link "https://rickandmortyapi.com/graphql" and the used cases were: ID, Name, Status, Gender and Species.

<!-- Line 32 -useEffect Hooks-->
=> The fetching of data(s) were achieved using a fetch function in the useEffect Hook in which some fetch methods and procedures were placed in our hook for the browser to follow accordingly while fetching data(s). 
It displays data.data.characters.results and it also catches any error for easy debugging in our codebase.

<!-- Line 62 -->
=> An input search field was setup to filter any type of fetched data in our application.
Name : Displays those with the name written in the search input. e.g rick
Status: Displays those with the status alive or dead in the search input. e.g alive searches our data for those alive and the same for the dead too.
Gender: Entering "Male" or "Female" displays data of those that fell under the category of either. e.g female
Species: It differentiates between Humans and Robots e.g human displays those that fell under the categories of human.

<!-- LIne 72 -->
=> Filtering data(s) were achieved using our current state which was rendered as an empty array in the useState section in order to get our data(s) from the called URL and tenary operators for our conditional statements. 

<!--Line 75-->
=> Converted our cases to lowercases using .lowerCase() and as well include them in the searchTitle state in order to enhance the effectiveness of functionalities while filtering.

<!-- Line 93 -->
=> After data(s) were fetched, they were mapped out using the map method for viewing fetched JSON data(s). 
<!-- CSS -->
=> The stylings were achieved using backdrop filters for our navigation background behaviours, media queries for setting up our tablet and mobile view, use of flexbox for a more creative outlook.
The use of transitions effects for smooth behaviours whie hovering on fetched data(s) were included. 




