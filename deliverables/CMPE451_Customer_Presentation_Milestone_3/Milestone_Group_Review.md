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
* create and view exhibitions (only on frontend)
* receive user recommendations, recommending them new users to follow
* receive art item recommendations
* annotate contents using annotate button under posts filling annotated part/annotation body fields in the appearing form and view annotations (only on mobile)
* receive notifications when: (only on mobile)
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
