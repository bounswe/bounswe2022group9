## Group Review

### 1. Executive Summary
* Frontend
    
    Our development started with endpoint connections. After that, we created a detailed architecture plan for the front-end group. We split the tasks. In the end, we created three main tabs (home, search, profile) and four pages (home, search, user, profile). We created a bulk art-item show list such as a four-column table with art items and art-items details - owner name, created date, description, tags, number of comments, and number of favorites. When the user clicks the comment icon, the web page creates a comment pop-up page and the user can see details of comments and can make comments on this pop-up page. Also, a similar implementation has been done to favorites, the user can like the art item on the favorite pop-up page. We used this bulk art-item list on the homepage, user pages, and profile pages. We implemented a search page with an input bar and a list of results in the lower part of the page. When there is no input, the backend returns all users. If there is a search input, the page is refreshing at every change and the result of the search can be seen as a user list. In the result list, there have three details - the profile picture, the username, and the name of the user. When a user clicks on an element of the list, the web page navigates to the clicked user page.  The users' page and profile page has similar implementation. The only difference is in the user page, there has a follow/unfollow button but the unfollow button has not been deployed yet and on the profile page this button is the edit profile button. When the user clicks this button, a pop-up page is opening and the user can edit the details of the profile. Pages have two main parts. The upper part is the details of the user - profile picture, username, location, name, email, birthdate, follower button, and the following button. The lower part has two tabs which are posted by the user tab and favorited by the user tab. When the user posts an art item, it will show in the first tab and when the user likes an art item, it will be shown in the second tab.
    - Sign up page updated
    - Profile page created
    - Edit profile implemented
    - Posted by user tab implemented
    - Favourited by user tab implemented
    - Search page created and search implemented
    - Homepage created
    - List of art-items implemented
    - Comments pop-up implemented
    - Favourited by pop-up implemented
    - User pgae created
    - Follow the user implemented
    - Make a comment implemented
    - Add to your favourites implemented
    
 * Backend
   
   In backend, firstly we need models since all the CRUD operations will be handled using these models. We created six models: art item, notification, comment, exhibition, user, and tag. After that we started to implement end-points. Implemented features are:
 
    - Get profile page
    - Update profile photo
    - Get followers/follower count/followings/following count/favourites/comments/exhibitions/notifications of a user
    - Get user/comment/exhibition/notification/art item
    - Post art item
    - Post comment
    - Post favorite
    - Search engines for user/art item/exhibition
    - Started annotations but not complete
    
  In addition to that features, we have written unit tests to test whether we implemented correct or not. On the other hand, we have created a lot of helper functions to make implemetation easier. You can check it out helpers folder.
  
  As the backend team, we did all the things that we have planned to do so far. The project is complete except recommendation system, exhibiton feature implementation, and annotation enhancement. 
  
 * Mobile
    
    For mobile, initially we updated the sing-up page with additional attributes. Afterwards, we had user interfaces that we should make backend connections for profile, sign-up, log-in,home page, feed pages and creacte new user interfaces for missing ones. We create components to show art items and user lists. For art item component we show the image, tags about the art items, likes and comments. Another component user lists can shows the person likes the art item, followers, followee and users that is searched. After creating these components we made the backend connections of these components. Another component we updated is search bar. We add search functionality for users and art items. As a summary a user can search for other user, see others' profile and art items that are shared. Users can scroll on the feed page and see others' sharings. For the future we are planning to make connections of settings page and exhibitions page and imlementation of the annottion are our priority according to our requirements.
    
    - Sign up page updated
    - Profile backend connection is done
    - Sign-up backend connection is done
    - Log-in backend connection is done
    - Feed page backend connection is done
    - User list component is implemented
    - User list backend connection is done
    - Art item component is updated
    - Art item component backend connection is done
    - Search bar is updated
    - Search is connected to backend

### 2. List and Status of Deliverables

We didn't change any of the deliverables from milestone 1. You can see the current deliverables from this [page](https://github.com/bounswe/bounswe2022group9/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_1/Deliverables.md).

### 3. Progress according to requirements

