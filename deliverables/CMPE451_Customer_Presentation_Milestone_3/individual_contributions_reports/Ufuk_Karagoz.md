# Ufuk Karagöz

## Member

*Name Surname:* Ufuk Karagöz

*Group:* 9

*Subgroup:* Frontend


## Responsibilities

* Firstly, I created my personal pages as a new group member. Then, I updated the Readme file and project plan. The updated project plan file and Screen Shots were added to the wiki page. After that, I was assigned to the frontend subgroup and the coding part was implemented. I primarily code about the connection and architecture part of the front-end project. We chose to React for the frontend implementation. I used the Axios library for the backend API requests. The project manages the user states and tokens with Redux implementation. The last but not least, URL routing architecture was implemented. There are two different types of URLs such as public and authorized. Users cannot access authorized URLs without the login step and the information checked by using Redux's states. 

* My development started with endpoint connections. After that, I created a detailed architecture plan for the front-end group. We split the tasks and I had will implement the search page, bulk search user list, search users with input text, and update the navigation bar. In the end, I created three main tabs (home, search, profile) and four pages (home, search, user, profile).
* I created a bulk art-item show list such as a four-column table with art items and art-items details - owner name, created date, description, tags, number of comments, and number of favorites. When the user clicks the comment icon, the web page creates a comment pop-up page and the user can see details of comments and can make comments on this pop-up page. Also, a similar implementation has been done to favorites, the user can like the art item on the favorite pop-up page. I used this bulk art-item list on the homepage, user pages, and profile pages.
* I implemented a search page with an input bar and a list of results in the lower part of the page. when there is no input, the backend returns all users. If there is a search input, the page is refreshing at every change and the result of the search can be seen as a user list. In the result list, there have three details - the profile picture, the username, and the name of the user. When a user clicks on an element of the list, the web page navigates to the clicked user page.
* The users' page and profile page has similar implementation. The only difference is in the user page, there has a follow/unfollow button but the unfollow button has not been deployed yet and on the profile page this button is the edit profile button. When the user clicks this button, a pop-up page is opening and the user can edit the details of the profile. Pages have two main parts. The upper part is the details of the user - profile picture, username, location, name, email, birthdate, follower button, and the following button. The lower part has two tabs which are posted by the user tab and favorited by the user tab. When the user posts an art-item, it will show in the first tab and when the user likes an art-item, it will be shown in the second tab.

* For the final endpoint, I added unfollow button for followed users, uploading new image for art-item and profile picture update, annotation for image, creating an art-item and exhibition, and searching art-item and exhibitions.

* The link for the deployed fronted app: http://react-app-group-9.s3-website.eu-central-1.amazonaws.com

## Main Contributions

### a.Code Related Significant Issues

##### Milestone 1

* [Frontend] - Sign up/Password Reset Pages Implementations [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/253)
* [Frontend] - Axios and Routing Implementations [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/254)

##### Milestone 2

* [Frontend] - Endpoint connections [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/423)
* [Frontend] - Navigation Bar design [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/424)
* [Frontend] - Search User Implementation [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/425)
* [Frontend] - Art item list [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/427)
* [Frontend] - Profile update [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/428)
* [Frontend] - Bulk user list [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/434)
* [Frontend] - Two sub-menu on user pages [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/435)

##### Milestone 3

* [Frontend] - Unfollow a followed user [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/474)
* [Frontend] - Search Art Item Implementation [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/440)
* [Frontend] - Search Exhibition Implementation [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/441)
* [Frontend] - Create Art Item [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/443)
* [Frontend] - Upload a new image [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/478)
* [Frontend] - Create Exhibition [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/444)
* [Frontend] - Create Annotations for images [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/476)
* [Frontend] - Create Annotations for texts [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/477)

### b.Management Related Significant Issues

##### Milestone 1

* Updating README Page  [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/239)
* Creating Project Plan on ProjectLibre  [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/249)
* Frontend Meeting Notes #1 [Issue Link](https://github.com/bounswe/bounswe2022group9/wiki/Frontend-Meeting-Notes-1)

##### Milestone 2

* [Documentation] Documenting Individual Contribution Report of Ufuk Karagoz [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/450)
* [Documentation] Documenting UI/UX related parts in the Group Review for Web [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/455)
* [Documentation] Documenting Executive Summary part in the Group Review for Frontend [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/459)

##### Milestone 3

* [Documentation] Documenting Individual Contribution Report of Ufuk Karagoz [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/561)
* [Documentation] Documenting UI/UX related parts in the Group Review for Web [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/560)

## Pull Requests

##### Milestone 1

* initial react files [#258](https://github.com/bounswe/bounswe2022group9/pull/258)
* [Frontend] - Axios, Rounting and Login & Sign up pages [#292](https://github.com/bounswe/bounswe2022group9/pull/292)

##### Milestone 2

* Final version of  frontend Pull Request with detailed commits [#436](https://github.com/bounswe/bounswe2022group9/pull/436)

##### Milestone 3

* [Frontend] Final version [#545](https://github.com/bounswe/bounswe2022group9/pull/545)


## Unit Tests

* Unfortunately, there is no unit test for frontend.
