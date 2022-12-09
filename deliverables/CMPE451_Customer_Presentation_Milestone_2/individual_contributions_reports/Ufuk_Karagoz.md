## Member
* Name: [Ufuk Karagöz](https://github.com/bounswe/bounswe2022group9/wiki/Ufuk-Karagoz)
* Group: [Group 9](https://github.com/bounswe/bounswe2022group9)
* Subgroup: Frontend

## Responsibilities
* My development started with endpoint connections. After that, I created a detailed architecture plan for the front-end group. We split the tasks and I had will implement the search page, bulk search user list, search users with input text, and update the navigation bar. In the end, I created three main tabs (home, search, profile) and four pages (home, search, user, profile).
* I created a bulk art-item show list such as a four-column table with art items and art-items details - owner name, created date, description, tags, number of comments, and number of favorites. When the user clicks the comment icon, the web page creates a comment pop-up page and the user can see details of comments and can make comments on this pop-up page. Also, a similar implementation has been done to favorites, the user can like the art item on the favorite pop-up page. I used this bulk art-item list on the homepage, user pages, and profile pages.
* I implemented a search page with an input bar and a list of results in the lower part of the page. when there is no input, the backend returns all users. If there is a search input, the page is refreshing at every change and the result of the search can be seen as a user list. In the result list, there have three details - the profile picture, the username, and the name of the user. When a user clicks on an element of the list, the web page navigates to the clicked user page.
* The users' page and profile page has similar implementation. The only difference is in the user page, there has a follow/unfollow button but the unfollow button has not been deployed yet and on the profile page this button is the edit profile button. When the user clicks this button, a pop-up page is opening and the user can edit the details of the profile. Pages have two main parts. The upper part is the details of the user - profile picture, username, location, name, email, birthdate, follower button, and the following button. The lower part has two tabs which are posted by the user tab and favorited by the user tab. When the user posts an art-item, it will show in the first tab and when the user likes an art-item, it will be shown in the second tab.
* The link for the deployed fronted app: http://react-app-group-9.s3-website.eu-central-1.amazonaws.com

## Main Contribution
### Code-related significant issues
* [Frontend] - Endpoint connections [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/423)
* [Frontend] - Navigation Bar design [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/424)
* [Frontend] - Search User Implementation [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/425)
* [Frontend] - Art item list [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/427)
* [Frontend] - Profile update [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/428)
* [Frontend] - Bulk user list [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/434)
* [Frontend] - Two sub-menu on user pages [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/435)

### Management-related significant issues 
* [Documentation] Documenting Individual Contribution Report of Ufuk Karagoz [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/450)

## Pull Requests
* Final version of  frontend Pull Request with detailed commits [#436](https://github.com/bounswe/bounswe2022group9/pull/436)

## Additional Information
* As an additional information, At the beginning I said I created a detailed architecture plan for all the members of sub-group but at the end I implemented all the planned features. There has no management related issue about this architecture plan because we could not set a meeting and only I use the architecture.
