# Final Milestone Group Review

## a. Executive Summary

**Provide a summary of the project status**

Our project is completed mostly.
Our project has 3 components: backend(API), frontend and mobile

Currently, in our Art Community platform application named "Artie", users can:
* signup
* login
* see/update their profile page information
* share art items
* add art items to their favourites lists
* comment on art items
* create and view exhibitions (on frontend and backend)
* receive user recommendations, recommending them new users to follow
* receive art item recommendations
* annotate contents using annotate button under posts filling annotated part/annotation body fields in the appearing form and view annotations (on mobile and backend)
* receive notifications when: (on mobile and backend)
    * a user follows them
    * a user comments on one of their art items
    * a user adds one of their art items to favourite list
    * one of their followings shares an art item
    * one of their followings creates an exhibition
* visit the feed page

**Status of deliverables**

* Backend Code: ready and [deployed here](http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1)
* Frontend Code: ready and [deployed here](http://react-app-group-9.s3-website.eu-central-1.amazonaws.com/login)
* Mobile code: ready
* Software package: Ready and tagged
* The project plan: ready
* Software design (UML): ready
* Software Requirements Specification: ready
* Scenarioes and Mockups: ready
* Individual Milestone Reports: Being prepared by each member createing herself/himself

**Final Release Notes**

 Group 9 Cmpe451 2022 Fall Final Release

Added features:
* Annotation
    Users can annotate and view previous annotations.
* Art Item Upload/Creation
    - Art Items are uploaded to Cloudinary service for hosting purposes. User can upload art items to their profiles
* Notification
    - User are being notified when:
           -  When one of their art items are added to favourites of any user
           -  When one of their art items are commented by any user
           -  When one of the users they follow share any art item
           -  When they are followed by a user
           -  When of the users they follow starts an exhibition
* Recommendation (both Art Items and Users)
    - For user starting to use the application newly (following less than 3 users for user recommendation and adding less than 5 art items to their art items),
          - the most popular art items in the system are recommended (in terms of number of favourites and comments)
          -  the most popular users in the system are recommended (in terms of number of followers)
    - For users not satisfying the rule in the previous bulletin point,
          -  the art items having mutual tags with their favourite art items are recommended
          -  the users followed by following of the user are recommended
* Exhibitions
    - Users can create exhibitions and visit exhibitions.

**Reflections and Lessons Learnt from Final Milestone Demo**
* In our app, exhibitions take place in one day, they need to be ended at the same day they have been started. In the presentation, instructors of the course mentioned "Generally, exhibitions last more than one day", it would be changed.
* When a user starts to use our app newly (having less than 3 followings/ have less than 5 favourite art items), in the recommendations page, we recommend most popular art items (in terms of number of favourites and comments) and most popular users (in terms of number of followers). Instructors of the course mentioned "When a user first signed up, app should ask the user what topics the user is interested in. And then, the application should do the recommendations according to the user's interests." This is an important point that could be improved in our project. Also, when a user is first signed up, the feed page is empty since feed shows what your followings share and new users don't have followings. A very important feedback was, "There should be no empty page, if there is nothing to show in feed page, user should be redirected to recommendations page or user should be informed that to see anything on the feed page, user should first follow some other users.
* Notifications aren't clickable in our app. A very important feedback was making them clickable should be better for UI/UX
* One of the mots important feedbacks was, mobile app is much more better in UI compared to frontend while the other teams' mobile UI are a worse compared to their web. There is a lesson learnt from here, more time should be spent to improve UI in frontend.


**What Could be Done Differently**
- Our frontend team had 3 members at the beginning of the course, 2 of them left the course at the middle. The most important of the things cloud be done Differently is, starting the frontend group more crowded.
- In the first milestoned, we presented only signup and login functionalities and in addition to them, we showed some mock pages. This was compatible with our project plan. However, in the other milestones, there were lots of tasks to do. Therefore, preparing a project plan starting the projects fast and strong in the first few weeks would have better. In this case, there would be more things to work on in the first milestone but other milestones would be easier.

**Changes made in the development process and their effect**
- In backend team, at the beginning we had only one class for view functions (view functions are the codes executed first when a request to an endpoint is reached), were in only one file. With time, number of view functions increased too much and we started having troubles to find functions we need in that long file. In addition, because lots of features are implemented at the same time and all of those are changing the view file, we were facing so many merge conflicts. Then we decided to have mutiple view files instead of one. For example, all authentication related view functions are collected in a file and named view_auth, and so on. This good practice made finding view function of an endpoint easier and reduced number of merge conflicts much. We also used the same architecture for helper functions.
- At the beginning of the course, annotations wasn't included in project plan, before the first milestone, we added annotations into our project plan. This caused us to have a more intense plan but resulted a project more compatible with requirements.
- At the beginning of the year, we were distributing the tasks to the members randomly; since we thought it would be more fair. But after some of group members left the course (not related to randomness in task distribution), we realized that tasks should distributed according to willingness, because if a member of our team is planning to left the course and random lottery shows him, then that task will remain incomplete. Random distribution of tasks also may cause people need to do tasks they are not interested in while there are other group members who are interested in that task (in this case human resources are used in an inefficient manner). Then we decided to prepare surveys for task distribution, in this new method we also considered interests of our developers, therefore our team started to be more productive.

## b. Progress Based on Teamwork

### Individual Contributions Reports
*  [Burak Ferit Aktan](https://github.com/bounswe/bounswe2022group9/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_3/individual_contributions_reports/Burak_Ferit_Aktan.md)
*  [Furkan Özdemir](https://github.com/bounswe/bounswe2022group9/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_3/individual_contributions_reports/Furkan_Ozdemir.md)

### Summary of Work Performed by Each Team Member

* **Burak Ferit Aktan**
  |Issue Title|Link|
  |-----|:--------:|
  |**Final Milestone 3**|
  |[Backend] Recommending Art Items to Newly Registered Users|[#484](https://github.com/bounswe/bounswe2022group9/issues/484)|
  |[Backend] Recommending Art Items to non-new Users|[#485](https://github.com/bounswe/bounswe2022group9/issues/485)|
  |[Backend] Implement Notifications|[#493](https://github.com/bounswe/bounswe2022group9/issues/493)|
  |[Backend] Unit Tests for Recommending Art Items|[#502](https://github.com/bounswe/bounswe2022group9/issues/502)|
  |[Review] Review PR #511|[#513](https://github.com/bounswe/bounswe2022group9/issues/513)|
  |[BUG] Recommend Art Item, function call with wrong parameter|[#526](https://github.com/bounswe/bounswe2022group9/issues/526)|
  |Review the PR: Unit test recommend #519|[#541](https://github.com/bounswe/bounswe2022group9/issues/541)|
  |[BUG] Unfollow smal bug caused by typecasting|[#542](https://github.com/bounswe/bounswe2022group9/issues/542)|
  |[Backend] Recommending "Users To Follow" to Users|[#492](https://github.com/bounswe/bounswe2022group9/issues/492) -- issue is created by me with a detailed description, then  I assigned it to another team member|
  |[Backend] Implement User Levels|[#494](https://github.com/bounswe/bounswe2022group9/issues/494) -- issue is created by me with a detailed description, then  I assigned it to another team member|
  |[Documentation] Documentation of API Endpoints|[#515](https://github.com/bounswe/bounswe2022group9/issues/515) -- contributed to this issue by commenting|
  |[Milestone] Prepare Executive Summary For the Final Milestone|[#546](https://github.com/bounswe/bounswe2022group9/issues/546)|
  |[Milestone] Prepare Individual Contributions Report for Burak Ferit Aktan|[#550](https://github.com/bounswe/bounswe2022group9/issues/550)|
  |[Milestone] Document Summary of Work Performed by Burak Ferit Aktan|[#551](https://github.com/bounswe/bounswe2022group9/issues/551)|
  |[Release] Create tag for version 0.9.0|[#544](https://github.com/bounswe/bounswe2022group9/issues/544)|
  |Add Backend Meeting 4 Notes to Wiki|[#521](https://github.com/bounswe/bounswe2022group9/issues/521)|
  |Extra Meeting on Recommendation Feature - Burak and Berkkant|[#521](https://github.com/bounswe/bounswe2022group9/issues/518)|
  |[Documentation] Document art item recommendation endpoint|[#514](https://github.com/bounswe/bounswe2022group9/issues/514)|
  |-----|:--------:|
  |**Milestone 2**|-|
  |-----|:--------:|
  |[Backend] Implement "update profile information"|[#333](https://github.com/bounswe/bounswe2022group9/issues/333)|
  |[Backend] Implement "get profile information"|[#339](https://github.com/bounswe/bounswe2022group9/issues/339)|
  |[Backend] Create a new Django project for Annotations|[#370](https://github.com/bounswe/bounswe2022group9/issues/370)|
  |[Backend] Dockerize the Annotations Project|[#371](https://github.com/bounswe/bounswe2022group9/issues/371)|
  |[Backend] Add database connection to Annotation Project|[#373](https://github.com/bounswe/bounswe2022group9/issues/373)|
  |[Backend] Implement Unfollow Endpoint|[#417](https://github.com/bounswe/bounswe2022group9/issues/417)|
  |[Backend] Implement Helper Function to Delete Followed Users from Followings List of Follower Users|[#387](https://github.com/bounswe/bounswe2022group9/issues/387)|
  |[Backend] Implement Helper function to delete users from followers list|[#379](https://github.com/bounswe/bounswe2022group9/issues/379)|
  |[Backend] Write unit tests for signup|[#471](https://github.com/bounswe/bounswe2022group9/issues/471)|
  |[Backend] Write Unit Tests for "update profile info"|[#470](https://github.com/bounswe/bounswe2022group9/issues/470)|
  |[Backend] Add unit tests for get profile info|[#469](https://github.com/bounswe/bounswe2022group9/issues/469)|
  |[Backend] Add Unit Tests for Unfollow|[#460](https://github.com/bounswe/bounswe2022group9/issues/460)|
  |Add Backend Meeting 3 Notes to Wiki|[#419](https://github.com/bounswe/bounswe2022group9/issues/419)|
  |Document "update_profile_info" endpoint of the API|[#343](https://github.com/bounswe/bounswe2022group9/issues/343)|
  |[Backend] Document "unfollow" endpoint of the API|[#437](https://github.com/bounswe/bounswe2022group9/issues/437)|
  |Feeding Prod Database|[#432](https://github.com/bounswe/bounswe2022group9/issues/432)|
  |[Documentation] Document "Annotations" and "Standards" parts of Milestone2 Group Review|[#457](https://github.com/bounswe/bounswe2022group9/issues/457)|
  |[Documentation] Documenting Individual Contribution Report of Burak Ferit Aktan|[#446](https://github.com/bounswe/bounswe2022group9/issues/446)|
  |Deliverables Image View Issue|[#328](https://github.com/bounswe/bounswe2022group9/issues/328)|
  |**Milestone 1**|-|
  |[Backend] Implement Signup Feature|[#251](https://github.com/bounswe/bounswe2022group9/issues/251)|
  |[Backend] Write Unit Tests for Signup|[277](https://github.com/bounswe/bounswe2022group9/issues/277)|
  |Revising Use Case Diagrams|[#236](https://github.com/bounswe/bounswe2022group9/issues/236)|
  |API Documentation (signup)|[#279](https://github.com/bounswe/bounswe2022group9/issues/279)|
  |Open a discord server for CmpE451|[#233](https://github.com/bounswe/bounswe2022group9/issues/233)|
  |Revising Sequence Diagrams |[#244](https://github.com/bounswe/bounswe2022group9/issues/244) -- I created this issue and assigned to another team member|
  |Backend Meeting Notes for Meeting 1|[#282](https://github.com/bounswe/bounswe2022group9/issues/282)|
  |Scenario Preparation(signup) for Milestone|[#290](https://github.com/bounswe/bounswe2022group9/issues/290)|
  
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |**Final Milestone 3**|
  |Notifications|[#512](https://github.com/bounswe/bounswe2022group9/pull/512)|
  |Recommend Art Items|[#501](https://github.com/bounswe/bounswe2022group9/pull/501)|
  |Added Art Item Recommendation Unit Tests|[#504](https://github.com/bounswe/bounswe2022group9/pull/504)|
  |bugfix: function call parameter fixed and URL test for notification|[#525](https://github.com/bounswe/bounswe2022group9/pull/525)|
  |[Backend] User recommendation|[#511](https://github.com/bounswe/bounswe2022group9/pull/511) --reviewed by me|
  |Unit test recommend|[#519](https://github.com/bounswe/bounswe2022group9/pull/519) --reviewed by me|
  |[Backend] Rename test file|[#522](https://github.com/bounswe/bounswe2022group9/pull/522) -- reviewed by me|
  |-----|:--------:|
  |**Milestone 2**|
  |Unfollow Endpoint|[#418](https://github.com/bounswe/bounswe2022group9/pull/418)|
  |Delete user from followings list function|[#386](https://github.com/bounswe/bounswe2022group9/pull/386)|
  |Unfollow helper function - deleting follower from followers list of followed user|[#378](https://github.com/bounswe/bounswe2022group9/pull/378)|
  |Unit tests for Unfollow, get_profile_info and update_profile_info endpoints|[#429](https://github.com/bounswe/bounswe2022group9/pull/429)|
  |Add proxy and uWSGI to empty Annotations project Docker Image|[#391](https://github.com/bounswe/bounswe2022group9/pull/391)|
  |Adding Database (dockerized) and empty sample app to Annotation Project|[#374](https://github.com/bounswe/bounswe2022group9/pull/374)|
  |Created a new empty project for Annotations and Dockerized it.|[#372](https://github.com/bounswe/bounswe2022group9/pull/372)|
  |added "get_profile_info" endpoint|[#344](https://github.com/bounswe/bounswe2022group9/pull/344)|
  |update profile information has been added|[#340](https://github.com/bounswe/bounswe2022group9/pull/340)|
  |[Backend] Upgrade User Model|[#325](https://github.com/bounswe/bounswe2022group9/pull/325) (reviewed by me)|
  |Enhancement of helpers|[#389](https://github.com/bounswe/bounswe2022group9/pull/389) (reviewed by me)|
  |Count numbers Added|[#390](https://github.com/bounswe/bounswe2022group9/pull/390) (reviewed by me)|
  |Search art item|[#385](https://github.com/bounswe/bounswe2022group9/pull/385) (reviewed by me)|
  |-----|:--------:|
  |**Milestone 1**|
  |[Backend] Signup (register)|[#259](https://github.com/bounswe/bounswe2022group9/pull/259)|
  |||
  
  
* **Furkan Özdemir**
  |Issue Title|Link|
  |-----|:--------:|
  |**Final Milestone 3**|
  |[Backend] Research on Web Annotation Protocol|https://github.com/bounswe/bounswe2022group9/issues/495|
  |[Backend] Implementation of W3C Annotations|https://github.com/bounswe/bounswe2022group9/issues/496|
  |[BUG] Image Upload Doesn't Return URL|https://github.com/bounswe/bounswe2022group9/issues/505|
  |[Backend] Review User Levels PR|https://github.com/bounswe/bounswe2022group9/issues/517|
  |[Release] Create tag for version 0.9.0|https://github.com/bounswe/bounswe2022group9/issues/544|
  |[Milestone] Prepare Individual Report|https://github.com/bounswe/bounswe2022group9/issues/547|
  |[Milestone] Prepare Status of Requirements|https://github.com/bounswe/bounswe2022group9/issues/548|
  |[Milestone] Prepare Summary of Work Performed|https://github.com/bounswe/bounswe2022group9/issues/549|
  |**Milestone 2**|-|
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
  |**Milestone 1**|-|
  |[Backend] Review Login Pull Request|[#304](https://github.com/bounswe/bounswe2022group9/issues/304)|
  |[Frontend] Review for Axios and Routing Pull Request|[#305](https://github.com/bounswe/bounswe2022group9/issues/305)|
  |Research on Dockerization|[#302](https://github.com/bounswe/bounswe2022group9/issues/302)|
  |Revising Requirements|[#248](https://github.com/bounswe/bounswe2022group9/issues/248)|
  |API Documentation (login)|[#307](https://github.com/bounswe/bounswe2022group9/issues/307)|  
  |Creating an installation guide for backend|[#306](https://github.com/bounswe/bounswe2022group9/issues/306)|
  |Creating pre-release version of project|[#288](https://github.com/bounswe/bounswe2022group9/issues/288)|
  |[Milestone] Writing Executive Summary of Milestone Group Review|[#312](https://github.com/bounswe/bounswe2022group9/issues/312)|
  |Documenting Meeting Notes|[#313](https://github.com/bounswe/bounswe2022group9/issues/313)|
  
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |**Final Milestone 3**|
  |[Backend] Annotation Model|https://github.com/bounswe/bounswe2022group9/issues/499|
  |[Hotfix] Image Upload|https://github.com/bounswe/bounswe2022group9/issues/506|
  |Annotation create endpoint|https://github.com/bounswe/bounswe2022group9/issues/500 (reviewed)|
  |[Backend] Annotation Endpoints|https://github.com/bounswe/bounswe2022group9/issues/503 (reviewed)|
  |[Backend] [Test] Create and Update Annotation Tests|https://github.com/bounswe/bounswe2022group9/issues/508 (reviewed)|
  |[Backend] User level information added to profile|https://github.com/bounswe/bounswe2022group9/issues/509 (reviewed)|
  |**Milestone 2**|
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
  |**Milestone 1**|
  |[Backend] Login|[#280](https://github.com/bounswe/bounswe2022group9/pull/280) (reviewed)|
  |[Frontend] Axios and Routing|[#292](https://github.com/bounswe/bounswe2022group9/pull/292) (reviewed)|
  |||
  
  **Yağmur Göktaş**
   
   |Issue Title|Link|
   |-----|:--------:|
   |**Final Milestone 3**|
   |[Mobile] Research on Annotations | https://github.com/bounswe/bounswe2022group9/issues/481 |
   |[Mobile] Recommendation UI Page | https://github.com/bounswe/bounswe2022group9/issues/482 |
   |[Mobile] Unit Tests | https://github.com/bounswe/bounswe2022group9/issues/483 |
   |[Mobile] Text Annotations| https://github.com/bounswe/bounswe2022group9/issues/497|
   |[Mobile] Unfollow button | https://github.com/bounswe/bounswe2022group9/issues/498 |
   |[Mobile] User Recommendations | https://github.com/bounswe/bounswe2022group9/issues/536 |
   | Individual Report | https://github.com/bounswe/bounswe2022group9/issues/523 |
   | Weekly Efforts | https://github.com/bounswe/bounswe2022group9/issues/510 |
   |**Milestone 2**|
  |[Mobile] Art Item Display | https://github.com/bounswe/bounswe2022group9/issues/323 |
  |[Mobile] Art Item Display Page Backend Connection | https://github.com/bounswe/bounswe2022group9/issues/352|
  |[Mobile] Component to render user list | https://github.com/bounswe/bounswe2022group9/issues/353|
  |[Mobile] Update on Signup | https://github.com/bounswe/bounswe2022group9/issues/354|
  |[Mobile] User List Backend Connection | https://github.com/bounswe/bounswe2022group9/issues/359 |
  |[Mobile] Location information on User List | https://github.com/bounswe/bounswe2022group9/issues/426 |
  |[Mobile] Likes navigate to User | https://github.com/bounswe/bounswe2022group9/issues/431 |
  |[Documentation] Individual Report of Yağmur Göktaş | https://github.com/bounswe/bounswe2022group9/issues/449 |
  |[Mobile] Organizing Meeting Notes | https://github.com/bounswe/bounswe2022group9/issues/332 |
  |**Milestone 1**|
  |[Mobile] - Terms and Privacy Policy| https://github.com/bounswe/bounswe2022group9/issues/266 |
  |[Mobile] - Profile Page | https://github.com/bounswe/bounswe2022group9/issues/276 |
  |[Mobile] - Backend Connection for Login| https://github.com/bounswe/bounswe2022group9/issues/284 |
  |[Mobile] -On the profile page, the images are disorganized according to the screen size| https://github.com/bounswe/bounswe2022group9/issues/297 |
  |[Mobile] - Application name should be added to Terms and Privacy Policy| https://github.com/bounswe/bounswe2022group9/issues/295 |
  |[Mobile] - Mock Art Image Collection| https://github.com/bounswe/bounswe2022group9/issues/285 |
  |[Mobile] - Post number is wrong| https://github.com/bounswe/bounswe2022group9/issues/299 |
  |[Mobile] - Determining background, primary and secondary colors for mobile application | https://github.com/bounswe/bounswe2022group9/issues/256 |
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |**Final Milestone 3**|
  | Individual report | https://github.com/bounswe/bounswe2022group9/pull/451 |
  | Update Milestone2 Report | https://github.com/bounswe/bounswe2022group9/pull/473 |
  | Feature/mobile/recommendations | https://github.com/bounswe/bounswe2022group9/pull/532 |
  | Feature/mobile/unfollow | https://github.com/bounswe/bounswe2022group9/pull/534 |
  | Feature/user recommendation | https://github.com/bounswe/bounswe2022group9/pull/537 |
  | signup test | https://github.com/bounswe/bounswe2022group9/pull/543 |
  |**Milestone 2**|
  | Feature/art item display | https://github.com/bounswe/bounswe2022group9/pull/351 |
  | Bugfix/signup update | https://github.com/bounswe/bounswe2022group9/pull/355 |
  | Feature/user list comp | https://github.com/bounswe/bounswe2022group9/pull/358 |
  | Feature/userlist backend | https://github.com/bounswe/bounswe2022group9/pull/422 |
  | Feature/art item backend | https://github.com/bounswe/bounswe2022group9/pull/430 |
  |**Milestone 1**|
  | Feature/signup|[#265](https://github.com/bounswe/bounswe2022group9/pull/265)|
  | Feature/privacy policy|[#275](https://github.com/bounswe/bounswe2022group9/pull/275)|
  | Feature/mock profile|[#286](https://github.com/bounswe/bounswe2022group9/pull/286)|
  | Feature/login backend|[#287](https://github.com/bounswe/bounswe2022group9/pull/287)|
  | App name added to Terms and Privacy text|[#296](https://github.com/bounswe/bounswe2022group9/pull/296)|
  | Bugfix/image size|[#298](https://github.com/bounswe/bounswe2022group9/pull/298)|
  | Post number is corrected|[#300](https://github.com/bounswe/bounswe2022group9/pull/300)|
   |||
   
     
  * **İbrahim Buğra Elmas**


   |Issue Title|Link|
  |-----|:--------:|
  |**Milestone 1**|
  |[Mobile] - Login/Signup Pages Implementations|https://github.com/bounswe/bounswe2022group9/issues/252|
  |[Mobile] - Axios and Linking App with Backend|https://github.com/bounswe/bounswe2022group9/issues/262|
  |[Mobile] - Search Page Mockup |https://github.com/bounswe/bounswe2022group9/issues/283|
  |**Milestone 2**|
  |[Mobile] - Profile Page Backend Connection and UI changes|https://github.com/bounswe/bounswe2022group9/issues/381|
  |[Mobile] - List All Users|https://github.com/bounswe/bounswe2022group9/issues/382|
  |[Mobile] - Navigation from Feed and Profile to Art Item |https://github.com/bounswe/bounswe2022group9/issues/383|
  |[Mobile] - Creating APK|https://github.com/bounswe/bounswe2022group9/issues/384|
  |[Mobile] - Feed Page|https://github.com/bounswe/bounswe2022group9/issues/420|
  |[Mobile] Likes navigate to Users |https://github.com/bounswe/bounswe2022group9/issues/431|
  |**Milestone 3**|
  |[Mobile] - Annotations|https://github.com/bounswe/bounswe2022group9/issues/531|
  |[Mobile] Creating Art Item|https://github.com/bounswe/bounswe2022group9/issues/488|
  |[Mobile] Notifications UI and Backend Connection|https://github.com/bounswe/bounswe2022group9/issues/487|
  
   |Pull Request Title|Link|
  |-----|:--------:|
  |**Milestone 1**|
  |mobile initial commit|https://github.com/bounswe/bounswe2022group9/pull/255|
  |[Mobile] - add constant colors|https://github.com/bounswe/bounswe2022group9/pull/261|
  |signup backend connection|https://github.com/bounswe/bounswe2022group9/pull/281|
  |[Mobil] - search mockup|https://github.com/bounswe/bounswe2022group9/pull/293|
  |**Milestone 2**|
  |add profile backend|https://github.com/bounswe/bounswe2022group9/pull/375|
  |Feature/search-users|https://github.com/bounswe/bounswe2022group9/pull/421|
  |Feed-user|https://github.com/bounswe/bounswe2022group9/pull/433|
  |**Milestone 3**|
  |added notifications|https://github.com/bounswe/bounswe2022group9/pull/539|
  |add annotations in text form|https://github.com/bounswe/bounswe2022group9/pull/530|
  |create art item|https://github.com/bounswe/bounswe2022group9/pull/529|
  
  
  * **Ömer Faruk Şişman**

  |Issue Title|Link|
  |-----|:--------:|
  |**Final Milestone 3**|
  |[Backend] Self-recommendation bug in the recommendation system|[#535](https://github.com/bounswe/bounswe2022group9/issues/535)|
  |[Backend] Deploy|[#528](https://github.com/bounswe/bounswe2022group9/issues/528)|
  |[BUG] Return owner_id in art_item response|[#527](https://github.com/bounswe/bounswe2022group9/issues/527)|
  |[Backend] Deployment|[#516](https://github.com/bounswe/bounswe2022group9/issues/516)|
  |[Backend] Unit Tests for Creating/Updating Art Item Annotations|[#507](https://github.com/bounswe/bounswe2022group9/issues/507)|
  |[Backend] Implementation of W3C Annotations|[#496](https://github.com/bounswe/bounswe2022group9/issues/496)|
  |[Backend] Research on Web Annotation Protocol|[#495](https://github.com/bounswe/bounswe2022group9/issues/495)|
  |[Backend] Implement User Levels|[#494](https://github.com/bounswe/bounswe2022group9/issues/494)|
  |[Milestone] Add API documentation to Final Milestone Report|[#555](https://github.com/bounswe/bounswe2022group9/issues/555)|
  |[Milestone] 3 example backend endpoint request and response|[#554](https://github.com/bounswe/bounswe2022group9/issues/554)|
  |[Milestone] Prepare Individual Contributions Report for Ömer Faruk Şişman|[#553](https://github.com/bounswe/bounswe2022group9/issues/553)|
  |[Milestone] Document Summary of Work Performed by Ömer Faruk Şişman|[#552](https://github.com/bounswe/bounswe2022group9/issues/552)|
  |[Documentation] Documentation of API Endpoints|[#515](https://github.com/bounswe/bounswe2022group9/issues/515)|
  |-----|:--------:|
  |**Milestone 2**|-|
  |-----|:--------:|
  |[Backend] [Feature] Get all users|[#397](https://github.com/bounswe/bounswe2022group9/issues/397)|
  |[Backend] [Feature] Get all art items|[#398](https://github.com/bounswe/bounswe2022group9/issues/398)|
  |[Backend] [Feature] Get user by id|[#399](https://github.com/bounswe/bounswe2022group9/issues/399)|
  |[Backend] [Feature] Get art item by id|[#400](https://github.com/bounswe/bounswe2022group9/issues/400)|
  |[Backend] [Feature] Get tag by id|[#401](https://github.com/bounswe/bounswe2022group9/issues/401)|
  |[Backend] [Feature] Get comment by id|[#402](https://github.com/bounswe/bounswe2022group9/issues/402)|
  |[Backend] [Feature] Get notification by id|[#403](https://github.com/bounswe/bounswe2022group9/issues/403)|
  |[Backend] [Feature] Get exhibition by id|[#404](https://github.com/bounswe/bounswe2022group9/issues/404)|
  |[Backend] [Feature] Get followers of a user|[#405](https://github.com/bounswe/bounswe2022group9/issues/405)|
  |[Backend] [Feature] Get followings of a user|[#406](https://github.com/bounswe/bounswe2022group9/issues/406)|
  |[Backend] [Feature] Get favourites of a user|[#407](https://github.com/bounswe/bounswe2022group9/issues/407)|
  |[Backend] [Feature] Get comments of a user|[#408](https://github.com/bounswe/bounswe2022group9/issues/408)|
  |[Backend] [Feature] Get exhibitions of a user|[#409](https://github.com/bounswe/bounswe2022group9/issues/409)|
  |[Backend] [Feature] Get notifications of a user|[#410](https://github.com/bounswe/bounswe2022group9/issues/410)|
  |[Backend] [Feature] Get favourites of an art item|[#411](https://github.com/bounswe/bounswe2022group9/issues/411)|
  |[Backend] [Feature] Get comments of an art item|[#412](https://github.com/bounswe/bounswe2022group9/issues/412)|
  |[Backend] [Feature] Homepage of a user|[#413](https://github.com/bounswe/bounswe2022group9/issues/413)|
  |[Backend] Deploying API|[#414](https://github.com/bounswe/bounswe2022group9/issues/414)|
  |PS Meeting actions|[#350](https://github.com/bounswe/bounswe2022group9/issues/350)|
  |[Backend] Postman Documentation|[#415](https://github.com/bounswe/bounswe2022group9/issues/415)|
  |[Backend] Models Documentation|[#416](https://github.com/bounswe/bounswe2022group9/issues/416)|
  |Feeding Prod Database|[#432](https://github.com/bounswe/bounswe2022group9/issues/432)|
  [Documentation]3 example backend endpoint request and response|[#472](https://github.com/bounswe/bounswe2022group9/issues/472)|
  |Creating individual report of Omer Faruk Sisman|[#468](https://github.com/bounswe/bounswe2022group9/issues/468)|
  |-----|:--------:|
  |**Milestone 1**|-|
  |-----|:--------:|
  |[Backend] Initializing the backend app|[#269](https://github.com/bounswe/bounswe2022group9/issues/269)|
  |[Backend] Dockerizing the backend app|[#270](https://github.com/bounswe/bounswe2022group9/issues/270)|
  |[Backend] Deploying the signup endpoint|[#272](https://github.com/bounswe/bounswe2022group9/issues/272)|
  |[Backend] Implementing the login endpoint|[#273](https://github.com/bounswe/bounswe2022group9/issues/273)|
  |[Backend] Deploying the login endpoint|[#274](https://github.com/bounswe/bounswe2022group9/issues/274)|
  |[Backend] CORS error on server side|[#294](https://github.com/bounswe/bounswe2022group9/issues/294)|
  |Updating "Login" and "Follow" Use-Case Diagrams|[#243](https://github.com/bounswe/bounswe2022group9/issues/243)|
  |[Backend] Creating AWS free-tier account and ECR for docker images.|[#268](https://github.com/bounswe/bounswe2022group9/issues/268)|
  |[Milestone] Creating Pre-Release version of project|[#288](https://github.com/bounswe/bounswe2022group9/issues/288)|
  |[Milestone] Creating frontend scenario for signup|[#290](https://github.com/bounswe/bounswe2022group9/issues/290)|
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |**Final Milestone 3**|
  |[Backend] User level information added to profile|[#509](https://github.com/bounswe/bounswe2022group9/pull/509)|
  |[Backend] [Test] Create and Update Annotation Tests|[#508](https://github.com/bounswe/bounswe2022group9/pull/508)|
  |[Backend] Annotation Endpoints|[#503](https://github.com/bounswe/bounswe2022group9/pull/503)|
  |[BUG] Fix: owner id check added to recommendations|[#533](https://github.com/bounswe/bounswe2022group9/pull/533)|
  |Fix: owner id field added to art item|[#524](https://github.com/bounswe/bounswe2022group9/pull/524)|
  |Annotation create endpoint|[#500](https://github.com/bounswe/bounswe2022group9/pull/500)|
  |[Fronted]final frontend implementations --reviewed|[#436](https://github.com/bounswe/bounswe2022group9/pull/436)|
  |-----|:--------:|
  |**Milestone 2**|
  |Refactor/folder structure|[#335](https://github.com/bounswe/bounswe2022group9/pull/335)|
  |refactoring and some features|[#338](https://github.com/bounswe/bounswe2022group9/pull/338)|
  |Homepage of user implemented|[#341](https://github.com/bounswe/bounswe2022group9/pull/341)|
  |Backend/feature/exhibition endpoints|[#348](https://github.com/bounswe/bounswe2022group9/pull/348)|
  |Be/fix/ps issues 1|[#349](https://github.com/bounswe/bounswe2022group9/pull/349)|
  |Refactor Endpoints|[#361](https://github.com/bounswe/bounswe2022group9/pull/361)|
  |exhibition feature implemented|[#362](https://github.com/bounswe/bounswe2022group9/pull/362)|
  |favourite comment features|[#363](https://github.com/bounswe/bounswe2022group9/pull/363)|
  |response lists sorted|[#364](https://github.com/bounswe/bounswe2022group9/pull/364)|
  |Feature Recommendation|[#365](https://github.com/bounswe/bounswe2022group9/pull/365)|
  |Fix search user|[#377](https://github.com/bounswe/bounswe2022group9/pull/377)|
  |Unit tests|[#380](https://github.com/bounswe/bounswe2022group9/pull/380)|
  |image upload fields changed|[#394](https://github.com/bounswe/bounswe2022group9/pull/394)|
  |-----|:--------:|
  |**Milestone 1**|
  |[Backend] Login|[#280](https://github.com/bounswe/bounswe2022group9/pull/280)|
  |[Backend] Signup(register) --reviewed|[#259](https://github.com/bounswe/bounswe2022group9/pull/259)|
  
  ### API Documentation
   * [The API Documentation](https://documenter.getpostman.com/view/21597705/2s8YmSqfTg)
   * Link to the API : `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1`
   * [3 Examples of API Calls](https://github.com/bounswe/bounswe2022group9/wiki/3-Example-API-Endpoint)
  
  ### Status of Requirements
    
  |Requirements|Status|
  |-----|:--------:|
  |[3.1.1.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#311-registration)| Completed |
  |[3.1.1.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#311-registration)| Not Started |
  |[3.1.1.3](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#311-registration)| Completed |
  |[3.1.1.4](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#311-registration)| Completed |
  |[3.1.2.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#312-login)| Completed |
  |[3.1.2.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#312-login)| Completed |
  |[3.1.2.3](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#312-login)| Not Started |
  |[3.1.2.4](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#312-login)| In Progress |
  |[3.1.3.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#313-art-items)| Completed |
  |[3.1.3.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#313-art-items)| Completed |
  |[3.1.3.3](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#313-art-items)| Completed |
  |[3.1.3.4](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#313-art-items)| Completed |
  |[3.1.3.5](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#313-art-items)| Not Started |
  |[3.1.3.6](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#313-art-items)| Completed |
  |[3.1.3.7](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#313-art-items)| Completed |
  |[3.1.4.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#314-profile)| Completed |
  |[3.1.4.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#314-profile)| Completed |
  |[3.1.4.3](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#314-profile)| Completed |
  |[3.1.4.4](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#314-profile)| Completed |
  |[3.1.4.5](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#314-profile)| Completed |
  |[3.1.4.6](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#314-profile)| Not Started |
  |[3.1.4.7](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#314-profile)| In Progress |
  |[3.1.4.8](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#314-profile)| Not Started |
  |[3.1.5.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#315-user-follow)| Completed |
  |[3.1.5.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#315-user-follow)| Completed |
  |[3.1.5.3](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#315-user-follow)| Completed |
  |[3.1.5.4](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#315-user-follow)| Completed |
  |[3.1.6.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#316-exhibitions)| In Progress |
  |[3.1.6.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#316-exhibitions)| In Progress |
  |[3.1.6.3](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#316-exhibitions)| In Progress |
  |[3.1.6.4](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#316-exhibitions)| In Progress |
  |[3.1.6.5](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#316-exhibitions)| In Progress |
  |[3.1.7.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#317-comments)| Completed |
  |[3.1.7.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#317-comments)| Not Started |
  |[3.1.8.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#318-search)| In Progress |
  |[3.1.8.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#318-search)| Completed |
  |[3.1.8.3](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#318-search)| In Progress |
  |[3.2.1.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#321-verification)| Not Started |
  |[3.2.1.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#321-verification)| Not Started |
  |[3.2.2.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#322-search-engine)| Completed |
  |[3.2.2.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#322-search-engine)| Not Started |
  |[3.2.2.3](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#322-search-engine)| Not Started |
  |[3.2.2.4](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#322-search-engine)| Completed |
  |[3.2.3.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#323-recommendation)| Completed |
  |[3.2.3.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#323-recommendation)| Completed |
  |[3.2.3.3](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#323-recommendation)| Completed |
  |[3.2.3.4](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#323-recommendation)| Not Started |
  |[3.2.3.5](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#323-recommendation)| Completed |
  |[3.2.3.6](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#323-recommendation)| Not Started |
  |[3.2.4.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#324-notification)| Completed |
  |[3.2.4.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#324-notification)| Not Started |
  |[3.2.4.3](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#324-notification)| Not Started |
  |[3.2.4.4](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#324-notification)| Completed |
  |[3.2.4.5](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#324-notification)| Not Started |
  |[3.2.4.6](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#324-notification)| Completed |
  |[3.2.4.7](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#324-notification)| Completed |
  |[3.2.4.8](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#324-notification)| Not Started |
  |[3.2.5.1](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#325-database)| Completed |
  |[3.2.5.2](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#325-database)| Completed |
  
  
 ## User Interface / User Experience
  ### Mobile Application 
  
  **Login Page** :
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Login/Login.js
  - UI : 
  <img src = "https://user-images.githubusercontent.com/56403828/210264580-ecb21373-e3b1-418c-aef9-667bc0934d94.jpeg" width="240">
  
  **Signup Page** :
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Login/Signup.js
  - UI : 
  <img src = "https://user-images.githubusercontent.com/56403828/210264660-abcaabd3-e909-4230-8ea0-f728be00c023.jpeg" width="240">

  **Home Page** :
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Home.js
  - UI :  
  <img src = "https://user-images.githubusercontent.com/56403828/210264777-e18e3a40-c540-4a7b-9d72-090b9be89fc5.jpeg" width="240">

  **Profile Page** :
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Profile.js
  - UI : 
  <img src = "https://user-images.githubusercontent.com/56403828/210264979-52b80410-a8ac-4561-96f2-fd9e6db7f6d7.jpeg" width="240">
  
  **Art Item Page** :
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/ArtItemDisplay.js
  - UI : 
  <img src = "https://user-images.githubusercontent.com/56403828/210265172-4e803cb9-a1df-4e7c-8e01-87ef91b40033.jpeg" width="240"><img src = "https://user-images.githubusercontent.com/56403828/210265266-786b635e-3896-4613-95b6-2df1ed4a0f2c.jpeg" width="240">

  **Search Page** :
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Search.js
  - UI :  
  <img src = "https://user-images.githubusercontent.com/56403828/210265002-59017b0c-43a0-46c3-811a-ab91e4a39658.jpeg" width="240"><img src = "https://user-images.githubusercontent.com/56403828/210265101-69f0139f-6244-418d-bed8-50dcc7be6e8e.jpeg" width="240">
  
  **Notifications Page** :
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Notifications.js
  - UI :  
  <img src = "https://user-images.githubusercontent.com/56403828/210265657-4b22b6cb-84d9-4337-8fee-02b57d4b4aab.jpeg" width="240">

  **Post Recommendations Page** :
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Feed.js
  - UI :  
  <img src = "https://user-images.githubusercontent.com/56403828/210264802-fdac5de6-201f-45de-ba0b-459a83748a82.jpeg" width="240">

  **User Recommendations Page** :
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Feed.js
  - UI :  
  <img src = "https://user-images.githubusercontent.com/56403828/210264861-73e1a2ad-7523-4869-87c8-620a2e5e5d1d.jpeg" width="240">

  **Settings Page**:
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Settings.js
  - UI : 
  <img src = "https://user-images.githubusercontent.com/56403828/210265227-e0be7417-1e44-44ae-8d3e-41c536b02e42.jpeg" width="240">
  
  **Create Annotations Page**:
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Annotations.js
  - UI :  
  <img src = "https://user-images.githubusercontent.com/56403828/210265671-b0c8de7e-e3eb-4344-964a-54fe021c9390.jpeg" width="240">

  **Create Art Item Page**:
  - Code : https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/mobile/screens/Profile.js
  - UI : 
  <img src = "https://user-images.githubusercontent.com/56403828/210265150-6cc39ca3-6b7a-43a0-894e-2a4195898c70.jpeg" width="240">

  
  



### API Endpoints
  

  
  **Annotation Implementation & W3C Standard Compliance**
  Our annotation data model, which can be found [here](https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/backend/app/api/views/annotation.py) is partially compliant to the W3C annotation model recommendation, released in 23 Feb 2017.
  The W3C document describing the data annotation model can be found here: https://github.com/bounswe/bounswe2022group9/blob/master/art-community-platform/backend/app/api/views/annotation.py.
  
  Our implementation details can be found in API documentation. To summarize, GET 'annotations/<int:annotation_id>' endpoint returns the annotation information with given annotation ID. POST 'annotation' endpoint is used to create an annotation. PUT 'annotation/<int:annotation_id>' endpoint enables the use to update an annotation with the given id.
  
  ## c. Project Artifacts
  ### 1. Manuals
  #### i) User Manual
* Mobile: Users will welcome with login page. If they are registered before, they can login with their credentials and navigate to Feed page safely. If they are a newcomer, they should click on Signup ubtton and register to our application. If signup is successful, they will directed to login page. If signup fails, they will granted with a message about what went wrong. Feed is users's home page where they can see their following users art items in a chronological order. If they want to see recommendatations about users or posts they can change tabs from top of the screen to explore what others share, like and comment. At the bottom tab, beside home page, we have search page where users can search for post, exhibitions, tags and users. They can click on search results and then navigate to required content. Besides search we have exhibitons where users can see other people's exhibitons. At the fourth tab we have profile page where users can view their posts, create a new art item or their previously liked posts. Also they can see their followers and followings in the same page. Fİnally we have settings page where users can change their profile info and logout from our application.
  #### ii) System Manual
  * Mobile: First, users need to install expo and yarn cli tools. After checking out master branch of repo, users should navigate to "mobile" directory. THen, they should install packages and dependencies with running "yarn install" in terminal. After that, they can start emulator with "expo start" command. Finally, they should click "a" button in order to open project in android emulator.
  ### 2. Software Requirements Specification (SRS)
  All requirements can be accessed from: [Requirement Analysis](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis)
  ### 3. Software design documents 
  Following design diagrams can be accessed from
  * Class Diagrams: [here](https://github.com/bounswe/bounswe2022group9/wiki/Class-Diagram)
  * Use Case Diagrams: [here](https://github.com/bounswe/bounswe2022group9/wiki/Use-Case-Diagram)
  * Sequence Diagrams: [here](https://github.com/bounswe/bounswe2022group9/wiki/Sequence-Diagrams)
  ### 4. User scenarios and mockups
   Scenarios and mockups can be found in:
   * Sharing an art: [here](https://github.com/bounswe/bounswe2022group9/wiki/%22Sharing-an-art%22)
   * Following a User: [here](https://github.com/bounswe/bounswe2022group9/wiki/Following-a-User)
   * Commenting on Content: [here](https://github.com/bounswe/bounswe2022group9/wiki/%22Commenting-on-content%22-scenario)
  ### 5. Project plan
  Project plan can be accessed from [here](https://github.com/bounswe/bounswe2022group9/tree/master/resources) .
  ### 6. Unit tests
  
  
