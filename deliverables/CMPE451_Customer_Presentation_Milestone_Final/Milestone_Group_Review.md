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

**Reflections and Lessons Learnt from Final Milestone Demo**
* In our app, exhibitions take place in one day, they need to be ended at the same day they have been started. In the presentation, instructors of the course mentioned "Generally, exhibitions last more than one day", it would be changed.
* When a user starts to use our app newly (having less than 3 followings/ have less than 5 favourite art items), in the recommendations page, we recommend most popular art items (in terms of number of favourites and comments) and most popular users (in terms of number of followers). Instructors of the course mentioned "When a user first signed up, app should ask the user what topics the user is interested in. And then, the application should do the recommendations according to the user's interests." This is an important point that could be improved in our project. Also, when a user is first signed up, the feed page is empty since feed shows what your followings share and new users don't have followings. A very important feedback was, "There should be no empty page, if there is nothing to show in feed page, user should be redirected to recommendations page or user should be informed that to see anything on the feed page, user should first follow some other users.
* Notifications aren't clickable in our app. A very important feedback was making them clickable should be better for UI/UX
* One of the mots important feedbacks was, mobile app is much more better in UI compared to frontend while the other teams' mobile UI are a worse compared to their web. There is a lesson learnt from here, more time should be spent to improve UI in frontend.


**What Could be Done Differently**
- Our frontend team had 3 members at the beginning of the course, 2 of them left the course at the middle. The most important of the things cloud be done Differently is, starting the frontend group more crowded.
- In the first milestoned, we presented only signup and login functionalities and in addition to them, we showed some mock pages. This was compatible with our project plan. However, in the other milestones, there were lots of tasks to do. Therefore, preparing a project plan starting the projects fast and strong in the first few weeks would have better. In this case, there would be more things to work on in the first milestone but other milestones would be easier.