The requirements addressed in this milestone are as follows:

3.1.3.2. Users shall be able to comment on art items.

3.1.3.3. Users shall be able to like art items.

3.1.3.4. Users shall be able to save an art item to favorites.

3.1.3.6. Users should be able to have a repository for their favorite art items.

3.1.3.7. Users shall be able to add tags to their shared art items.

3.1.4.1. Users shall be able to have profiles.

3.1.4.2. Users shall be able to see art items that he/she shared in his/her profile.

3.1.4.3. Users shall be able to add profile picture, description and personal information into their profiles.

3.1.4.4. Users shall be able to change profile picture, description and personal information from their profiles.

3.1.5.1. Users shall be able to follow other users.

3.1.5.2. Users shall be able to unfollow other users.

3.1.5.3. Users shall be able to see the art items of followed users.

3.1.5.4. Users shall be able to see the liked art items of followed users.

3.1.8.2. Users shall be able to pick a category for their search(art item, art exhibit, tag, account) and get the results starting from the most relevant.

3.2.2.1. The platform shall include a search engine to find other users, art items or discussion forums.

3.2.2.4. The search engine shall match the arts and artists with given tags.

### 4. API Endpoints
* [The API Documentation](https://documenter.getpostman.com/view/21597705/2s8YmSqfTg)
* Link to the API : `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1`
* [3 Examples of API Calls](https://github.com/bounswe/bounswe2022group9/wiki/3-Example-API-Endpoint)


### 5. User Interface / User Experience

**Mobile**
1. Login
<img src="https://user-images.githubusercontent.com/45214804/206678685-2ca9ef2b-c741-4f0d-b41d-c4d5b2d57e32.png" width="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Login/Login.js

2. Signup
<img src="https://user-images.githubusercontent.com/45214804/206678746-e11ab1a8-e847-4296-bb7e-2fa073a0fb7b.png" width="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Login/Signup.js

3. Feed
<img src="https://user-images.githubusercontent.com/45214804/206678766-c32f100f-005e-4b8c-9757-5a2e1f3bbdbd.png" width="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Feed.js

4. Art Item
<img src="https://user-images.githubusercontent.com/45214804/206678810-2a6e41fa-b9e7-41ac-b9bb-5c7ad11085f9.png" width="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/ArtItemDisplay.js

5. Search
<img src="https://user-images.githubusercontent.com/45214804/206678846-3afb0857-3e0d-4128-b174-1c753f912ff9.png" width="240">

<img src="https://user-images.githubusercontent.com/45214804/206678853-51488267-078d-4783-aeb6-fd41f9a0fd5c.png" width="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Search.js

6. User
<img src="https://user-images.githubusercontent.com/45214804/206678904-7ff309b3-c925-4ba0-afd1-2bc257fee0e4.png" width="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/User.js

7. Following, Followers, Liked By
<img src="https://user-images.githubusercontent.com/45214804/206678979-a3b17b49-714d-4ea2-85c6-e677d3da73eb.png" width="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/UserList.js

8. Profile Page
<img src="https://user-images.githubusercontent.com/45214804/206678892-4c5cd5ef-aade-4ed1-a947-d6336da50f5f.png" width="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Profile.js

**Frontend**
1. Login
<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/login_page.png" height="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/frontend/src/components/Login.js

2. Sign up
<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/sign_up_page.png" height="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/frontend/src/components/Signup.js

3. Profile
<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/profile_page.png" height="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/frontend/src/components/Profile.js

4. Edit Profile
<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/edit_profile.png" height="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/frontend/src/components/Profile.js


5. Homepage
<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/home_page.png" height="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/frontend/src/components/Home.js


6. Comments Pop-up
<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/comments_page.png" height="240">
Source: Homepage/Userpage/Profile


7. Favourites Pop-up
<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/favourites_page.png" height="240">
Source: Homepage/Userpage/Profile


8. Search Page
<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/search_page.png" height="240">


<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/search_with_text_page.png" height="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/frontend/src/components/Search.js


9. User Page
<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/user_page.png" height="240">
Source: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/frontend/src/components/User.js


10. Posted Art-Items
<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/posted_art_items.png" height="240">
Source: Userpage/Profile


11. Favourited by User Art-Items
<img src="https://github.com/bounswe/bounswe2022group9/blob/master/resources/fronted_UI/favourited_by_user_art_items.png" height="240">
Source: Userpage/Profile


### 7. A Summary of Work Performed by Each Team Member 
    
   **Yağmur Göktaş**
   
   |Issue Title|Link|
   |-----|:--------:|
  |[Mobile] Art Item Display | https://github.com/bounswe/bounswe2022group9/issues/323 |
  |[Mobile] Art Item Display Page Backend Connection | https://github.com/bounswe/bounswe2022group9/issues/352|
  |[Mobile] Component to render user list | https://github.com/bounswe/bounswe2022group9/issues/353|
  |[Mobile] Update on Signup | https://github.com/bounswe/bounswe2022group9/issues/354|
  |[Mobile] User List Backend Connection | https://github.com/bounswe/bounswe2022group9/issues/359 |
  |[Mobile] Location information on User List | https://github.com/bounswe/bounswe2022group9/issues/426 |
  |[Mobile] Likes navigate to User | https://github.com/bounswe/bounswe2022group9/issues/431 |
  |[Documentation] Individual Report of Yağmur Göktaş | https://github.com/bounswe/bounswe2022group9/issues/449 |
  |[Mobile] Organizing Meeting Notes | https://github.com/bounswe/bounswe2022group9/issues/332 |
  
  |Pull Request Title|Link|
  |-----|:--------:|
  | Feature/art item display | https://github.com/bounswe/bounswe2022group9/pull/351 |
  | Bugfix/signup update | https://github.com/bounswe/bounswe2022group9/pull/355 |
  | Feature/user list comp | https://github.com/bounswe/bounswe2022group9/pull/358 |
  | Feature/userlist backend | https://github.com/bounswe/bounswe2022group9/pull/422 |
  | Feature/art item backend | https://github.com/bounswe/bounswe2022group9/pull/430 |
  
   **İbrahim Buğra Elmas**
   
  |Issue Title|Link|
  |-----|:--------:|
   |[Mobile] - Profile Page Backend Connection and UI changes #381|https://github.com/bounswe/bounswe2022group9/issues/381|
  |[Mobile] - List All Users #382|https://github.com/bounswe/bounswe2022group9/issues/382|
  |[Mobile] - Navigation from Feed and Profile to Art Item #383|https://github.com/bounswe/bounswe2022group9/issues/383|
  |[Mobile] - Creating APK #384|https://github.com/bounswe/bounswe2022group9/issues/384|
  |[Mobile] - Feed Page #420|https://github.com/bounswe/bounswe2022group9/issues/420|
  |[Mobile] Likes navigate to Users #431|https://github.com/bounswe/bounswe2022group9/issues/431|
  |[Documentation] Documenting Individual Contribution Report of İbrahim Buğra Elmas #452|https://github.com/bounswe/bounswe2022group9/issues/452|
  |[Documentation] Documenting UI/UX related parts in the Group Review for Mobile #453|https://github.com/bounswe/bounswe2022group9/issues/453|
  
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |add profile backend #375|https://github.com/bounswe/bounswe2022group9/pull/375|
  |Feature/search-users #421|https://github.com/bounswe/bounswe2022group9/pull/421|
  |Feed-user #433|https://github.com/bounswe/bounswe2022group9/pull/433|

  
  
   **Ufuk Karagöz**
   
  |Issue Title|Link|
  |-----|:--------:|
  |[Frontend] - Endpoint connections|https://github.com/bounswe/bounswe2022group9/issues/423|
  |[Frontend] - Navigation Bar design|https://github.com/bounswe/bounswe2022group9/issues/424|
  |[Frontend] - Search User Implementation|https://github.com/bounswe/bounswe2022group9/issues/425|
  |[Frontend] - Art item list|https://github.com/bounswe/bounswe2022group9/issues/427|
  |[Frontend] - Profile update|https://github.com/bounswe/bounswe2022group9/issues/428|
  |[Frontend] - Bulk user list|https://github.com/bounswe/bounswe2022group9/issues/434|
  |[Frontend] - Two sub-menu on user pages|https://github.com/bounswe/bounswe2022group9/issues/435|
  |[Documentation] Documenting Individual Contribution Report of Ufuk Karagoz|https://github.com/bounswe/bounswe2022group9/issues/450|
  |[Documentation] Documenting UI/UX related parts in the Group Review for Web|https://github.com/bounswe/bounswe2022group9/issues/455|
  |[Documentation] Documenting Executive Summary part in the Group Review for Frontend|https://github.com/bounswe/bounswe2022group9/issues/459|

  |Pull Request Title|Link|
  |-----|:--------:|
  |Final version of  frontend Pull Request with detailed commits|https://github.com/bounswe/bounswe2022group9/pull/436|
  
   **Burak Ferit Aktan**
     
  |Issue Title|Link|
  |-----|:--------:|
  |[Backend] Implement "update profile information"|[[Backend] Implement "update profile information"](https://github.com/bounswe/bounswe2022group9/issues/333)|
  |Backend] Implement "get profile information"|[[Backend] Implement "get profile information"](https://github.com/bounswe/bounswe2022group9/issues/339)|
  |[Backend] Create a new Django project for Annotations|[[Backend] Create a new Django project for Annotations](https://github.com/bounswe/bounswe2022group9/issues/370)|
  |[Backend] Dockerize the Annotations Project|[[Backend] Dockerize the Annotations Project](https://github.com/bounswe/bounswe2022group9/issues/371)|
  |[Backend] Add database connection to Annotation Project|[[Backend] Add database connection to Annotation Project](https://github.com/bounswe/bounswe2022group9/issues/373)|
  |Backend] Implement Unfollow Endpoint|[[Backend] Implement Unfollow Endpoint](https://github.com/bounswe/bounswe2022group9/issues/417)|
  |[Backend] Implement Helper Function to Delete Followed Users from Followings List of Follower Users|[[Backend] Implement Helper Function to Delete Followed Users from Followings List of Follower Users](https://github.com/bounswe/bounswe2022group9/issues/387)|
  |[Backend] Implement Helper function to delete users from followers list|[[Backend] Implement Helper function to delete users from followers list](https://github.com/bounswe/bounswe2022group9/issues/379)|
  |Add Backend Meeting 3 Notes to Wiki|[Add Backend Meeting 3 Notes to Wiki](https://github.com/bounswe/bounswe2022group9/issues/419)|
  |Document "update_profile_info" endpoint of the API|[Document "update_profile_info" endpoint of the API](https://github.com/bounswe/bounswe2022group9/issues/343)|
  |[Backend] Document "unfollow" endpoint of the API|[[Backend] Document "unfollow" endpoint of the API](https://github.com/bounswe/bounswe2022group9/issues/437)|
  |Feeding Prod Database|[Feeding Prod Database](https://github.com/bounswe/bounswe2022group9/issues/432)|
  |[Documentation] Document "Annotations" and "Standards" parts of Milestone2 Group Review|[[Documentation] Document "Annotations" and "Standards" parts of Milestone2 Group Review](https://github.com/bounswe/bounswe2022group9/issues/457)|
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |Unfollow Endpoint|[Unfollow Endpoint](https://github.com/bounswe/bounswe2022group9/pull/418)|
  |Delete user from followings list function|[Delete user from followings list function](https://github.com/bounswe/bounswe2022group9/pull/386)|
  |Unfollow helper function - deleting follower from followers list of followed user|[Unfollow helper function - deleting follower from followers list of followed user](https://github.com/bounswe/bounswe2022group9/pull/378)|
  |Unit tests for Unfollow, get_profile_info and update_profile_info endpoints|[Unit tests for Unfollow, get_profile_info and update_profile_info endpoints](https://github.com/bounswe/bounswe2022group9/pull/429)|
  |Add proxy and uWSGI to empty Annotations project Docker Image|[Add proxy and uWSGI to empty Annotations project Docker Image](https://github.com/bounswe/bounswe2022group9/pull/391)|
  |Adding Database (dockerized) and empty sample app to Annotation Project|[Adding Database (dockerized) and empty sample app to Annotation Project](https://github.com/bounswe/bounswe2022group9/pull/374)|
  |Created a new empty project for Annotations and Dockerized it. |[Created a new empty project for Annotations and Dockerized it. ](https://github.com/bounswe/bounswe2022group9/pull/372)|
  |added "get_profile_info" endpoint|[added "get_profile_info" endpoint](https://github.com/bounswe/bounswe2022group9/pull/344)|
  |update_profile_information endpoint has been added|[update profile information has been added](https://github.com/bounswe/bounswe2022group9/pull/340)|
  
  **Oğuzhan Özboyacı**
   
  |Issue Title|Link|
  |-----|:--------:|
   |||
  |||
  |||
  |||
  |||
  
  
  |Pull Request Title|Link|
  |-----|:--------:|
   |||
  |||
  |||
  |||
  |||
  
  **Ömer Faruk Şişman**
   
 |Issue Title|Link|
  |-----|:--------:|
  |[Backend] [Feature] Get all users|[Issue](https://github.com/bounswe/bounswe2022group9/issues/397)|
  |[Backend] [Feature] Get all art items|[Issue](https://github.com/bounswe/bounswe2022group9/issues/398)|
  |[Backend] [Feature] Get user by id|[Issue](https://github.com/bounswe/bounswe2022group9/issues/399)|
  |[Backend] [Feature] Get art item by id|[Issue](https://github.com/bounswe/bounswe2022group9/issues/400)|
  |[Backend] [Feature] Get tag by id|[Issue](https://github.com/bounswe/bounswe2022group9/issues/401)|
  |[Backend] [Feature] Get comment by id|[Issue](https://github.com/bounswe/bounswe2022group9/issues/402)|
  |[Backend] [Feature] Get notification by id|[Issue](https://github.com/bounswe/bounswe2022group9/issues/403)|
  |[Backend] [Feature] Get exhibition by id|[Issue](https://github.com/bounswe/bounswe2022group9/issues/404)|
  |[Backend] [Feature] Get followers of a user|[Issue](https://github.com/bounswe/bounswe2022group9/issues/405)|
  |[Backend] [Feature] Get followings of a user|[Issue](https://github.com/bounswe/bounswe2022group9/issues/406)|
  |[Backend] [Feature] Get favourites of a user|[Issue](https://github.com/bounswe/bounswe2022group9/issues/407)|
  |[Backend] [Feature] Get comments of a user|[Issue](https://github.com/bounswe/bounswe2022group9/issues/408)|
  |[Backend] [Feature] Get exhibitions of a user|[Issue](https://github.com/bounswe/bounswe2022group9/issues/409)|
  |[Backend] [Feature] Get notifications of a user|[Issue](https://github.com/bounswe/bounswe2022group9/issues/410)|
  |[Backend] [Feature] Get favourites of an art item|[Issue](https://github.com/bounswe/bounswe2022group9/issues/411)|
  |[Backend] [Feature] Get comments of an art item|[Issue](https://github.com/bounswe/bounswe2022group9/issues/412)|
  |[Backend] [Feature] Homepage of a user|[Issue](https://github.com/bounswe/bounswe2022group9/issues/413)|
  |[Backend] Deploying API|[Issue](https://github.com/bounswe/bounswe2022group9/issues/414)|
  |PS Meeting actions|[Issue](https://github.com/bounswe/bounswe2022group9/issues/350)|
  |[Backend] Postman Documentation|[Issue](https://github.com/bounswe/bounswe2022group9/issues/415)|
  |[Backend] Models Documentation|[Issue](https://github.com/bounswe/bounswe2022group9/issues/416)|
  |Feeding Prod Database|[Issue](https://github.com/bounswe/bounswe2022group9/issues/432)|
  |Documenting 3 example backend endpoint request and response|[Issue]()|
  |Creating individual report of Omer Faruk Sisman|[Issue]()|
  
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |Refactor/folder structure|[PR](https://github.com/bounswe/bounswe2022group9/pull/335)|
  |refactoring and some features|[PR](https://github.com/bounswe/bounswe2022group9/pull/338)|
  |Homepage of user implemented|[PR](https://github.com/bounswe/bounswe2022group9/pull/341)|
  |Backend/feature/exhibition endpoints|[PR](https://github.com/bounswe/bounswe2022group9/pull/348)|
  |Be/fix/ps issues 1|[PR](https://github.com/bounswe/bounswe2022group9/pull/349)|
  |Refactor Endpoints|[PR](https://github.com/bounswe/bounswe2022group9/pull/361)|
  |exhibition feature implemented|[PR](https://github.com/bounswe/bounswe2022group9/pull/362)|
  |favourite comment features|[PR](https://github.com/bounswe/bounswe2022group9/pull/363)|
  |response lists sorted|[PR](https://github.com/bounswe/bounswe2022group9/pull/364)|
  |Feature Recommendation|[PR](https://github.com/bounswe/bounswe2022group9/pull/365)|
  |Fix search user|[PR](https://github.com/bounswe/bounswe2022group9/pull/377)|
  |Unit tests|[PR](https://github.com/bounswe/bounswe2022group9/pull/380)|
  |image upload fields changed|[PR](https://github.com/bounswe/bounswe2022group9/pull/394)|
  
  **Berkkant Koç**
  
  |Issue Title|Link|
  |-----|:--------:|
  |[Documentation] Create Executive part for backend |[Issue](https://github.com/bounswe/bounswe2022group9/issues/461)|
  |[BACKEND] Search Engine for User shall be created |[Issue](https://github.com/bounswe/bounswe2022group9/issues/463)|
  |[Backend] Search Engine For Art item shall be implemented|[Issue](https://github.com/bounswe/bounswe2022group9/issues/464)|
  |[Backend] Search Engine For Exhibition shall be implemented|[Issue](https://github.com/bounswe/bounswe2022group9/issues/465)|
  |[Backend] Implement count numbers for user|[Issue](https://github.com/bounswe/bounswe2022group9/issues/466)|
  |[Backend] Write helper functions|[Issue](https://github.com/bounswe/bounswe2022group9/issues/467)|
  |[Documentatiton] Create individual report for Milestone 2|[Issue](https://github.com/bounswe/bounswe2022group9/issues/462)|
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |Search Engine For a User|[PR](https://github.com/bounswe/bounswe2022group9/pull/376)|
  |Search art item |[PR](https://github.com/bounswe/bounswe2022group9/pull/385)|
  |Search exhibition|[PR](https://github.com/bounswe/bounswe2022group9/pull/388)|
  |Enhancement of helpers|[PR](https://github.com/bounswe/bounswe2022group9/pull/389)|
  |Count numbers Added|[PR](https://github.com/bounswe/bounswe2022group9/pull/390)|
  
  
   **Furkan Özdemir**
   
  |Issue Title|Link|
  |-----|:--------:|
  |[Backend] Upgrade User Module|https://github.com/bounswe/bounswe2022group9/issues/324|
  |[Backend] Creating Art Item Model|https://github.com/bounswe/bounswe2022group9/issues/326|
  |[Backend] Review get profile info pull request|https://github.com/bounswe/bounswe2022group9/issues/345|
  |[Backend] Creating Notification and Exhibition Models|https://github.com/bounswe/bounswe2022group9/issues/346|
  |[Backend] Creating Art Items|https://github.com/bounswe/bounswe2022group9/issues/356|
  |[Backend] Review favourite comment features request|https://github.com/bounswe/bounswe2022group9/issues/367|
  |[Backend] Review exhibition feature pull request|https://github.com/bounswe/bounswe2022group9/issues/366|
  |[Backend] Review response list pull request|https://github.com/bounswe/bounswe2022group9/issues/368|
  |[Backend] Review feature recommendation pull request|https://github.com/bounswe/bounswe2022group9/issues/369|
  |Documenting Meeting Notes|https://github.com/bounswe/bounswe2022group9/issues/313|
  |Deliverables Image View Issue|https://github.com/bounswe/bounswe2022group9/issues/328|
  |Reuploading Class Diagram Images|https://github.com/bounswe/bounswe2022group9/issues/329|
  |Documenting Backend Meeting Notes 2|https://github.com/bounswe/bounswe2022group9/issues/330|
  |PS Meeting actions|https://github.com/bounswe/bounswe2022group9/issues/350|
  |Feeding Prod Database|https://github.com/bounswe/bounswe2022group9/issues/432|
  |[Documentation] Documenting Individual Contribution Report|https://github.com/bounswe/bounswe2022group9/issues/445|
  |[Documentation] Writing progress according to requirements|https://github.com/bounswe/bounswe2022group9/issues/447|
  |[Documentation] Documenting Status of Deliverables of Milestone 1|https://github.com/bounswe/bounswe2022group9/issues/448|

  
  |Pull Request Title|Link|
  |-----|:--------:|
  |[Backend] Upgrade User Model|https://github.com/bounswe/bounswe2022group9/pull/325|
  |[Backend] Create ArtItem Model|https://github.com/bounswe/bounswe2022group9/pull/327|
  |Notification and Exhibition Models|https://github.com/bounswe/bounswe2022group9/pull/347|
  |Creating Art Items|https://github.com/bounswe/bounswe2022group9/pull/357|
  |Be/fix/ps issues 1|https://github.com/bounswe/bounswe2022group9/pull/349 (reviewed)|
  |refactoring and some features|https://github.com/bounswe/bounswe2022group9/pull/338 (reviewed)|
  |added "get_profile_info" endpoint|https://github.com/bounswe/bounswe2022group9/pull/344 (reviewed)|
  |exhibition feature implemented|https://github.com/bounswe/bounswe2022group9/pull/362 (reviewed)|
  |favourite comment features|https://github.com/bounswe/bounswe2022group9/pull/363 (reviewed)|
  |response lists sorted|https://github.com/bounswe/bounswe2022group9/pull/364 (reviewed)|
  |Feature Recommendation|https://github.com/bounswe/bounswe2022group9/pull/365 (reviewed)|
  
**Kutay Saran**
   
  |Issue Title|Link|
  |-----|:--------:|
   |||
  |||
  |||
  |||
  |||
  
  
  |Pull Request Title|Link|
  |-----|:--------:|
   |||
  |||
  |||
  |||
  |||
  
  ## Annotations
  
 In the backend side: As instructors of the course said a seperate API for annotations should be created. To do so:
 * we created a new Django project, added a new empty app into it
 * created a seperated PotgreSQL database, connected the database to the app
 * added a "waiting for database" command to prevent the app starts before the database (otherwise, errors related to database may occur)
 * dockerized this empty app-database pair.
 
 As a result, we can say that, we created the "basic infrastructure" to start implementing the annotations API.
 We didn't started to implement the API yet.
 
 We are planning to implement the annotations until Milestone 3 and present annotations in the Milestone Presentation.
 
 ## Standards
 
 Since, we didn't implement annotations yet, we aren't able to talk about it'a compatibility with standards.
 We will implement annotations and evaluate it's compatibility with standards at Milestone 3.
 
 ## Individual Contributions Reports
 
 * [Burak Ferit Aktan](https://github.com/bounswe/bounswe2022group9/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_2/individual_contributions_reports/Burak_Ferit_Aktan.md)
 * [Ömer Faruk Şişman](https://github.com/bounswe/bounswe2022group9/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_2/individual_contributions_reports/Omer_Faruk_Sisman.md)
 * [Ufuk Karagöz](https://github.com/bounswe/bounswe2022group9/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_2/individual_contributions_reports/Ufuk_Karagoz.md)
 * [Furkan Özdemir](https://github.com/bounswe/bounswe2022group9/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_2/individual_contributions_reports/Furkan_Ozdemir.md)
 * [Yağmur Göktaş]
(https://github.com/bounswe/bounswe2022group9/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_2/individual_contributions_reports/Yagmur_Goktas.md)

